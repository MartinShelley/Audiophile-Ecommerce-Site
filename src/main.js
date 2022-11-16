import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ShopIntroBanner from "@/components/ShopIntroBanner/ShopIntroBanner.vue";
import ProductCategoryNav from "@/components/Navigation/ProductCategories/ProductCategoriesNav.vue";
import ProductCard from '@/components/Products/ProductCard.vue';
import ButtonOne from '@/components/UI/Buttons/ButtonOne.vue';

const app = createApp(App);

app.use(store);
app.use(router);

app.component('ShopIntroBanner', ShopIntroBanner);
app.component('ProductCategoryNav', ProductCategoryNav);
app.component('ProductCard', ProductCard);
app.component('ButtonOne', ButtonOne);

app.mount('#app');


