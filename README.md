## react-redux

### learn-redux redux本身
### home 将react组件和redux结合起来
### home1 自实现connect函数提取公共部分
### home2 利用创建的context处理自实现connect函数依赖导入的store问题
### home3 使用官方connect提供的函数

### home4 组件中的异步请求
### home5 使用中间件发送异步请求  redux-thunk
### home6 使用中间件发送异步请求  redux-saga*

#### 基础概念
redux设计思想
Web应用是一个状态机，视图与状态是一一对应的
所有的状态，保存在一个对象里面

Store: 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store。Redux 提供createStore这个函数，用来生成 Store。 
```JavaScript
const store = createStore(reducer);
//store.dispatch方法会触发 Reducer 的自动执行。为此，Store 需要知道 Reducer 函数，做法就是在生成 Store 的时候，将 Reducer 传入createStore方法。
```

State: Store对象包含所有数据。如果想得到某个时点的数据，就要对 Store 生成快照。这种时点的数据集合，就叫做 State。当前时刻的 State，可以通过store.getState()拿到。  
Redux 规定， 一个 State 对应一个 View。只要 State 相同，View 就相同。你知道 State，就知道 View 是什么样，反之亦然。  
```JavaScript
const state = store.getState();
```

Action: State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。Action 就是 View 发出的通知，表示 State 应该要发生变化了。
可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。store.dispatch()是 View 发出 Action 的唯一方法。
Action Creator: 生成Action的函数
```JavaScript
const action = {
  type: 'ADD_TODO',
  payload: 'Learn Redux'
};
```


Reducer: Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。


#### connect
如果一个组件既有 UI 又有业务逻辑，将它拆分成下面的结构：外面是一个容器组件，里面包了一个UI 组件。前者负责与外部的通信，将数据传给后者，由后者渲染出视图
输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数
输出逻辑：用户发出的动作如何变为 Action 对象，从 UI 组件传出去

connect方法接受两个参数：mapStateToProps和mapDispatchToProps。它们定义了 UI 组件的业务逻辑
前者负责输入逻辑，即将state映射到 UI 组件的参数（props）
后者负责输出逻辑，即将用户对 UI 组件的操作映射成 Action

function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
1. mapStateToProps?: Function
2. mapDispatchToProps?: Function | Object
3. mergeProps?: Function
4. options?: Object

mapStateToProps: Redux store’s state
mapDispatchToProps: Redux store’s dispatch

这两个参数作为mergeProps的第一、二个参数，第三个是ownProps。然后将合并后的结果（通常称为mergedProps）提供给连接的组件。

1. mapStateToProps?: (state, ownProps?) => Object
如果指定了mapStateToProps函数，mapStateToProps会订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染。mapStateToProps的结果必须是一个普通对象，该对象将合并到新组件的props中。 如果不想订阅store更新，请传递null或undefined代替mapStateToProps
第二个参数ownProps，代表容器组件的props对象，使用ownProps作为参数后，如果容器组件的参数发生变化，也会引发 UI 组件重新渲染。

2. mapDispatchToProps?: Object | (dispatch, ownProps?) => Object
mapDispatchToProps是connect函数的第二个参数，用来建立 UI 组件的参数到store.dispatch方法的映射。也就是说，它定义了哪些用户的操作应该当作 Action，传给 Store。它可以是一个函数，也可以是一个对象。
如果mapDispatchToProps是一个函数，会得到dispatch和ownProps（容器组件的props对象）两个参数。