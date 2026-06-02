import React,
{
    Component
}
from "react";

import FlightRestService
from "../services/flight-rest-service";

export default class AddFlight
extends Component {

    constructor(props){

        super(props);

        this.service =
        new FlightRestService();

        this.state = {

            code:'',
            carrier:'',
            source:'',
            destination:'',
            cost:''
        };
    }

    handleInput=(e)=>{

        this.setState({

            [e.target.name]:
            e.target.value
        });
    }

    onSave=(e)=>{

        e.preventDefault();

        this.service
            .saveFlight(this.state)
            .then(()=>{

                alert(
                    "Flight Added Successfully"
                );
            });
    }

    render(){

        return(

            <div className="glass-card">

                <h1>Add Flight</h1>

                <br/>

                <form
                onSubmit={this.onSave}
                >

                    <input
                    name="code"
                    placeholder="Flight Code"
                    className="form-control"
                    onChange={this.handleInput}
                    />

                    <input
                    name="carrier"
                    placeholder="Carrier"
                    className="form-control"
                    onChange={this.handleInput}
                    />

                    <input
                    name="source"
                    placeholder="Source"
                    className="form-control"
                    onChange={this.handleInput}
                    />

                    <input
                    name="destination"
                    placeholder="Destination"
                    className="form-control"
                    onChange={this.handleInput}
                    />

                    <input
                    name="cost"
                    placeholder="Cost"
                    className="form-control"
                    onChange={this.handleInput}
                    />

                    <button className="primary-btn">
                        Save Flight
                    </button>

                </form>

            </div>
        );
    }
}