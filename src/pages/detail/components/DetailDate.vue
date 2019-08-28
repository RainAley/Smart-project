<template>
  <div class="detailDate">
    <h2>劳动生产需求规划</h2>
    <p>(人力总数)</p>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Mon</th>
          <th>Tues</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>早饭</td>
          <td>500</td>
          <td>300</td>
          <td>400</td>
          <td>350</td>
          <td>300</td>
          <td>250</td>
        </tr>
        <tr>
          <td>午饭</td>
          <td>500</td>
          <td>300</td>
          <td>400</td>
          <td>350</td>
          <td>300</td>
          <td>250</td>
        </tr>
        <tr>
          <td>晚饭</td>
          <td>500</td>
          <td>300</td>
          <td>400</td>
          <td>350</td>
          <td>300</td>
          <td>250</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailDate"
};
</script>

<style scoped>
.detailDate {
  width: 0;
  flex: 1;
  height: 100%;
  background-color: #fff;
  padding: 0.2rem 0.29rem;
  box-sizing: border-box;
}
table {
  width: 100%;
  text-align: center;
}

thead th {
  background-color: #646464;
  text-align: center;
  line-height: 0.47rem;
  width: 0.78rem;
  height: 0.47rem;
  color: #fff;
}
thead th:nth-child(1) {
  width: 0.88rem;
}
tbody tr {
  width: 100%;
  height: 0.8rem;
}
tbody tr:nth-child(2){
  border-top: 0.03rem solid #fff;
  border-bottom: 0.03rem solid #fff;
}
tbody td {
  width: 0.71rem;
  height: 100%;
  line-height: 0.8rem;
}
tbody td:nth-child(odd) {
  background-color: #ccc;
}
tbody td:nth-child(even) {
  background-color:#FFF68F;
}
p {
  text-align: right;
  margin-bottom: 0.06rem;
}
</style>
