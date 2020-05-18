<template>
  <div>
    小明的爸爸现在有{{money}}元
    <br>
    <br>
    <h2>不使用sync修改符</h2>
    <Child :money="money" @update:money="money=$event"/>
    <br>
    <br>
    <h2>使用sync修改符</h2>
    <child :money.sync="money"/>
    <br>
    <br>
    <h2>使用v-model修改符</h2>
    <Child2 v-model="money"/>
    <hr>
  </div>
</template>

<script type="text/ecmascript-6">
  import Child from './Child.vue'
  import Child2 from './Child2.vue'
  export default {
    name: 'SyncTest',
    data(){
      return{
        money: 1000
      }
    },
    components: {
      Child,
      Child2
    }
  }
</script>
