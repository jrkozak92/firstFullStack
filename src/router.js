import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: "https://www.joeykozak.com/site-manager/",
    routes: [
        {
            path: "/info",
            alias: "/info",
            name: "info",
            component: () => import("./components/info")
        },
        // duplicate above code for all components
        {
            path: "/db",
            name: "Database",
            component: () => import("./components/database")
        }
    ]
})