import { reactive } from "vue";
import { toRefs } from "vue";
import { taskMgr } from "@/shared";

export default function useReducer(initState, taskPool) {
  const state = reactive(initState);

  // 触发器: 执行就会去执行 notify 方法
  const dispatch = (type) => (payload) => {
    const notify = taskMgr.notify(type, taskPool);
    notify(state, payload);
  };

  return {
    ...toRefs(state),
    dispatch,
  };
}
