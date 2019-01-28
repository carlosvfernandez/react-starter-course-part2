import 'react-datepicker/dist/react-datepicker.min.css'
import React from 'react'
import './Form.css'
import swal from 'sweetalert'
import DatePicker from 'react-datepicker'

export default class Form extends React.Component {
    state = {
        date: new Date(),
        weight: ""
    }

    onSubmit = () => {
        const { date, weight } = this.state;

        if (!weight || weight < 0 || isNaN(weight)) {
            swal('Invalid Weight', 'The weight recods had to be valid', 'error');
        } else {
            this.props.onAccept(this.state);
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
                <div className={`form-container scale-transition scale-out ${this.props.visible ? "scale-in" : ""} col s4 offset-s4 z-depth-4 cyan lighten-3`}>
                    <form>
                        <label htmlFor="date">
                            Date:
                           <DatePicker selected={this.state.date} onChange={this.dateChange} />
                        </label>
                        <label htmlFor="weight">
                            Weight:
                            <input type="text" name="weight" value={this.state.weight} onChange={this.weightChange} id="weight" />
                        </label>
                        <input type="button" className="btn" onClick={this.onSubmit} value="Add"></input>
                        <input type="button" className="btn" value="Close" onClick={() => this.props.onClose()}></input>
                    </form>
                </div>
            </div>
        );
    }
}