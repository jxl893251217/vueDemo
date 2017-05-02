<template>
        <section class="content">
            <section class="breadcrumb">
                <el-breadcrumb separator="/">
                  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/goods/list' }">商品管理</el-breadcrumb-item>
                  <el-breadcrumb-item >{{title}}</el-breadcrumb-item>
                </el-breadcrumb>
            </section>
            <section class="addContent" >
                <dl>
                    <dt>上传图片</dt>
                    <dd>
                        <el-upload
                          :action="upload"  
                          list-type="picture-card"
                          :on-preview="handlePictureCardPreview"
                          :on-remove="handleRemove">
                          <i class="el-icon-plus"></i>
                        </el-upload>
                        <el-dialog v-model="dialogVisible" size="tiny">
                          <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                    </dd>
                </dl>
                <dl>
                    <dt>图片描述</dt>
                    <textarea></textarea>
                </dl>
                <dl>
                    <dt>商品价格</dt>
                    <dd><input type="text" />元</dd>
                </dl>
                <dl>
                    <dt>商品库存</dt>
                    <dd><input type="text" />件</dd>
                </dl>
                <dl>
                    <dt>商品编码</dt>
                    <dd><input type="text" /></dd>
                </dl>
              
                 
            </section>

            
            
        </section>
</template>


<script>
import {mapState, mapActions} from 'vuex'
import httpHelper from "../../util/httpHelper"
import utils from '../../util'

export default {
    data () {
        return {
            title:'添加商品',
            dialogImageUrl: '',
            dialogVisible: false,
            upload:utils.url.photoUpload
        }
    },
    computed: {
   
    },
    components: {  },
           
    mounted(){
        this.$nextTick(function(){
          
        })

     },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      getDetails(id){
        if(id===0) return;
        let params={}
        httpHelper.get(_self,utils.url.goodsGet+'?id='+id+'&shopId=1',params,(data)=>{
            if(data.errorCode==0){
              
            }
            else{
                 this.$message.error(data.errorMsg);
            }
     
               
          }, (err)=>{
              console.log('shi bai')
        })
      },
     
    }

}
</script>
<style type="text/css" scoped>
.content{
    width: 1200px;
    margin:0 auto;
    border:1px solid #ddd;
}
.breadcrumb {
    text-indent: 20px;
    color: #404040;
    border-bottom: 1px solid #dcdcdc;
    font-size: 14px;
    background: #fff;
    padding: 20px 0;
}
.addContent{
    padding:20px;
}
.addContent dl dt{
    padding: 0px 0 10px;
    margin:0;
}
.addContent dl dd{
    padding: 0;
    margin:0;
}
.addContent input{
    padding:10px;
}
.addContent textarea{
    width: 100%;
    height: 160px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 16px;
    resize: vertical;
}
</style>