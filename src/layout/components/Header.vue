<template>
  <div class="header-wrapper">
    <div class="header"></div>
    <header>
      <div class="header-left">
        <img src="../../assets/imgs/synergies_logo_en-02.png" alt>
        <h3>智能决策排程系统</h3>
      </div>
      <div class="header-right">
        <router-link to="/" class="login" tag="span">登录</router-link>
        <router-link to="/" tag="span">退出</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-wrapper {
  font-size: 0.16rem;
}
.header {
  width: 100%;
  height: 0.1rem;
  background-color: rgb(0, 100, 100)
}
header {
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 0.5rem;
  justify-content: space-between;
  padding-left: .58rem;
}
.header-left{
  display: flex;
  align-items: center;
}
.header-right{
  width: 3.63rem;
  height: .5rem;
  line-height: .5rem;
  text-align: right;
  padding-right: 1rem;
}
.header-right span{
  cursor: pointer;
}
.login{
  margin-right: .2rem;
}
</style>
