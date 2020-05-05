import Vue from 'vue'
import VueRouter from 'vue-router'
import todoList from '../views/todo-list.vue'
import showEvent from '../views/show-event.vue'
import addEvent from  '../views/add-event.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'todo-list',
    component: todoList
  },
  {
    path:'/events',
    name:'show-event',
    component:showEvent
  },
  {
    path:'/add-event',
    name:'add-event',
    component:addEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
