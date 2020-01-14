import React from 'react';
import ReactDOM from 'react-dom';
import Clock from '../clock';
import Tabs from '../tab';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const tabs = [
    {title: 'hello', content: 'world'},
    {title: 'foo', content: 'bar'},
    {title: 'baz', content: 'qux'}
  ];
  ReactDOM.render(
    <div>
      <Clock />
      <Tabs tabsArr={ tabs } />
    </div>
  , root);
});
