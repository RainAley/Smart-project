<template>
  <div>
    <header>
      <div class="MainHome-left">
        <h3>今日排程计算</h3>
        <span>(1,080)</span>
        <el-select v-model="value" placeholder="1-100" @change="getIndex(value)">
          <el-option v-for="(item,index) in options" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </div>
      <div class="MainHome-right">
        <div class="button cancel" @click="gotohome">取消</div>
        <div class="button" @click="gotohome">变更</div>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SortHeader",
  data() {
    return {
      options:null,
      value: ""
    };
  },
  methods: {
    changeRouter() {
      this.$router.push("/SortTable");
    },
    requestHomeHeaderData() {
      this.options = this.$route.params.options
        // this.options = this.$route.query.options
    },
    getIndex(v) {
      this.$emit("getCurrentPage", this.options.indexOf(v));
    },
    gotohome() {
      this.$router.push("/home");
    }
  },
  mounted() {
    this.requestHomeHeaderData();
  }
};
</script>

<style scoped>
header {
  width: 100%;
  height: 0.71rem;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  font-size: 0.16rem;
}
.MainHome-left {
  width: 8rem;
  height: 0.71rem;
  display: flex;
  align-items: center;
}
.MainHome-left h3 {
  margin-left: 0.5rem;
}
.MainHome-left span {
  margin: 0 0.35rem 0 0.12rem;
}

.MainHome-right {
  width: 3rem;
  height: 0.71rem;
  display: flex;
  align-items: center;
}
.MainHome-right p {
  margin-right: 0.39rem;
}
</style>
