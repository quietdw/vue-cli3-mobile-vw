<template>
  <div id="app">
    <div class="box">
      我是 vw 布局
      <mt-radio title="单选框列表" :value.sync="value" :options="['选项A', '选项B', '选项C']"></mt-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>


<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
</style>
<style lang="scss" >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
