<template>
  <div class="dashboard">
    <!-- <h1 class="subtitle-1 grey--text">Dashboard</h1> -->
    <v-container class="my-5">
      <h1 class="subtitle-1 grey--text my-5">Dashboard</h1>
      <v-row class="mb-5">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              color="grey"
              text
              small
              v-on="on"
              @click="sortBy('title')"
              class="text-lowercase"
            >
              <v-icon left small>mdi-folder</v-icon>
              by project name
            </v-btn>
          </template>
          <span>Sort Projects by Project Name</span>
        </v-tooltip>
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn
              color="grey"
              text
              small
              v-on="on"
              @click="sortBy('person')"
              class="text-lowercase"
            >
              <v-icon left small>mdi-account</v-icon>
              by person
            </v-btn>
          </template>
          <span>Sort Projects by Person</span>
        </v-tooltip>
      </v-row>
      <v-card v-for="(project, index) in projects" :key="index">
        <v-row dense :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due Date</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="3" sm="4" md="2">
            <div>
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Azhar Ahmed A",
          due: "1st Jan 2022",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Narendar Singh",
          due: "10th Jan 2021",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Parvez",
          due: "20th Dec 2021",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Adnan Zaid",
          due: "20th Oct 2020",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.project.complete {
  border-left: 4px solid #43A047;
}

.project.ongoing {
  border-left: 4px solid orange;
}

.project.overdue {
  border-left: 4px solid tomato;
}

.v-chip.complete {
  background: #43A047 !important;
}

.v-chip.ongoing {
  background: orange !important;
}

.v-chip.overdue {
  background: tomato !important;
}
</style>
