"use strict";

import { taskQueueGenerator } from "@/shared";
import { ADD_TODO, INI_TODOS, REMOVE_TODO, TOGGLE_TODO } from "../actionTypes";
import {
  initTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  updateAddCount,
  updateRemoveCount,
} from "./tasks";

import { TodoService } from "@/services";

// 获取Todos
const initTodoQueue = taskQueueGenerator(TodoService.getTodos, [initTodos]);

// 添加Todo
const addTodoQueue = taskQueueGenerator(TodoService.addTodo, [
  addTodo,
  updateAddCount,
]);

// 删除Todo
const removeTodoQueue = taskQueueGenerator(TodoService.removeTodo, [
  removeTodo,
  updateRemoveCount,
]);

// 切换Todo
const toggleQueue = taskQueueGenerator(TodoService.toggleTodo, [toggleTodo]);

// 集合
const taskPool = {
  [INI_TODOS]: initTodoQueue,
  [ADD_TODO]: addTodoQueue,
  [REMOVE_TODO]: removeTodoQueue,
  [TOGGLE_TODO]: toggleQueue,
};

export default taskPool;
