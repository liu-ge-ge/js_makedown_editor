<template>
    <headerEdit @change-sate="changeState"></headerEdit>
    <emojiEditor v-if="state" @change-sate="changeState"></emojiEditor>
    <div class="content">
        <contentLeft></contentLeft>
        <contentRight></contentRight>
    </div>
</template>
<script setup>
import {ref} from 'vue'
import headerEdit from './header_editor.vue'
import emojiEditor from './emoji_editor.vue'
import contentRight from './content_right.vue'
import contentLeft from './content_left.vue'
let state = ref(false)
const changeState = (val)=>{
    state.value = val
    console.log(val)
}
</script>
<style>
@import "../assets/css/editor.css";
</style>
