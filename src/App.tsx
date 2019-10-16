import React from 'react';
import './App.css';

//components
import Search from './components/Search';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Check Twitch</h1>
      <Search/>
    </div>
  );
}

export default App;
