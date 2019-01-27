import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class Form extends React.Component {
    state = {
        date: new Date(),
        weight: ""
    }

    onSubmit = () => {
        const { date, weight } = this.state;

        if (!weight || weight < 0) {
            swal('Invalid Weight', 'The weight recods had to be valid', 'error')
        }
    }

    dateChange = (date) => {
        this.setState({ date })
    }
    weightChange = evt => {
        this.setState({
            weight: evt.target.value
        })
    }
    render() {
        return (
            <div className="row">
                <div className="form-container col s4 offset-s4 z-depth-4 cyan lighten-3">
                    <form>
                        <label htmlFor="date">
                            Date:
                           <DatePicker selected={this.state.date} onChange={this.dateChange} />
                        </label>
                        <label htmlFor="weight">
                            Weight:
                            <input type="text" name="weight" value={this.state.weight} onChange={this.weightChange} id="weight" />
                        </label>
                        <input type="button" onClick={this.onSubmit} value="Add"></input>
                        <input type="button" value="Close"></input>
                    </form>
                </div>
            </div>
        );
    }
}