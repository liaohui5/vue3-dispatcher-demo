"use strict";

export function initTodos(state, { res, payload }) {
  state.todos = res.data;
}

export function addTodo(state, { res, payload }) {
  state.todos.push(res.data);
}

export function removeTodo(state, { res, payload }) {
  state.todos = state.todos.filter((item) => item.id !== payload.id);
}

export function toggleTodo(state, { res, payload }) {
  const { id, completed } = payload;
  state.todos = state.todos.map((item) => {
    if (item.id === id) {
      item.completed = completed;
    }
    return item;
  });
}

export function updateAddCount(state, { res, payload }) {
  state.addCount++;
}

export function updateRemoveCount(state, { res, payload }) {
  state.removeCount++;
}
