"use strict";

// 生成一个异步任务队列: asyncTask 必须是一个 Promise, 否则notify执行的时候会报错
export const taskQueueGenerator = (asyncTask, tasks = []) => [asyncTask, tasks];

// 匹配对应 type 的任务队列, 然后执行
export const notifyTaskPool = (state, taskPool) => (type, payload) => {
  for (const [key, val] of Object.entries(taskPool)) {
    if (key !== type) {
      continue;
    }

    // val: taskQueueGenerator 的第二个参数
    const [asyncTask, tasks] = val;
    asyncTask(payload).then((res) => {
      for (const task of tasks) {
        task(state, { payload, res }); // 执行同步任务
      }
    });
  }
};
