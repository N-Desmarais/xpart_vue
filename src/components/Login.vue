<template>
	<div id="Login">
		<sui-container centered>
			<sui-grid middle aligned :padded="true" id="Grid">
				<sui-grid-column :centered="true" style="width: 500px;">
					<sui-segment style="background: #F8F8F9;">
						<center>
							<div id="Title">XPart Login<br /></div>
							<sui-icon color="blue" size="massive" name="user circle" />
							<div v-if="!$auth.isAuthenticated" style="margin: 1em 0em .5em;">
								Make sure you verify your email before logging in.
							</div>
							<div v-if="$auth.isAuthenticated" style="margin: 1em 0em .5em;">
								Logged In As: {{ $auth.user.email }} <br /><br />
								Hover your mouse in the top left corner to see the menu
							</div>
							<sui-form style="margin: 1em 0em .5em;">
								<sui-button
									v-if="!$auth.isAuthenticated"
									color="green"
									content="Login"
									style="margin: 0em .5em 0em"
									@click="login"
								/>
								<sui-button
									v-if="$auth.isAuthenticated"
									color="red"
									content="Logout"
									style="margin: 0em .5em 0em"
									@click="logout"
								/>
							</sui-form>
						</center>
					</sui-segment>
				</sui-grid-column>
			</sui-grid>
		</sui-container>
	</div>
</template>

<script>
export default {
	name: "Login",
	methods: {
		login() {
			this.$auth.loginWithRedirect();
		},
		logout() {
			this.$auth.logout({
				returnTo: window.location.origin
			});
		}
	}
};
</script>

<style scoped>
* {
	padding: 10;
	margin: 10;
}
#Title {
	margin: 0em 0em 0.5em;
	font-size: 25px;
}
</style>
