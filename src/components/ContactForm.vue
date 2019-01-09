<template>
  <div>
    <p>
      <strong>Kérjük, töltse ki</strong> az űrlapot és mi 24 órán belül
      felvesszük Önnel a kapcsolatot!
    </p>
    <form
      id="contact"
      method="POST"
      v-if="!isSubmitted"
      @submit.prevent="submit"
    >
      <div class="fields">
        <div class="field third">
          <input type="text" placeholder="Név" v-model="name" />
        </div>
        <div class="field third">
          <input type="email" placeholder="Email" v-model="email" />
        </div>
        <div class="field third">
          <input type="tel" placeholder="Telefon" v-model="tel" />
        </div>
        <div class="field">
          <textarea placeholder="Üzenet" rows="7" v-model="message"></textarea>
        </div>
      </div>
      <div id="response-msg">{{ info }}</div>
      <ul class="actions">
        <li><input type="submit" value="Küldés" class="button primary" /></li>
      </ul>
    </form>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "contact-form",

  data() {
    return {
      isSubmitted: false,
      name: "",
      email: "",
      tel: "",
      message: "",
      info: ""
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response));
  }
};
</script>
