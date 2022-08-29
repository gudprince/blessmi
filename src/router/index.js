import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PaymentCancel from "../views/PaymentCancel.vue";
import PaymentFailed from "../views/PaymentFailed.vue";
import PaymentSuccess from "../views/PaymentSuccess.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/payment/failed",
            name: "failed",
            component: PaymentFailed,
        },
        {
            path: "/payment/cancel",
            name: "cancel",
            component: PaymentCancel,
        },
        {
            path: "/payment/success",
            name: "success",
            component: PaymentSuccess,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import("../views/AboutView.vue"),
        },
    ],
});

export default router;
