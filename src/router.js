import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.NODE_ENV === "production" ? "/site-manager/" : "/",
    routes: [
        {
            path: "./info",
            alias: ["/info", "/"],
            name: "info",
            component: () => import("./components/info")
        },
        // duplicate above code for all components
        {
            path: "./db",
            alias: "/db",
            name: "database",
            component: () => import("./components/database")
        },

        // the following handles 404s from GitHub not allowing vue-rotuer to do its thing
        {
            path: "*",
            component: () => import("./components/404")
        }
    ]
})