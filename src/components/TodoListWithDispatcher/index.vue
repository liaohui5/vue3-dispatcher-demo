<template>
  <div>
    <AddTodoForm :todos="todos" @addTodo="addTodo" />
    <TodoList :todos="todos" :addCount="addCount" :removeCount="removeCount" />
  </div>
</template>

<script setup>
import AddTodoForm from "./AddTodoForm.vue";
import TodoList from "./TodoList.vue";
import { onMounted, provide } from "vue";
import { INI_TODOS, reducer } from "./store";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./store";

const { todos, addCount, removeCount, todoDispatch } = reducer();

const addTodo = todoDispatch(ADD_TODO);

onMounted(() => {
  todoDispatch(INI_TODOS)();
});

provide("todoHandlers", {
  toggleTodo: todoDispatch(TOGGLE_TODO),
  removeTodo: todoDispatch(REMOVE_TODO),
});
</script>
