<template>
  <div>
    <input type="text" v-model="todoContent" :style="inputStyle" />
    <button @click="addTodo" :style="addBtnStyle">添加</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

const emit = defineEmits(["addTodo"]);
const todoContent = ref("");
const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
  inputStyle: {
    type: String,
    default: "",
  },
  addBtnStyle: {
    type: String,
    default: "",
  },
});

function addTodo() {
  const content = todoContent.value.trim();
  if (!content) {
    return;
  }
  for (const item of props.todos) {
    if (item.content === content) {
      alert("任务已经存在");
      return;
    }
  }
  emit("addTodo", { content });
  todoContent.value = "";
}
</script>
