import React, { Component } from 'react';
import TitleBar from './Components/TitleBar';
import Table from './Components/Table';
import moment from 'moment';
import Graph from './Components/Graph'
import Form from './Components/Form'

class App extends Component {
  state = {
    records: [],
    modal: false
  }

  componentDidMount() {
    if (localStorage.getItem('records')) {
      const records = JSON.parse(localStorage.getItem('records'));
      this.setState({
        records
      })
    }
  }
  acceptRecord = ({ date, weight }) => {
    const newRecord = [+date, +weight];
    const newRecodsSate = [...this.state.records, newRecord];
    localStorage.setItem('records', JSON.stringify(newRecodsSate));
    this.setState({
      records: newRecodsSate
    })
  }
  onCloseForm = () => {
    this.setState({
      modal: false
    })
  }
  restartRecords = () => {
    localStorage.clear();
    this.setState({
      records: []
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
        <Form
          visible={this.state.modal}
          onAccept={this.acceptRecord}
          onClose={this.onCloseForm}
        />
        <TitleBar />
        <main>
          <div className="valign-wrapper">
            <h2>Daily Weight Register</h2>
          </div>
          <div className="row">
            <div className="col l6 m12 s12">
              <Graph records={this.state.records} />
              <a className="btn" onClick={this.restartRecords}>Restart Graph</a>
            </div>
            <div className="col l6 m12 s12">
              <Table records={this.state.records} />
            </div>
          </div>
        </main>
        <a className="btn-floating btn-large waves-effect waves-light red"
          style={btnAdd}
          onClick={() => this.setState({ modal: true })}>
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default App;
