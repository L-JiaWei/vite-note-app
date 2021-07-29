<template>
  <n-layout class="main-n-layout">
    <textarea id="text-area" />
    <n-button @click="updateContent">保存</n-button>
  </n-layout>
    
</template>

<script setup>
import {
    NLayout,
    NLayoutHeader,
    NLayoutContent,
    NGridItem,
    NGrid,
    NH1,
    NButton,
    NButtonGroup
} from "naive-ui";
import EasyMDE from "easymde";
import { computed, onMounted, ref, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
const store = useStore();
const content = computed(()=> store.state.content);
let easymde;
onMounted(() => {
  easymde = new EasyMDE({
    element : document.getElementById("text-area"),
     toolbar: [
            "bold",
            "italic",
            "heading",
            "|",
            "quote",
            "unordered-list",
            "ordered-list",
            "|",
            "link",
            "image",
            "|",
            "preview",
        ],
        spellChecker: false,
        lineWrapping: true,
        autofocus: true,
        lineNumbers:true
  });
  if(content.value) easymde.value(content.value)
});
const updateContent = ()=>{
  store.commit("updateContent",easymde.value())
}
</script>
