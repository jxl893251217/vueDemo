<template>
  <div >
    <div id="homePage"> 
    <div id="header" v-on:click="addNew1">扫描添加商品</div>
    <input id="search" type="search" name="" placeholder="手动输入条码">
    <label id="searchBt" v-on:click="addNew2">添加</label>
    <div style="background:#e4eaf2;height:10px;margin-top:60px;margin-bottom:10px;clear: both;"></div>
    <div id="submlit" v-on:click="submit()"><span>¥</span><label>{{totalPri}}</label></div>
    <div id="content">
        <ul >
         <li v-for="list in lists">
          <img :src="list.pic">
               <label class="name">{{list.title}}</label>
                <label class="price">¥<span>{{list.price}}</span></label>
                 <div class="sub_add_view"> <span class="sub" v-on:click="sub(list.id,list.price)"><img src="../img/sub.png"></span>
                 <label v-bind:id="list.id">{{list.count}}</label><span class="add" id="" v-on:click="add(list.id,list.price)">  <img src="../img/add.png">  </span>  </div>  
         </li>
         </ul>
         <div style="width:100%;height:110px;"></div>
    </div>
</div>

  </div>
</template>

<script>
var shop1={
                "id": "1",
                "pic": "http://msdpz.oss-cn-beijing.aliyuncs.com/%E6%A0%BC%E5%AD%90%E9%93%BA%E7%89%A9%E5%93%81/01.jpg",
                "price": "2.1",
                "count": 1,
                "title": "jave权威指南"
}
var shop2={
                "id": "3",
                "pic": "http://msdpz.oss-cn-beijing.aliyuncs.com/%E6%A0%BC%E5%AD%90%E9%93%BA%E7%89%A9%E5%93%81/1.jpg",
                "price": "6.6",
                "count": 1,
                "title": "打印机"
}
export default {
  data () {
    return {
      "totalPri":0,
      "lists": []
    }
  }, 
   methods:{
      add:function (id,price) {
       this.savePri(price); 
       this.saveNum(id);
      },
       sub:function (id,price) {
       this.savePri(price,"sub"); 
       this.saveNum(id,"sub");
      },
      addNew1:function () {
        if(this.judgeIsExist(shop1.id)){

        }else{
         this.lists.push(shop1);
         this.savePri(shop1.price);
        }
          
         
      },
      
      addNew2:function () {
         if(this.judgeIsExist(shop2.id)){

        }else{
          this.lists.push(shop2);
         this.savePri(shop2.price);
        }
          
      },
      savePri:function (pic,sub){
        if (sub=="sub") {
           this.totalPri=(-parseFloat(pic)+parseFloat(this.totalPri)).toFixed(2);
        }else{
          this.totalPri=(parseFloat(pic)+parseFloat(this.totalPri)).toFixed(2);
        }
        
      },
      saveNum:function (id,sub) {
        for (var i = 0; i < this.lists.length; i++) {
          if (this.lists[i].id==id) {
            if (sub=="sub") {
              if (parseInt(this.lists[i].count)==1) {
               this.lists.splice(i,1);
              }
              else{
                  this.lists[i].count=parseInt(this.lists[i].count)-1;
              }
            }else{
              this.lists[i].count=parseInt(this.lists[i].count)+1;
            }
          }
          else{

          }
        }
      },
      judgeIsExist:function (id) {
        for (var i = 0; i < this.lists.length; i++) {
         if(this.lists[i].id==id){
          return true;
         } 
        }
      } 
    },
    mounted:function(){
      window.localStorage.setItem('token',"Dcq79lhheDWb1:mDEr0w*pG*mxYoAgry*b053desq:tJZbZGdZAgqZZHwv24wkFXHHZuPmWED*2XfU9q5oaM3sM3RAMK4GyC")
    }
}
</script>
<style >
#homePage #header {
  background: #f45440;
  margin: 15px 2%;
  width: 96%;
  border-radius: 5px;
  line-height: 45px;
  font-size: 18px;
  color: #fff;
  text-align: center;
}
#homePage #search {
  position: absolute;
  border: 1px solid #ccc;
  line-height: 35px;
  border-radius: 5px;
  margin-left: 2%;
  outline: none;
  width: 70%;
}
#homePage #searchBt {
  position: absolute;
  display: inline-block;
  width: 24%;
  left: 73%;
  text-align: center;
  font-size: 18px;
  background: #ffd200;
  color: #f45440;
  line-height: 35px;
  border-radius: 5px;
  margin-left: 1%;
}
#homePage #submlit {
  position: fixed;
  width: 20%;
  height: 40px;
  right: 0px;
  bottom: 70px;
  color: #f45440;
  background: #ffd200;
  line-height: 40px;
  text-align: center;
  z-index: 99;
  border-radius: 20px 0 0 20px;
  font-size: 15px;
}
#homePage #submlit span {
  display: inline-block;
  background: #f45440;
  color: #ffd200;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 10px;
  font-size: 11px;
}
#homePage #submlit label {
  display: inline-block;
  margin-left: 3px;
  font-size: 15px;
  line-height: 40px;
}
 #content ul li {
  list-style: none;
  position: relative;
  height: 90px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 10px;
}
 #content ul li > img {
  width: 80px;
  border: 1px solid gray;
  position: absolute;
  margin-left: 5px;
}
 #content ul li .name {
  display: inline-block;
  margin-left: 90px;
  width: 50%;
  line-height: 40px;
  position: absolute;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  color: #333;
}
 #content ul li .price {
  position: absolute;
  margin-left: 90px;
  margin-top: 40px;
  line-height: 40px;
  color: #f45440;
  font-size: 11px;
}
 #content ul li .price span {
  font-size: 18px;
}
 #content ul li .sub_add_view {
  position: absolute;
  width: 104px;
  height: 30px;
  right: 10px;
  bottom: 10px;
}
 #content ul li .sub_add_view span {
  display: inline-block;
  width: 0px;
  width: 30px;
  height: 30px;
  position: absolute;
  left: 0px;
  top: 0px;
}
 #content ul li .sub_add_view span img {
  width: 30px;
  position: absolute;
}
 #content ul li .sub_add_view .add {
  margin-left: 70px;
}
 #content ul li .sub_add_view label {
  line-height: 30px;
  display: inline-block;
  width: 40px;
  text-align: center;
  color: #333;
  left: 30px;
  position: absolute;
  font-size: 14px;
}

</style>
