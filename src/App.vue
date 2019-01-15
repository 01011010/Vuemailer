<template>
  <div id="app" data-server-rendered="true">
    <div id="wrapper">
      <Intro /><ContactForm /><AboutUs /><Services /><References /><Copyright />
    </div>
  </div>
</template>

<script>
import Intro from "./components/Intro";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import References from "./components/References";
import Copyright from "./components/Copyright";
import LangSwitch from "./components/LangSwitch";
export default {
  name: "App",
  components: {
    Intro,
    ContactForm,
    AboutUs,
    Services,
    References,
    Copyright,
    LangSwitch
  },
  data() {
    return {
      currentLocale: "en",
      locales: [{ id: "en", name: "English" }, { id: "hu", name: "Magyar" }],
      message: {
        en: "Hello you, Vue.js!",
        hu: "Szia, Vuejs"
      },
      isPreload: false,
      isIE: false
    };
  },
  created() {
    // Internet Explorer 6-11
    this.isIE = /*@cc_on!@*/ false || !!document.documentMode;
    if (this.isIE) {
      document.body.className.add("is-ie");
    }
  },
  mounted() {
    setTimeout(() => document.body.classList.remove("is-preload"), 100);
  },
  methods: {
    track() {
      this.$ga.page("/");
    }
  }
};
</script>

<style>
#app {
}
</style>
