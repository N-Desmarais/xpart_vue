<template>
	<div id="SignUp" @submit.prevent>
		<sui-container centered>
			<sui-grid middle aligned :padded="true" id="Grid">
				<sui-grid-column :centered="true" style="width: 500px;">
					<sui-segment style="background: #F8F8F9;">
						<center>
							<div id="Title" style="margin: 0em 0em 1em">New Project: <br /></div>
						</center>
						<sui-form>
							<center>
								<sui-form-field style="margin: 0em 0em 2em; width: 300px">
									<label>Project Name</label>
									<input v-model="data.name" @change="CheckRequired" />
								</sui-form-field>
								<sui-form-field style="margin: 0em 0em 2em; width: 300px">
									<label>Project Code</label>
									<input
										maxlength="4"
										v-model="data.code"
										@change="CheckRequired"
										id="CAPS"
									/>
								</sui-form-field>
								<sui-form-field style="margin: 0em 0em 2em; width: 200px">
									<label>Project Owner</label>
									<sui-dropdown
										selection
										:options="users"
										v-model="data.owner"
										@input="CheckRequired"
									/>
								</sui-form-field>
								<sui-button
									:disabled="!submittable"
									color="green"
									content="Create"
									style="margin: 0em .5em 0em"
									@click="createProj"
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
import ProjectDataService from "../services/project.service";

export default {
	name: "ProjectCreate",
	data() {
		return {
			submittable: false,
			users: [],
			data: {
				name: null,
				code: null,
				owner: null
			}
		};
	},
	methods: {
		createProj() {
			ProjectDataService.create(this.data)
				.then(response => {
					if (response.status == 200) this.$router.push({ name: "Documents" });
				})
				.catch(e => {
					console.error(e);
				});
		},
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
		CheckRequired() {
			if (this.data.name && this.data.code && this.data.owner)
				this.submittable = true;
			else this.submittable = false;
		}
	},
	mounted() {
		try {
			this.retrieveUsers();
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
input {
	text-align: center;
}
#CAPS {
	text-transform: uppercase;
}
</style>
