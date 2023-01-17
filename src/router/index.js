import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyInformation from "../views/MyInformation.vue";
import TimeEntry from "../views/TimeEntry.vue";
import Leave from "../views/Leave.vue";
import Benefits from "../views/Benefits.vue";
import OrganizationalChart from "../views/OrganizationalChart.vue";
import MyTeam from "../views/MyTeam.vue";
import MyPayslips from "../views/MyPayslips.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/aboutpage",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/information",
    name: "Myinformation",
    component: MyInformation,
  },
  {
    path: "/timeentry",
    name: "TimeEntry",
    component: TimeEntry,
  },
  {
    path: "/leave",
    name: "Leave",
    component: Leave,
  },
  {
    path: "/benefits",
    name: "Benefits",
    component: Benefits,
  },
  {
    path: "/organizationalchart",
    name: "Organizationalchart",
    component: OrganizationalChart,
  },
  {
    path: "/myteam",
    name: "MyTeam",
    component: MyTeam,
  },
  {
    path: "/mypayslips",
    name: "MyPayslips",
    component: MyPayslips,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
