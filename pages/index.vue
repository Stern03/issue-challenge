<template>
  <div>
    <Header />
    <Navigation />
    <div class="main-area">
        <NuxtLink :to="`/issues`">Issues ページへ</NuxtLink>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header/Header.vue'
import Navigation from '../components/Navigation/Navigation.vue'

export default {
  components: {
      Header, Navigation
  }
}
</script>
<style scoped lang="scss">
.main-area {
    text-align: center;
    margin-top: 100px;
    font-size: 30px;
    font-weight: bold;
    color: $blue-color;
}

</style>
