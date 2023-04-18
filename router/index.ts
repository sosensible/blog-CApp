import capp_config from "../capp.config"

const Module = () => import("../CappModule.vue");
const NewsHome = () => import("../views/HomeView.vue");
const MainAdmin = () => import("@/views/admin/MainAdminView.vue");
const NewsAdmin = () => import("../views/admin/AdminView.vue");
const Post = () => import("../views/PostView.vue");

const capp_name = capp_config.app.path;

const moduleRoutes = {
  path: "/" + capp_name,
  component: Module,
  children: [
    {
      path: "/",
      name: `${capp_name}.home`,
      component: NewsHome
    },

    {
      path: ":id",
      name: `${capp_name}.post`,
      component: Post
    },
    {
      path: "admin",
      component: MainAdmin,
      children: [
        {
          path: "/",
          name: `admin.${capp_name}.main`,
          component: NewsAdmin
        }
      ]
    }
  ]
};

export default moduleRoutes;
