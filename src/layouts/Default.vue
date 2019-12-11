<template>
  <v-app>
    <NavBar />

    <v-content class="ml-5">
      <slot />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from "../components/NavBar";

export default {
  components: {
    NavBar
  }
};
</script>