<template>
  <div id="app">
   <portal-target name="semantic-ui-vue"/>
    <div class="top menu">
      <sui-menu tabular pointing>
        <sui-menu-item v-for="item in menu_items" :key="item.Title"
        :active="selected==item.Type" @click="selected=item.Type">
          {{item.Title}}
        </sui-menu-item>
      </sui-menu>
    </div>
    <component :is="selected">
    </component>
  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'App',
  components: {
    Table
  },
  data() {
    return {
      menu_items:
       [{
          Title: "Document List",
          Type: "Table"
        },
        {
          Title: "My Account",
          Type: ""
        }],
        selected: "Table"
    }
  },
  methods: {

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
