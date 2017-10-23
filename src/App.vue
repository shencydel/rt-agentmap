<template>
<div id="app">
  <top-nav-bar></top-nav-bar>
  <left-menu></left-menu>
  <div class="main-content-inner">
    <div id="page-wrapper" class="mainContent col-md-12">
      <router-view></router-view>
    </div>
  </div>
</div>
</template>

<script>
import LeftMenu from "./components/public/left-menu"
import TopNavBar from "./components/public/top-nav-bar"
export default {
  components:{LeftMenu, TopNavBar},
  name: 'app',
  methods:{
    meClick() {
      console.log($("#app").html());
    }
  },
  created() {
    console.log($("#app").html());
  }
}
</script>

<style>
#app {
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-content-inner{
  margin:0 0 0 260px;
}
.col-md-2,.col-md-12,.navbar-brand{
  margin:0;
  padding:0;
}
.mainContent{
  margin-top:60px!important;
}

a {
  cursor:pointer;
  text-decoration: none;
}
a:hover{
  text-decoration: none;
}
</style>
