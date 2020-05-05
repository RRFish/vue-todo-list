import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todoList:{
      title:"待辦事項頁面",
      events:[]
    },
    showEvent:{
      currentEvent:{}
    }
  },
  mutations: {
    setEvents(state,events){
      state.todoList.events=events;
    },
    setCurrentEvent(state,event){
      state.showEvent=event;
    }
  },
  actions: {
    getAndSetEvents({commit}){
      axios.get('http://localhost:3000/events')
      .then((res)=>{
        console.log(res.data)
        commit('setEvents',res.data);
      })
      .catch((error)=>{
        console.error(error);
      })
    },
    addEvent({state,dispatch},event){
      const length = state.todoList.events.length-1;
      const id = state.todoList.events[length].id+1;
      const  postEvent={
        id:id,
        ...event
      }
      console.log(postEvent)
      
      axios.post('http://localhost:3000/events',postEvent)
      .then(()=>{
        console.log("add success")
        dispatch('getAndSetEvents');
      })
      .catch((error)=>{
        console.log(error)
      })
    },
    removeEvent({state,dispatch},id){
      console.log(state)
      axios.delete('http://localhost:3000/events/'+id)
      .then((res)=>{
        dispatch('getAndSetEvents');
        console.log(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    }

  }
})

