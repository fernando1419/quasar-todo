const routes = [
  {
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageTodo.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/PageSettings.vue')
      }
    ]
  },

  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
