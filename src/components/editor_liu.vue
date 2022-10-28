<template>
    <headerEdit @change-sate="changeState" @labelEle = "inserHlAbel"></headerEdit>
    <emojiEditor v-if="state" @change-sate="changeState" ></emojiEditor>
    <div class="content">
        <contentLeft ref="childEmoji"></contentLeft>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import headerEdit from './header_editor.vue'
import emojiEditor from './emoji_editor.vue'
import contentLeft from './content_left.vue'
let state = ref(false)
const childEmoji = ref(null)
const changeState = (val)=>{
    state.value = val
}
const inserHlAbel = (num)=>{
    childEmoji.value.insertHLabel(num)
}
</script>
<style>
@import "../assets/css/editor.css";
</style>
