<template>
    <div id="app">
        <nav class="navbar">
            <a href="#" class="top">Joey's Site</a>
            <button class="navbutton">
                <a href="./info" class="navlink">Info</a>
            </button>
            <button class="navbutton">
                <a href="./db" class="navlink">Database</a>
            </button>
        </nav>
        <div class="container">
            <router-view />
        </div>
    </div>
</template>
<script>
    export default {
        name: 'app'
    };
</script>
<style>
      *{
        margin:0;
        padding:0;
      }

      body{
        background-image:url('~@/assets/IMG_0087.jpg');
        background-repeat: no-repeat;
        background-size: cover;
      }


      a{
        color:black;
      }

      .navbar{
        position:relative;
        padding:10px 10px 0px 10px;
        margin:10px;
        margin-bottom:0;
      }

      .navbutton{
        padding:10px;
        font-size:3vw;
        font-family: 'Roboto', sans-serif;
        text-align:center;
        border: 1px solid black;
        border-bottom:1px solid lightgrey;
        z-index:5;
        position:relative;
        top:1px;
      }

      .navbutton.hover{
        cursor:pointer;
        font-weight:bold;
        text-shadow: 1px -1px black;
        background-color:lightgrey;
      }

      .top{
        color:white;
        background-color:rgb(106, 142, 173);
        background-color:rgba(0,0,0,.5);
        font-family: 'Roboto', sans-serif;
        font-size:4vw;
        font-weight:bold;
        padding:10px;
        border-radius:7px;
        position:relative;
        top:-5px;
        left:-5px;;
      }

      .navlink{
        text-decoration:underline;        
      }
      .navlink:hover{
        text-shadow:.15vw .15vw grey;
      }

      .navlink:active{
        text-shadow:.15vw .15vw grey, .15vw -.15vw grey;
      }

      .navlink:visited{
        color:black;
      }

      .container{
        background-color: rgba(235,235,235,.5) ;
        font-family: 'Roboto', sans-serif;
        text-align:center;
        width:80vw;
        margin:auto;
        border: 1px solid black;
        border-radius:5px;
        z-index:2;
      }

      .component{
        text-align:center;
        padding:10px 0 10px 0;
        width:90%;
        margin:auto;
      }
    </style>