<template>
  <div class="aside-wrapper">
    <div :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" @click="changWidth"></div>
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#006464"
      text-color="#fff"
    >
      <router-link to="/home">
        <el-menu-item index="/home">
          <i class="el-icon-menu"></i>
          <span slot="title">工单排配</span>
        </el-menu-item>
      </router-link>

      <router-link to="/detail">
        <el-menu-item index="/detail">
          <i class="el-icon-setting"></i>
          <span slot="title">生产效能</span>
        </el-menu-item>
      </router-link>
        <el-submenu index="SetUp">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">管理后台</span>
          </template>
          <el-menu-item-group>
            <router-link to="/SetUpo">
              <el-menu-item index="/SetUpo">演算相关设定</el-menu-item>
            </router-link>
            <router-link to="/SetUpt">
              <el-menu-item index="/SetUpt">后台记录</el-menu-item>
            </router-link>
          </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LayoutAside",
  props: {
    defaultActive: {
      default() {
        type: [String, Number];
        return "2";
      }
    }
  },
  data() {
    return {
      // isCollapse: true
    };
  },
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
    changWidth() {
      this.$store.dispatch("changeStatus", !this.isCollapse);
      //  this.isCollapse = !this.isCollapse
      //  this.bus.$emit("status",this.isCollapse)
    }
  },
  mounted() {}
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 2rem;
  min-height: 4rem;
}
.aside-wrapper>>> .el-menu-vertical-demo{
  border-right: none;
}
.el-menu-item-group .el-menu-item {
  padding-left: 0.64rem !important;
}
.aside-wrapper {
  font-size: 0.3rem;
}
.aside-wrapper .el-icon-s-unfold {
  box-sizing: border-box;
  position: absolute;
  padding-left: 0.2rem;
  top: 0.2rem;
  left: 0rem;
}
.aside-wrapper .el-icon-s-fold {
  box-sizing: border-box;
  position: absolute;
  padding-left: 0.2rem;
  top: 0.2rem;
  left: 0rem;
}
</style>