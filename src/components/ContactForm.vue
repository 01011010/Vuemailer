<template>
  <div>
    <p>
      <!--
        <strong>Kérjük, töltse ki</strong> az űrlapot és mi 24 órán belül
        felvesszük Önnel a kapcsolatot!
      -->
    </p>
    <form
      id="contact"
      method="POST"
      v-if="!isSubmitted"
      @submit.prevent="submit"
    >
    <!--   
    @submit="checkForm"
      novalidate="true"
    -->
      <div class="fields">
        <div class="field third">
          <input type="text" placeholder="Név" v-model.lazy.trim="form.name" />
        </div>
        <div class="field third">
          <input
            type="email"
            placeholder="Email"
            v-model.lazy.trim="form.email"
          />
        </div>
        <div class="field third">
          <input
            type="tel"
            placeholder="Telefon"
            v-model.lazy.trim="form.tel"
          />
        </div>
        <div class="field">
          <textarea
            placeholder="Üzenet"
            rows="7"
            v-model.lazy.trim="form.message"
          ></textarea>
        </div>
      </div>  
      <p v-if="errors2.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors2">{{ error }}</li>
        </ul>
      </p>
      <div class="alert alert-danger" v-if="isError">
        <p class="mb-0">
          <strong>{{ errorHeader }}</strong>
        </p>
        <ul v-if="errors.length > 0">
          <li v-for="error in errors" v-bind:key="error.field">
            <span v-if="error.field"
              >{{ error.field }}
              <span v-if="error.message">: {{ error.message }}</span>
            </span>
            <span v-else-if="error.message">{{ error.message }}</span>
          </li>
        </ul>
      </div>
      <div id="response-msg">{{ info }}</div>
      <vue-recaptcha
        ref="invisibleRecaptcha"
        @verify="onVerify"
        @expired="onExpired"
        size="invisible"
        :sitekey="sitekey">
      </vue-recaptcha>
      <ul class="actions">
        <li>
          <input
            type="submit"
            value="Küldés"
            class="button primary"
            :disabled="submitting"
          />
        </li>
      </ul>
    </form>
    <div v-else>
      <div class="alert alert-success">
        <strong>{{ form.submitted }}</strong>
      </div>
      <div class="alert alert-info">
        <p>
          <strong>{{ form.sentInfo }}</strong>
        </p>
        <pre>
            {{form}}
        </pre>
      </div>
      <p class="text-center">
        <a href="#" class="btn btn-secondary" @click.prevent="reload();">{{
          form.return
        }}</a>
      </p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VueRecaptcha from 'vue-recaptcha';

export default {
  name: "contact-form",
  components: { VueRecaptcha },
  data() {
    return {
      isSubmitted: false,
      submitting: false,
      isError: false,
      errors: [],
      errors2: [],
      form: {
        name: "",
        email: "",
        tel: "",
        message: "",
        submitted: "The form is submitted!",
        sentInfo: "Here is the info you sent:",
        return: "Return to the form",
      },
      info: "",
      error: {
        invalidFields: "Following fields have an invalid or a missing value:",
        general: "An error happened during submit.",
        generalMessage:
          "Form sending failed due to technical problems. Try again later."
      },
      errorHeader: "We have a problem...",
      sitekey: '6LcksYgUAAAAAN9-iUVD44Qil5pxhJkbeT8hFnQH',
      status: "",
      sucessfulServerResponse: "",
      serverError: ""
    };
  },

  mounted() {},

  methods: {
    //Google re-captcha methods
    onSubmit: function () {
      this.$refs.invisibleRecaptcha.execute()
    },
    onVerify: function (response) {
      console.log('Verify: ' + response)
    },
    onExpired: function () {
      console.log('Expired')
    },
    resetRecaptcha () {
      this.$refs.recaptcha.reset() // Direct call reset method
    },
    checkForm: function(event) {
      this.errors2 = [];

      if (!this.form.name) {
        this.errors2.push("Name required");
      }

      if (!this.form.email) {
        this.errors2.push("Email required");
      } else if (!this.validEmail(this.form.email)) {
        this.errors2.push("Valid email required");
      }

      if(!this.form.message) {
        this.errors2.push("Message box is empty");
      }

      if (!this.errors2.length) {
        
        return true;
      }

      event.preventDefault();
    },
    validEmail: function(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    reload: function() {
      //window.location = ""; or // reset the variables manually
      this.submitting = false;
      this.isSubmitted = false;
      this.isError = false;
    },
    submit: function() {
      this.checkForm();
      this.onSubmit();
      this.submitting = true;

      axios
        .post("https://www.mocky.io/v2/5ade0bf2300000272b4b29b9", this.form)
        .then(response => {
          //this.info = response; // display it in the page right now
          console.log("here we are posting" + this.form);
          this.submitSuccess(response);
        })
        .catch(error => {
          this.submitError(error);
        });
    },
    isNotSubmitting: function() {
      this.submitting = false;
    },
    submitSuccess: function(response) {
      console.log("are we here" + response.data.success);
      this.isNotSubmitting();
      if (response.data.success) {
        console.log("submit cusscess response has data coming back");
        this.isSubmitted = true;
        this.isError = false;
      } else {
        this.errors = response.data.errors;
        this.isError = true;
      }
    },
    submitError: function(error) {
      this.isNotSubmitting();
      this.errorHeader = this.error.general;
      this.errors = [{ field: null, message: this.error.generalMessage }];
      this.isError = true;
    }
  },
  watch: {
    errors() {
      this.isError = this.errors.length > 0 ? true : false;
    }
  }
};
</script>
