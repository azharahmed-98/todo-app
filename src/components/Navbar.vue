<template>
  <nav>
    <v-app-bar color="grey lighten-4" flat>
      <v-app-bar-nav-icon @click="toggleDrawer()"> </v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase">
        <span class="font-weight-medium brown--text text--brown-lighten-2"
          >Todo</span
        >
        <span>Application</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn depressed>
        Sign Out
        <v-icon>
          mdi-logout-variant
        </v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import { bus } from "../main";

export default {
  data() {
    return {};
  },
  methods: {
    toggleDrawer() {
      bus.$emit("appDrawerToggled");
    },
  },
};
</script>
