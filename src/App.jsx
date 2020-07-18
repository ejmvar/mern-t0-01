
import React from 'react';
import './App.css';
import Feriado from './components/Feriado.component';
import Feriados from './components/Feriados.component';
import { Provider } from "react-redux";
import { store } from "./actions/store";

function App() {
  return (

    <Provider store={store}>
      <Feriados />

      <div className="App">
        <header className="App-header">
          <p>
            Feriados nacionales
        </p>

        </header>
        <Feriados></Feriados>
        <Feriado></Feriado>

      </div>

    </Provider>

  );
}

export default App;
