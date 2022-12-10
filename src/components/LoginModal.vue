<template>
  <div>
    <section class="bg" @click="$emit('close-login')">
    </section>
    
    <div class="modal">
      <div class="modal_sub">
        <div class="sub_modal">
        <div class="modal_content">
        <h3 class="header">Login</h3>
        <form class="modal_form" @submit.prevent="submit">
          <div class="modal_fill">
            <label for="Email">Email or Username</label>
            <input type="text" class="modal_input" placeholder="Enter your email or username"
            v-model="form.email">
          </div>
          <div class="modal_fill">
            <label for="pass">Password</label>
            <input type="password" class="modal_input" placeholder="Enter your password"
            v-model="form.password">
          </div>
          <div class="modal_fill">
            <button type="submit" class="modal_btn">Login</button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from '../utilities/firebase'
export default {
  data(){
    return{
      form:{
        email: "",
        password: ""
      }
    }
  },
  methods:{
    submit(){
       firebase.auth().signInWithEmailAndPassword(auth, this.form.email, this.form.password).then(res => {
         console.log(res)
       })
       .catch(e =>{
         console.log(e)
       })
     }
   }
}
</script>
<style scoped>
.bg{
  height: 100vh;
  width: 100vw;
  position: fixed;
  background-color: #d1c8c8e7;
  top: 0; 
  z-index: 20;
}
.header{
  text-align: center;
  font-size: 2em;
}
.modal{
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
}
.modal_sub{
  display: flex;
  height: 100%;
}
.sub_modal{
  margin: auto;
  background: #fff;
  padding: 12px;
  border-radius: 10px;
  z-index: 30;
  width:350px;
}
.modal_form{
  margin: 10px 0;
}
.modal_fill{
  margin: 14px 0;
  padding: 0 px;
}
.modal_content{
  padding: 10px;
  border: 1px solid #000;
}
.modal_input{
  border-radius: 5px;
  padding: 6px;
  width: 300px;
  border: 1px solid #000;
}
.modal_btn{ 
  width: 300px;
  border-radius: 10px;
  border: none;
  background: #be1632;
  padding: 10px;
  color: #fff;
   
}
</style>
