import Vue from 'vue'
import App from './App.vue'
import tap from 'event-tap';
Vue.config.productionTip = false
Vue.prototype.tap = tap;
Vue.directive('tap-event', {
      bind:function(el, binding){
        console.log(binding)
        const opts = {
            dom: el,
            callback: binding.value,
      }
      const bindEle =  tap(opts)
      const { modifiers } = binding
      if(modifiers && modifiers.remove){
            bindEle.removeEvent()
      }
    }
})
new Vue({
  render: h => h(App),
}).$mount('#app')
