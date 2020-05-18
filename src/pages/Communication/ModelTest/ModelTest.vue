<template>
  <div>
    <h2>深入v-model</h2>

    <input type="text" v-model="name1">
    <span>{{name1}}</span>
    <br>
    <input type="text" :value="name2" @input="name2=$event.target.value">
    <span>{{name2}}</span>
    <br>
    <br>
    <CustomInput v-model="name3"/>
    <span>{{name3}}</span>
    <br>
    <br>
    <CustomInput :value="name4" @input="name4=$event"/> 
    <span>{{name4}}</span>
  </div>
</template>

<script type="text/ecmascript-6">
  import CustomInput from './CustomInput.vue'
  export default {
    name: 'ModelTest',
    data(){
      return{
        name1: '李易峰',
        name2: '杨紫',
        name3: '张一山',
        name4: '小房子'
      }
    },
    components: {
      CustomInput
    }
  }
</script>
