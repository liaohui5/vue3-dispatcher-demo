<template>
  <div>
    <input type="checkbox" :checked="todo.completed" @change="toggleTodo" />
    <span :style="todoStyle">{{ todo.content }}</span>
    <button @click="removeTodo">删除</button>
  </div>
</template>

<script setup>
import { defineProps, inject, computed } from "vue";

// from: TodoList/index.vue
const handlers = inject("todoHandlers");
const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
});

const todoStyle = computed(() => {
  return props.todo.completed
    ? "text-decoration:line-through;color:red;"
    : "";
});

function toggleTodo() {
  handlers.toggleTodo({
    id: props.todo.id,
    completed: !props.todo.completed,
  });
}

function removeTodo() {
  handlers.removeTodo(props.todo.id);
}
</script>
