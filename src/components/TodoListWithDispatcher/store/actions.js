"use strict";

import { taskMgr } from "@/shared";
import {
  ADD_TODO,
  INI_TODOS,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_ITPCSS,
  UPDATE_STYLE,
} from "./actionTypes";
import {
  initTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  updateAddCount,
  updateRemoveCount,
  log,
  updateAddBtnStyle,
  updateInputStyle,
  updateTipStyle,
} from "./tasks";

import { TodoService } from "@/services";

// 获取Todos
const initTodoQueue = taskMgr.createAsyncTaskQueue(TodoService.getTodos, [
  initTodos,
]);

// 添加Todo
const addTodoQueue = taskMgr.createAsyncTaskQueue(TodoService.addTodo, [
  addTodo,
  updateAddCount,
  log,
]);

// 删除Todo
const removeTodoQueue = taskMgr.createAsyncTaskQueue(TodoService.removeTodo, [
  removeTodo,
  updateRemoveCount,
  log,
]);

// 切换Todo
const toggleQueue = taskMgr.createAsyncTaskQueue(TodoService.toggleTodo, [
  toggleTodo,
]);

// 更新 todo 组件样式
const updateStyleQueue = taskMgr.createTaskQueue([
  updateAddBtnStyle,
  updateInputStyle,
  log,
]);

// 更新 tips 样式
const updateTipQueue = taskMgr.createTaskQueue([updateTipStyle, log]);

// 集合
const taskPool = {
  [INI_TODOS]: initTodoQueue,
  [ADD_TODO]: addTodoQueue,
  [REMOVE_TODO]: removeTodoQueue,
  [TOGGLE_TODO]: toggleQueue,
  [UPDATE_STYLE]: updateStyleQueue,
  [UPDATE_ITPCSS]: updateTipQueue,
};

export default taskPool;
