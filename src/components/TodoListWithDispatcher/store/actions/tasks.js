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

export function updateAddCount(state, { res, payload, prevTaskResult }) {
  state.addCount++;

  // 每次更新 addCount, 将值交给下一个任务
  return { k: "addCount", v: state.addCount };
}

export function updateRemoveCount(state, { prevTaskResult, res, payload }) {
  state.removeCount++;

  // 每次更新 removeCount, 将值交给下一个任务
  return { k: "removeCount", v: state.removeCount };
}

// 输出上一次返回的值
export const logPrevResult = (state, { prevTaskResult }) => {
  console.log({ state, prevTaskResult });
};

// 修改 input 样式
export const updateInputStyle = (state) => {
  state.inputStyle = "line-height: 30px;width:200px;";
  return state;
};

// 修改添加按钮样式
export const updateAddBtnStyle = (state) => {
  state.addBtnStyle = "line-height: 30px; padding:0 20px;";
  return state;
};

// 更新提示信息样式
export const updateTipStyle = (state) => {
  state.tipStyle = "background: #272822; color: red;";
  return state;
};
