<template>
  <div>
    <h3>{{message}}</h3>
    <button class="click-btn" @click="changeText">클릭 :)</button>
  </div>
</template>

<script>
  export default {
    name: 'child-component',
    methods: {
      changeText: function () {
        this.message = "얍얍"
      }
    },
    data () {
      return {
        message: '테스트'
      }
    }
  }
</script>

<style scoped>
</style>