"use strict";

export default class TaskQueue {
  constructor(tasks) {
    this.taskQueue = new Set(...tasks); // 必须是可迭代对象
  }

  execute(state, payload, initRes = null) {
    let prevResult = initRes;
    for (const item of this.taskQueue) {
      prevResult = item(state, payload);
    }
  }
}
