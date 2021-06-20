<template>
  <nav>
    <v-app-bar color="grey lighten-4" flat >
      <v-app-bar-nav-icon
        @click="toggleDrawer()"
      >
      </v-app-bar-nav-icon>
      <v-toolbar-title>
        Todo Application
      </v-toolbar-title>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
    data() {
        return{

        };
    },
    methods:{
        toggleDrawer(){
            this.$emit("appDrawerTogglesd");
        }
    }

};
</script>
