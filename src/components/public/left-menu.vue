<template>
  <div class="container-fluid col-md-2">
    <div class="row">
      <div class="col-md-12">
        <ul id="main-nav" class="nav nav-tabs nav-stacked">
          <li>
            <a href="#systemSetting" class="nav-header collapsed" data-toggle="collapse">
              <i class="glyphicon glyphicon-cog"></i> 系统配置
              <span class="pull-right glyphicon glyphicon-chevron-toggle"></span>
            </a>
            <ul id="systemSetting" class="nav nav-list collapse secondmenu" style="height: 0px;">
              <li>
                <router-link to="Recording">
                  <i class="glyphicon glyphicon-user"></i> 通用配置
                </router-link>
                </li>
              <li>
                <router-link to="agent-status">
                  <i class="glyphicon glyphicon-credit-card"></i> 模版配置
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i class="glyphicon glyphicon-globe"></i> 坐席工位图配置
            </a>
          </li>
          <li>
            <a href="#">
              <i class="glyphicon glyphicon-calendar"></i> 坐席工位图
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  // import myButton from './components/my-button'
  export default {
    name: 'leftMenu',
  }
</script>

<style scoped>
  .container-fluid {
    min-height: 1000px;
    background-color: gray;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 1000;
  }

  #main-nav {
    margin-left: 1px;
    margin-top: 20px;
  }

  #main-nav.nav-tabs.nav-stacked>li>a {
    padding: 10px 8px;
    font-size: 12px;
    font-weight: 600;
    color: #4A515B;
    background: #E9E9E9;
    background: -moz-linear-gradient(top, #FAFAFA 0%, #E9E9E9 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #FAFAFA), color-stop(100%, #E9E9E9));
    background: -webkit-linear-gradient(top, #FAFAFA 0%, #E9E9E9 100%);
    background: -o-linear-gradient(top, #FAFAFA 0%, #E9E9E9 100%);
    background: -ms-linear-gradient(top, #FAFAFA 0%, #E9E9E9 100%);
    background: linear-gradient(top, #FAFAFA 0%, #E9E9E9 100%);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#E9E9E9');
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#FAFAFA', endColorstr='#E9E9E9')";
    border: 1px solid #D5D5D5;
    border-radius: 4px;
  }

  #main-nav.nav-tabs.nav-stacked>li>a>span {
    color: #4A515B;
  }

  #main-nav.nav-tabs.nav-stacked>li.active>a,
  #main-nav.nav-tabs.nav-stacked>li>a:hover {
    color: #FFF;
    background: #3C4049;
    background: -moz-linear-gradient(top, #4A515B 0%, #3C4049 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #4A515B), color-stop(100%, #3C4049));
    background: -webkit-linear-gradient(top, #4A515B 0%, #3C4049 100%);
    background: -o-linear-gradient(top, #4A515B 0%, #3C4049 100%);
    background: -ms-linear-gradient(top, #4A515B 0%, #3C4049 100%);
    background: linear-gradient(top, #4A515B 0%, #3C4049 100%);
    filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#4A515B', endColorstr='#3C4049');
    -ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#4A515B', endColorstr='#3C4049')";
    border-color: #2B2E33;
  }

  #main-nav.nav-tabs.nav-stacked>li.active>a,
  #main-nav.nav-tabs.nav-stacked>li>a:hover>span {
    color: #FFF;
  }

  #main-nav.nav-tabs.nav-stacked>li {
    margin-bottom: 4px;
  }


  /*定义二级菜单样式*/

  .secondmenu a {
    font-size: 10px;
    color: #4A515B;
    text-align: center;
  }

  .navbar-static-top {
    background-color: #212121;
    margin-bottom: 5px;
  }

  .navbar-brand {
    background: url('') no-repeat 10px 8px;
    display: inline-block;
    vertical-align: middle;
    padding-left: 50px;
    color: #fff;
  }


  /* 控制二级菜单箭头 */

  .nav-header.collapsed>span.glyphicon-chevron-toggle:before {
    content: "\e114";
  }

  .nav-header>span.glyphicon-chevron-toggle:before {
    content: "\e113";
  }


  /* 二级菜单选中样式 */

  .secondmenu a {
    font-size: 12px;
    color: #4A515B;
    text-align: center;
  }

  .secondmenu li.active {
    background-color: #eee;
    border-color: #428bca;
  }


  /* 主内容区域 */

  .main-body {
    margin-top: 20px;
  }

  .breadcrumb {
    margin-bottom: 0px;
    padding: 0px 10px;
  }

  .pagination {
    margin: 0 auto;
  }

  .content-footer {
    font-size: 15px;
    text-align: center;
  }

  .nav-tabs {
    border-bottom: none;
  }
</style>
