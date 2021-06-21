<template>
  <nav>
    <v-app-bar color="grey lighten-4" flat>
      <v-app-bar-nav-icon @click="toggleDrawer()"> </v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-medium brown--text text--brown-lighten-2"
          >Todo</span
        >
        <span>Application</span>
      </v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toggleDrawer() {
      this.$emit("appDrawerToggled");
    },
  },
};
</script>
