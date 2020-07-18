import React from 'react';
import './App.css';
import Feriado from './components/Feriado.component';
import Feriados from './components/Feriados.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Feriados nacionales
        </p>

      </header>
      <Feriados></Feriados>
      <Feriado></Feriado>

    </div>
  );
}

export default App;
