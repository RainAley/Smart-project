<template>
  <div class="layout-wrapper">
    <el-container>
      <el-header>
        <layout-header></layout-header>
      </el-header>
      <el-container>
        <el-aside style="width:none">
          <layout-aside :defaultActive="defaultActive"></layout-aside>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template> 

<script>
import LayoutAside from "./components/Aside";
import LayoutHeader from "./components/Header";
export default {
  name: "Layout",
  data() {
    return {
      defaultActive: "$router.path",
      changeWidth: true
    };
  },
  components: {
    LayoutAside,
    LayoutHeader
  }
};
</script>

<style scoped>
.el-header {
  padding: 0;
  text-align: center;
  line-height: 0.6rem;
  background-color:rgb(255, 255, 255)
}

.el-main {
  width: 100%;
  padding: 0;
  margin: 0;
}
.el-aside{
  background-color: #006464;
}
.layout-wrapper >>> .button {
  width: 0.96rem;
  height: 0.46rem;
  background-color: #006464;
  text-align: center;
  line-height: 0.46rem;
  border-radius: 0.1rem;
  color: aliceblue;
  cursor: pointer;
}
.layout-wrapper >>> .cancel {
  margin-right: 0.5rem;
  background-color: #fff;
  color: #006464;
}
</style>
