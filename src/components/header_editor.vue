<template>
  <div class="editorHeader">
    <div title="后退">
      <img src="../assets/cx.png" alt="" />
    </div>
    <div title="前进">
      <img src="../assets/qj.png" alt="" />
    </div>
    <div>H1</div>
    <div>H2</div>
    <div>H3</div>
    <div>H4</div>
    <div>H5</div>
    <div>H6</div>
    <div>H7</div>
    <div title="有序列表">
      <img src="../assets/yx.png" alt="" />
    </div>
    <div title="表情">
      <img  @click="emit('change-sate',true)" src="../assets/bq.png" alt="" />
    </div>
  </div>
</template>
<script setup>
const emit = defineEmits(["change-sate"]);
</script>
<style>
@import "../assets/css/editor.css";
</style>
