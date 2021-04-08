<template>
	<div id="SignUp" @submit.prevent>
		<sui-container centered>
			<sui-grid middle aligned :padded="true" id="Grid">
				<sui-grid-column :centered="true" style="width: 600px;">
					<sui-segment style="background: #F8F8F9;">
						<center>
							<div id="Title">Edit Document: #{{ data.Part_Num }}<br /></div>
							* = Required Field
						</center>
						<sui-form>
							<sui-form-fields>
								<sui-form-field>
									<label>Project *</label>
									<sui-dropdown
										disabled
										selection
										:options="projects"
										v-model="data['Project']"
										color="red"
										@input="CheckRequired"
									/>
								</sui-form-field>
								<sui-form-field>
									<label>Class *</label>
									<sui-dropdown
										disabled
										selection
										:options="classes"
										v-model="data['Doc_Class']"
										@input="CheckRequired"
									/>
								</sui-form-field>
								<sui-form-field>
									<label>Part# *</label>
									<input disabled v-model="data['Part_Num']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Revision *</label>
									<sui-dropdown
										selection
										:options="revisions"
										v-model="selectedDoc"
										@input="swapData(selectedDoc)"
									/>
								</sui-form-field>
								<sui-form-fields grouped style="margin: 0em .5em 0em">
									<label>Revision Type</label>
									<sui-form-field>
										<sui-checkbox
											disabled
											label="Engineering"
											radio
											value="1"
											v-model="radio_value"
										/>
									</sui-form-field>
									<sui-form-field>
										<sui-checkbox
											disabled
											label="Production"
											radio
											value="2"
											v-model="radio_value"
										/>
									</sui-form-field>
								</sui-form-fields>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Requester *</label>
									<sui-dropdown
										selection
										disabled
										:options="users"
										v-model="data['Requestor']"
										@input="CheckRequired"
									/>
								</sui-form-field>
								<sui-form-field>
									<label>Creation Date</label>
									<input
										disabled
										id="today"
										type="date"
										v-model="data['Creation_Date']"
									/>
								</sui-form-field>
								<sui-form-field>
									<label>Ready Date</label>
									<input :disabled="locked" type="date" v-model="data['Ready_Date']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Checker</label>
									<sui-dropdown :disabled="locked" selection :options="users" v-model="data['Checker']" />
								</sui-form-field>
								<sui-form-field>
									<label>Checked Date</label>
									<input :disabled="locked" type="date" v-model="data['Checked_Date']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Approver</label>
									<sui-dropdown :disabled="locked" selection :options="users" v-model="data['Approver']" />
								</sui-form-field>
								<sui-form-field>
									<label>Approved Date</label>
									<input :disabled="locked" type="date" v-model="data['Approved_Date']" />
								</sui-form-field>
								<sui-form-field>
									<label>Released Date</label>
									<input :disabled="locked" type="date" v-model="data['Released_Date']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Description *</label>
									<textarea
										:disabled="locked"
										name="Text1"
										cols="40"
										rows="5"
										v-model="data['Description']"
										@change="CheckRequired"
									/>
								</sui-form-field>
								<sui-form-field>
									<label>Revision Reason</label>
									<textarea
										:disabled="locked"
										name="Text1"
										cols="40"
										rows="5"
										v-model="data['Revision_Reason']"
									/>
								</sui-form-field>
							</sui-form-fields>
							<center>
								<sui-button
									:disabled="locked"
									color="green"
									content="Save Edit"
									style="margin: 0em .5em 0em"
									@click="editDoc"
								/>
								<sui-button
									:disabled="locked"
									color="blue"
									content="New Rev"
									style="margin: 0em .5em 0em"
									@click="newRevision"
								/>
								<router-link to="/documents">
									<sui-button
										color="red"
										content="Cancel"
										style="margin: 0em .5em 0em"
									/>
								</router-link>
							</center>
						</sui-form>
					</sui-segment>
				</sui-grid-column>
			</sui-grid>
		</sui-container>
	</div>
</template>

<script>
import UserDataService from "../services/user.service";
import DocumentDataService from "../services/document.service";
import ProjectDataService from "../services/project.service";

export default {
	name: "DocumentEdit",
	props: ["DocID", 'PartNum'],
	data() {
		return {
			radio_value: "1",
			eng_rev: null,
			prod_rev: null,
			nextPart: null,
			users: [],
			classes: [],
			projects: [],
			revisions: [],
			selectedDoc: null,
			id: null,
			locked: false,
			data: {
				Project: null,
				Doc_Class: null,
				Part_Num: null,
				Revision: null,
				Description: null,
				Requestor: null,
				Creation_Date: null,
				Ready_Date: null,
				Checker: null,
				Checked_Date: null,
				Approver: null,
				Approved_Date: null,
				Released_Date: null,
				Revision_Reason: null,
				Doc_ID: null
			},
			submittable: false
		};
	},
	methods: {
		retrieveUsers() {
			UserDataService.getAll()
				.then(response => {
					for (const user of response.data) {
						this.users.push({
							text: `${user.name}`,
							value: user.user_id
						});
					}
				})
				.catch(e => {
					console.error(e);
				});
		},
		retrieveClasses() {
			DocumentDataService.getClasses()
				.then(response => {
					for (const docClass of response.data) {
						this.classes.push({
							text: `${docClass.code} - ${docClass.description}`,
							value: docClass.class_id
						});
					}
				})
				.catch(e => {
					console.error(e);
				});
		},
		retrieveProjects() {
			ProjectDataService.getAll()
				.then(response => {
					for (const project of response.data) {
						this.projects.push({
							text: project.code + " - " + project.name,
							value: project.project_id
						});
					}
				})
				.catch(e => {
					console.error(e);
				});
		},
		retrieveDocuments() {
			var query = `?part_num=${this.PartNum}`;
			DocumentDataService.getAll(query)
				.then(response => {
					this.collectInfo(response.data);
				})
				.catch(e => {
					console.error(e);
				});
		},
		collectInfo(data) {
			var index = 0;
			for (const doc of data) {
				var ob = {
					Project: doc.Project.project_id,
					Doc_Class: doc.Document_Class.class_id,
					Part_Num: doc.part_num,
					Revision: doc.revision,
					Description: doc.description,
					Requestor: null,
					Creation_Date: doc.creation_date,
					Ready_Date: doc.ready_date,
					Checker: null,
					Checked_Date: doc.checked_date,
					Approver: null,
					Approved_Date: doc.approved_date,
					Released_Date: doc.released_date,
					Revision_Reason: doc.revision_reason,
					Doc_ID: doc.doc_id
				};
				if (doc.Checker) ob['Checker'] = doc.Checker.user_id;
				if (doc.Approver) ob['Approver'] = doc.Approver.user_id;
				if (doc.Requestor) ob['Requestor'] = doc.Requestor.user_id;
				this.revisions.push({
					text: `${ob['Revision']}`,
					value: index,
					data: ob
				});
				if(ob.Doc_ID == this.DocID) {
					this.selectedDoc = index;
					this.swapData(index);
				}
				index++;
			}
		},
		updateRevision() {
			if (this.radio_value == 1 && this.eng_rev == null) this.data.Revision = "A";
			else if (this.radio_value == 1) this.data.Revision = this.eng_rev;
			else if (this.radio_value == 2 && this.prod_rev == null)
				this.data.Revision = "0";
			else this.data.Revision = this.prod_rev;
		},
		editDoc() {
			DocumentDataService.update(this.data.Doc_ID, this.data)
				.then(response => {
					if (response.status == 200) this.$router.push({ name: "Documents" });
				})
				.catch(e => {
					console.error(e);
				});
		},
		Cancel() {
			this.$router.push({ name: "Documents" });
		},
		CheckRequired() {
			if (
				this.data.Project != null &&
				this.data.Doc_Class != null &&
				this.data.Part_Num != null &&
				this.data.Requestor != null &&
				this.data.Revision != null &&
				this.data.description != null
			)
				this.submittable = true;
			else this.submittable = false;
		},
		swapData(index) {
			for(const [key, value] of Object.entries(this.revisions[index].data)) {
				this.data[key] = value;
			}
			if(this.revisions[index].data['Released_Date'] != null) this.locked = true;
			else this.locked = false;
		},
		getLatestRevs() {
			// This is a real mess huh, in the words of my favorite valve programmer: Too Bad!
			var arr = [];
			var revs = {eng_rev: null, prod_rev: null};

			// Getting sorted array of revisions
			for(const value of Object.values(this.revisions)) {
				var a = value.data.Revision;
				arr.push(a);
			}
			arr.sort();

			// Getting latest revisions from sorted array
			if(arr.indexOf('A') == -1) revs.prod_rev = arr[arr.length - 1];
			else if (arr.indexOf('0') == -1) revs.eng_rev = arr[arr.length - 1];
			else {
				revs.prod_rev = arr[arr.indexOf('A') - 1];
				revs.eng_rev =  revs.eng_rev = arr[arr.length - 1];
			}

			// Incrementing characters by one
			if(revs.eng_rev)
				revs.eng_rev = revs.eng_rev.substring(0, revs.eng_rev.length - 1)
				+ String.fromCharCode(revs.eng_rev.charCodeAt(revs.eng_rev.length - 1) + 1);
			else revs.eng_rev = 'A';
			if(revs.prod_rev)
				revs.prod_rev = revs.prod_rev.substring(0, revs.prod_rev.length - 1)
				+ String.fromCharCode(revs.prod_rev.charCodeAt(revs.prod_rev.length - 1) + 1);
			else revs.prod_rev = '0';

			return revs;
		},
		newRevision() {
			var revinfo = {};
			var revs = this.getLatestRevs();

			revinfo['project'] = this.data.Project;
			revinfo['class'] = this.data.Doc_Class;
			revinfo['part_num'] = this.data.Part_Num;
			revinfo['eng_rev'] = revs.eng_rev;
			revinfo['prod_rev'] = revs.prod_rev;

			this.$router.push({name: 'DocumentCreate', params: {revision_info: revinfo} })
		}
	},
	mounted() {
		try {
			this.retrieveUsers();
			this.retrieveClasses();
			this.retrieveProjects();
			this.retrieveDocuments();
		} catch (err) {
			console.error("Error response:");
			console.error(err);
		}
	}
};
</script>

<style scoped>
#Title {
	margin: 0em 0em 0.5em;
	font-size: 25px;
}
</style>
