<template>
  <div>
    <h2>自定义带Hover提示的按钮</h2>
    <MyComponent
      xxx="abc"
      yyy="cba"
      :zzz="123"
      @input="test"
      @aaa="test2"
    ></MyComponent>
    <br />
    <HintButton
      title="添加"
      type="primary"
      icon="el-icon-plus"
      size="mini"
      @click="add"
      @xxx="test"
    ></HintButton>
    <HintButton
      title="添加"
      type="primary"
      icon="el-icon-plus"
      size="mini"
      @dblclick.native="add2"
    ></HintButton>
    <HintButton
      title="修改"
      type="info"
      icon="el-icon-edit"
      size="mini"
      @click="update"
    ></HintButton>
    <HintButton
      title="删除"
      type="danger"
      icon="el-icon-delete"
      size="small"
      @click="remove"
    ></HintButton>
  </div>
</template>

<script type="text/ecmascript-6">
import MyComponent from './MyComponent'
import HintButton from './HintButton'
export default {
  name: 'AttrsListenersTest',
  methods: {
    add(){
      alert('add()')
    },
    add2(){
      alert('双击添加')
    },
    update(){
      alert('update()')
    },
    remove(){
      alert('remove()')
    },
    test(){},
    test2(){}
  },
  components:{
    MyComponent,
    HintButton
  }
}
</script>
