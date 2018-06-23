<template>
  <div>
    <h1>테스트 :)</h1>
    <child-component></child-component>
  </div>
</template>

<script>
  import Child from './components/Child.vue';

  export default {
    components: {'child-component': Child},
    name: 'app',
    data: () => {
      return {};
    }
  }
</script>

<style scoped>
</style>