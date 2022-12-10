<template>
  <nav>
    <!-- <router-link to="/">Home</router-link> -->
    <router-link 
      v-for="item in lists" 
      :key="item.to" 
      :to="item.to" 
      class="nav_links">
      {{ item.title }}
    </router-link>
    <button class="nav_btn" @click="$emit('open-login-modal')">Login</button>
    <button class="nav_btn" @click="logOut">Logout</button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        { title: "Home", to: "/" },
        { title: "Dc Heros", to: "/dcheroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
        { title: "Calculator", to: "/calculator" },
        { title: "Modal", to: "/reusablemodal" },
        { title: "UserCrud", to: "/user-crud" },
      ],
    };
  },
  methods:{
    logOut(){
      firebase.auth().signOut()
      //.then((res)=> {}).catch((e)=>{});
    }
  }
};
</script>

  <AppHeader @open-login-modal="isLoginOpen = true" />
<style scoped>
nav {
  background: green;
  padding: 10px 10px;
  color: #fff;
  font-size: 20px;
  font-family: 'Times New Roman', Times, serif;
}
.nav_links{
  margin:0 15px;
  text-decoration: none;
  color:#fff;
}
.nav_links:hover{
  color: #b6b5b5
}
.nav_btn{
  background: none;
  color: #fff;
  font-size: 20px;
  font-family:'Times New Roman', Times, serif ;
  border: none;
  margin: 0 15px;
}
.nav_btn:hover{
  color: #b6b5b5;
}
</style>
