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

export default {
  name: "contact-form",

  data() {
    return {
      isSubmitted: false,
      submitting: false,
      isError: true,
      errors: [],
      form: {
        name: "",
        email: "",
        tel: "",
        message: "",
        submitted: "The form is submitted!",
        sentInfo: "Here is the info you sent:",
        return: "Return to the form"
      },
      info: "",
      error: {
        invalidFields: "Following fields have an invalid or a missing value:",
        general: "An error happened during submit.",
        generalMessage:
          "Form sending failed due to technical problems. Try again later."
      },
      errorHeader: "error.invalidFields"
    };
  },

  mounted() {},

  methods: {
    reload: function() {
      //window.location = "";
      this.submitting = false;
      this.isSubmitted = false;
      this.isError = false;
    },
    submit: function() {
      this.submitting = true;

      axios
        .post("https://www.mocky.io/v2/5adb5a8c2900002b003e3df1", this.form)
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
