<template>
  <nav>
    <v-app-bar app flat height="60px">
      <v-app-bar-nav-icon v-if="showDrawerButton" @click="toggleDrawer()">
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        <span class="font-weight-medium primary--text text-uppercase"
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
import eventBus from "../main";

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
      eventBus.$emit("appDrawerToggled");
    },
  },
};
</script>
