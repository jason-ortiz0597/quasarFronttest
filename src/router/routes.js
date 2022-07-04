
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/fundamentals', component: () => import('pages/TestPage.vue') },
      { path: '/components', component: () => import('pages/ComponentPage.vue') },
      { path: '/listShopping', component: () => import('pages/ListShopping.vue') }

    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
