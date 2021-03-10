import React, { PureComponent } from "react";

//connect函数有一个很大的缺陷：依赖导入的store
import { StoreContext } from './context';

//mapStateToProps：存放 component 希望使用到的 State 属性
//mapDispatchToProps：存放 component 希望使用到的 dispatch动作
export  function connect(mapStateToProps, mapDispatchToProps) {
  return function handleMapCpn(WrappedComponent) {
      class ConnectCpn extends PureComponent {
      //在constructor中的state中保存一下我们需要获取的状态；
      constructor(props,context) {
        super(props);

        this.state = {
          storeState: mapStateToProps(context.getState())
        }
      }

      //在componentDidMount中订阅store中数据的变化，并且执行 setState操作；
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(this.context.getState())
          })
        })
      }

      //在componentWillUnmount中需要取消订阅；
      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...this.props} 
                                 {...mapStateToProps(this.context.getState())}
                                 {...mapDispatchToProps(this.context.dispatch)}/>
      }
    }
    //3. context
    ConnectCpn.contextType = StoreContext;
    return ConnectCpn;
  }
}