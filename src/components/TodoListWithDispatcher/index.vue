<template>
  <div>
    <AddTodoForm
      :todos="todos"
      @addTodo="addTodo"
      :inputStyle="inputStyle"
      :addBtnStyle="addBtnStyle"
    />
    <TodoList
      :todos="todos"
      :addCount="addCount"
      :removeCount="removeCount"
      :tipStyle="tipStyle"
    />
  </div>
</template>

<script setup>
import AddTodoForm from "./AddTodoForm.vue";
import TodoList from "./TodoList.vue";
import { onMounted, provide } from "vue";
import {
  INI_TODOS,
  reducer,
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_STYLE,
  UPDATE_ITPCSS,
} from "./store";

const {
  todos,
  addCount,
  removeCount,
  todoDispatch,
  inputStyle,
  addBtnStyle,
  tipStyle,
} = reducer();

const addTodo = todoDispatch(ADD_TODO);
const updateInputStyle = todoDispatch(UPDATE_STYLE);
const updateTipStyle = todoDispatch(UPDATE_ITPCSS);

onMounted(() => {
  todoDispatch(INI_TODOS)();
});

provide("todoHandlers", {
  toggleTodo: todoDispatch(TOGGLE_TODO),
  removeTodo: todoDispatch(REMOVE_TODO),
  updateInputStyle,
  updateTipStyle,
});
</script>
