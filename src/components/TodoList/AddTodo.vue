<template>
  <div>
    <input type="text" v-model="state.content" placeholder="请输入要做的事情" />
    <button @click="addTodo">添加</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive } from "vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});
const emits = defineEmits(["addTodo"]);
const state = reactive({
  content: "",
});

function addTodo() {
  const content = state.content.trim();
  if(!content) return;
  for (const todo of props.todos) {
    if (todo.content === content) {
      alert("任务已经存在, 无需重复添加");
      return;
    }
  }
  emits("addTodo", content);
  state.content = "";
}
</script>
