<template>
  <div>
    <TypeNav/>
    <h2>params参数: keyword={{$route.params.keyword}}</h2>
    <h2>query参数: categoryName={{$route.query.categoryName}}</h2>
    <h2>query参数: category1Id={{$route.query.category1Id}}</h2>
    <h2>query参数: category2Id={{$route.query.category2Id}}</h2>
    <h2>query参数: category3Id={{$route.query.category3Id}}</h2>

  </div>
</template>

<script>
export default {
  name: 'Search',
  props:['keyword3', 'keyword4']
}
</script>

<style lang="less" scoped></style>
