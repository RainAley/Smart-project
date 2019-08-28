<template>
  <div class="setuptwo-wrapper">
    <div>
      <main>
        <header>
          <div class="header-left">
            <h2>后台记录</h2>
            <div class="block">
              <el-date-picker
                v-model="value2"
                type="daterange"
                align="right"
                unlink-panels
                range-separator
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions"
              ></el-date-picker>
            </div>
          </div>
          <div class="header-right">
            <a
              href="../../../../static/imgs/synergies_logo_en-02.png"
              download="synergies_logo_en-02.png"
            >
              <div class="button">下载</div>
            </a>
          </div>
        </header>
        <div class="main">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">
              <table-list :tableData="tableData" :innerList="innerList"></table-list>
            </el-tab-pane>
            <el-tab-pane label="配置管理" name="second">
              <!-- <table-list :tableData="tableData" :innerList="innerList"></table-list> -->
            </el-tab-pane>
            <el-tab-pane label="角色管理" name="third">
              <table-list :tableData="tableData" :innerList="innerList"></table-list>
            </el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">
              <!-- <table-list :tableData="tableData" :innerList="innerList"></table-list> -->
            </el-tab-pane>
          </el-tabs>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TableList from "../../home/components/TableList";
export default {
  name: "SetUpt",
  components: {
    TableList
  },
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: "",
      value2: "",
      tableData: [],
      innerList: [],
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    requestTableData() {
      axios(
        "https://www.easy-mock.com/mock/5ce77764f5a4e04651e43a48/noopsyche/table/list"
      ).then(this.requestTableDataList);
    },
    requestTableDataList(res) {
      if (res.ret || res.data) {
        var data = res.data.data;
        this.tableData = data.tableData;
        this.innerList = data.innerList;
      }
    }
  },
  mounted() {
    this.requestTableData();
  }
};
</script>

<style scoped>
.setuptwo-wrapper {
  width: 100%;
  font-size: 0.16rem;
  padding: 0.4rem 3rem 0rem 3rem;
  box-sizing: border-box;
}
main {
  width: 100%;
}
main h2 {
  margin-right: 0.4rem;
}
main header,
.header-left {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header {
  margin-bottom: 0.3rem;
}
.main {
  width: 100%;
}
</style>
