/*jshint esversion: 6 */
import React from 'react';
import logo from '../assets/CF_logo_RGB_NEG.svg';

const PageHeader = () => {
    return (
        <header className="App-header">
          <div className="screen-size">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
        </header>
    )
};

export default PageHeader;