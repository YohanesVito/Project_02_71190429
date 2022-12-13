<template>
  <div class="login">
    <input type="text" v-model="username" placeholder="username" />
    <br>
    <button @click="login()">Masuk</button>
  </div>
</template>

<script>
// import firebase from "../firebaseInit";
// import * as firestore from "firebase/firestore";

// const db = firestore.getFirestore(firebase);

export default {
  name: "App",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    login() {
      this.$store.commit("addUsername", this.username);
      this.$router.push('/chat')
    },
  },
};
</script>
