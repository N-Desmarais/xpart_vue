<template>
  <div id="SignUp">
    <sui-container centered>
      <sui-grid middle aligned padded="true" id="Grid">
        <sui-grid-column centered="true" style="width: 600px;">
            <sui-segment style="background: #F8F8F9;">
              <center>
                <div id="Title">Part #<br></div>
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
                <sui-form-fields fields="2">
                  <sui-form-field>
                    <label>Requester</label>
                    <sui-dropdown selection/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Creation Date</label>
                    <input type="date"/>
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-fields fields="2">
                  <sui-form-field>
                    <label>Revision</label>
                    <input style="width: 195px;"/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Ready Date</label>
                    <input type="date"/>
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-fields fields="2">
                  <sui-form-field>
                    <label>Checker</label>
                    <sui-dropdown selection/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Checked Date</label>
                    <input type="date"/>
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-fields fields="3">
                  <sui-form-field>
                    <label>Approver</label>
                    <sui-dropdown selection/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Approved Date</label>
                    <input type="date"/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Released Date</label>
                    <input type="date"/>
                  </sui-form-field>
                </sui-form-fields>
                <sui-form-fields fields="2">
                  <sui-form-field>
                    <label>Description</label>
                    <input style="height: 200px; width: 250px;"/>
                  </sui-form-field>
                  <sui-form-field>
                    <label>Revision Reason</label>
                    <input style="height: 200px; width: 250px;"/>
                  </sui-form-field>
                </sui-form-fields>
                <center>
                  <sui-button  color="green" content="Save" style="margin: 0em .5em 0em"/>
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
