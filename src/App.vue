<template>
  <div id="app">
    <LangSwitch :locales="locales" :currentLocal="currentLocale" />
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "./components/ContactForm";
import LangSwitch from "./components/LangSwitch";
export default {
  name: "App",
  components: {
    ContactForm,
    LangSwitch
  },
  data() {
    return {
      currentLocale: "en",
      locales: [{ id: "en", name: "English" }, { id: "hu", name: "Magyar" }],
      message: {
        en: "Hello you, Vue.js!",
        hu: "Szia, Vuejs"
      }
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
