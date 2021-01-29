<template>
	<div class="data table">
		<h1><center>Master Document List</center></h1>
		<sui-table selectable celled
     @selectionChanged="selectedRows = $event">
			<sui-table-header>
				<sui-table-row>
					<!-- Top Menu -->
					<sui-table-header-cell colspan="14">
						<sui-menu style="width: min-content;">
							<router-link to="/document_create">
								<a is="sui-menu-item" icon>
									<sui-icon name="plus" />
								</a>
							</router-link>
							<a is="sui-menu-item" icon @click="editDoc(selectedRow)">
								<sui-icon name="pencil" />
							</a>
							<a is="sui-menu-item" icon @click="deleteDoc(selectedRow)">
								<sui-icon name="trash" />
							</a>
						</sui-menu>
					</sui-table-header-cell>
				</sui-table-row>
				<!-- Header -->
				<sui-table-row>
					<sui-table-header-cell
						v-for="(header, index) in headers"
						:key="index"
					>
						{{ header }}
					</sui-table-header-cell>
				</sui-table-row>
			</sui-table-header>
			<!-- Filters -->
			<sui-table-header>
				<sui-table-row>
					<sui-table-header-cell
						v-for="(header, index) in headers"
						:key="index"
					>
						<sui-input placeholder="Search..." size="mini" />
					</sui-table-header-cell>
				</sui-table-row>
			</sui-table-header>
			<!-- Body -->
			<sui-table-body>
				<sui-table-row v-for="(doc, index) in docsInfo" :key="index" @click="selectedRow = index; $forceUpdate();" :selected="isSelected(index)" @dblclick="editDoc(index)">
					<sui-table-cell v-for="(item, key) in doc" :key="key">
						{{ item }}
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
	name: "Table",
	data() {
		return {
			headers: [
				"Project",
				"Class",
				"Part #",
				"Revision",
				"Description",
				"Requester",
				"Creation Date",
				"Ready Date",
				"Checker",
				"Check Date",
				"Approver",
				"Approve Date",
				"Release Date",
				"Revision Reason"
			],
			docs: [],
			docsInfo: [],
			nextPart: 0,
      selectedRow: null
		};
	},
	methods: {
		methodThatForcesUpdate(i) {
			this.Vals[i] = 29;
			this.$forceUpdate(); // Notice we have to use a $ here
		},
		retrieveDocuments() {
			DocumentDataService.getAll()
				.then(response => {
					this.docs = response.data;
					this.docs.sort(
						function(a, b) {
							if(a.part_num == b.part_num) {
								return a.revision - b.revision
							}
							return a.part_num > b.part_num ? 1 : -1;
						});
					this.getDocInfo(response.data);
				})
				.catch(e => {
					console.error(e);
				});
		},
		getDocInfo(data) {
			for (const doc of data) {
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
					releaseDate: doc.released_date,
					RevReason: doc.revision_reason
				};
				if (doc.Checker) ob["Checker"] = doc.Checker.name;
				if (doc.Approver) ob["Approver"] = doc.Approver.name;
				if (doc.Requestor) ob["Requestor"] = doc.Requestor.name;
				this.docsInfo.push(ob);
			}
		},
    isSelected(index) {
      return this.selectedRow == index;
    },
    editDoc(index) {
      if(index != null)
      this.$router.push({name: 'DocumentEdit', params: {DocID: this.docs[index].doc_id, PartNum: this.docs[index].part_num}})
    },
		deleteDoc(index) {
      if(index != null) {
			DocumentDataService.delete(this.docs[index].doc_id)
				.then(response => {
					if(response.status == 200) {
						this.docs.splice(index, 1);
						this.docsInfo.splice(index, 1);
					}
				})
				.catch(e => {
					console.error(e);
				});
			}
    }
	},
	mounted() {
		try {
			this.retrieveDocuments();
		} catch (err) {
			console.error("Error response:");
			console.error(err);
		}
	}
};
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
