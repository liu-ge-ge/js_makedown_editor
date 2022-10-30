<template>
  <div class="all">
    <div class="emoji_editor">
      <div class="header">
        <text>emoji表情</text>
        <text @click="emit('change-sate', false)">关闭</text>
      </div>
      <div class="emojiList" ref="emojiList" v-html="strHtml"></div>
      <div class="bottom">
        <div class="emoSelect" ref="emoSelect" @click="delClick"></div>
        <button @click="insertDom">确认插入</button>
        <button @click="emoSelect.innerHTML = ''">清空</button>
      </div>
      <div class="prompt">当你点击一次没有删除成功的时候,可以尝试再次点击!</div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { isNumber } from "../utils/index";
const emit = defineEmits(["change-sate"]);
let strHtml = ref("");
const emoSelect = ref();
let emoArr = ref([]);
let arr = ref([]);
let classNum = ref(0);
onMounted(() => {
  makeEmoji();
  document.addEventListener("click", (e) => {
    let str = e.path[0].getAttribute("data-val");
    let classVal = e.target.className;
    //这是点击了要插入框的内容进行删除的
    if (isNumber(classVal)) {
      console.log('点击了插入的')
      emoArr.value.splice(classVal, 1);
      let htmlStr = "";
      for (let i = 0; i < emoArr.value.length; i++) {
        let val = emoArr.value[i];
        htmlStr += `<p title="点击删除" class="${i}">&#${val};</p>`;
      }
      emoSelect.value.innerHTML = htmlStr;
    }
    //这里是组合内容渲染
    if (str) {
      let str2 = `<p title="点击删除" class="${
        classNum.value
      }">&#${e.path[0].getAttribute("data-val")};</p>`;
      classNum.value += 1;
      emoSelect.value.innerHTML += str2;
      emoArr.value.push(str);
    }
  });
});
const makeEmoji = () => {
  for (let i = 0; i < 200; i++) {
    arr.value.push(`<p data-val='${128000 + i}'>&#${128000 + i};</p>`);
  }
  strHtml.value = arr.value.join("\n");
};

const delClick = (e) => {
  console.log(e, "eeeeee");
  // console.log(emoSelect.value.innerText.length,'text')
};
</script>
<style>
@import "../assets/css/headerEditor.css";
</style>
