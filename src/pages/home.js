//将react组件和redux结合起来
import React, { PureComponent } from 'react';

import store from '../store';
import { addAction } from '../store/actionCreator';

export default class Home extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: store.getState().counter,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        counter: store.getState().counter,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <h2>当前计数: {this.state.counter}</h2>
        <button onClick={(e) => this.increment()}>+1</button>
        <button onClick={(e) => this.addCounter()}>+5</button>
      </div>
    );
  }

  increment() {
    store.dispatch(addAction(1));
  }

  addCounter() {
    store.dispatch(addAction(5));
  }
}
