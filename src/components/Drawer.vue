<template>
  <v-navigation-drawer v-model="drawer" app color="primary" dark>
    <v-list dense>
      <v-list-item v-for="item in items" :key="item.text" router :to="item.route">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import eventBus from "../main";

export default {
  created() {
    eventBus.$on("appDrawerToggled", () => {
      this.drawer = !this.drawer;
    });
  },
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: "mdi-view-dashboard",
          text: "Dashboard",
          name: "Dashboard",
          route: "/",
        },
        {
          icon: "mdi-folder",
          text: "Projects",
          name: "Projects",
          route: "/projects",
        },
        { icon: "mdi-account",
          text: "Team",
          name: "Team",
          route: "/team"
        },
      ],
    };
  },
};
</script>
