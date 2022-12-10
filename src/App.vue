<template>
  
  <AppHeader @open-login-modal="isLoginOpen = true" />
  <div class="routers">
    <router-view />
  </div>
 
  <LoginModal v-if="isLoginOpen" @close-login="isLoginOpen=false" />
  
  
</template>

<script>

import AppHeader from './components/AppHeader.vue';
import LoginModal from './components/LoginModal.vue';
// import { onAuthStateChanged } from '@firebase/auth';

export default {
  data(){
      return{
        isLoginOpen : false,
        isLoggedIn: false
      }
        
    },
    // mounted(){
    //   onAuthStateChanged((auth, user) => {
    //   if(user){
    //     this.isLoggedIn = true;
    //     this.authUser = user;
    //   }else{
    //     this.isLoggedIn = false;
    //     this.authUser = {}
    //   }
    //   })
    // },
   
    components: { AppHeader, LoginModal }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.routers{
  width: 100vw;
  display: flex;
}
</style>
