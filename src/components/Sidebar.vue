<template>
  <div class="ui sidebar">
    <sui-sidebar-pushable>
     <sui-menu
       is="sui-sidebar"
       :visible="this.toggle"
       animation="overlay"
       width="thin"
       icon="labeled"
       inverted
       vertical
     >
       <sui-menu-item to="/"> <sui-icon name="home" /> My Acccount </sui-menu-item>
       <sui-menu-item to="/">
         <sui-icon name="file alternate" /> Master List
       </sui-menu-item>
       <sui-menu-item to="">
         <sui-icon name="file alternate outline" /> MyProject
       </sui-menu-item>
     </sui-menu>
     <sui-sidebar-pusher>
       <sui-segment>
         <h3 is="sui-header">Application Content</h3>
         <docs-wireframe name="paragraph" />
       </sui-segment>
     </sui-sidebar-pusher>
   </sui-sidebar-pushable>
 </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data() { return {} },
  props: ['toggle'],
}
</script>
