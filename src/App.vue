<template>
<div id="app">
  <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>

</div>
</div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {}
  },
  components: {

  }
}
</script>

<style>
body {
  margin: 0;
  /* overwrite the default set in md */
  background: #f4f4f4 !important;
  color: rgba(0, 0, 0, 0.66) !important;
}

#app {}
</style>
