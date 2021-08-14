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
              <v-avatar size="100" color="primary">
                <img :src="person.avatar" alt="Avatar">
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
        { name: "Azhar Ahmed A", role: "Web Developer", avatar: '/avatar-1.png' },
        { name: "Narendar Singh", role: "Digital Marketer", avatar: '/avatar-2.png' },
        { name: "Adnan Zaid", role: "Graphics Designer", avatar: '/avatar-3.png' },
        { name: "Parvez", role: "UX Developer", avatar: '/avatar-4.png' },
      ],
    };
  },
};
</script>
