<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <router-link to="/">Home</router-link> | 
  <router-link to="/about">About</router-link> | 

  <a href="/">Home</a> | 
  <a href="/about">About</a>
  
  <router-view></router-view>
</template>

<script>
//a태그는 전체 페이지를 새로고침함
//router는 부분만 새로고침함
export default {
  name: 'App',
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
