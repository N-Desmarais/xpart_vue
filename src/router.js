import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "Login",
      component: () => import("./components/DocumentList")
    }
    /*,
    {
      path: "/signup",
      name: "Signup",
      component: () => import("./components/SignUp")
    },
    {
      path: "/reset",
      name: "PasswordReset",
      component: () => import("./components/PasswordReset")
    },
    {
      path: "/user/:user",
      name: "Account",
      component: () => import("./components/Account")
    },
    {
      path: "/project/:name",
      name: "Project",
      component: () => import("./components/DocumentList")
    },
    {
      path: "/documents",
      name: "Documents",
      component: () => import("./components/DocumentList")
    }
  */]
});
