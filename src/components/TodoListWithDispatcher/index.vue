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
import { onMounted, provide } from "vue";
import { useReducer } from "@/hooks";
import AddTodoForm from "./AddTodoForm.vue";
import TodoList from "./TodoList.vue";

import {
  state,
  actions,
  INI_TODOS,
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
  inputStyle,
  addBtnStyle,
  tipStyle,
  dispatch: todoDispatch,
} = useReducer(state, actions);

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
