<template>
  <div class="data table">
    <h1><center>Master Document List</center></h1>
    <sui-table celled >
      <!-- Header -->
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell v-for="(header, index) in headers" :key="index">
            {{header}}
          </sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <!-- Filters -->
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell v-for="(header, index) in headers" :key="index">
            <sui-input placeholder="Search..." size="mini"/>
          </sui-table-header-cell>
        </sui-table-row>
      </sui-table-header>
      <!-- Body -->
      <sui-table-body>
        <sui-table-row v-for="(val, index) in Vals" :key="index" @dblclick="methodThatForcesUpdate(index)">
          <sui-table-cell v-for="j in 14" :key="j">
            {{index}},{{j}},{{val}}
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      <!-- Footer -->
      <sui-table-footer>
      <sui-table-row>
        <sui-table-header-cell colspan="14">
          <sui-menu v-sui-floated:right pagination>
            <a is="sui-menu-item" icon>
              <sui-icon name="left chevron" />
            </a>
            <a is="sui-menu-item">1</a>
            <a is="sui-menu-item">2</a>
            <a is="sui-menu-item">3</a>
            <a is="sui-menu-item">4</a>
            <a is="sui-menu-item" icon>
              <sui-icon name="right chevron" />
            </a>
          </sui-menu>
        </sui-table-header-cell>
      </sui-table-row>
    </sui-table-footer>

      </sui-table>
  </div>
</template>

<script>
  export default {
    name: 'Table',
    data() {
      return {
        headers: ['Project', 'Class', 'Part #', 'Revision', 'Description',
                  'Requester', 'Creation Date', 'Ready Date', 'Checker',
                  'Check Date', 'Approver', 'Approve Date', 'Release Date',
                  'Revision Reason'],
        Vals: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
      }
    },
    methods: {
        methodThatForcesUpdate(i) {
            this.Vals[i] = 29;
            this.$forceUpdate();  // Notice we have to use a $ here
        }
    }
  }
</script>

<style>
* {
  margin: 10;
  padding: 10;
}
#sui-input {
  width: 1200px;
}
</style>
