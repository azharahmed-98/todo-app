<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn depressed color="success" v-on="on" small>
        <v-icon small>
          mdi-plus
        </v-icon>
        Add New Project
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="#BBDEFB">
        <h3 class="text-uppercase primary--text">Add a New Project</h3>
      </v-toolbar>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Modal",
};
</script>
