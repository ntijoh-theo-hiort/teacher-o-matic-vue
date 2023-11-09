import {createRouter, createWebHashHistory} from 'vue-router'
import reposView from '../views/reposView.vue'
import forksView from '../views/forksView.vue'


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/:username/repos', component: reposView},
        {path: '/:repo/forks', component: forksView}
    ]
})

export default router