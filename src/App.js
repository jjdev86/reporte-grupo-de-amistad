import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Hello World
          </p>
          <General />
        </header>
      </div>
    );
  }
}


function General(props) {
  return (
    <div>
      <label>
        Nombre de lider:
        <input />
      </label>
      <label>
        Telefono:
        <input />
      </label>
      <label>
        Nombre de asistente:
        <input />
      </label>
      <lable>
        Telefono:
        <input />
      </lable>
      <label>
        Nombre de grupo:
        <input />
      </label>
      <label>
        Zona:
        <input />
      </label>
      <label>
        Nombre de tema:
        <input />
      </label>
      <label for="event-date">
        Fecha de reunion:
        <input type="date" id="event-date" />
      </label>
      <label for="event-time">
        Hora de reunion:
        <input type="time" id="event-time" name="event-time" />
      </label>
      <label >
        Duracion de reunion:
        <input />
      </label>
      <p>Seleccione el tipo de reunion:</p>
      <div>
        <input type="radio" id="grupo-regular" name="grupo-regular" value="grupo-regular" />
        <label for="huey">Grupo regular</label>
      </div>

      <div>
        <input type="radio" id="compartido" name="compartido" value="compartido" />
        <label for="dewey">Compartido</label>
      </div>

      <div>
        <input type="radio" id="social" name="social" value="social" />
        <label for="louie">Social</label>
      </div>
      <div>
        <input type="radio" id="multiplicacion" name="multiplicacion" value="multiplicacion" />
        <label for="louie">Multiplicacion</label>
      </div>
    </div>
  );
}

export default App;
