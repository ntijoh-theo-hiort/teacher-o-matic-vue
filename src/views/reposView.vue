<script setup lang="ts">
import { Ref, ref } from 'vue'
import router from "../router/index"
import { useRoute } from 'vue-router'
import repoComponent from '../components/repoComponent.vue'

// interface repoInterface { 
//     contentsURL: string; 
//     name: string;
//     githubLink: string;
//     forksCount: string;
//     forksURL: string;
// }

const route = useRoute()
let username: string = route.params.username as string

router.beforeEach((to) => {
    console.log("ran beforeEach");
    username = to.params.username as string
    getRepos(username)
})


const reposFiltered: Ref<Object[]> = ref([])

async function getRepos(username: string): Promise<boolean> {
    console.log("ran getRepos")

    const userReposResult = await fetch(
        `https://api.github.com/users/${username}/repos`,
        { headers: { Authorization: "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" } }
    )
    let userRepos = await userReposResult.json();

    if (!userReposResult.ok) {
        return false
    } else {
        reposFiltered.value = userRepos.map((userRepo: any) => {
            return {
                contentsURL: userRepo["contents_url"].replace("{+path}", ""),
                name: userRepo["name"],
                githubLink: userRepo["html_url"],
                forksCount: userRepo["forks_count"],
                forksURL: userRepo["forks_url"],
            };
        });

        return true
    }
}

getRepos(username)


</script>

<template>
    <h1>Repos!</h1>
    <repoComponent v-for="repo in reposFiltered" :name="repo.name" :githubLink="repo.githubLink" />
</template>

<style scoped></style>
