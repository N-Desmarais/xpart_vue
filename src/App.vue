<template>
  <div id="app" v-on:mousemove="sideBarCheck">
    <sidebar v-bind:toggle="Toggled"/>
    <router-view/>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'

export default {
  name: 'App',
  components: { Sidebar },
  data() { return { Toggled: false, } },
  methods: {
    sideBarCheck: function(event) {
      var x = event.clientX;
      if(x < 200) {
        this.Toggled = true;
      }  else {
        this.Toggled = false;
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
