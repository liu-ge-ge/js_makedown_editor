<template>
   <div class="all">
      <div class="emoji_editor">
         <div class="header">
            <text>emoji表情</text>
            <text  @click="emit('change-sate',false)">关闭</text>
         </div>
         <div class="emojiList" ref="emojiList" v-html="strHtml">
         </div>
      </div>      
   </div>

</template>
<script setup>
import {onMounted, ref} from 'vue'
const emit = defineEmits(["change-sate"]);
    let strHtml = ref('')
    let arr = ref([])
    onMounted(()=>{
       makeEmoji()
       document.addEventListener('click',e=>{
         let str = e.path[0].getAttribute("data-val")
         if(str){
            console.log(e.path[0].getAttribute("data-val"))
         }
         
       })
    })
   const makeEmoji = ()=>{
      for(let i=0;i<200;i++){
         arr.value.push(`<p data-val='${128000+i}'>&#${128000+i};</p>`)
      }
      strHtml.value = arr.value.join('\n')
    }
    
</script>
<style>
@import '../assets/css/headerEditor.css';
</style>