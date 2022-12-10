import { createRouter, createWebHistory } from 'vue-router'
import DcHeros from '@/components/DcHeroes.vue'
import Calendar from '@/components/Calendar.vue'
import Home from '@/components/Home.vue'
import Markdown from '@/components/Markdown.vue'
import Slider from '@/components/Slider.vue'
import Calculator from '@/components/Calculator.vue'
import ReusableModal from '@/components/ReusableModal.vue'
import UserCrud from '@/components/UserCrud.vue'


const routes = [
    {
    path: '/',
     name: 'Home',
     component: Home
   },
    {
    path: '/dcheroes',
     name: 'dcheroes',
     component: DcHeros
   },
    {
    path: '/calendar',
     name: 'calendar',
     component: Calendar
   },
    {
    path: '/markdown',
     name: 'markdown',
     component: Markdown
   },
    {
    path: '/slider',
     name: 'slider',
     component: Slider
   },
    {
    path: '/calculator',
     name: 'calculator',
     component: Calculator
   },
    {
    path: '/reusablemodal',
     name: 'reusablemodal',
     component: ReusableModal
   },
    {
    path: '/user-crud',
     name: 'usercrud',
     component: UserCrud
   },
   
 ]

 const router = createRouter({
   history: createWebHistory(process.env.BASE_URL),
   routes
 })

 export default router
