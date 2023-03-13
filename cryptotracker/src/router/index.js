import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage';

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'products',
    component: ProductsPage
  },
  {
    path: '/products/:id', // :id je url parametar (u mom slučaju je to određeni cryptocurrency)
    name: 'productdetail',
    component: ProductDetailPage,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/', //ovo je home page, redirecta na products
    redirect:'/products'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
