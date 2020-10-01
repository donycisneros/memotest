<template>
  <div class="memotest">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Memotest",
  props: {
    title: String
  }
}
</script>

<style scoped>
  h1 {
    color: #000;
  }
</style>
