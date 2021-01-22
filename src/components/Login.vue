<template>
  <div id="Login">
    <sui-container centered>
      <sui-grid middle aligned padded="true" id="Grid">
        <sui-grid-column centered="true" style="width: 500px;">
          <sui-segment style="background: #F8F8F9;">
          <center>
          <div id="Title">XPart Login<br></div>
          <sui-icon color="blue" size="massive" name="user circle"/>
          </center>
          <sui-form>
            <sui-form-field>
              <label>Email</label>
              <input placeholder="Email Address"/>
            </sui-form-field>
            <sui-form-field>
              <label>Password</label>
              <input placeholder="Password" type="password"/>
            </sui-form-field>
            <center>
            <sui-button basic="true" color="blue" content="Login"/><br>
          </center>
          <a style="text-align: left;">Forgot Password</a>
          <span style="float:right;">
            <a>Register</a>
          </span>
          </sui-form>
          </sui-segment>
        </sui-grid-column>
    </sui-grid>
</sui-container>
</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
* {
  padding: 10;
  margin: 10;
}
#Title {
  margin: 0em 0em .5em;
  font-size: 25px
}
</style>
