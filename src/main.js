import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//Tailwind Config
import './styles.css'
// Firebase Config
import {initializeApp} from "firebase/app";
import { getAuth } from'firebase/auth';

  
const firebaseConfig = {
    apiKey: "AIzaSyD3DnK5HI8McKcTLPKNbdokji7PnAXSY6s",
    authDomain: "vue-starter-68409.firebaseapp.com",
    projectId: "vue-starter-68409",
    storageBucket: "vue-starter-68409.appspot.com",
    messagingSenderId: "350324555521",
    appId: "1:350324555521:web:cf1f33fbec42c6908e6500"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createApp(App).use(router).mount('#app')


