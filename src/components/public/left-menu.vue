<template>
 <nav class="navbar-default navbar-side" role="navigation" style="left: 0px;z-index:2;width:260px;">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
                    <li class="nav-header collapsed leftMenuRecoding " data-toggle="collapse" data-target=".dashboard-menu" aria-expanded="false">
                      <router-link to="list">
                            <i class="fa fa-sitemap" style="margin-left:8px;padding-right:20px"></i>  录音播放<!-- <i class="fa fa-bars icon"></i> -->
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
</template>

<script>
  // import myButton from './components/my-button'
  export default {
    name: 'leftMenu',
  }
</script>

<style scoped>
 .navbar-default{
    background-color:#3E3E3E;
    min-height: 1000px;
    position: fixed;
    margin-top:60px;
  }
  .leftMenuRecoding{
    color:#B8B8B8;
    height: 54px;
    line-height: 34px;
    font-size:16px;
    text-align: left;
  }
  a{
    text-decoration: none;
            color: #F36A5A !important;

  }
  a:hover{
    background-color:#6b6868!important;
    color:#F36A5A;
  }
  .router-link-active{
        background-color: #EDEDED !important;
        color: #F36A5A !important;
  }
</style>
