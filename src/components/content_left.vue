<template>
  <div class="editorLeft">
    <div class="oneLine">
      <div class="lineLeft">
        <div v-for="item in lineNum">{{ item }}</div>
      </div>
      <div
        class="lineRight"
        ref="lineRight"
        @keydown="divKeyDown"
        @input="divInput"
        @click="editTextClick"
        contenteditable="true"
      >
        <div id="line"></div>
      </div>
    </div>
    <div class="editorRight" ref="editorRight"></div>
  </div>
</template>
<script setup>
import {creHlabel,forcuDiv} from '../utils/index'
import {onMounted,ref} from 'vue'
import {htmlRes} from '../utils/js_markdown'
let lastDiv = ref("");
let lineNum = ref(0);
const lineRight = ref("lineRight");
const editorRight = ref("editorRight");
onMounted(() => {
  jsLine();
});
const jsLine = () => {
  let num = lineRight.value.innerHTML.split('id="line"').length - 1;
  lineNum.value = num;
};
const editTextClick = (e) => {
  lighHeight(e);
};
//行高亮
const lighHeight = (e) => {
  if (e.path[1].className === "lineRight") {
    let el = e.path[0];
    if (lastDiv.value == "") {
      lastDiv.value = el;
      el.style.backgroundColor = "rgb(99, 96, 96)";
    } else {
      lastDiv.value.style.backgroundColor = "rgb(56, 55, 55)";
      el.style.backgroundColor = "rgb(99, 96, 96)";
      lastDiv.value = el;
    }
  }
};
//可编辑div
const divInput = (e) => {
  jsLine();
};
//回车
const divKeyDown = (e) => {
  if (e.keyCode === 13) {
    console.log('回车里')
    console.log(lineRight.value.innerText,'innerText')
    let content = htmlRes(lineRight.value.innerText)
    console.log(content.join(' '),'一个数组')
    editorRight.value.innerHTML = content.join(' ');
    if (lastDiv.value !== "") {
      lastDiv.value.style.backgroundColor = "rgb(56, 55, 55)";
      lastDiv.value = e.path[0];
    }
  }
};
//向可编辑div插入h标签
const insertHLabel = (num) => {
  let lastEle = lineRight.value.lastElementChild;
  if (lastEle.innerHTML.trim() === "<br>") {
    lastEle.innerHTML = " " + creHlabel(num);
  } else {
    lastEle.innerHTML = lastEle.innerHTML + " " + creHlabel(num);
  }
  forcuDiv(lastEle)
};

defineExpose({ insertHLabel });
</script>
<style></style>
