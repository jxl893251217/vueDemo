<template>
   <div id="footer">
     <div id="menu" v-on:click="send('menu')"><img src="../img/role.png"></div>
     <div id="home" v-on:click="send('home')"><img src="../img/home.png"></div>
     <div id="mine" v-on:click="send('mine')"><img src="../img/mine.png"></div>
   </div> 
</template>
<script >
  export default({
    methods:{
      send:function (msg) {
        this.$emit('show-what',msg);
      }
    }
  })

</script>
<style >
*{
  margin: 0px;
  padding: 0px;
}
#footer{
   width: 100%;
   height: 49px;
   background: #121315;
   margin-top: 5px;
   position: fixed;
   border-top: solid 1px #f2f2f2;
   bottom: 0px;
   z-index: 99;
}
#menu {
  width: 43%;
  height: 49px;
  float: left;
  border-top: 1px solid #e6e6e6;
  position: absolute;
  bottom: 0px;
}
#home {
  width: 14%;
  float: left;
  position: absolute;
  bottom: 0px;
  left: 43%;
  z-index: 9;
}
#mine {
  width: 43%;
  height: 49px;
  float: left;
  border-top: 1px solid #e6e6e6;
  position: absolute;
  bottom: 0px;
  left: 57%;
  z-index: 0;
}
#menu img {
  width: 25px;
  height: 25px;
  position: absolute;
  margin-left: 50%;
  margin-top: 12px;
  left: -12.5px;
}
#home img {
  width: 80px;
  height: 80px;
  display: inline-block;
  position: absolute;
  bottom: 0px;
  left: 50%;
  margin-left: -40px;
}
#mine img {
  width: 25px;
  height: 25px;
  position: absolute;
  margin-left: 50%;
  margin-top: 12px;
  left: -12.5px;
}

</style>