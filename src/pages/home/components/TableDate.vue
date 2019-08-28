<template>
  <div class="table-date">
    <div class="header">
      <div class="el-icon-arrow-left" @click="handleRight"></div>
      <ul class="header-ul" :style="{width:ulWidth,transform:`translateX(${moveDirection}px)`}">
        <li v-for="(item,index) in 24" :class="item == hours ? 'active' : ''" :key="index">{{item}}</li>
      </ul>
      <div class="el-icon-arrow-right" @click="handleLeft"></div>
    </div>
    <div class="main">
      <div class="main-outner" v-for="(item,index) in timerData" :key="index">
        <ul class="main-ul" :style="{width:ulWidth,transform:`translateX(${moveDirection}px)`}">
          <div
            class="ul-inner"
            v-for="(item,index) in item"
            :key="index"
            :style="{left:(item.startTime-1) * 122.5 + 50 +'px',width:(item.endTime - item.startTime +1) * 122.5 + 'px'}"
          >
            <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
          </div>
        </ul>
      </div>
    </div>
     <div class="showdow" :style="{width:ulWidth,transform:`translateX(${moveDirection}px)`}">
           <div class="line" :style="{width: hours * 122.5 - 61+'px'}"></div>
    </div> 
  </div>
</template>

<script>
export default {
  name: "TableDate",
  data() {
    return {
      num: 0,
      hours: null,
      timerData: [
        [
          {
            startTime: 1,
            endTime: 5
          },
          {
            startTime: 7,
            endTime: 12
          },
          {
            startTime: 19,
            endTime: 22
          },
          {
            startTime: 22,
            endTime: 24
          }
        ],
        [
          {
            startTime: 2,
            endTime: 9
          },
          {
            startTime: 12,
            endTime: 15
          },
          {
            startTime: 17,
            endTime: 22
          },
          {
            startTime: 23,
            endTime: 24
          }
        ],
        [
          {
            startTime: 1,
            endTime: 5
          },
          {
            startTime: 7,
            endTime: 12
          },
          {
            startTime: 19,
            endTime: 22
          },
          {
            startTime: 22,
            endTime: 24
          }
        ],
        [
          {
            startTime: 2,
            endTime: 9
          },
          {
            startTime: 12,
            endTime: 15
          },
          {
            startTime: 17,
            endTime: 22
          },
          {
            startTime: 23,
            endTime: 24
          }
        ],
        [
          {
            startTime: 1,
            endTime: 5
          },
          {
            startTime: 7,
            endTime: 12
          },
          {
            startTime: 19,
            endTime: 22
          },
          {
            startTime: 22,
            endTime: 24
          }
        ],
        [
          {
            startTime: 2,
            endTime: 9
          },
          {
            startTime: 12,
            endTime: 15
          },
          {
            startTime: 17,
            endTime: 22
          },
          {
            startTime: 23,
            endTime: 24
          }
        ],
        [
          {
            startTime: 1,
            endTime: 5
          },
          {
            startTime: 7,
            endTime: 12
          },
          {
            startTime: 19,
            endTime: 22
          },
          {
            startTime: 22,
            endTime: 24
          }
        ]
      ]
    };
  },
  methods: {
    handleRight() {
      if (this.num > 0) this.num--;
    },
    handleLeft() {
      if (this.num < 18) this.num++;
    }
  },
  mounted() {
    var date = new Date();
    this.hours = date.getHours();
    this.num = this.hours - 2;
  },
  computed: {
    ulWidth() {
      return 122.5 * 24 + "px";
    },
    moveDirection() {
      return -this.num * 122.5;
    }
  }
};
</script>

<style scoped>

.table-date {
  width: 45%;
  height: 400px;
  position: absolute;
  display: inline-block;
  overflow: hidden;
}
.header,
.main-outner {
  height: 47px;
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.header-ul {
  height: 47px;
  display: flex;
  position: absolute;
  transition: 1s all;
}
.header-ul {
  background-color: #ccc;
  left: 50px;
}
.main-ul {
  display: flex;
  transition: 1s all;
}
.header-ul li,
.el-icon-arrow-left,
.el-icon-arrow-right {
  height: 47px;
  line-height: 47px;
  text-align: center;
  cursor: pointer;
}
.header-ul li {
  width: 122.5px;
}
.el-icon-arrow-left,
.el-icon-arrow-right {
  width: 50px;
  background-color: beige;
  position: absolute;
  z-index: 999;
}
.el-icon-arrow-right {
  right: 0;
  top: 0;
}
.active {
  background-color: aqua;
}
.main {
  position: absolute;
  height: 353px;
}
.ul-inner {
  position: absolute;
  padding: 11px 0;
}
.main-ul:hover {
  transition: 0.7s all;
  background-color: #f5f5f5;
}
.showdow{
  position: relative;
  bottom: 0;
  left: 50px;
  width: 100%;
  transition: 1s all;
  height: 353px;
}
.line{
  position: absolute;
  height: 353px;
  border-right: 1px solid black;
  background-color: rgba(175,238,238,0.3)
}
</style>
