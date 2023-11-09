import { createApp } from 'vue'
import './style.css'
import {createRouter, createWebHashHistory} from 'vue-router'
import App from './App.vue'
import reposView from './views/reposView.vue'
import forksView from './views/forksView.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/repos', component: reposView},
        {path: '/:repo/forks', component: forksView}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')