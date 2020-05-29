<template>
    <!-- <router-link to="/events" tag="button"> -->
    <button @click="showEvent">
        <div class="card" @click="setCurrentEvent(event)">
            <div>
                <span>標題:{{event.title}}</span> |
                <span>日期:{{event.date}}</span> 
            </div>
            <div>
                <span>內容:{{fixContent}}</span>
            </div>
        </div>
    </button>

    <!-- </router-link> -->

</template>

<script> 
import {mapMutations} from 'vuex'
export default {
    created(){
        console.log(this.$router)
        console.log(this.index)
    },
    props:{
        event:{
            type:Object,
            required:true
        },
        index:{
            type:Number,
            required:true
        }
    },
    methods:{
        showEvent(){
            this.$router.push({ path: `/events#${this.index}` })
        },
        ...mapMutations([
            'setCurrentEvent'
        ])
    },
    computed:{
        fixContent(){
            if(this.event.content.length>15){
                return this.event.content.substr(0,15)+"...";
            }else{
                return this.event.content;
            }
        }
    }
}
</script>

<style scoped>
.card{
    border-radius: 10px;
    font-weight: 100;
}


</style>