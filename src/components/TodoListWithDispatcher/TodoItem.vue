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

// 注: 不能直接解构 completed 然后再 toggleStatus 和 computed 中使用,
// 如果直接解构, 就会导致, 如果 props.todo.completed 的值变化了
// 无法获取到最新的 props.todo.completed 的值, 因为此时回调函数中引用的
// 是外部的 completed 变量, 而不是 props.todo.completed 变化后的值
const { id } = props.todo;

const todoStyle = computed(() => {
  return props.todo.completed ? "text-decoration:line-through;color:red;" : "";
});

const removeTodo = () => handlers.removeTodo({ id });

const toggleStatus = () => {
  handlers.toggleTodo({ id, completed: !props.todo.completed });
};
</script>
