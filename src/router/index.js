import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import ProductCategoryPage from '../pages/ProductCategoryPage.vue';
import ProductDetailPage from '../pages/ProductDetailPage.vue';
import CheckoutPage from '../pages/CheckoutPage.vue';
import store from '@/store/index.js';

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage,
      beforeEnter(to, from, next) {
        if (store.getters['cart/cartQuantity'] === 0) {
          next('/');
        }
        else {
          next();
        }
      }
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
  ]
})

router.beforeEach(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})

export default router
