import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

const eventBus = new Vue();

export default eventBus;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
