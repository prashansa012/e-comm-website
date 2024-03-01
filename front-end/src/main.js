import {createApp} from 'vue'
import App from './App.vue'
import'./main.css';
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCwvf6XDjwfHcpXYBIr15dmw9-Vfu7_njk",
  authDomain: "vue-site-cbffe.firebaseapp.com",
  projectId: "vue-site-cbffe",
  storageBucket: "vue-site-cbffe.appspot.com",
  messagingSenderId: "843753979836",
  appId: "1:843753979836:web:54355445aa5a7bbc3ef5b9"
};

 initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
    history:VueRouter.createWebHistory(process.env.BASE_URL),
    routes:[
        {
            path:'/cart',
            component:ShoppingCartPage
        },{
           path:'/products',
           component:ProductsPage
        },{
            path:'/products/:productId',
            component:ProductDetailPage
        },{
            path:'/',
            redirect:'/products'
        },{
            path:'/:pathMatch(.*)*',
            component:NotFoundPage
        }]
}))
.mount('#app')


 


//     )
// createApp(App)
// .use(router)
// .mount('#app')
