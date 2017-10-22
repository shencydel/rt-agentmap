<template>
  <nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container-fluid">
      <div class="navbar-left">
        <a class="navbar-brand" href="#">
          {{logo}}
        </a>
      </div>
      <div id="sideSwitch" class="topSwitch">
        <a><span class="fa fa-bars icon topIcon"></span></a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <form class="navbar-form navbar-right right-nav">
          <ul class="user-login">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle user-login-color" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                <span class="glyphicon glyphicon-user"></span> user
                <span class="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a href="#">LogOut</a>
                </li>
                <li>
                  <a href="#">ChangeUser</a>
                </li>
              </ul>
            </li>
          </ul>
        </form>
      </div>
      <!-- /.navbar-collapse -->
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'topNavBar',
    data() { //function data() {return {}}
      return {
        logo: 'AgentMap'
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  /* 顶部nav样式简单修改 */

  .navbar-left {
    margin-left: 75px;
    width:150px;
    height:50px;
  }

  .left-nav {
    margin-left: 150px;
  }

  .mouse-over-active:hover {
    background-color: #3F3C3C;
  }

  .right-nav {
    width: 450px;
  }

  .right-search {
    float: left
  }

  .user-login {
    float: right;
    margin-top: 8px;
    margin-right: 30px;
  }

  .user-login-color {
    color: #9d9d9d
  }

  .user-login-color:focus,
  .user-login-color:hover {
    color: white;
    text-decoration: none;
  }

  .topSwitch {
    display: inline-block;
    float:left;
    margin-top:16px;
    margin-left:20px;
    font-size: 18px;
  }
  .topIcon{
    color:#9d9d9d;
  }
  .topIcon:hover{
    color:white;
  }

</style>
