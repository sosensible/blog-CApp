const Module = () => import("../Module.vue");
const NewsHome = () => import("../views/HomeView.vue");
const MainAdmin = () => import("@/views/admin/MainAdminView.vue");
const NewsAdmin = () => import("../views/admin/AdminView.vue");
const Post = () => import("../views/PostView.vue");

const moduleRoutes = {
  path: "/blog",
  component: Module,
  children: [
    {
      path: "/",
      name: "blog.home",
      component: NewsHome
    },

    {
      path: ":id",
      name: "blog.post",
      component: Post
    },
    {
      path: "admin",
      component: MainAdmin,
      children: [
        {
          path: "/",
          name: "admin.blog.main",
          component: NewsAdmin
        }
      ]
    }
  ]
};

export default moduleRoutes;
