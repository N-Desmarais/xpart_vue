<template>
  <div id="app" v-on:mousemove="sideBarCheck">
    <sidebar v-bind:toggle="Toggled"/>
    <div id="Router">
      <router-view/>
    </div>
  </div>
</template>

<script>
import sidebar from './components/Sidebar.vue'
import UserDataService from "./services/user.service";

export default {
  name: 'App',
  components: { sidebar },
  data() { return { Toggled: false, } },
  methods: {
    sideBarCheck: function(event) {
      var x = event.clientX;
      var y = event.clientY;
      if(x < 200 && y < 50) {
        this.Toggled = true;
      }  else if (x < 200 && this.Toggled){
        this.Toggled = true;
      } else {
        this.Toggled = false;
      }
    },
    userCheck(input) {
      UserDataService.get(input)
				.then(response => {
          if(response.data.length == 0) {
            UserDataService.create({
              name: this.$auth.user.email.substring(0, 3),
              email: this.$auth.user.email,
            });
          }
				})
				.catch(e => {
					console.error(e);
				});
    }
  },
  watch: {
    '$auth.user.email': function() {
      if(this.$auth.isAuthenticated){
        this.userCheck(this.$auth.user.email);
      }
    }
  }
}
</script>

<style>
* {
  margin: 10;
  padding: 10;
}
#app {
  overflow-x: scroll;
  width: 100%;
  height: 100%;
}
</style>
