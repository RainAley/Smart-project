<template>
  <div class="square">
    <header>
      <h3>产线物料需求规则</h3>
    </header>
    <div class="square-content">
      <div class="square-inner-top">
        <div class="same">
          <p>生产产能</p>
          <div class="circle"></div>
          <h1>8,000</h1>
        </div>
        <div class="same">
          <p>生产产能</p>
          <div class="circle"></div>
          <h1>8,000</h1>
        </div>
      </div>
      <div class="square-inner-bottom">
        <div class="same">
          <p>生产产能</p>
          <div class="circle"></div>
          <h1>8,000</h1>
        </div>
        <div class="same">
          <p>生产产能</p>
          <div class="circle"></div>
          <h1>8,000</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Square"
};
</script>

<style scoped>
header {
  width: 100%;
}
.square-content {
  padding-top: 0.5rem;
  box-sizing: content-box;
}
.square-inner-top,
.square-inner-bottom {
  width: 100%;
  display: flex;
}
.square-inner-bottom {
  margin-top: 0.51rem;
}

.same {
  width: 100%;
  height: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.circle {
  width: 0.14rem;
  height: 0.14rem;
  border-radius: 50%;
  background-color: red;
  margin: 0.16rem 0 0.1rem 0;
}
h1 {
  margin: 0;
}
</style>
