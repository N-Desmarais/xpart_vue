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
       <router-link to="/login">
       <sui-menu-item>
           <sui-icon name="lock" />
            Login
       </sui-menu-item>
       </router-link>
       <router-link to="/account">
         <sui-menu-item to="/">
           <sui-icon name="home" />
           My Acccount
        </sui-menu-item>
       </router-link>
       <router-link to="/documents">
       <sui-menu-item>
           <sui-icon name="file outline" />
            Master List
       </sui-menu-item>
       </router-link>
       <router-link to="/project/testproj">
       <sui-menu-item>
           <sui-icon name="file alternate" />
            Testproject
       </sui-menu-item>
       </router-link>
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


  name: 'sidebar',
  data() { return {} },
  props: ['toggle'],
}
</script>
