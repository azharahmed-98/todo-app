<template>
  <div class="teams">
    <v-container class="my-5">
      <h1 class="subtitle-1 grey--text my-5">Team</h1>
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="(person, index) in teams"
          :key="index"
        >
          <v-card class="text-center">
            <v-responsive class="pt-4">
              <v-avatar>
                
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" text>
                <v-icon small left>
                  mdi-message
                </v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teams: [
        { name: "Azhar Ahmed A", role: "Web Developer" },
        { name: "Narendar Singh", role: "Digital Marketer" },
        { name: "Adnan Zaid", role: "Graphics Designer" },
        { name: "Parvez", role: "UX Developer" },
      ],
    };
  },
};
</script>
