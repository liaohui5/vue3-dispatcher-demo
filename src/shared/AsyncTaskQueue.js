"use strict";

import { TaskQueue } from ".";

export default class AsyncTaskQueue {
  constructor(asyncTask, taskItems) {
    this.asyncTask = asyncTask; // 必须是 Promise
    this.taskQueue = new TaskQueue(taskItems);
  }

  // 执行任务队列中的所有任务
  execute(state, payload) {
    this.asyncTask(state, payload)
      .then((res) => this.taskQueue.execute(state, payload, res))
      .catch(this.onError);
  }

  // 如果异步任务 reject
  onError(e) {
    console.log("[AsyncTaskQueue error]: ", e);
  }
}
