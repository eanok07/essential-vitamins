import React from 'react';
import Header from './Header';
import Features from './Features';
import Ingredients from './Ingredients';
import News from './News';
import './styles.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Features />
      <Ingredients />
      <News />
    </div>
  );
}

export default App;
