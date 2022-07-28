<template>
  <div>
    <div>
      <p :style="tipStyle">
        添加了 {{ addCount }} 个, 删除了 {{ removeCount }} 个
      </p>
      <button @click="updateInputStyle">修改 input 框和添加按钮样式</button>
      <button @click="updateTipStyle">修改tips 样式</button>
    </div>
    <div v-for="item of todos" :key="item.id">
      <!-- 向下传递 事件监听 -->
      <TodoItem :todo="item" v-bind="$attrs" />
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject } from "vue";
import TodoItem from "./TodoItem.vue";
const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
  addCount: {
    type: Number,
    default: 0,
  },
  removeCount: {
    type: Number,
    default: 0,
  },
  tipStyle: {
    type: String,
    default: "",
  },
});

const { updateInputStyle, updateTipStyle } = inject("todoHandlers");
</script>
