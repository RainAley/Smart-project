<template>
  <div class="detailChart">
    <div id="detailChart"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "DetailChart",
  data() {
    return {
      // detailChart: null,
      // isCollapse: null,
      option: {
        title: {
          text: "产线物料需求规则"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        legend: {
          data: ["库存剩余数量", "预计用量", "库存不足量"],
          right: 0,
          width: "50%",
          icon: "circle"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value"
        },
        yAxis: {
          type: "category",
          data: [
            "物料A",
            "物料B",
            "物料C",
            "物料D",
            "物料E",
            "物料F",
            "物料G",
            "物料H",
            "物料I",
            "物料J"
          ]
        },
        series: [
          {
            color: ["#E066FF"],
            name: "库存剩余数量",
            type: "bar",
            stack: "二组",
            barWidth: "35%",
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [195, 238, 310, 194, 141, 687, 111, 333, 321, 100]
          },
          {
            name: "预计用量",
            type: "bar",
            stack: "一组",
            barWidth: "45%",
            color: ["#00BFFF"],
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [182, 234, 290, 104, 131, 630, 222, 333, 123, 665]
          },
          {
            name: "库存不足量",
            type: "bar",
            stack: "一组",
            color: ["#90EE90"],
            label: {
              normal: {
                show: true,
                position: "insideRight"
              }
            },
            data: [195, 238, 310, 194, 141, 687, 111, 333, 321, 1]
          }
        ]
      }
    };
  },
  mounted() {
    // this.bus.$on("status", data => {
    //    this.isCollapse = data
    // });
    this.headerInitview();
  },
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
    headerInitview() {
       var detailChart = this.$eCharts.init(
        document.getElementById("detailChart")
      );
      detailChart.resize();
      detailChart.setOption(this.option);
    }
  },
  watch: {
    isCollapse(val) {
      setTimeout(() => {
        this.headerInitview();
      },300);
    }
  }
};
</script>

<style scoped>
.detailChart {
  width: 100%;
  height: 100%;
  padding: 0.41rem 0.17rem 0.21rem 0.41rem;
  box-sizing: border-box;
  background-color: #fff;
}
#detailChart {
  overflow: hidden;
  width: 100%;
  height: 100%;
}
</style>
