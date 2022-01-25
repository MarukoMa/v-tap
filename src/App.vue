<template>
  <div id="app">
    <h1>测试</h1>
    <div v-tap-event="tapFun">绑定tap事件</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
    }
  },
  components: {
  },
  methods:{
      tapFun(){
          console.log('绑定tap事件')
      },
      removeFun(){
        console.log('移除tap事件')
      }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
