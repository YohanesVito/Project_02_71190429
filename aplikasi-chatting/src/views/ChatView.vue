<template>
  <aside>
    <div id="pesan-terakhir">
      <h2>Pesan Terakhir:</h2>
      <router-link to="/">
        <img src="../assets/logout.png" />
      </router-link>
    </div>

    <h2>Kirim Pesan Ke:</h2>
    <input type="text" v-model="receiver" placeholder="username teman..." />
  </aside>
  <input type="text" v-model="msg" placeholder="ketik pesan..." />
  <button @click="kirim()">Kirim</button>
</template>

<script>
import firebase from "../firebaseInit";
import * as firestore from "firebase/firestore";

const db = firestore.getFirestore(firebase);

export default {
  name: "App",
  data() {
    return {
      receiver: "",
      msg: "",
    };
  },
  methods: {
    kirim() {
        this.$store.commit("addReceiver",this.receiver);
        this.$store.commit("addMsg",this.msg);

        console.log("AWFAWFA",this.msg)
        var mSender = this.$store.state.username
        var mReceiver  = this.$store.state.receiver
        var mMsg = this.msg
      firestore.addDoc(firestore.collection(db, "user"), {
        sender: mSender,
        receiver: mReceiver,
        msg: mMsg
      });
    
    },
  },
};
</script>

<style>
#pesan-terakhir img {
  float: left;
}
aside {
  padding: 30px;
  text-align: left;
  height: 100%;
  width: 300px;
  position: absolute;
  left: 0;
  top: 0;
  padding-top: 40px;
  background-color: cadetblue;
}

aside a {
  font-weight: bold;
  color: white;
  text-decoration: none;
}

aside a.router-link-exact-active {
  text-decoration: underline;
}
</style>