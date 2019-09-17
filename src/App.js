import React from 'react';
import Header from './components/header';
import Headline from './components/headline';
import './app.scss';

const tempArr = [
  {
    fName: 'Joe',
    lName: 'Bloggs',
    email: 'joebloggs@mail.com',
    age: 24,
    onlineStatus: true
  }
];

const App = () => {
  return (
    <div>
      <Header />
      <section className="main">
        <Headline
          header={'2'}
          desc="Click the button to render props"
          tempArr={tempArr}
        />
      </section>
    </div>
  );
};

export default App;
