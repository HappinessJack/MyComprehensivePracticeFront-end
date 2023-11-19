import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import HomePage from "./components/HomePage.vue"
import userList from './components/UserList.vue'
import {createRouter,createWebHashHistory} from "vue-router"
let routes = [{
    component:userList,
    path:"/userList"
},{
    component:HomePage,
    path:"/"
}]
let router = createRouter(
    {
        history:createWebHashHistory(),
        routes
    }
)
createApp(App).use(router).mount('#app')
