import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            username: "",
            receiver: "",
            messages: ""
        }
    },
    mutations: {
        // parameter pertama harus bernama state
        addUsername(state,username){
            state.username = username
        },
        addReceiver(state,receiver){
            state.receiver = receiver
        },
        addMsg(state,msg){
            state.messages = msg
        }
    }
})

var app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')