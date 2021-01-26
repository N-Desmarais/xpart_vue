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
										@change="CheckRequired"
									/>
								</sui-form-field>
								<sui-form-field>
									<label>Class *</label>
									<sui-dropdown
										disabled
										selection
										:options="classes"
										v-model="data['Doc_Class']"
										@change="CheckRequired"
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
									<input
										disabled
										v-model="data.Revision"
										style="width: 195px;"
										@change="CheckRequired"
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
										@change="CheckRequired"
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
									<input type="date" v-model="data['Ready_Date']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Checker</label>
									<sui-dropdown selection :options="users" v-model="data['Checker']" />
								</sui-form-field>
								<sui-form-field>
									<label>Checked Date</label>
									<input type="date" v-model="data['Checked_Date']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Approver</label>
									<sui-dropdown selection :options="users" v-model="data['Approver']" />
								</sui-form-field>
								<sui-form-field>
									<label>Approved Date</label>
									<input type="date" v-model="data['Approved_Date']" />
								</sui-form-field>
								<sui-form-field>
									<label>Released Date</label>
									<input type="date" v-model="data['Released_Date']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Description *</label>
									<textarea
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
										name="Text1"
										cols="40"
										rows="5"
										v-model="data['Revision_Reason']"
									/>
								</sui-form-field>
							</sui-form-fields>
							<center>
								<sui-button
									color="green"
									content="Save Edit"
									style="margin: 0em .5em 0em"
									@click="editDoc"
								/>
								<sui-button
									color="blue"
									content="New Rev"
									style="margin: 0em .5em 0em"
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
	name: "DocumentCreate",
	props: ["DocInfo"],
	data() {
		return {
			radio_value: "1",
			eng_rev: this.engineering_rev,
			prod_rev: this.production_rev,
			nextPart: null,
			users: [],
			classes: [],
			projects: [],
			id: this.DocInfo.doc_id,
			data: {
				Project: this.DocInfo.Project.project_id,
				Doc_Class: this.DocInfo.Document_Class.class_id,
				Revision: this.DocInfo.revision,
				Part_Num: this.DocInfo.part_num,
				Requestor: this.DocInfo.Requestor.user_id,
				Creation_Date: this.DocInfo.creation_date,
				Ready_Date: this.DocInfo.ready_date,
				Checker: null,
				Checked_Date: this.DocInfo.checked_date,
				Approver: null,
				Approved_Date: this.DocInfo.approved_date,
				Released_Date: this.DocInfo.released_date,
				Description: this.DocInfo.description,
				Revision_Reason: this.DocInfo.revision_reason
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
							text: project.name,
							value: project.project_id
						});
					}
				})
				.catch(e => {
					console.error(e);
				});
		},
		updateRevision() {
			if (this.radio_value == 1 && this.eng_rev == null) this.data.Revision = "A";
			else if (this.radio_value == 1) this.data.Revision = this.eng_rev;
			else if (this.radio_value == 2 && this.prod_rev == null)
				this.data.Revision = "0";
			else this.data.Revision = this.prod_rev;
		},
		editDoc() {
			DocumentDataService.update(this.id, this.data)
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
				this.data.Project &&
				this.data.Doc_Class &&
				this.data.Part_Num &&
				this.data.Revision &&
				this.data.Requestor &&
				this.data.Description
			)
				this.submittable = true;
			else this.submittable = false;
		},
		importUsers() {
			if (this.DocInfo.Checker)
				this.data["Checker"] = this.DocInfo.Checker.user_id;
			if (this.DocInfo.Approver)
				this.data["Approver"] = this.DocInfo.Approver.user_id;
		}
	},
	mounted() {
		try {
			this.retrieveUsers();
			this.retrieveClasses();
			this.retrieveProjects();
			this.importUsers();
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
