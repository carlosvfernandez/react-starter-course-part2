import React, { Component } from 'react';
import TitleBar from './Components/TitleBar';
import Table from './Components/Table';
import moment from 'moment';
import Graph from './Components/Graph'
import Form from './Components/Form'

class App extends Component {
  state = {
    records: []
  }
  onCreateRecord = () => {
    const newRecord = [+moment(), Math.random() * 200];
    this.setState({
      records: [...this.state.records, newRecord]
    })
  }
  render() {
    const btnAdd = {
      position: "absolute",
      top: "80%",
      right: "10%",
    }

    return (
      <div>
      <Form/>
        <TitleBar />
        <main>
          <div className="valign-wrapper">
            <h2>Daily Weight Register</h2>
          </div>
          <div className="row">
            <div className="col l6 m12 s12">
              <Graph records={this.state.records} />
            </div>
            <div className="col l6 m12 s12">
              <Table records={this.state.records} />
            </div>
          </div>
        </main>
        <a className="btn-floating btn-large waves-effect waves-light red" onClick={this.onCreateRecord} style={btnAdd}>
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default App;
