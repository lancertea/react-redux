import React, { PureComponent } from "react";

 import store from '../store';

//mapStateToProps：存放 component 希望使用到的 State 属性
//mapDispatchToProps：存放 component 希望使用到的 dispatch动作
export  function connect(mapStateToProps, mapDispatchToProps) {
  return function handleMapCpn(WrappedComponent) {
     return class extends PureComponent {
      //在constructor中的state中保存一下我们需要获取的状态；
      constructor(props) {
        super(props);

        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }

      //在componentDidMount中订阅store中数据的变化，并且执行 setState操作；
      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      //在componentWillUnmount中需要取消订阅；
      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...this.props} 
                                 {...mapStateToProps(store.getState())}
                                 {...mapDispatchToProps(store.dispatch)}/>
      }
    }
  }
}