<template>
  <div>
    <Header />
    <!-- 在此显示当前路由组件 -->
    <router-view></router-view>
    <!-- <Footer
      v-show="$router.path !== './register' && $router.path !== './login'"
    /> -->

    <Footer v-show="!$route.meta.isHideFooter" />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped></style>
