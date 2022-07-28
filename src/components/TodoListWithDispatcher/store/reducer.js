"use strict";
import { toRefs } from "vue";
import { useReducer } from "@/hooks";
// import { notifyTaskPool } from "@/shared";
import initState from "./state";
import taskPool from "./actions/index";
import { taskMgr } from "@/shared";

export default function () {
  // 根据不同的操作类型, 执行对应的操作
  // function reducer(state, { type, payload }) {
  //   const notify = notifyTaskPool(state, taskPool);
  //   notify(type, payload);
  // }

  function reducer(state, { type, payload }) {
    const notify = taskMgr.notify(type, taskPool);
    notify(state, payload);
  }

  const [state, todoDispatch] = useReducer(reducer, initState);

  // 注: 直接展开, 会让 state (reactive返回值)失去响应式
  // 需要 toRefs 定义响应式
  return {
    ...toRefs(state),
    todoDispatch,
  };
}
