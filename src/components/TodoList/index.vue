<template>
  <div>
    <add-todo :todos="state.todos" @addTodo="addTodoItem" />
    <todo-list
      :todos="state.todos"
      :addCount="state.addCount"
      :removeCount="state.removeCount"
    />
  </div>
</template>

<script setup>
import { onBeforeMount } from "vue";
import AddTodo from "./AddTodo.vue";
import TodoList from "./TodoList.vue";
import { reactive, provide } from "vue";
import { TodoService } from "@/services";

const state = reactive({
  addCount: 0,
  removeCount: 0,
  todos: [],
});

onBeforeMount(() => {
  TodoService.getTodos().then((res) => {
    if (res.code !== 0) return;
    state.todos = res.data;
  });
});

function addTodoItem(content) {
  TodoService.addTodo({ content }).then((res) => {
    state.todos.push(res.data);
    state.addCount += 1;
  });
}

function toggleTodo({ id, completed }) {
  TodoService.toggleTodo({ id, completed }).then(() => {
    for (const item of state.todos) {
      if (item.id === id) {
        item.completed = completed;
        break;
      }
    }
  });
}

function removeTodo(id) {
  TodoService.removeTodo(id).then(() => {
    state.todos = state.todos.filter((item) => item.id !== id);
    state.removeCount += 1;
  });
}

provide("todoHandlers", {
  toggleTodo,
  removeTodo,
});
</script>
