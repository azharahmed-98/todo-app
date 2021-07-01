<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      dark
      class="appDrawer elevation-1 white--text"
    >
      Hello
    </v-navigation-drawer>
  </div>
</template>

<script>
import { bus } from "../main";

export default {
  created() {
    bus.$on("appDrawerToggled", () => {
      this.drawer = !this.drawer;
    });
  },
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
