<template>
  <select v-model="currentLocale">
    <option v-for="locale in locales" v-bind:value="locale.id">{{
      locale.name
    }}</option>
  </select>
</template>
<script>
export default {
  name: "lang-switch",
  props: ["locales"],
  data() {
    return {
      currentLocale: ""
    };
  }
};
</script>
