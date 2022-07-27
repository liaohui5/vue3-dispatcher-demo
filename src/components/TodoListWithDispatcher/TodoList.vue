<template>
  <div>
    <div>添加了 {{ addCount }} 个, 删除了 {{ removeCount }} 个</div>
    <div v-for="item of todos" :key="item.id">
      <!-- 向下传递 事件监听 -->
      <TodoItem :todo="item" v-bind="$attrs" />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
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
});
</script>
