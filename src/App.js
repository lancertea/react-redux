import React, { PureComponent } from 'react';
import Home from './pages/home5';
import Profile from './pages/profile5';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Home />
        <Profile />
      </div>
    );
  }
}
