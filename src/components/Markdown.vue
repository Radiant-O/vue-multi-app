<template>
  <div class="all">
    <h1 class="title">Markdown App</h1>
    <section class="main">
      <article class="mark_left m">
        <textarea class="right_text" :value="text" @input="updateText"></textarea>
      </article>
      <article class="mark_right m" v-html="markedText"></article>
    </section>
  </div>
</template>

<script>
import { marked } from "marked"
export default {
  data() {
    return {
      text: "",
      timeout: "",
    };
  },
  computed:{
    markedText(){
      return marked(this.text)
    }
  },
  methods:{
    updateText(e){
     const task = () => (
      this.text = e.target.value);
      this.debounce(task)
    },
    debounce(func, wait =1000){
      clearTimeout(this.timeout)
      this.timeout = setTimeout(func, wait);
    }
  }
};
</script>

<style scoped>
.all{
  width: 100vw;
  margin: auto;
}
.title {
  text-align: center;
  margin: 20px 0 10px;
}
.main {
  display: flex; 
  width: 80%;
  margin: auto;
  height: 80vh;
} 
.m {
  width: 50%;
  border: none;
}
.mark_right {
  background: rgb(199, 197, 197);
}
.right_text {
  width:100%;
  height: 100%;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
} 
</style>
