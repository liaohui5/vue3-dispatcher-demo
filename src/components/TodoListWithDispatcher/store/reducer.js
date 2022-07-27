"use strict";
import actions from "./actions";
import initState from "./state";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, INI_TODOS } from ".";
import { toRefs } from "vue";
import { useReducer } from "@/hooks";

// 根据不同的操作类型, 执行对应的操作
function reducer(state, { type, payload }) {
  const action = actions(state);
  switch (type) {
    case INI_TODOS:
      action.initTodos(payload);
      break;
    case ADD_TODO:
      action.addTodo(payload);
      break;
    case REMOVE_TODO:
      action.removeTodo(payload);
      break;
    case TOGGLE_TODO:
      action.toggleTodo(payload);
      break;
    default:
      throw new TypeError("[TodoList reducer]: Unknown type " + type);
  }
}

export default function () {
  const [state, todoDispatch] = useReducer(reducer, initState);
  return {
    ...toRefs(state),
    todoDispatch,
  };
}
