<template>
  <div class="need-list">
    <div class="need-list-inner">
      <el-table
        :data="tableData"
        height="400"
        style="width:100%;"
        :header-cell-style="headerCellStyle"
      >
        <el-table-column align="center" prop="num" label="设备编号"></el-table-column>
        <el-table-column align="center" prop="date" label="商品编号"></el-table-column>
        <el-table-column align="center" prop="productNum" label="生产数量"></el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: "NeedList",
  data() {
    return {
      headerCellStyle: {
        background: "#ccc"
      },
      tableData: [
        {
          num: "ACD9",
          date: "2019-06-26",
          productNum: "30"
        },
        {
          num: "ACD9",
          date: "2019-06-26",
          productNum: "30"
        },
        {
          num: "ACD9",
          date: "2019-06-26",
          productNum: "30"
        },
        {
          num: "ACD9",
          date: "2019-06-26",
          productNum: "30"
        },
        {
          num: "ACD9",
          date: "2019-06-26",
          productNum: "30"
        },
        {
          num: "ACD9",
          date: "2019-06-26",
          productNum: "30"
        },
          {
          num: "ACD9",
          date: "2019-06-26",
          productNum: "30"
        }
      ]
    };
  }
};
</script>

<style scoped>

</style>
