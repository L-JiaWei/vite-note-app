import * as VueRouter from "vue-router";
import preview from "../views/preview.vue";
import Editview from "../views/Editview.vue";

export default VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: "/preview",
            name: "preview",
            component: preview,
        },
        {
            path: "/Editview",
            name: "Editview",
            component: Editview,
        },
        {
            path: '/:pathMatch(.*)',
            redirect: '/preview'
        }
    ]
});