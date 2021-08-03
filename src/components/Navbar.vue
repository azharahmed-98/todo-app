<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon v-if="showDrawerButton" @click="toggleDrawer()">
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        <span class="font-weight-medium pink--text text-pink accent-2 text-uppercase"
          >Todo</span
        >
        <span>Application</span>
      </v-app-bar-title>
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
    return {
      showDrawerButton: this.navConfig.showDrawerButton,
    };
  },
  props: {
    navConfig: {
      type: Object,
      required: true,
    },
  },
  methods: {
    toggleDrawer() {
      bus.$emit("appDrawerToggled");
    },
  },
};
</script>
