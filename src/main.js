import Vue from 'vue'
import App from './App.vue'
import { tap} from 'event-tap';
Vue.config.productionTip = false
Vue.prototype.tap = tap;
Vue.directive('tap-event', {
    bind:function(el, binding){
      const opts = {
        dom: el,
        type: binding.arg || 'click',
        callback: binding.value,
        isRemoveEle: false
      }
      tap(opts)
    }
  })
new Vue({
  render: h => h(App),
}).$mount('#app')
