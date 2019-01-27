import React from 'react'
import './Form.css'
import swal from 'sweetalert'

export default class Form extends React.Component {

    onSubmit = (evt) => {
        evt.preventDefault()
        console.log(evt)
        const date = evt.target.date.value
        const weight = evt.target.weight.value
        console.log(date, weight)
        if (!weight || weight < 0) {
            swal('Invalid Weight', 'The weight recods had to be valid', 'error')
        }
    }

    render() {
        return (
            <div className="row">
                <div className="form-container col s4 offset-s4 z-depth-4 cyan lighten-3">
                    <form onSubmit={this.onSubmit}>
                        <label htmlFor="date">
                            Date:
                            <input type="date" name="date" id="date" />
                        </label>
                        <label htmlFor="weight">
                            Weight:
                            <input type="text" name="weight" id="weight" />
                        </label>
                        <input type="submit" value="Add"></input>
                        <input type="button" value="Close" onClick={this} />
                    </form>
                </div>
            </div>

        );
    }
}