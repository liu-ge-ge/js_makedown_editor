<template>
  <div class="editorHeader">
    <div title="后退">
      <img src="../assets/cx.png" alt="" />
    </div>
    <div title="前进">
      <img src="../assets/qj.png" alt="" />
    </div>
    <div @click="emit('labelEle',1)">H1</div>
    <div @click="emit('labelEle',2)">H2</div>
    <div @click="emit('labelEle',3)">H3</div>
    <div @click="emit('labelEle',4)">H4</div>
    <div @click="emit('labelEle',5)">H5</div>
    <div @click="emit('labelEle',6)">H6</div>
    <div @click="emit('labelEle',7)">H7</div>
    <div title="有序列表">
      <img src="../assets/yx.png" alt="" />
    </div>
    <div title="表情">
      <img  @click="emit('change-sate',true)" src="../assets/bq.png" alt="" />
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["change-sate","labelEle"]);
</script>
<style>
@import "../assets/css/editor.css";
</style>
