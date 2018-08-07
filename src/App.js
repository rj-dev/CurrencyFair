/*jshint esversion: 6 */
import React, { Component } from 'react';
import PageHeader from './components/page-header';
import PageSteps from './components/page-steps';
import './App.css';

export default class App extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="App">
        <PageHeader/>
        <PageSteps/>
      </div>
    );
  }
}

