<template>
  <div class="setupone-wrapper">
    <div class="main">
      <h2>演算相关设定</h2>
      <h3>KPI警示范围设定值</h3>
      <set-slider v-for="(item,index) in sliderData" :key="index" :item="item"></set-slider>
      <div class="Setmain">
        <h3>后台记录</h3>
        <span>最后更新时间2019-09-12</span>
        <div class="setFlex">
          <h5>2019/06/02至2019/06/08物料需求规则</h5>
          <div class="button">下载全部</div>
        </div>
        <table-list :tableData="tableData" :innerList="innerList"></table-list>
      </div>
    </div>
  </div>
</template>

<script>
import SetSlider from "./components/SetSlider";
import TableList from "../../home/components/TableList";
export default {
  name: "SetUpo",
  components: {
    SetSlider,
    TableList
  },
  data() {
    return {
      // sliderData: []
      sliderData: [
        {
          title: "生产产能",
          value: [3000, 6000],
          max: 20000,
          marks: {
            10000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "50%")
            },
            20000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "100%")
            }
          }
        },
        {
          title: "生产周期(小时)",
          value: [4000, 7000],
          max: 20000,
          marks: {
            10000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "50%")
            },
            20000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "100%")
            }
          }
        },
        {
          title: "设备使用率",
          value: [5000, 9000],
          max: 20000,
          marks: {
            10000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "50%")
            },
            20000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "100%")
            }
          }
        },
        {
          title: "预计交付满足率",
          value: [6000, 7000],
          max: 20000,
          marks: {
            10000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "50%")
            },
            20000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "100%")
            }
          }
        },
        {
          title: "劳动生产率",
          value: [2000, 8000],
          max: 20000,
          marks: {
            10000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "50%")
            },
            20000: {
              style: {
                color: "#1989FA"
              },
              label: this.$createElement("strong", "100%")
            }
          }
        }
      ],
      innerList: [
        {
          label: "物料",
          prop: "name"
        },
        {
          label: "库存剩余量(pcs)",
          prop: "num"
        },
        {
          label: "下周预计用量",
          prop: "num"
        }
      ],
      tableData: [
        {
          id: "001",
          name: "张三",
          num: "10000"
        },
        {
          id: "002",
          name: "李四",
          num: "10000"
        },
        {
          id: "003",
          name: "王麻子",
          num: "10000"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
.setupone-wrapper {
  font-size: 0.16rem;
  width: 8rem;
  height: 8.7rem;
  margin: 0 auto;
  box-sizing: border-box;
}
h2,
h3 {
  letter-spacing: 0.1rem;
}
.main {
  width: 100%;
  height: 100%;
}
.main h2 {
  margin-bottom: 0.3rem;
}
.Setmain h3 {
  display: inline-block;
}
.Setmain span {
  color: #646464;
}
.setFlex {
  margin: 0.2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.setFlex h5 {
  font-size: 0.18rem;
  font-weight: 400;
}
.setFlex .button {
  border-radius: 0 !important;
}
</style>
