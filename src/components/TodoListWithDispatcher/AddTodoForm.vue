<template>
  <div>
    <input type="text" v-model="content" />
    <button @click="addTodo">添加</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(["addTodo"]);
const content = ref("");
const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
});

function addTodo() {
  const todoContent = content.value.trim();
  if (!todoContent) {
    return;
  }
  for (const item of props.todos) {
    if (item.content === todoContent) {
      alert("任务已经存在");
      return;
    }
  }
  emit("addTodo", todoContent);
}
</script>
