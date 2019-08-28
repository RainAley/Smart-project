<template>
  <div class="table-list">
    <el-table :data="tableData" style="" height="795"
     row-key='id'
     :header-cell-style="headerCellStyle">
      <el-table-column
        align="center"
        v-for="(item,index) in innerList"
        :key="index"
        :prop="item.prop"
        :label="item.label"
      ></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TablelList",
  props: {
    tableData: {
      type: Array,
      default() {
        return [];
      }
    },
    innerList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      headerCellStyle: {
        background: "#ccc"
        
      }
    };
  },
  methods: {},
  mounted() {
  }
};
</script>

<style scoped>

</style>
