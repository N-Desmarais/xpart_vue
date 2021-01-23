<template>
  <div class="data table">
    <h1><center>Master Document List</center></h1>
    <sui-table selectable celled >
      <!-- Header -->
      <sui-table-header>
        <sui-table-row>
          <sui-table-header-cell colspan="14">
            <sui-menu style="width: 136px;">
              <a is="sui-menu-item" icon>
                <sui-icon name="plus" />
              </a>
              <a is="sui-menu-item" icon>
                <sui-icon name="pencil" />
              </a>
              <a is="sui-menu-item" icon>
                <sui-icon name="trash" />
              </a>
            </sui-menu>
          </sui-table-header-cell>
        </sui-table-row>
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
        <sui-table-row v-for="(doc, index) in docsInfo" :key="index">
          <sui-table-cell v-for="(item, key) in doc" :key="key">
            {{item}}
          </sui-table-cell>
        </sui-table-row>
      </sui-table-body>
      <!-- Footer -->
      <sui-table-footer>
      <sui-table-row>
        <sui-table-header-cell colspan="14">
          <sui-menu pagination>
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
  import DocumentDataService from "../services/document.service";


  export default {
    name: 'Table',
    data() {
      return {
        headers: ['Project', 'Class', 'Part #', 'Revision', 'Description',
                  'Requester', 'Creation Date', 'Ready Date', 'Checker',
                  'Check Date', 'Approver', 'Approve Date', 'Release Date',
                  'Revision Reason'],
        Vals: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        docs: [],
        docsInfo: [],
        nextPart: 0
      }
    },
    methods: {
      methodThatForcesUpdate(i) {
          this.Vals[i] = 29;
          this.$forceUpdate();  // Notice we have to use a $ here
      },
      retrieveDocuments() {
         DocumentDataService.getAll()
        .then(response => {
          this.docs = response.data ;
          this.getDocInfo(response.data);
        })
        .catch(e => {
          console.error(e);
        });
      },
      getDocInfo(data) {
        for(const doc of data) {
          var ob = {
            Project: doc.Project.name,
            Class: doc.Document_Class.code,
            PartNum: doc.part_num,
            Revision: doc.revision,
            Description: doc.description,
            Requestor: null,
            CreationDate: doc.creation_date,
            ReadyDate: doc.ready_date,
            Checker: null,
            CheckDate: doc.checked_date,
            Approver: null,
            ApproveDate: doc.approved_date,
            releaseDate: doc.releaseDate,
            RevReason: doc.revision_reason
          }
          if(doc.Checker) ob['Checker'] = doc.Checker.name;
          if(doc.Approver) ob['Approver'] = doc.Approver.name;
          if(doc.Requestor) ob['Requestor'] = doc.Requestor.name;
          this.docsInfo.push(ob);
        }
      },
      getNextPartNum() {
        DocumentDataService.getMaxPart()
        .then(response => {
          this.nextPart = response.data.maxPartNum + 1
          console.error(this.nextPart);
        })
        .catch(e => {
          console.error(e)
        })
      }
    },
    mounted() {
      try {
        this.retrieveDocuments();
        this.getNextPartNum();
      } catch (err) {
        console.error("Error response:");
        console.error(err.response.data);
        console.error(err.response.status);
        console.error(err.response.headers);
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
