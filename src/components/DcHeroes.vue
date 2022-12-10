<template>
  <div class="dc-heros">
    <div class="hero">
      <h1 class="title">Dc Heros {{ totalHeroes }}</h1>
      <ul class="dc_lists">
        <li v-for="(hero, index) in dcHeroes" :key="hero.name" class="lists">
          <span>
            {{ hero.name }}
          </span>
          <button @click="removeHero(index)" class="rev_btn">X</button>
        </li>
      </ul>
      <!-- Working on v-bind -->
      <!-- <input type="text" v-model="newHero">
  
  <button :disabled="isDisabled">Add Hero</button> 

  <button @click="newHero = 'Wonder Woman'"> Add </button> -->

      <form @submit.prevent>
        <input type="text" v-model="newHero" class="border p-2 rounded-md mr-1"/>
        <button @click="addHero" class="border rounded md p-1 bg-green-400">Add Hero</button>
      </form>
      <p>TotalHeroes is : {{ totalHeroes }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dcheroes",
  data() {
    return {
      isDisabled: false,
      newHero: "",
      dcHeroes: [
        { name: "Superman" },
        { name: "Flash" },
        { name: "Batman" },
        { name: "SuperGirl" },
        { name: "Arrow" },
      ],
    };
  },
  methods: {
    addHero() {
      if (this.newHero !== "") {
        this.dcHeroes.push({ name: this.newHero });
        this.newHero = "";
      }
    },
    removeHero(index) {
      this.dcHeroes = this.dcHeroes.filter((hero, i) => i !== index);
    },
  },
  computed: {
    totalHeroes() {
      return this.dcHeroes.length;
    },
  },
};
</script>

<style scoped>
.dc-heros {
  margin: auto;
  width: max-content;
}
.title {
  font-size: 3em;
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: center;
}
.dc_lists {
  font-size: 20px;
  list-style: none;
}
.lists {
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 10px;
}
</style>
