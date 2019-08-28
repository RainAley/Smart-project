<template>
  <div class="bar-warpper" id="bar-warpper"></div>
</template>

<script>
export default {
  name: "bar",
  data() {
    return {};
  },
  mounted() {
    this.initView();
  },
  methods: {
    initView() {
      var myChart = this.$eCharts.init(document.getElementById("bar-warpper"));
      let option = {
        title: {
          text: "产能需求规则",
          left: 14,
          textStyle: {
            fontSize: 23
          }
        },
        legend: {
          data: ["下周预估产能"],
          right: 0,
          top: 10,
          width: "50%",
          icon: "circle"
        },
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line"
          }
        },
        grid: {
          left: "4%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          { 
            boolean: false,
            type: "category",
            data: ["工站1", "工站1", "工站1", "工站1", "工站1", "工站1", "工站1"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            boolean: false,
            type: "value"
          }
        ],
        series: [
          {
            name: "下周预估产能",
            type: "bar",
            barWidth: "50%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped>
.bar-warpper {
  width: 5.95rem;
  height: 100%;
  background-color: #fff;
  margin-right: 0.1rem;
  padding: 0.3rem 0.1rem 0.1rem 0.1rem;
  box-sizing: border-box;
}
</style>
