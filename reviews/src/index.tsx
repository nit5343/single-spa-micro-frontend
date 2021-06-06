import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';
import Routes from './Routes';
import reportWebVitals from './reportWebVitals';

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Routes,
  errorBoundary(err, info, props) {
      // Customize the root error boundary for your microfrontend here.
      return <div>Here is an error boundary!</div>
  },
})

export const { bootstrap, mount, unmount } = lifecycles

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
