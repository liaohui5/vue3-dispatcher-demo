## Vue3 with dispatcher demo

学习派发器思想的练手 demo, 对比传统的 props 传值和 dispatcher 开发的差异

## 思考 & 总结

dispatcher 更加简洁, 逻辑更加集中, 组件只负责页面样式和数据展示

数据的逻辑处理, 全部通过 dispatch 派发到 reducer, 然后由 actions 去处理

## 对比

普通的开发方式, 所有的逻辑都集中在 TodoList/index 这个组件中, 会导致这个代码特别多,变得难以维护

![](https://raw.githubusercontent.com/liaohui5/images/main/images/202207271349247.png)

利用 Dispatcher 可以将逻辑从组件中抽离, 集中放到管理

TodoList/index 只负责将这些
action provide 给子组件去调用, 这样 TodoList/index 就变得整洁,
只负责展示数据和提供 action 操作给组件调用

子组件需要改数据, 就自己去 dispatch 对应逻辑的 actionType 就可以了

![](https://raw.githubusercontent.com/liaohui5/images/main/images/202207271336780.png)

## 关于持久化和服务端问题

服务端是直接用文件来模拟数据库数据的

## 启动

```bash
git clone https://github.com/liaohui5/vue3-dispatcher-demo
cd vue3-dispatcher-demo
npm i

# client
npm run dev

# server: 如果修改了服务端文件请手动重启
npm run start

# 浏览器打开测试 http://localhost:8083
```

## 任务队列

ADD_TODO: [
  异步任务: [
    同步任务1
    同步任务2
    同步任务3
  ]
]

REMOVE_TODO: [
  异步任务: [
    同步任务1
    同步任务2
    同步任务3
  ]
]
