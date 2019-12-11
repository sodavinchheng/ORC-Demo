<template>
  <div>
    <h1>Welcome To The Online Remote Classroom</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import DefaultLayout from "../layouts/Default";

export default {
  name: "home",
  components: {},
  created() {
    this.$emit("update:layout", DefaultLayout);
  }
};
</script>
