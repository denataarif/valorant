module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/vue3-recommended", // Menggunakan aturan Vue 3
    "eslint:recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    "vue/multi-word-component-names": "off", // Aturan untuk nama komponen multi-kata
  },
};
