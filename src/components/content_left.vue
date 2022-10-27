<template>
    <div class="editorLeft">
        <div class="oneLine">
            <div class="lineLeft">
                <div v-for="item in lineNum">{{item}}</div>
            </div>
            <div class="lineRight" ref="lineRight" @keydown="divKeyDown" @input="divInput" @click="editTextClick"  contenteditable="true">
                 <div id="line"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
     let lastDiv = ref('')
     let lineNum = ref(0)
     const lineRight = ref('lineRight')
     onMounted(()=>{
         jsLine()
     })
     const jsLine = ()=>{
        let num = lineRight.value.innerHTML.split('id="line"').length-1
        lineNum.value = num
     }
     const editTextClick =(e)=>{
        console.log(e,'触发了点击事件')
        lighHeight(e)
     }
     const lighHeight =(e)=>{
        if(e.path[1].className==='lineRight'){
            let el = e.path[0]
            if(lastDiv.value==''){
                console.log(e,'这里是空值')
                lastDiv.value = el
                el.style.backgroundColor = 'rgb(99, 96, 96)'
            }else{
                console.log('这里有值')
                lastDiv.value.style.backgroundColor = 'rgb(56, 55, 55)'
                el.style.backgroundColor = 'rgb(99, 96, 96)'
                lastDiv.value = el
            }
            console.log(el.innerHTML)            
        }
     }
     const divInput = (e)=>{
        jsLine()
     }
     const divKeyDown = (e)=>{
        if(e.keyCode === 13){
            if(lastDiv.value!==''){
                lastDiv.value.style.backgroundColor = 'rgb(56, 55, 55)'
                lastDiv.value = e.path[0]
                // lighHeight(e)
                console.log('回车了')                
            }

        }
     }
</script>
<style>

</style>