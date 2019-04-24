import React, { Component } from 'react';

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInputs: {
        group: {
          name: '',
          district: ''
        },
        leader: {
          name: '',
          phone: '',
        },
        assistant: {
          name: '',
          phone: ''
        },
        event: {
          name: '',
          date: '',
          time: '',
          duration: '',
          speaker: '',
          type: ''
        }
      }
    }
  }

  onChange(e) {
    const target = e.target;
    const value = target.type === 'radio' ? target.parentNode.innerText : target.value;
    // // const name = target.id;
    const inputName = e.target.id;
    const name = e.target.name;

    const statusCopy = Object.assign({}, this.state);
    statusCopy.formInputs[inputName][name] = value;
    this.setState(statusCopy);
  }

  Save() {
    this.props.Save(this.state);
  }

  render() {
    return (
      <div>
        <div className="form-row">
          <div className="form-group col-sm-2">
            <label htmlFor="leader">Grupo</label>
            <input type="text" className="form-control" value={this.state.formInputs.group.name} id="group" name="name" onChange={this.onChange.bind(this)} placeholder="Nombre" />
            {/* <input type="text" className="form-control" id="leader.phone" placeholder="Number Telefonico" /> */}
          </div>
          <div className="form-group col-sm-2">
            <label htmlFor="leader">Distrito</label>
            <input type="text" className="form-control" value={this.state.formInputs.group.district} id="group" name="district" onChange={this.onChange.bind(this)} placeholder="Nombre" />
            {/* <input type="text" className="form-control" id="leader.phone" placeholder="Number Telefonico" /> */}
          </div>
          <div className="form-group col-sm-3">
            <label htmlFor="leader">Fecha De Reunion</label>
            <input type="date" value={this.state.formInputs.event.date} className="form-control" id="event" name="date" onChange={this.onChange.bind(this)} />
            {/* <input type="text" className="form-control" id="leader.phone" placeholder="Number Telefonico" /> */}
          </div>
          <div className="form-group col-sm-1">
            <label htmlFor="leader">Horario</label>
            <input type="text" className="form-control" value={this.state.formInputs.event.time} id="event" name="time" onChange={this.onChange.bind(this)} placeholder="7pm" />
            {/* <input type="text" className="form-control" id="leader.phone" placeholder="Number Telefonico" /> */}
          </div>
          <div className="form-group col-sm-3">
            <label htmlFor="leader">Duracion De La Reunion</label>
            <input type="text" className="form-control" value={this.state.formInputs.event.duration} id="event" name="duration" onChange={this.onChange.bind(this)} placeholder="1.5" />
            {/* <input type="text" className="form-control" id="leader.phone" placeholder="Number Telefonico" /> */}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="leader">Nombre De Lider</label>
            <input type="text" className="form-control" value={this.state.formInputs.leader.name} id="leader" name="name" onChange={this.onChange.bind(this)} placeholder="Nombre Completo" />
            {/* <input type="text" className="form-control" id="leader.phone" placeholder="Number Telefonico" /> */}
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="leader">Numero De Telefono</label>
            <input type="tel" className="form-control" data-format="(ddd) ddd-dddd" value={this.state.formInputs.leader.phone} id="leader" name="phone" onChange={this.onChange.bind(this)} placeholder="(123) 123-4567" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="assistant">Nombre De Asistente</label>
            <input type="text" className="form-control" value={this.state.formInputs.assistant.name} id="assistant" name="name" onChange={this.onChange.bind(this)} placeholder="Nombre Completo" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="assistant">Numero De Telefono</label>
            <input type="text" className="form-control" value={this.state.formInputs.assistant.phone} id="assistant" name="phone" onChange={this.onChange.bind(this)} placeholder="(916) 564-3456" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="groupName">Tema</label>
            <input type="text" className="form-control" value={this.state.formInputs.event.name} id="event" name="name" onChange={this.onChange.bind(this)} placeholder="Nombre del Tema" />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">Tema Dado Por</label>
            <input type="text" className="form-control" value={this.state.formInputs.event.speaker} id="event" name="speaker" onChange={this.onChange.bind(this)} placeholder="Nombre" />
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="event" value={this.state.formInputs.event.type} onChange={this.onChange.bind(this)} />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Grupo Regular
          </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" name="type" id="event" value={this.state.formInputs.event.type} onChange={this.onChange.bind(this)} />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Compartido
          </label>
          </div>
          <div className="form-check disabled">
            <input className="form-check-input" type="radio" name="type" id="event" value={this.state.formInputs.event.type} onChange={this.onChange.bind(this)} />
            <label className="form-check-label" htmlFor="exampleRadios3">
              Social
          </label>
          </div>
        </div>
      </div>
    );
  }
}

export default General;