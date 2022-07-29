import {
  createRouter,
  createWebHashHistory,
} from 'vue-router';

const routes = [{
  path: '/auth',
  name: 'Auth',
  component: () => import(/* webpackChunkName: "auth" */ '../views/Auth/index.vue'),
},
{
  path: '/',
  name: 'BasicalLayout',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "BasicalLayout" */
    '../layout/BasicalLayout/index.vue'
  ),
  children: [{
    path: '/book',
    name: 'Book',
    component: () => import(/* webpackChunkName: "Book" */ '../views/Books/index.vue'),
  },

  ],
},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
