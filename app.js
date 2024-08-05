const app = Vue.createApp({
  data() {
    return {
      userName: "",
      visible: true,
      hidden: false,
    };
  },

  methods: {
    toggleClass() {
      this.visible = !this.visible;
      this.hidden = !this.hidden;
      console.log(this.visible, this.hidden);
    },
  },
  computed: {
    userClasses() {
      if (this.userName === "user1") {
        return { user1: true };
      } else if (this.userName === "user2") {
        return { user2: true };
      }
    },
    addClasses() {
      return { visible: this.visible, hidden: this.hidden };
    },
  },
});
app.mount("#assignment");
