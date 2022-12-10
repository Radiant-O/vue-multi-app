<template>
  <div class="all">
    <transition name="fade">
      <section v-if="currentSlide === 0" class="blue"></section>
    </transition>
    <transition name="fade">
      <section v-if="currentSlide === 1" class="yellow"></section>
    </transition>
    <transition name="fade">
      <section v-if="currentSlide === 2" class="teal"></section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentSlide: 1,
      interval: "",
      index: [0, 1, 2]
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.currentSlide = this.currentSlide === 2 ? 0 : this.currentSlide + 1;
      // if(this.currentSlide===2){
      //     this.currentSlide = 0
      // }else{
      //     this.currentSlide++
      // }
    }, 2000);
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
};
</script>

<style scoped>
.all {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative; 
}
.blue {
  position: absolute;
  width: 100%;
  background-color: #154cff;
  height: 350px;
}
.yellow {
  position: absolute;
  width: 100%;
  background-color: #eeff00; 
  height: 350px;
}
.teal {
  position: absolute;
  width: 100%;
  background-color: #008080;
  height: 350px;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}
.fade-enter-from{
  opacity: 0;
  transform: translateX(-100%);

}
.fade-leave-to{
  opacity: 0;
  transform: translateX(100%);
}
</style>
