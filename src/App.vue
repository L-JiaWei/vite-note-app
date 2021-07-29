<template>
    <div id="app">
        <n-layout>
            <n-layout-header>
                <h1>note</h1>
                <n-button-group>
                    <n-button @click="on1"> {{routeName}} </n-button>
                </n-button-group>
            </n-layout-header>
            <n-layout-content>
                <router-view />
            </n-layout-content>
        </n-layout>
    </div>
</template>

<script setup>
import { computed } from "@vue/runtime-core";
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
import { useRouter,useRoute } from "vue-router";
const router = useRouter()
const route = useRoute();
const routeName = computed(() => {
    if(route.name === "preview") return "编辑"
    if(route.name === "Editview") return "预览"
})
const on1 = ()=>{
    if(route.name === "preview") { router.push("Editview")}
    if(route.name === "Editview") { router.push("preview")}
    
}


</script>

<style lang="postcss" scoped>
#app {
    background: #f5f5f5;

    & .n-layout-header {
        text-align: center;
        border-bottom: 1px solid #e6e6e6;
    }

    & .n-layout-content {
        margin:  auto;
        padding: 16px;
        max-width: 360px;
        
    }
    & .n-button {
    margin: 10px;
  }
}
</style>
