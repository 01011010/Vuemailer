<template>
  <div id="app" data-server-rendered="true">
    <div id="wrapper">
      <Intro /><ContactForm /><AboutUs /><Services /><References /><Copyright />
      <div class="copyright">
        <input
          type="checkbox"
          id="checkbox"
          v-model="isAnalyticsTrack"
          @change="persist();"
        />

        <label for="checkbox">
          <span v-if="isAnalyticsTrack"> Untick</span>
          <span v-else> Tick</span> this box to change your privacy settings.
          Google Analytics is currently:
          <span v-if="isAnalyticsTrack">enabled</span>
          <span v-else>disabled</span>.
          <transition name="fade" v-on:enter="enter" v-on:leave="leave">
            <span v-if="saveSettings"> Saving... </span>
          </transition>
        </label>
      </div>
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
      isIE: false,
      isAnalyticsTrack: true,
      saveSettings: false
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
    // in case there are more options etc..
    if (localStorage.getItem("gAnalytics")) {
      try {
        this.isAnalyticsTrack = JSON.parse(localStorage.getItem("gAnalytics"));
      } catch (e) {
        localStorage.removeItem("gAnalytics");
      }
    } else {
      this.isAnalyticsTrack = true;
      this.persist();
    }
  },
  methods: {
    track() {
      this.$ga.page("/");
    },
    disableTracking() {
      this.$ga.disable();
      // from now on no more tracking
    },
    enableTracking() {
      this.$ga.enable();
      //from now on you will start tracking
    },
    persist() {
      localStorage.setItem("gAnalytics", this.isAnalyticsTrack);
      if (this.isAnalyticsTrack) {
        this.enableTracking();
      } else {
        this.disableTracking();
      }
      this.saveSettings = !this.saveSettings;
      this.toggleSaveSetting();
    },
    enter: function() {},
    leave: function() {},
    toggleSaveSetting() {
      setTimeout(() => {
        this.saveSettings = false;
      }, 300);
    }
  }
};
</script>

<style>
#app {
}
.fade-enter-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
