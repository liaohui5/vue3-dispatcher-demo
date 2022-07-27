"use strict";
import { TodoService } from "@/services";

export default function actions(state) {
  async function initTodos(payload) {
    const res = await TodoService.getTodos(payload);
    if (res.code !== 0) return;
    state.todos = res.data;
  }

  function addTodo(content) {
    TodoService.addTodo({ content }).then((res) => {
      state.todos.push(res.data);
      addCount();
    });
  }

  function removeTodo(id) {
    TodoService.removeTodo(id).then(() => {
      state.todos = state.todos.filter((item) => item.id !== id);
      removeCount();
    });
  }

  function toggleTodo({ id, completed }) {
    TodoService.toggleTodo({ id, completed }).then(() => {
      state.todos = state.todos.map((item) => {
        if (item.id === id) {
          item.completed = completed;
        }
        return item;
      });
    });
  }

  function addCount() {
    state.addCount++;
  }

  function removeCount() {
    state.removeCount++;
  }

  return {
    initTodos,
    addTodo,
    removeTodo,
    toggleTodo,
  };
}
