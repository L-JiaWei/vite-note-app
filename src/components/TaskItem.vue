<template>
    <n-list-item class="task-item-wrapper">
        <template #prefix>
            <n-icon size="16">
                <drag-indicator-outlined />
            </n-icon>
        </template>
        <swiper
            :initial-slide="0"
            :slides-per-view="1"
            :resistance-ratio="0"
            :speed="200"
            @transitionEnd="onTransitionEnd"
        >
            <!-- <swiper-slide>完成</swiper-slide> -->
            <swiper-slide>{{ task.content }}</swiper-slide>
            <swiper-slide class="delete-slide">删除</swiper-slide>
        </swiper>
    </n-list-item>
</template>

<script setup>
import { defineProps, defineEmit } from "vue";
import "swiper/swiper.min.css";
import { Swiper, SwiperSlide } from "swiper/vue";
import { NListItem, NIcon } from "naive-ui";
import { DragIndicatorOutlined } from "@vicons/material";

const props = defineProps({
    task: Object,
    taskIndex: Number,
});
const emit = defineEmit(["delete"]);

const onTransitionEnd = (instance) => {
    const { activeIndex } = instance;
    if (activeIndex === 1) {
        emit("delete");
        instance.destory();
    }
};
</script>

<style lang="postcss">
.task-item-wrapper {
    padding: 0 !important;
    border: 1px solid var(--merged-border-color);
    cursor: move;

    & .n-list-item__prefix {
        margin: 0px !important;
        padding: 8px;
        display: flex;
    }

    & .swiper-container {
        width: 100%;
        height: 100%;
        cursor: default;
    }

    & .swiper-slide {
        padding: 8px 0;
        display: flex;
        align-items: center;
        width: 100% !important;
    }

    & .delete-slide {
        color: white;
        background: tomato;
        padding-left: 16px;
        justify-content: flex-start;
    }
}

.task-item-wrapper:not(:last-child) {
    border-bottom: none !important;
}
</style>