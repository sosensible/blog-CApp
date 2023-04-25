import capp_config from "../capp.config"

const capp = capp_config.capp;

const Module = () => import("../CappModule.vue");
const CappHomeView = () => import("../views/HomeView.vue");
const MainAdmin = () => import("@/views/admin/MainAdminView.vue");
const NewsAdmin = () => import("../views/admin/AdminView.vue");
const Post = () => import("../views/PostView.vue");

const moduleRoutes = {
  path: "/" + capp.path,
  component: Module,
  children: [
    {
      path: "",
      name: `${capp.name}.main`,
      component: CappHomeView
    },
    {
      path: ":id",
      name: `${capp.name}.post`,
      component: Post
    },
    {
      path: "admin",
      component: MainAdmin,
      children: [
        {
          path: "",
          name: `admin.${capp.name}.main`,
          component: NewsAdmin
        }
      ]
    }
  ]
};

export default moduleRoutes;
