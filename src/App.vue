<template>
  <div id="app">
    <h1>测试</h1>
    <div v-tap-event="show"> tap测试</div>
    <div v-tap-event:longpress="show2"> tap2测试</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  methods:{
      show(){
          console.log('点击')
      },
      show2(){
        console.log('长按点击')
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
