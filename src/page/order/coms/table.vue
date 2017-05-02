  <template>
  <section>
     <el-table
            :data="tableList.data"
            style="width: 100%">
            <el-table-column
              prop="orderCode"
              label="订单号"
              width="180">
            </el-table-column>
            <el-table-column
              prop="_address"
              label="收货地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="orderStatus"
              label="状态">
            </el-table-column>
            <el-table-column label="操作" width="180">
              <template scope="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">订单详情</el-button>
              </template>
            </el-table-column>
          </el-table>
     <!-- <table class="table">
            <thead>
                <tr class="col-name">
                  <th class="goods" colspan="2">
                      <span class="thtip">订单编号：<var class="value">20160113213365</var></span>
                      <span class="thtip">创建时间：<var class="value">2014-09-11 11:11:11</var></span>
                  </th>
                  <th class="goods" colspan="2">
                      <span class="thtip">订单编号：<var class="value">20160113213365</var></span>
                      <span class="thtip">创建时间：<var class="value">2014-09-11 11:11:11</var></span>
                  </th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(item, index) in tableList.data">
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
                  <td>{{item.skuValue}}</td>
                </tr>
            </tbody>
        </table>     -->

		<!-- 分页 -->
    <div class="block pageContent">
	    <el-pagination
	      @current-change="handleCurrentChange"
	      :current-page="currentPage"
	      :page-size="1"
	      layout="total, prev, pager, next"
	      :total="tableList.totalCount">
	    </el-pagination>
	  </div>
  </section>
    
  </template>

  <script>
    export default {
      data() {
        return {
          currentPage:1
        }
      },
      props: ['tableList'],
      methods: {
	      handleCurrentChange(val) {
	        this.currentPage = val;
	        this.$emit('changePage', val);
	        console.log(`当前页: ${val}`);
	      },
        handleEdit:function (index, row){

         this.$router.push("/order/orderDetail/"+row.id)
        }
    },

    }
  </script>
  <style type="text/css" scoped>
  	.pageContent{
  		padding-top: 50px;
  		text-align: center;
  	}
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