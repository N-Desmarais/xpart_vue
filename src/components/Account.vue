<template>
  <sui-container>
    <div v-if="$auth.isAuthenticated" style="margin: 1em 0em .5em;">
      Logged In As: {{$auth.user}}
    </div>
  </sui-container>
</template>

<script>
//import UserDataService from "../services/user.service";
//import ProjectDataService from "../services/project.service";

export default {
  name: 'Account',
  methods: {}
}
</script>
