import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "Login",
      component: () => import("./components/Login")
    },
    {
      path: "/signup",
      name: "Signup",
      component: () => import("./components/SignUp")
    },
    {
      path: "/forgot",
      name: "ForgotPassword",
      component: () => import("./components/ForgotPassword")
    },
    {
      path: "/reset",
      name: "PasswordReset",
      component: () => import("./components/PasswordReset")
    },
    {
      path: "/account",
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
    },
    {
      path: "/document_edit",
      name: "DocumentEdit",
      component: () => import("./components/DocumentEdit"),
      props: true
    },
    {
      path: "/document_create",
      name: "DocumentCreate",
      component: () => import("./components/DocumentCreate")
    }]
});
