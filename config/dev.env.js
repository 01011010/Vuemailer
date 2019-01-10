"use strict";
const merge = require("webpack-merge");
const prodEnv = require("./prod.env");

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  FORM_API_SUCCESS: '"https://www.mocky.io/v2/5adb5a8c2900002b003e3df1"',
  FORM_API_ERROR: '"https://www.mocky.io/v2/5ade0bf2300000272b4b29b9"'
});
