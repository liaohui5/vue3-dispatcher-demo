"use strict";

import { reactive } from "vue";

export default function useReducer(reducer, initState) {
  const state = reactive(initState);
  const dispatch = (type) => (payload) => reducer(state, { type, payload });
  // function dispatch(type) {
  //   return (payload) => reducer(state, { type, payload });
  // }
  return [state, dispatch];
}
