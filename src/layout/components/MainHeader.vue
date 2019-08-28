<template>
  <div>
    <header>
      <div class="MainHome-left">
        <h3>今日排程计算</h3>
        <span>(1,080)</span>
          <el-select v-model="value" placeholder="1-100">
          <el-option v-for="(item,index) in options" :key="index" :label="item" :value="item"></el-option>
        </el-select>
      </div>
      <div class="MainHome-right">
        <p>2019-09-23</p>
        <div class="button" @click="changeRouter">编辑排程</div>
      </div>
    </header>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MainHeader",
    components:{
  },
  props: {
    isShow: {
      type: Boolean,
      default() {
        return false;
      }
    }
  },
  data() {
    return {
      options: null,
      value: ""
    };
  },
  methods: {
    changeRouter() {
      this.$router.push({
        // path:"/SortTable:options",
        // query: {
        //    options:this.options  
        // }
         name:"sortTable",
         params: {
           options:this.options  
        }
      });
    },
    requestHomeHeaderData() {
      axios
        .get(
          "https://www.easy-mock.com/mock/5ce77764f5a4e04651e43a48/noopsyche/smart/pagetop"
        )
        .then(this.requestHomeData);
    },
    requestHomeData(res) {
      
     if (res.ret || res.data) {
        var pagesValue = res.data.value;
      }
      var maxNum = Math.ceil(pagesValue / 100) || 1;
      this.options = Array.from({length: maxNum},(item, index) => `${index*100+1}-${(index+1)*100}`)
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
  letter-spacing: 0.1rem;
  font-size: 0.25rem;
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
