<template>
  <div class="cal">
    <h1 class="title">Vue Calendar</h1>
    <section class="c mth_yr">
      <p class="month">{{ currentMonthName }}</p>
      <p class="year">{{ currentYear }}</p>
    </section>
    <section class="c">
      <p class="cal_days" v-for="day in days" :key="day">{{ day }}</p>
    </section>
    <section class="c">
      <p class="day_date" v-for="num in startDay()" :key="num"></p>
      <p
        class="day_date"
        v-for="num in daysInMonth()"
        :key="num"
        :class="getDateStyle()"
      >
        {{ num }}
      </p>
    </section>
    <section class="footer c">
      <button class="btn" @click="prev">Prev</button>
      <button class="btn" @click="next">Next</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
      
      days: ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"],
      style: {
        color: "red",
      },
    };
  },
  methods: {
    daysInMonth() {
      //    const month = new Date().getMonth()+1
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();   
    },

    startDay() {
      
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },
    next() {
      if (this.currentMonth === 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    getDateStyle(num) {
      const calendarMonth = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toString();
      const currentFullDate = new Date().toDateString();
      return calendarMonth === currentFullDate ? this.style : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth).toLocaleString(
        "default",
        { month: "long" }
      );
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  margin: 20px 0 10px;
}
.cal {
  margin: auto;
  width: 45%;
  height: max-content;
}
.c {
  display: flex;
  flex-wrap: wrap;
}
.cal_days {
  width: 14.08%;
  text-align: center;
  padding: 10px 0 10px;
}
.day_date {
  width: 14.08%;
  text-align: center;
  padding: 10px 0 2px;
}
.mth_yr {
  justify-content: space-between;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-weight: bold;
}
.footer {
  justify-content: space-between;
}
.btn {
  border: 0.3px solid #000;
  padding: 5px 10px;
  background: #fff;
  cursor: pointer;
  border-radius: 5px;
}
.datecolor {
  color: green;
  font-size: bold;
}
</style>
