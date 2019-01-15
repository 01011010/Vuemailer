// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VueAnalytics from "vue-analytics";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faLaptop,
  faSatelliteDish,
  faUsers,
  faCogs,
  faCode,
  faNewspaper
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCoffee,
  faLaptop,
  faSatelliteDish,
  faUsers,
  faCogs,
  faCode,
  faNewspaper
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueAnalytics, {
  id: "UA-XXX-X"
  //disabled: true // disable google analytics tracking by default
});
// inject global axios instance as http client to Model

Vue.config.productionTip = false;
Vue.config.formApiUrl = process.env.FORM_API_URL;
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
import("@/assets/css/main.css");
