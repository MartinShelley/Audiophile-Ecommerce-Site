import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import ProductCategoryPage from '../pages/ProductCategoryPage.vue';
import ProductDetailPage from '../pages/ProductDetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/headphones',
    name: 'headphones',
    component: ProductCategoryPage,
    meta: { pageType: 'productCategory' }
  },
  {
    path: '/speakers',
    name: 'speakers',
    component: ProductCategoryPage,
    meta: { pageType: 'productCategory' }
  },
  {
    path: '/earphones',
    name: 'earphones',
    component: ProductCategoryPage,
    meta: { pageType: 'productCategory' }
  },
  {
    path: '/headphones/:product',
    name: 'headphonesPDP',
    component: ProductDetailPage,
    meta: { productCategory: 'headphones', pageType: 'productDetail' },
  },
  {
    path: '/speakers/:product',
    name: 'speakersPDP',
    component: ProductDetailPage,
    meta: { productCategory: 'speakers', pageType: 'productDetail' }
  },
  {
    path: '/earphones/:product',
    name: 'earphonesPDP',
    component: ProductDetailPage,
    meta: { productCategory: 'earphones', pageType: 'productDetail' }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
  // ...
})

export default router
