
import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

const store = createStore({
    state() {
        return {
            username: "",
            receiver: "",
            messages: "",
            response: []
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
        },
        addResponse(state,response){
            state.response.push(response)
        },
        logout(state){
            state.username = "",
            state.receiver = "",
            state.messages = "",
            state.response = []
        }
    }
})

var app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')