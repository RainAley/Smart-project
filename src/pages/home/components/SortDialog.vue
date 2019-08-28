<template>
  <div class="sortDialog">
    <el-dialog   center title="你是蔡徐坤吗???" :visible.sync="dialogVisible" width="65%" :before-close="handleClose">
      <table-list :tableData="tableData" :innerList="innerList"></table-list>
      <data-num :DetailTableData="DetailTableData"></data-num>
      <span slot="footer" class="dialog-footer">
  
         <el-button @click="dialogVisibleWaver(0)">取 消</el-button> 
        <el-button type="primary" @click="dialogVisibleWaver(1)">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import TableList from "./TableList";
import DataNum from "../../detail/components/DetailTop";
export default {
  name: "SortDialog",
  props: {
    dialogVisible: {
      type: Boolean,
      dafault() {
        return false;
      }
    },
    tableData: {
      type: Array,
      dafault() {
        return [];
      }
    },
    innerList: {
      type: Array,
      dafault() {
        return [];
      }
    }
  },
  data() {
    return {
      DetailTableData: {
        title: "关键数值",
        th: ["", "生产效能", "设备使用率", "交期满足率", "劳动生产率"],
        tr: [
          {
            tdheader: "当前",
            td: ["8,000", "90%", "90%", "70%"],
            color: ['#FD895F','#929292','#929292','#80CA99']
          },
          {
            tdheader: "上月",
            td: ["6,500", "95%", "80%", "80%"],
            color: ['#80CA99','#FD895F','#FFD336;','#FD895F']
          }
        ]
      }
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    dialogVisibleWaver(status) {
      this.$emit("statusChoose", status);
    }
  },
  components: {
    TableList,
    DataNum
  },
  mounted() {}
};
</script>

<style scoped>
.sortDialog  >>> .el-dialog__body{
  padding: .1rem .2rem;
}
</style>
