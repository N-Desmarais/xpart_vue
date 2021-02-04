<template>
	<div id="Account" @submit.prevent>
		<sui-container centered>
			<sui-grid middle aligned :padded="true" id="Grid">
				<sui-grid-column :centered="true" style="width: 500px;">
					<sui-segment style="background: #F8F8F9;">
						<center>
							<div id="Title">My Account<br /></div>
							<sui-icon color="blue" size="massive" name="user circle" />
						</center>
						<sui-form style="margin: 1em 0em .5em;">
							<sui-form-field>
								<label>Email</label>
								<input disabled v-model="data.email" />
							</sui-form-field>
							<sui-form-field>
								<label>Initials</label>
								<input
									style="width: 100px"
									v-model="data.initials"
									@change="CheckRequired"
								/>
							</sui-form-field>
							<sui-form-fields grouped style="margin: 0em .5em 0em">
								<label>My Projects</label>
							</sui-form-fields>
							<center>
								<sui-button
									v-bind:disabled="!this.submittable"
									v-if="$auth.isAuthenticated"
									color="blue"
									content="Save Changes"
									style="margin: 0em .5em 0em"
									@click="submit"
								/>
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
//import ProjectDataService from "../services/project.service";

export default {
	name: "Account",
	data() {
		return {
			user_id: null,
			data: {
				email: null,
				initials: null
			},
			submittable: false
		};
	},
	methods: {
		grabUserInfo(input) {
			UserDataService.get(input)
				.then(response => {
					if (response.data.length == 1) {
						this.data.email = response.data["0"].email;
						this.data.initials = response.data["0"].name;
						this.user_id = response.data["0"].user_id;
						console.log(response.data["0"]);
					}
				})
				.catch(e => {
					console.error(e);
				});
		},
		CheckRequired() {
			if (this.data.initials) this.submittable = true;
			else this.submittable = false;
		},
		submit() {
			if (this.submittable == true) {
				UserDataService.update(this.user_id, this.data)
					.then(response => {
						if (response.status == 200) this.submittable = false;
					})
					.catch(e => {
						console.error(e);
					});
			}
		}
	},
	mounted() {
		try {
			this.grabUserInfo(this.$auth.user.email);
		} catch (err) {
			console.error("Error response:");
			console.error(err);
		}
	}
};
</script>
