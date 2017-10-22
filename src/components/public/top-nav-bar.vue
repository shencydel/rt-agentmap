<template>
  <nav class="navbar navbar-default top-navbar" role="navigation">
    <div class="navbar-header col-md-3">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a href=""class='navbar-brand' activeClass="navbar-brand">
            <strong class="logo col-md-3">
              <i class="icon fa fa-globe"></i>  AGENT MAP
            </strong>
        </a>
        <a id="sideNav" href="" >
          <i class="fa fa-bars icon"></i>
        </a>
    </div>
    <ul class="nav navbar-top-links navbar-right">
        <li class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">
                <i class="fa fa-user fa-fw"></i> {{user.name}} <i class="fa fa-caret-down"></i>
            </a>
            <ul class="dropdown-menu dropdown-user">
                <li>
                    <a href='javascript:void(0)'>
                        <i class="fa fa-sign-out fa-fw"></i> Logout
                    </a>
                </li>
            </ul>
        </li>
    </ul>
</nav>

</template>

<script>
  export default {
    name: 'topNavBar',
    data() {
      return {
        user: {name:'admin'}
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .navbar{
    background-color:black;
    height: 70px;
    z-index: inherit 300;
    margin-bottom:0;
    border: none;
    border-radius: 0;
  }

  .navbar-header{
    font-size: 24px;
    font-weight: 700;
    line-height: 60px;
    margin:0;
    padding:0;
    text-align: center;
  }
  .logo{
    width: 265px;
    color: #fff;
    text-align: left;
    height: 70px;
    font-size: 24px;
    font-weight: 700;
    line-height: 60px;
    background: #F36A5A;
    text-align: center;
  }
 #sideNav{
   display: inline-block;
 }
 .fa-bars{
   color:#B8B8B8;
 }
 .fa-bars:hover{
   color: #f36A5A
 }
 .navbar-right{
   display: block;
   height: 70px;
   margin-right: 10px;
 }
 .nav>li>a:focus, .nav>li>a:hover,.nav>li>a:visited{
   background-color:black;
 }
 .dropdown{
   height: 70px;
   line-height: 50px
 }
 .dropdown-user>li>a{
   font-size: 14px;
 }
 .dropdown-toggle{
   font-size:18px;
   color:#f36A5A
 }
</style>
