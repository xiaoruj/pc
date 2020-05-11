<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <router-link to="/login">登录</router-link>
            <router-link to="/register" class="register">免费注册</router-link>
            <!-- <a href="###">登录</a>
            <a href="###" class="register">免费注册</a> -->
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" to="/">
          <img src="./images/logo.png" alt="" />
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="/xxx" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            placeholder="关键字"
            v-model="keyword"
          />
          <button
            class="sui-btn btn-xlarge btn-danger"
            @click.prevent="search"
          >
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      keyword: "",
    }
  },
  mounted(){
    this.$bus.$on('removeKeyword', () => {
      this.keyword = ''
    })
  },
  methods: {
    search() {
      // 字符串拼接
      // this.$router.push(`/search/${this.keyword}?keyword2=${this.keyword.toUpperCase()}`);
      // 对象模式
      const keyword = this.keyword;
      const location = {
        name: 'search',
      }
      if(keyword){
        location.params = {keyword}
      }
      const {query} = this.$route
      location.query = query
      if (this.$route.path.indexOf('/search') === 0) {
        this.$router.replace(location)
      } else {
          this.$router.push(location)
      }
      // if (keyword===''){
      //   this.$router.push('/search')
      // }else{
      //   this.$router.push(`/search/${keyword}?keyword2=${keyword.toUpperCase()}`)
      // }
      // 1
      // if(keyword===''){
      //   this.$router.push({
      //   name: 'search'
      // })
      // }else{
      //   this.$router.push({
      //       name: 'search',
      //       params: { keyword: keyword },
      //       query: { keyword2: keyword.toUpperCase() }
      //     })
      // }

      // 2
      // this.$router.push({
      //   name: "search",
      //   params: { keyword: keyword === "" ? undefined : keyword },
      //   query: { keyword2: keyword.toUpperCase() },
      // });

      // this.$router.replace({ // push是重写后的方法
      //   name: 'search',
      //   params: { keyword: keyword==='' ? undefined : keyword },
      //   query: { keyword2: keyword.toUpperCase() }
      // }).then(() => {console.log('跳转成功')})
      
    },
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>
