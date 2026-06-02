import React,
{
    Component
}
from "react";

import FlightRestService
from "../services/flight-rest-service";

export default class FindCarrier
extends Component {

    constructor(props){

        super(props);

        this.service =
        new FlightRestService();

        this.state = {

            carrier:'',
            flights:[]
        };
    }

    handleInput=(e)=>{

        this.setState({
            carrier:e.target.value
        });
    }

    onSearch=()=>{

        this.service
            .getByCarrier(
                this.state.carrier
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

                <h1>Find Carrier</h1>

                <br/>

                <input
                className="form-control"
                placeholder="Carrier"

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