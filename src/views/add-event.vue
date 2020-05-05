<template>
<div>
    <h1>新增代辦事項</h1>
    <h3 class="title">標題</h3>
    <input v-model="event.title" type="text">
    <h3 class="title">日期</h3>
    <input v-model="event.date" type="text">
    <h3 class="title">內容</h3>
    <textarea v-model="event.content" cols="30" rows="10"></textarea>

    <div>
        <button @click="addEventAndBack">提交</button>
    </div>

</div>


</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return {
            event:{
                title:null,
                date:null,
                content:null
            }

        }
    },
    methods:{
        addEventAndBack(){
            this.addEvent(this.event);
            this.backToLastPage();
        },
        backToLastPage(){
            this.$router.go(-1);
        },
        ...mapActions([
            'addEvent'
        ])
    }
}
</script>

<style>
.title{
    margin-bottom: 0;
}
</style>