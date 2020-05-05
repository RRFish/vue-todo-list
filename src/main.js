import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {mapActions} from 'vuex'

Vue.config.productionTip = false

window.app=new Vue({
  router,
  store,
  methods:{
    ...mapActions([
        'getAndSetEvents'
    ])
  },
  created(){
      this.getAndSetEvents();
  },  
  render: h => h(App)
}).$mount('#app')
