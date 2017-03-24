<template>
<div class="header-b" id='head_top'>
    <div class="header-b-c">
        <div class="header-b-l">
            <a href="https://d.weidian.com/index.php">
                <img src="https://d.weidian.com/images/index/logo.png">
            </a>
        </div>
        <div class="header-b-r">
            <div class="wealth-tips"> 
                <el-popover
                  ref="popover"
                  placement="bottom"
                  title=""
                  width="200"
                  trigger="click"
                 >
                  <p>订单消息：<span>0</span></p>
                  <p>聊天消息：<span>0</span></p>
                  <p>个人资料：<span>0</span></p>
                  <p>处罚申诉：<span>0</span></p>
                </el-popover>
                <span v-popover:popover class="hd_u_name" style="display:inline;">思埠新微商<i class="tips-list-icon"></i></span>

            </div> <a @click="dialogVisible = true" class="quit" > 退出 </a> 
        </div>
    </div>


    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>确定要退出登录？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="quit">确 定</el-button>
      </span>
    </el-dialog>




</div>
</template>
<script >
     export default {
        data(){
            return{
                dialogVisible: false
            }
        },
        mounted(){
      
        },
        methods: {
            quit(){
                this.dialogVisible=false;
                alert('退出')
            }
        }
    }
</script>

<style type="text/css">
.header-b{
    width: 100%;
    height: 79px;
    font-size: 14px;
    margin: 0 auto;
    background: #3e3e3e;
    border-top:1px solid #4d4d4d;
    border-bottom:1px solid #4d4d4d;
}

.header-b .header-b-c{
    width: 1200px;
    height: 78px;
    margin: 0 auto;
    position: relative;
}

.header-b .header-b-c .header-b-l{
    width: 255px;
    height: 78px;
    position: absolute;
    left: 0;
    top: 0;
}

.header-b .header-b-c .header-b-r{
    height: 40px;
    line-height: 40px;
    position: absolute;
    right: 0;
    top: 20px;
}

.header-b .header-b-r .wealth-tips{
    display: inline-block;
    height: 25px;
    line-height: 25px;
    padding-right: 20px;
    position: relative;
    cursor: pointer;
}

.header-b .header-b-r .wealth-tips span.hd_u_name{
    display: none;
    color: #fff;
}

.header-b .header-b-r .wealth-tips .tips-list-icon{
    width: 12px;
    height: 8px;
    background: url(https://d.weidian.com/images/index/jt.png);
    position: absolute;
    right: 10px;
    top: 9px;
}

.header-b .header-b-r .wealth-tips .tips-list{
    width: 180px;
    padding: 10px 20px;
    position: absolute;
    top: 28px;
    right: 0;
    z-index: 1;
    border:1px solid #ececeb;
    background: #f6f6f6;
    display: none;
}

.header-b .header-b-r .wealth-tips .tips-list .tips-t{
    padding-bottom: 7px;
    border-bottom:1px solid #e3e3e4;
}

.header-b .header-b-r .wealth-tips .tips-list .tips-t a{
    display: block;
    height:40px;
    line-height: 40px;
}

.header-b .header-b-r .wealth-tips .tips-list .tips-t a i{
    font-style: normal;
    color: #d98272;
}

.header-b .header-b-r .wealth-tips .tips-list .tips-b{
    padding-top: 10px;
}

.header-b .header-b-r .wealth-tips .tips-list .tips-b a{
    display: block;
    height:40px;
    line-height: 40px;
}

.header-b .header-b-r a.quit{
    display: inline-block;
    padding-left: 8px;
    color: #f8524a;
    cursor: pointer;
}



</style>