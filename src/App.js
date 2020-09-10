import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Featured from './components/Featured';
import EventInfo from './components/EventInfo';

function App() {
  return (
    <div
      className="App"
      style={{ height: '1500px', background: 'cornflowerblue' }}
    >
      <Header />
      <Featured />
      <Footer />
      <EventInfo />
    </div>
  );
}

export default App;
