import Vue from "vue";
import VueRouter from "vue-router";

import Portada from "@/views/Portada";
import SobreMi from "@/views/SobreMi";
import Contacto from "@/views/Contacto";
import Post from "@/views/Post";
import RutasInexistentes from "@/views/RutasInexistentes";
import Articulo from "@/views/Articulo";

Vue.use(VueRouter);

const routes = [
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path: "/articulo",
    name: "Articulo",
    component: Articulo,
  },
  {
    path: "/",
    name: "Portada",
    component: Portada,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
    children: [
      {
        path: ":id",
        component: Articulo,
      },
    ],
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi,
  },
  {
    path: "*",
    name: "RutasInexistentes",
    component: RutasInexistentes,
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;

/* 

const routes = [
  {
    path: "/",
    name: "Portada",
    component: Portada,
  },
  {
    path: "/sobremi",
    name: "SobreMi",
    component: SobreMi,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contacto,
  },
  {
    path: "/post",
    name: "Post",
    children: [
      {
        path: ":id",
        component: Articulo,
      },
    ],
  },

  {
    path: "*",
    name: "RutasInexistentes",
    component: RutasInexistentes,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
 */
