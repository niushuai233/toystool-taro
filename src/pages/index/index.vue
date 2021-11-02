<template>
  <view class="index">
    <nut-swiper :init-page="0" :pagination-visible="true" pagination-color="#426543" auto-play="3000">
      <nut-swiper-item>
        <image src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <image src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
      </nut-swiper-item>
      <nut-swiper-item>
        <image src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
      </nut-swiper-item>
    </nut-swiper>
    <image
      style="width: 300px;height: 100px;background: #fff;"
      src="@/assets/banner/best.png"
    />
  </view>
</template>

<script>
export default {
  name: 'Index',
  components: {
  },
  onShow() {
  },
  setup(){
    return {
    }
  }
}
</script>

<style lang="scss">
.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
