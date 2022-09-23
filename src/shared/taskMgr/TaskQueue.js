"use strict";

export default class TaskQueue {
  constructor(tasks) {
    // 必须是可迭代对象
    this.taskQueue = tasks;
  }

  // 执行任务
  execute(state, payload, res = null) {
    try {
      let prevTaskResult = res;
      for (const task of this.taskQueue) {
        prevTaskResult = task(state, {
          payload,
          res,
          prevTaskResult,
        });
      }
    } catch (e) {
      this.onError(e);
    }
  }

  // 如果同步任务出错
  onError() {}
}
