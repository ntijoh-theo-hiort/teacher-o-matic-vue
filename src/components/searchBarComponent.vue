<script setup lang="ts">
    import router from '../router/index.ts'

    let username: string = ''

    function showRepos(username: string): void{
        router.push(`/${username}/repos`)
    }
</script>

<template>
    <!--Import Google Icon Font-->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <!-- Compiled and minified CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">

    <nav>
      <div class="nav-wrapper">
        <form @submit="showRepos(username)">
          <div class="input-field">
            <input v-model="username" id="search" type="search" required>
            <label class="label-icon" for="search"><i class="material-icons">person_search</i></label>
            <i id="clear-searchbar-button" class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
</template>

<style scoped>

</style>
