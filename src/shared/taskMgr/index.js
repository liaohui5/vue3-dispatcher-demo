"use strict";
import TaskQueue from "./TaskQueue";
import AsyncTaskQueue from "./AsyncTaskQueue";

// 创建同步任务队列
function createTaskQueue(tasks) {
  return new TaskQueue(tasks);
}

// 创建异步任务队列
function createAsyncTaskQueue(asyncTask, tasks) {
  return new AsyncTaskQueue(asyncTask, tasks);
}

// 通知队列执行对应 type 的任务
function notify(type, taskPool) {
  return function (state, payload) {
    for (let [key, val] of Object.entries(taskPool)) {
      type === key && val.execute(state, payload);
    }
  };
}

export default {
  createTaskQueue,
  createAsyncTaskQueue,
  notify,
};
