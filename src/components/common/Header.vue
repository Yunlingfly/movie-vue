<template>
  <div>
    <div>
      <el-row>
        <el-col :span="8">
          <div class="grid-content">
            <span>yxq-movie网</span>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content"></div>
        </el-col>
        <el-col :span="8">
          <div class="grid-content">
            <span>登录 | 注册</span>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="my-menu-box">
      <el-menu
        :default-active="onRoutes"
        class="my-menu"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        router
      >
        <el-menu-item index="index" key="index">视频首页</el-menu-item>
        <el-menu-item index="movie" key="movie">电影</el-menu-item>
        <el-menu-item index="3">电视剧</el-menu-item>
        <el-menu-item index="4">综艺</el-menu-item>
        <el-menu-item index="5">动漫</el-menu-item>
        <el-menu-item index="6" disabled>消息中心</el-menu-item>
        <div class="search">
          <el-input v-model="searchInput" placeholder="请输入内容" class="search-el-input"></el-input>
          <el-button type="primary" @click="toSearch" icon="el-icon-search">搜索</el-button>
        </div>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "index",
      searchInput: ""
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    toSearch() {}
  }
};
</script>

<style scoped>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.my-menu-box {
  height: 60px;
  background-color: #545c64;
}
.my-menu {
  margin: 0px 0px 0px 100px;
}
.search {
  width: 50%;
  position: absolute;
  right: 0%;
}
.search-el-input {
  width: 60%;
  margin: 15px;
}
</style>