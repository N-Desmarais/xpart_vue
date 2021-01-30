<template>
	<div id="SignUp" @submit.prevent>
		<sui-container centered>
			<sui-grid middle aligned :padded="true" id="Grid">
				<sui-grid-column :centered="true" style="width: 600px;">
					<sui-segment style="background: #F8F8F9;">
						<center>
							<div id="Title">New Document: #{{data.Part_Num}}<br /></div>
							* = Required Field
						</center>
						<sui-form>
							<sui-form-fields>
								<sui-form-field>
									<label>Project *</label>
									<sui-dropdown
										:disabled="lock_rev_fields"
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
										:disabled="lock_rev_fields"
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
											label="Engineering"
											radio
											value="1"
											v-model="radio_value"
											@click="updateRevision"
										/>
									</sui-form-field>
									<sui-form-field>
										<sui-checkbox
											label="Production"
											radio
											value="2"
											v-model="radio_value"
											@click="updateRevision"
										/>
									</sui-form-field>
								</sui-form-fields>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Requester *</label>
									<sui-dropdown
										selection
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
									<sui-dropdown
										selection
										:options="users"
										v-model="data['Checker']"
									/>
								</sui-form-field>
								<sui-form-field>
									<label>Checked Date</label>
									<input type="date" v-model="data['Checked_Date']" />
								</sui-form-field>
							</sui-form-fields>
							<sui-form-fields>
								<sui-form-field>
									<label>Approver</label>
									<sui-dropdown
										selection
										:options="users"
										v-model="data['Approver']"
									/>
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
									:disabled="!submittable"
									color="green"
									content="Create"
									style="margin: 0em .5em 0em"
									@click="CreateDoc"
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
const moment = require("moment");

export default {
	name: "DocumentCreate",
	props: ["revision_info"],
	data() {
		return {
			lock_rev_fields: false,
			radio_value: "1",
			eng_rev: null,
			prod_rev: null,
			users: [],
			classes: [],
			projects: [],
			data: {
				Project: null,
				Doc_Class: null,
				Revision: null,
				Part_Num: null,
				Requestor: null,
				Creation_Date: null,
				Ready_Date: null,
				Checker: null,
				Checked_Date: null,
				Approver: null,
				Approved_Date: null,
				Released_Date: null,
				Description: null,
				Revision_Reason: null
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
		getNextPartNum() {
			DocumentDataService.getMaxPart()
				.then(response => {
					if (response.data["0"].maxPartNum) {
						this.data.Part_Num = parseInt(response.data["0"].maxPartNum) + 1;
					} else {
						this.data.Part_Num = 0;
					}
				})
				.catch(e => {
					console.error(e);
				});
		},
		updateRevision() {
			if (this.radio_value == 1 && this.eng_rev == null)
				this.data.Revision = "A";
			else if (this.radio_value == 1) this.data.Revision = this.eng_rev;
			else if (this.radio_value == 2 && this.prod_rev == null)
				this.data.Revision = "0";
			else this.data.Revision = this.prod_rev;
		},
		getDate() {
			const format = "YYYY-MM-DD";
			var dateTime = moment().format(format);
			this.data.Creation_Date = dateTime;
		},
		CreateDoc() {
			DocumentDataService.create(this.data)
				.then(response => {
					if (response.data.doc_id) this.$router.push({ name: "Documents" });
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
		getRevisionInfo() {
			this.lock_rev_fields = true;
			this.data.Project = this.revision_info.project;
			this.data.Doc_Class = this.revision_info.class;
			this.data.Part_Num = this.revision_info.part_num;
			this.eng_rev = this.revision_info.eng_rev;
			this.prod_rev = this.revision_info.prod_rev;
		}
	},
	mounted() {
		try {
			if(this.revision_info) this.getRevisionInfo();
			else this.getNextPartNum();
			this.retrieveUsers();
			this.retrieveClasses();
			this.retrieveProjects();
			this.updateRevision();
			this.getDate();
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
