import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { Store } from "../services/core/store";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.middleware) {
//     const middleware = Array.isArray(to.meta.middleware)
//       ? to.meta.middleware
//       : [to.meta.middleware];
//     const context = {
//       from,
//       next,
//       router,
//       to,
//     };
//     const nextMiddleware = nextFactory(context, middleware, 1);
//
//     return middleware[0]({ ...context, next: nextMiddleware });
//   }
//
//   return next();
// });

export default router;
