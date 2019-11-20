import React, { Component } from 'react';

class Members extends Component {
  constructor(props) {
    super(props)
    this.state = {
      members: [{ name: '', present: '' }],
      visitors: []
    }
  }

  addVisitor() {
    this.setState({ visitors: [...this.state.visitors, ''] });
  }

  handleChange(e, index) {
    let visitors = [...this.state.visitors];
    // this.state.visitors[index] = e.target.value;

    visitors[index] = e.target.value;
    this.setState({ visitors: visitors });
  }

  handleRemove(index) {
    // remove the target visitor
    this.state.visitors.splice(index, 1);
    // set state to re-render component
    this.setState({ visitors: this.state.visitors });
  }

  render() {
    return (
      <div className="row">
        <div className="col-log-6 col-md-6 col-xs-12">
          <legend className="Members">Miembros Adultos del Grupo</legend>
          <div className="col-log-12 col-md-12 col-xs-12">
            <div style={{ float: "left", width: "100%", marginbottom: "5px" }}>
              <label style={{ display: 'none' }}>Nombre del miembro</label>
              <input type="text" placeholder="Nombre del miembro"></input>
            </div>
          </div>
        </div>
        <div className="col-log-6 col-md-6 col-xs-12">
          <legend className="">Nombre de Visitantes</legend>
          <div className="col-lg-12 col-md-12 col-xs-12">
            <div style={{ float: 'left', width: '100%' }}>
              {
                this.state.visitors.map((visitor, index) => {
                  return (
                    <div key={index}>
                      <label style={{ display: 'none' }}>Nombre del Miembro</label>
                      <input onChange={(e) => this.handleChange(e, index)} value={visitor} />
                      <button type="button" onClick={() => this.handleRemove(index)} >Remover</button>
                    </div>
                  )
                })
              }
            </div>
            <button type="button" onClick={() => this.addVisitor()}>Agregar Visitante</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Members;