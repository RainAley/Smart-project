<template>
  <div>
    <header>
      <div class="MainHome-left">
        <h3>生产效能</h3>
      </div>
      <div class="MainHome-right">
        <p>2019-09-23</p>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "DetailHeader"
};
</script>

<style scoped>
header {
  width: 100%;
  height: 0.71rem;
  background-color: #e5e5e5;
  display: flex;
  justify-content: space-between;
  font-size: .16rem;
}
.MainHome-left {
  width: 8rem;
  height: 0.71rem;
  display: flex;
  align-items: center;
}
.MainHome-left h3 {
  margin-left: 0.5rem;
  letter-spacing: 0.1rem;
  font-size: .25rem;
}
.MainHome-right {
  width: 3rem;
  height: 0.71rem;
  display: flex;
  align-items: center;
}
.MainHome-right p {
  margin-right: 0.39rem;
}
</style>
