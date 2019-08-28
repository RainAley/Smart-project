<template>
  <div>
    <detail-header></detail-header>
    <div class="detail">
      <div class="detailContent">
        <div class="detailMainLeft">
          <div>
            <detail-top :DetailTableData="DetailTableData"></detail-top>
          </div>
          <div class="BarPosition">
            <bar></bar>
            <detail-date></detail-date>
          </div>
        </div>
        <div class="detailMainRight">
          <detail-chart></detail-chart>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from "../../layout/components/MainHeader";
import Bar from "./components/bar";
import DetailHeader from "./components/DetailHeader";
import DetailTop from "./components/DetailTop";
import DetailDate from "./components/DetailDate";
import DetailChart from "./components/DetailChart";
export default {
  name: "Detail",
  data() {
    return {
      isShow: false,
      DetailTableData: {
        title: "关键数值",
        th: ["", "生产效能", "设备使用率", "交期满足率", "劳动生产率"],
        tr: [
          {
            tdheader: "当前",
            td: ["8,000", "90%", "90%", "70%"],
            color: ["#FD895F", "#929292", "#929292", "#80CA99"]
          },
          {
            tdheader: "上月",
            td: ["6,500", "95%", "80%", "80%"],
            color: ["#80CA99", "#FD895F", "#FD895F", "#FD895F"]
          }
        ]
      }
    };
  },
  components: {
    DetailDate,
    MainHeader,
    DetailHeader,
    DetailChart,
    DetailTop,
    Bar
  }
};
</script>

<style scoped>
.detail {
  font-size: 0.16rem;
  position: relative;
  width: 100%;
  height: 8rem;
  display: flex;
}
.detailContent {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.detailMainLeft {
  width: 12rem;
  margin-right: 0.1rem;
}
.detailMainRight {
  width: 0;
  flex: 1;
  height: 8rem;
  margin-right: 0.1rem;
}
.BarPosition {
  display: flex;
  margin-top: 0.15rem;
  width: 100%;
  height: 3.9rem;
}
</style>
