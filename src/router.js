import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/site-manager/info",
            alias: "/info",
            name: "info",
            component: () => import("./components/info")
        },
        // duplicate above code for all components
        {
            path: "/site-manager/db",
            name: "Database",
            component: () => import("./components/database")
        }
    ]
})