<template>
  <div class="detailTop">
    <div class="innerTop">
      <h3>{{DetailTableData.title}}</h3>
      <ul>
        <li v-for="(item,index) in DetailTableData.th" :key="index">{{item}}</li>
      </ul>
      <ul v-for="(item,index) in DetailTableData.tr" :key="index">
        <li>
          <p>{{item.tdheader}}</p>
        </li>
        <li v-for="(tdData,index) in item.td" :key="index">
          <div class="circle" :style="{background:item.color[index]}"></div>
          <h1>{{tdData}}</h1>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTop",
  props: {
    DetailTableData: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  methods: {}
};
</script>

<style scoped>
/* 4 12 */
.detailTop {
  width: 100%;
  height: 100%;
  padding: 0.2rem;
  background-color: #fff;
  box-sizing: border-box;
  margin-bottom: 0.09rem;
}
.detailTop h3 {
  margin-bottom: 0.23rem;
}
.innerTop {
  width: 100%;
  height: 100%;
  padding-bottom: 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
ul:nth-of-type(1) {
  font-size: 0.16rem;
}
ul:nth-of-type(2),
ul:nth-of-type(3) {
  height: 1.3rem;
}
ul:nth-of-type(3) {
  background-color: #f8f8f8;
}
li {
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 1.5rem;
  font-size: 0.2rem;
}
h1 {
  margin: 0;
}
.circle {
  width: 0.14rem;
  height: 0.14rem;
  border-radius: 50%;
  margin: 0.1rem auto;
}
</style>
