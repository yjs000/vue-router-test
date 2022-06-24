<template>

  <div id="nav">
    <router-link to="/">Home</router-link> | 
    <router-link to="/brazil">Brazil</router-link> | 
  </div>
  

  <div class="container">
    <router-view></router-view>  
  </div>
</template>

<script>
//a태그는 전체 페이지를 새로고침함
//router는 부분만 새로고침함
export default {
  name: 'App',
}
</script>
