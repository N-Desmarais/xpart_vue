import Vue from "vue";
import Router from "vue-router";
import { authGuard } from "./auth/authGuard";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      alias: "/login",
      name: "Login",
      component: () => import("./components/Login")
    },
    {
      path: "/account",
      name: "Account",
      component: () => import("./components/Account"),
      beforeEnter: authGuard
    },
    {
      path: "/project/:name",
      name: "Project",
      component: () => import("./components/DocumentList"),
      beforeEnter: authGuard
    },
    {
      path: "/documents",
      name: "Documents",
      component: () => import("./components/DocumentList"),
      beforeEnter: authGuard
    },
    {
      path: "/document_edit",
      name: "DocumentEdit",
      component: () => import("./components/DocumentEdit"),
      props: true,
      beforeEnter: authGuard
    },
    {
      path: "/document_create",
      name: "DocumentCreate",
      component: () => import("./components/DocumentCreate"),
      props: true,
      beforeEnter: authGuard
    },
    {
      path: "/project_create",
      name: "ProejctCreate",
      component: () => import("./components/ProjectCreate"),
      beforeEnter: authGuard
    }]
});
