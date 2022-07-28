"use strict";
import TaskQueue from "./TaskQueue";
import AsyncTaskQueue from "./AsyncTaskQueue";

class TaskMgr {
  constructor() {
    this.instance = null;
  }

  // 创建同步任务队列
  createTaskQueue(tasks) {
    return new TaskQueue(tasks);
  }

  // 创建异步任务队列
  createAsyncTaskQueue(asyncTask, tasks) {
    return new AsyncTaskQueue(asyncTask, tasks);
  }

  // 通知队列执行对应 type 的任务
  notify(type, taskPool) {
    return function (state, payload) {
      for (let [key, val] of Object.entries(taskPool)) {
        type === key && val.execute(state, payload);
      }
    };
  }

  // 单例
  static getInstance() {
    if (!this.instance) {
      this.instance = new TaskMgr();
    }
    return this.instance;
  }
}

export default TaskMgr.getInstance();
