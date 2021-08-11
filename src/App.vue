<template>
  <v-app>
    <Navbar :nav-config = "navConfig"/>
    <Drawer />
    <v-main class="mx-4 mt-2 mb-4">
      <router-view />
    </v-main>
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
