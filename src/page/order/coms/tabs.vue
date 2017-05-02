<template>
  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
    <el-tab-pane label="订单信息" name="first">
    <table class="table">
            <thead>
                <tr class="col-name">
                  <th >商品</th>
                  <th >型号</th>
                  <th >发货状态</th>
                  <th >价格</th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item, index) in detail">
                  <td>
                  <div class="items-name clear">
                      <div class="items-img left">
                          <img  :src="item.imgUrl" />
                      </div>
                      <div class="items-title ">{{item.goodsName}}
                          <br>¥{{item.lineAmount}}<span class="">*{{item.quantity}}</span> 
                      </div>
                  </div>
                  </td>
                  <td>{{item.skuValue}}</td>
                  <td>{{item.skuValue}}</td>
                  <td>￥{{item.lineAmount}}</td>
                </tr>
            </tbody>
        </table>
  
    </el-tab-pane>
    <el-tab-pane label="物流信息" name="second">物流信息</el-tab-pane>

  </el-tabs>
</template>





<script>
  export default {
    data() {
      return {
        activeName2: 'first'

      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    props: ['detail'],

    mounted(){
      this.$nextTick(function(){
          
        })
      
    }
  };
</script>

<style type="text/css" scoped>
table {
    margin-bottom: 10px;
    border: 1px solid #E6E6E6;
    table-layout: fixed; 
   border-collapse: collapse;
    width: 100%; 
    font-size: 14px;
}
table thead tr {
    height: 46px;
    line-height: 46px;
    background: #fafafa;
    font-size: 14px;
}
table tbody tr td{
  text-align: center;
  padding:10px 0;
}
 .items-name {
    width: 35%;
}
.items-name .items-img {
    width: 100px;
    height: 100px;
    padding-left: 10px;
}
.items-name .items-title {
    width: 235px;
    padding-left: 20px;
}
.items-name .items-img img {
    width: 100%;
    height: 100%;
}

</style>