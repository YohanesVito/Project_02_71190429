<template>
  <aside>
    <div id="pesan-terakhir">
      <h2>Pesan Terakhir</h2>
      <router-link to="/" @click="logout()">
        <img src="../assets/logout.png" />
      </router-link>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div id="kirim-pesan">
      <h2>Kirim Pesan Ke:</h2>
      <input
        @keyup.enter="enterListener"
        type="text"
        v-model="receiver"
        placeholder="username teman..."
      />
    </div>
  </aside>
  <h2>@{{ receiver }}</h2>
  <input type="text" v-model="msg" placeholder="ketik pesan..." />
  <button @click="kirim()">Kirim</button>
  <button @click="enterListener()">Refresh</button>
    <div id="pesan" v-for="chat in this.response" :key="chat">
    <p>
      {{chat.msg}}
    </p>
    </div>
</template>

<script>
import firebase from "../firebaseInit";
import * as firestore from "firebase/firestore";

const db = firestore.getFirestore(firebase);

export default {
  name: "App",
  data() {
    return {
      sender: this.$store.state.username,
      receiver: "",
      msg: "",
      response: [],
    };
  },
  methods: {
    kirim() {
      this.$store.commit("addReceiver", this.receiver);

      var mSender = this.$store.state.username;
      var mReceiver = this.$store.state.receiver;
      var mMsg = this.msg;
      firestore.addDoc(firestore.collection(db, "user"), {
        sender: mSender,
        receiver: mReceiver,
        msg: mMsg,
      });
      this.response = [];
      this.getPesan();
    },
    async getPesan() {
      var mSender = this.sender;
      var mReceiver = this.receiver;

      const querySnapshot = await firestore.getDocs(
        firestore.collection(db, "user")
      );
      querySnapshot.forEach((doc) => {
        if (
          doc.data().sender === mSender &&
          doc.data().receiver === mReceiver
        ) {
          this.response.push(doc.data());
        }
      });
    },
    logout() {
      this.$store.commit("logout");
    },
    enterListener() {
      this.response = [];
      this.getPesan();
    },
  },
};
</script>

<style>
#pesan-terakhir h2 {
  float: left;
}
#pesan-terakhir img {
  float: right;
}
#kirim-pesan h2 {
  float: none;
}
#kirim-pesan input {
  width: 200px;
  height: 50px;
  font-size: 20px;
}

#pesan{
  background: chartreuse;
  width: 800px;
  float: right;
  height: 100px;
  margin-bottom: 100px;
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