<template>
  <v-app>
    <Navbar :nav-config = "navConfig"/>
    <Drawer />
    <v-content class="mx-4 mt-2 mb-4">
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Drawer from "@/components/Drawer.vue";

export default {
  name: "App",
  components: { Navbar, Drawer },
  data() {
    return {
      "navConfig":{
        showDrawerButton: true,
      }
    };
  },
};
</script>
