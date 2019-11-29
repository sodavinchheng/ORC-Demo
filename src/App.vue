<template>
  <v-app>
    <v-content :is="layout">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
const defaultLayout = 'default'

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),
  computed: {
     layout(){
       return(this.$route.meta.layout || defaultLayout) + '-layout'
     }
  }
};
</script>

<style>
  *{
    margin: 0px;
    padding: 0px;
  }
</style>