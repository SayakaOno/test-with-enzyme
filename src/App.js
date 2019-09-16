import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Headline header="post" desc="Click the button to render props" />
    </div>
  );
};

export default App;
