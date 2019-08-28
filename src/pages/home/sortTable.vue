<template>
  <div class="sortTable">
    <sort-header @getCurrentPage="setCurrentPage"></sort-header>
    <table-list :tableData="tableData" :innerList="innerList"></table-list>
    <sort-dialog
      :dialogVisible="dialogVisible"
      :tableData="onlytableData"
      :innerList="innerList"
      @statusChoose="judgeStatus"
    ></sort-dialog>
  </div>
</template>

<script>
import TableList from "./components/TableList";
import SortHeader from "./components/Sortheader";
import Sortable from "sortablejs";
import SortDialog from "./components/SortDialog";
import axios from "axios";
export default {
  name: "SortTable",
  data() {
    return {
      tableData: [],
      innerList: [],
      dialogVisible: false,
      changeTableData: [],
      transfer:[],
      onlytableData: [],
      pagingData: null,
      pageNum: 1,
      pageSize: 10,
      currentPage: 0
    };
  },
  components: {
    TableList,
    SortHeader,
    SortDialog
  },
  methods: {
    setCurrentPage(index) {
      this.currentPage = index;
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
        this.changeTableData = [...this.tableData];
        this.pagingData = JSON.parse(JSON.stringify(this.tableData));
      }
      this.paging();
    },
    rowDrop() {
      const tbody = document.querySelector(".el-table__body-wrapper tbody");
      const _this = this;
      Sortable.create(tbody, {
        onEnd({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0];
          _this.tableData.splice(newIndex, 0, currRow);
          _this.dialogVisible = true;
          _this.onlytableData.splice(0, 1, _this.tableData[newIndex]);
        }
      });
    },
    paging() {
      this.pageNum = Math.ceil(this.tableData.length / this.pageSize) || 1;
      for (let i = 0; i < this.pageNum; i++) {
        this.tableData[i] = this.tableData.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
      this.tableData = this.tableData[this.currentPage];
    },
    judgeStatus(val) {
      if (val === 1) {
        this.changeTableData = [...this.tableData];
        this.dialogVisible = false;
      } else {
        this.tableData = [...this.changeTableData];
        this.dialogVisible = false;
      }
    }
  },
  computed: {},
  mounted() {
    this.requestTableData();
    this.rowDrop();
  },
  watch: {
    currentPage() {
      for (let i = 0; i < this.pageNum; i++) {
        this.transfer[i] = this.pagingData.slice(
          this.pageSize * i,
          this.pageSize * (i + 1)
        );
      }
      this.tableData = this.transfer[this.currentPage];
    }
  }
};
</script>

<style scoped>
.sortTable {
  height: 8.7rem;
}
</style>
