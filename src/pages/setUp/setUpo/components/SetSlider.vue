<template>
  <div>
    <div :class="isVanish?'setslider':'setsliderActive setslider'">
      <div class="slider">
        <div class="sliderOut">
          <h3>{{item.title}}</h3>
          <div class="sliderOutRight" v-show="isVanish">
            <span>2019-09-12</span>
            <div class="button" @click="ishowChange">编辑</div>
          </div>
          <div class="sliderOutRight" v-show="!isVanish">
            <div class="button cancel" @click="changeSliderValue(0)">取消</div>
            <div class="button alteration" @click="changeSliderValue(1)">存储</div>
          </div>
        </div>
        <div class="block">
          <el-slider
            :format-tooltip="percentage"
            :disabled="isVanish"
            :max="max"
            v-model="value"
            :marks="marks"
            range
            show-tooltip
          ></el-slider>
          <div class="sliderRight" :style="{width:rightWidth}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SetSlider",
  data() {
    return {
      value: [],
      max: null,
      transferValue: {},
      preValue: [],
      isVanish: true,
      rightWidth: null,
      marks: {}
    };
  },
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    ishowChange() {
      this.isVanish = false;
    },
    changeSliderValue(status) {
      if (status == 1) {
        this.transferValue = [...this.value];
      } else {
        this.value = [...this.transferValue];
      }
      this.isVanish = true;
    },
    percentage(val) {
      if (this.item.title.includes("率") == true) {
        return ((val / this.max) * 100).toFixed() + "%";
      }
    }
  },
  mounted() {
    this.value = this.item.value;
    this.max = this.item.max;
    this.marks = this.item.marks;
    this.transferValue = [...this.value];
  },
  watch: {
    value(val) {
      this.rightWidth = ((this.max - this.value[1]) / this.max) * 100 + "%";
    }
  }
};
</script>

<style scoped>
.setslider {
  width: 100%;
  height: 1.5rem;
  padding: 0.2rem;
  box-sizing: border-box;
  margin-bottom: 0.1rem;
  background-color: #fff;
  border: 1px solid #ccc;
}
.setslider >>> .el-slider {
  background-color: #ccc;
  border-radius: 0.5rem;
}
.sliderOut {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.5rem;
}
.sliderOutRight {
  display: flex;
  align-items: center;
}

.button {
  width: 0.76rem !important;
  margin-left: 0.3rem !important;
}
.block {
  padding-top: 0.2rem;
  position: relative;
  box-sizing: border-box;
}
.setslider >>> .el-slider__runway {
  background: #7fffaa;
}
.setslider >>> .el-slider__bar {
  background-color: pink;
}
.cancel {
  margin-right: 0.2rem !important;
  border: #006464 1px solid !important;
}
.sliderRight {
  position: absolute;
  background-color: #ff6347;
  height: 0.06rem;
  right: 0rem;
  bottom: 0.16rem;
}
.setsliderActive {
  border: 1px solid #006464;
  background-color: #fffff0;
}
</style>
