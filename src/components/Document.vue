<template>
  <div id="SignUp">
    <sui-container centered>
      <sui-grid middle aligned padded="true" id="Grid">
        <sui-grid-column centered="true" style="width: 700px;">
            <sui-segment style="background: #F8F8F9;">
              <center>
                <div id="Title">Document #<br></div>
              </center>
              <sui-form>
                <sui-form-fields fields="3">
                  <sui-form-field>
                    <label>Project</label>
                    <sui-dropdown selection/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Class</label>
                    <sui-dropdown selection/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Part#</label>
                    <input disabled/>
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-fields fields="3">
                  <sui-form-field>
                    <label>Revision</label>
                    <input/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Description</label>
                    <input/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Part#</label>
                    <input disabled/>
                  </sui-form-field>
                </sui-form-fields>
                <center>
                  <sui-button  color="blue" content="Register" style="margin: 0em .5em 0em"/>
                  <sui-button  color="red" content="Cancel" style="margin: 0em .5em 0em"/>
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
  name: 'DocumentEdit'
}
</script>

<style scoped>
#Title {
  margin: 0em 0em .5em;
  font-size: 25px
}
</style>
