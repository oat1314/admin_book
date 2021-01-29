import Vue from "vue"
import Router from "vue-router"
import Login from "./views/login.vue"
import Admin from "./views/admin.vue"
import Welcome from "./views/admin/welcome.vue"
import BookDetail from "./views/admin/bookdetail.vue"
import Borrow from "./views/admin/borrow.vue"
import User from "./views/admin/user.vue"


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
    path: "*",
    redirect: "/login",
  }, {
    path: "",
    redirect: "/login",
  }, {
    path: "/login",
    component: Login
  }, {
    path: "/",
    name: "admin",
    component: Admin,
    meta: {
      loginRequire: true
    },
    children: [{
      path: "welcome",
      name: "welcome",
      component: Welcome,
    }, {
      path: "system/user",
      name: "system/user",
      component: User,
    }, {
      path: "book/detail",
      name: "book/detail",
      component: BookDetail,
    }, {
      path: "book/borrow",
      name: "book/borrow",
      component: Borrow,
    },]
  }]
})
