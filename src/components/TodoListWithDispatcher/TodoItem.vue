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

// 注: 不能直接这样解构: {id, completed} = props.todo  然后再
// toggleStatus 和 computed 中使用, 如果直接那样解构, 就会导致:
// 在回调函数中的是 值引用, 从而无法获取最新的值, 所以必须要 址引用
const { todo } = props;

const todoStyle = computed(() => {
  return todo.completed ? "text-decoration:line-through;color:red;" : "";
});

const removeTodo = () => handlers.removeTodo({ id: todo.id });

const toggleStatus = () => {
  handlers.toggleTodo({ id: todo.id, completed: !todo.completed });
};
</script>
