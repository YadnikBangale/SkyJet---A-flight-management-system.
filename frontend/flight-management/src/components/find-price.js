import React,
{
    Component
}
from "react";

import FlightRestService
from "../services/flight-rest-service";

export default class FindPrice
extends Component {

    constructor(props){

        super(props);

        this.service =
        new FlightRestService();

        this.state = {

            min:'',
            max:'',
            flights:[]
        };
    }

    handleInput=(e)=>{

        this.setState({
            [e.target.name]:
            e.target.value
        });
    }

    onSearch=()=>{

        this.service
            .getByPrice(
                this.state.min,
                this.state.max
            )

            .then(data=>{

                this.setState({
                    flights:data
                });
            });
    }

    render(){

        return(

            <div className="glass-card">

                <h1>Find Price</h1>

                <br/>

                <input
                name="min"

                className="form-control"

                placeholder="Minimum Price"

                onChange={
                    this.handleInput
                }
                />

                <input
                name="max"

                className="form-control"

                placeholder="Maximum Price"

                onChange={
                    this.handleInput
                }
                />

                <button
                className="primary-btn"

                onClick={
                    this.onSearch
                }
                >
                    Search
                </button>

                <br/><br/>

                <div className="flight-grid">

                    {
                    this.state.flights
                    .map((flight,index)=>(

                        <div
                        className="flight-card"

                        key={index}
                        >

                            <div className="flight-title">
                                {
                                flight.carrier
                                }
                            </div>

                            <div className="flight-route">

                                {
                                flight.source
                                }

                                →

                                {
                                flight.destination
                                }

                            </div>

                            <div className="price">

                                ₹
                                {
                                flight.cost
                                }

                            </div>

                        </div>
                    ))
                    }

                </div>

            </div>
        );
    }
}