import React from 'react'

import Movies from './components/MoviesContainer/MoviesContainer'
import AppBar from './components/AppBar/AppBar'

import './App.scss'

function App() {

  return (
    <div className="App">
      <AppBar />
      <div className="main-content">
        <Movies />
      </div>
    </div>
  );
}

export default App
