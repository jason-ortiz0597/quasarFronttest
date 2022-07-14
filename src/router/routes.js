
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/fundamentals', component: () => import('pages/TestPage.vue') },
      { path: '/components', component: () => import('pages/ComponentPage.vue') },
      { path: '/listShopping', component: () => import('pages/ListShopping.vue') },
      { path: '/listProduct', component: () => import('pages/ProductSiipi.vue') },
      { path: '/indexWarehouse', component: () => import('pages/warehouse/IndexWarehouse.vue') },
      { path: '/siipiProduct', component: () => import('pages/warehouse/SiipiProduct.vue') },
      { path: '/provaiderSiipi', component: () => import('pages/warehouse/ProvaiderSiipi.vue') },
      { path: '/entryProduct', component: () => import('pages/warehouse/EntryProduct.vue') },
      { path: '/outputProduct', component: () => import('pages/warehouse/OutputProduct.vue') },
      { path: '/uploadProduct', component: () => import('pages/UploadProduct.vue') },
      { path: '/productSiipi', component: () => import('pages/products/IndexProduct.vue') },
      { path: '/createProduct', component: () => import('pages/products/CreateProduct.vue') },

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
