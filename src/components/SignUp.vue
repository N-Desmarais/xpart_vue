<template>
  <div id="SignUp">
    <sui-container centered>
      <sui-grid middle aligned padded="true" id="Grid">
        <sui-grid-column centered="true" style="width: 500px;">
          <sui-segment style="background: #F8F8F9;">
          <center>
          <div id="Title">Register<br></div>
          </center>
          <sui-form>
            <sui-form-field>
              <label>Name</label>
              <input placeholder="Name"/>
            </sui-form-field>
            <sui-form-field>
              <label>Email</label>
              <input placeholder="Email Address"/>
            </sui-form-field>
            <sui-form-field>
              <label>Password</label>
              <input placeholder="Password" type="password"/>
            </sui-form-field>
            <sui-form-field>
              <label>Confirm Passowrd</label>
              <input placeholder="Confirm Password" type="password"/>
            </sui-form-field>
            <center>
            <sui-button basic="true" color="blue" content="Register" style="margin: 0em .5em 0em"/>
            <sui-button basic="true" color="red" content="Cancel" style="margin: 0em .5em 0em"/><br>
          </center>
          </sui-form>
          </sui-segment>
        </sui-grid-column>
    </sui-grid>
</sui-container>
</div>
</template>

<script>
export default {
  name: 'SignUp'
}
</script>

<style scoped>
#Title {
  margin: 0em 0em .5em;
  font-size: 25px
}
</style>
