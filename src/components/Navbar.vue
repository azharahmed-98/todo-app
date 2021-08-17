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
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text small v-bind="attrs" v-on="on">
            <v-icon small>
              mdi-chevron-down
            </v-icon>
            <span class="hidden-sm-and-down">
              Menu
            </span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="(item, index) in items"
            :key="index"
            router
            :to="item.route"
          >
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn text small @click="changeTheme()" v-on="on">
            <v-icon v-if="$vuetify.theme.dark" small>
              mdi-white-balance-sunny
            </v-icon>
            <v-icon v-if="!$vuetify.theme.dark" small>
              mdi-weather-night
            </v-icon>
            <span class="hidden-sm-and-down">
              {{ fetchTheme }}
            </span>
          </v-btn>
        </template>
        <span>Switch between Light and Dark Mode</span>
      </v-tooltip>
      <v-btn text small>
        <span class="hidden-sm-and-down">
          Sign Out
        </span>
        <v-icon small>
          mdi-logout-variant
        </v-icon>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
import eventBus from "../main";

export default {
  name: 'Navbar',
  data() {
    return {
      showDrawerButton: this.navConfig.showDrawerButton,
      theme: "",
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
        { icon: "mdi-account", text: "Team", name: "Team", route: "/team" },
      ],
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
    changeTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
  computed: {
    fetchTheme() {
      if (this.$vuetify.theme.dark) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.theme = "Light Mode";
      } else {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.theme = "Dark Mode";
      }
      return this.theme;
    },
  },
};
</script>
