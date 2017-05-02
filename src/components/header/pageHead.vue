<template>
    <header class='head_top'>
        <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
            </svg>
        </section>
        <section class="title_head ellipsis" v-if="headTitle">
            <span class="title_text">{{headTitle}}</span>
        </section>

    </header>
</template>

<script>

    export default {
    	data(){
            return{

            }
        },
        mounted(){
            

        },
        props: ['signinUp', 'headTitle', 'goBack'],
        computed: {
          
        },
        methods: {
           
        },

    }

</script>

<style  >
   

   .head_top {
    background-color: #3190e8;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    width: 100%;
    height: 1.95rem;
}
    .head_goback {
    left: .4rem;
    width: .6rem;
    height: .8rem;
    line-height: 2.2rem;
    margin-left: .4rem;
}
.title_head{
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    width: 50%;
    color: #fff;
    text-align: center;
}
   
</style>
