<template>
  <v-app>
    <NavBar />

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
</style>