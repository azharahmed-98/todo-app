<template>
  <v-form class="mx-4" ref="form" v-model="form">
    <v-text-field
      label="Title"
      v-model="title"
      prepend-icon="mdi-folder"
      :rules="inputRules"
    ></v-text-field>
    <v-textarea
      label="Information"
      v-model="content"
      prepend-icon="mdi-pencil"
      :rules="inputRules"
    ></v-textarea>
    <v-menu max-width="290" offset-y>
      <template v-slot:activator="{ on }">
        <v-text-field
          :value="formatDate()"
          v-on="on"
          label="Due Date"
          prepend-icon="mdi-calendar"
          :rules="inputRules"
        >
        </v-text-field>
      </template>
      <v-date-picker v-model="due"></v-date-picker>
    </v-menu>
    <v-btn class="success ma-4" @click="submit()" :disabled="!form">Add Project</v-btn>
  </v-form>
</template>

<script>
import moment from "moment";

export default {
  name: "Form",
  data() {
    return {
      title: "",
      content: "",
      due: null,
      form: false,
      inputRules: [
        v => v.length >=3 || 'Minimum Length is of 3 Characters'
      ]
    };
  },
  methods: {
    submit() {
      // if(this.$refs.form.validate()){
        const reqPayload = {
        title: this.title,
        content: this.content,
        due: this.due,
      };
      console.log(reqPayload, "reqpayload");
      // }
    },
    formatDate() {
      return this.due
        ? moment(this.due, "YYYY-MM-DD").format("Do MMM YYYY")
        : "";
    },
  },
};
</script>
