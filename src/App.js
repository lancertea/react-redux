import React, { PureComponent } from 'react';
import Home from './pages/home6';
import Profile from './pages/profile6';

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
