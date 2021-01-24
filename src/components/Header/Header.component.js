import React from 'react';
import logo from '../../images/logo.svg';

import './Header.component.css';

export const Header = () => (
  <div className={'header'}>
    <img src={logo} className="App-logo" alt="logo" />
  </div>
);