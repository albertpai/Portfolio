import React, { Component } from 'react';
import './App.css';
import ContainerHeader from './container1Header.js';
import ContainerBio from './container2Bio.js';
import ContainerProject from './container3Project.js';
import ContainerWeb from './container4Web.js';
import ContainerIT from './container5IT.js';
import ContainerMore from './container6More.js';
import ContainerContact from './container7Contact.js';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerHeader />
        <ContainerBio />
        <ContainerProject />
        <ContainerWeb />
        <ContainerIT />
        <ContainerMore />
        <ContainerContact />
      </div>
    )
  }
}