<template>
  <div class="layout">
    <!-- left -->
    <div class="menu">
      <Menu></Menu>
    </div>
    <!-- right -->
    <div class="content">
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Menu from "./menu/index.vue";
import Content from "./content/index.vue";
export default {
  components: {
    Menu,
    Content,
  },
};
</script>

<style lang="less" scoped>
.layout{
    .menu{
        width: 200px;
        background: pink;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
    }
    .content{
        padding-left: 200px;
    }
}
</style>
