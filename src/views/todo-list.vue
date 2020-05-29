<template>
    <div>
        <h1>{{$store.state.todoList.title}}</h1>
        <div class="list">
            <todoEvent v-for="(event,index) in events" v-bind:key="'event'+index" :event="event" :index="index"></todoEvent>
        </div>
    </div>

</template>

<script>
import todoEvent from "@/components/todo-event.vue"
import {mapState} from 'vuex'



export default {
    components:{
        todoEvent
    },
    computed:{
        ...mapState({
            events:(state)=>{
                return state.todoList.events;
            }
        })
    }

}
</script>

<style>
    .list{
        display: inline-flex;
        flex-direction: column;
    }
    .list button{
        margin:5px;
        border-radius: 10px;
    }
    .list button:hover{
        cursor: pointer;
    }
</style>