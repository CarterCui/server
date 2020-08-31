<template>
  <div class="home-bg" :style="{backgroundImage: 'url('+'https://www.bing.com'+ bgUrl +')'}"></div>
</template>

<script>
import {getLoginBg} from '../api/index'
export default {
  name: 'home',
  data () {
    return {
      bgUrl: ''
    }
  },
  mounted () {
    this.getBg()
  },
  methods: {
    getBg () {
      getLoginBg({}).then(res => {
        console.log(res)
        this.bgUrl = res.data.images[0].url
      })
    }
  }
}
</script>

<style scoped>
.home-bg{
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-size: auto;
  background-repeat: no-repeat;
}
</style>
