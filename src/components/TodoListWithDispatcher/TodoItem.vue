<template>
  <div>
    <input type="checkbox" @change="toggleStatus" :checked="todo.completed" />
    <span :style="todoStyle">{{ todo.content }}</span>
    <button @click="removeTodo">删除</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, inject, computed } from "vue";

// provide from: TodoList/index.vue
const handlers = inject("todoHandlers");
const emit = defineEmits(["removeTodo", "toggleTodo"]);
const props = defineProps({
  todo: {
    type: Object,
    default: () => ({}),
  },
});

const todoStyle = computed(() => {
  return props.todo.completed ? "text-decoration:line-through;color:red;" : "";
});

const removeTodo = () => handlers.removeTodo(props.todo.id);

const toggleStatus = () => {
  handlers.toggleTodo({ id: props.todo.id, completed: !props.todo.completed });
};
</script>
