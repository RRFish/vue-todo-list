<template>

    <div>
        <h1>標題:{{events[eventIndex].title}}</h1>
        <h3>日期:{{events[eventIndex].date}}</h3>
        <p>內容:</p>
        <div class="content">{{events[eventIndex].content}}</div>
        <div class="btn">
            <button @click="removeEventAndBack">移除此事件</button>
            <button @click="backToLastPage">返回</button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    created(){
        const index = window.location.hash.substr(1);
        this.eventIndex = index;
    },
    data(){
        return {
            eventIndex:0
        }
    },
    computed:{
        ...mapState({
            events:(state)=>{
                return state.todoList.events;
            }}
        )
    },
    methods:{
        removeEventAndBack(){
            this.removeEvent(this.showEvent.id);
            this.backToLastPage();
        },
        backToLastPage(){
            this.$router.go(-1);
        },
        ...mapActions([
            'removeEvent'
        ])
    }
}
</script>

<style>
.content{
    background: rgba(44,44,44,0.1);
    display: inline-flex;
}
.btn{
    margin-top: 10%;
}
.btn button{
    margin: 5px;
    border-radius: 10px;
}
</style>