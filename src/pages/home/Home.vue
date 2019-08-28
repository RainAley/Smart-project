<template>
  <div class="home">
    <main-header></main-header>
    <fix-table-list :tableData="tableData" :innerList="innerList"></fix-table-list>
    <div class="home-position">
      <header>
        <div class="MainHome-left">
          <h3>產線物料需求規劃</h3>
          <span>(16)</span>
        </div>
      </header>
      <need-list></need-list>
      <table-date></table-date>
      <square></square>
    </div>
  </div>
</template>
<script>
import MainHeader from "../../layout/components/MainHeader";
import FixTableList from "./components/FixTableList";
import NeedList from "./components/NeedList";
import TableDate from "./components/TableDate";
import Square from "./components/Square";
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      tableData: [],
      innerList: []
    };
  },
  components: {
    MainHeader,
    FixTableList,
    NeedList,
    TableDate,
    Square
  },
  methods: {
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
.home {
  height: 8.7rem;
  font-size: 0.16rem;
  position: relative;
  overflow: hidden;
}
.home-position {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #fff;
}
header {
  width: 70%;
  height: 0.71rem;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
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

.need-list {
  display: inline-block;
  width: 25%;
}

.square {
  width: 30%;
  height: 4.71rem;
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 0.38rem 0.4rem;
  box-sizing: border-box;
  background: #fff;
}

</style>
