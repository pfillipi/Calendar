import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueTextareaAutosize from 'vue-textarea-autosize';
import firebase from 'firebase/app';
import 'firebase/firestore';



Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyC00qMRp0-KTFAvQldhiqm8iLxDfA0h348",
  authDomain: "vue-calendar-71cf9.firebaseapp.com",
  databaseURL: "https://vue-calendar-71cf9-default-rtdb.firebaseio.com",
  projectId: "vue-calendar-71cf9",
  storageBucket: "vue-calendar-71cf9.appspot.com",
  messagingSenderId: "1067025068815",
  appId: "1:1067025068815:web:183ea451bd17d38f24447a",
  measurementId: "G-9SZZQ137Y1"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
