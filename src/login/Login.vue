<template>
  <div>
    <div class="content">
      <img src="../assets/imgs/synergies_logo_en-03.png" alt>
      <div class="content-center">
        <p>智能决策排程系统</p>
        <el-input v-model="input" placeholder="账号"></el-input>
        <el-input placeholder="密码" v-model="pwd" show-password></el-input>
        <router-link class="login" to="/home" tag="div">登入</router-link>
      </div>
      <a class="help" href="https://www.baidu.com/">Need help?</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      num: 1,
      input: "",
      pwd: ""
    };
  }
};
</script>

<style scoped>
body {
  background-color: #e9e9e95e;
}
.content {
  font-size: 0.16rem;
  width: 5.93rem;
  text-align: center;
  position: absolute;
  left: 6.64rem;
  top: 1.5rem;
}
.content-center p{
  font-size: .4rem;
  letter-spacing: .015rem;
  line-height: .56rem;
}
.login{
  margin: .48rem auto .18rem auto;
  border-radius: .1rem;
  height: .5rem;
  width: 1.41rem;
  background-color: #006464;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content a{
  font-size: 1rem;
  color: red;
}
</style>
