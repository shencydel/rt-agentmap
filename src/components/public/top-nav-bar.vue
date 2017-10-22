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
        <a id="sideNav" href="javascript:void(0)" @click="displayToggle">
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
    methods:{
      displayToggle() {
        $("#sideNav").toggle(
        function(){
          console.log("sss")
          $('.navbar-side').animate({left: '-0px'});
          $('#page-wrapper').animate({margin: '0, 0, 0, 260px'});
        },
        function() {
                  console.log("ssse1s")
          $('.navbar-side').animate({left: '-260px'});
          $('#page-wrapper').animate({margin: '0px'}, "slow", function() {
            $('#page-wrapper').css('margin', 'auto');
          });

        }
        );
      }
    },
    components: {

    }
  }
</script>

<style scoped>
  .navbar{
    background-color:black;
    height: 60px;
    z-index: inherit 300;
    margin-bottom:0;
    border: none;
    border-radius: 0;
    position: fixed;
    width: 100%;
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
    width: 260px;
    color: #fff;
    text-align: left;
    height: 60px;
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
   height: 60px;
   margin-right: 10px;
 }
 .nav>li>a:focus, .nav>li>a:hover,.nav>li>a:visited{
   background-color:black;
 }
 .dropdown{
   height: 60px;
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
