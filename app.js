const app = Vue.createApp({
  data() {
    return {
      className: "",
    };
  },
  computed: {
    getClassName() {
      console.log(this.className);
    },
  },
});
app.mount("#assignment");
