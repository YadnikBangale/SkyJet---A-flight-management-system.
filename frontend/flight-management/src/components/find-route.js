import React,
{
    Component
}
from "react";

import FlightRestService
from "../services/flight-rest-service";

export default class FindRoute
extends Component {

    constructor(props){

        super(props);

        this.service =
        new FlightRestService();

        this.state = {

            src:'',
            dest:'',
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
            .getByRoute(
                this.state.src,
                this.state.dest
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

                <h1>Find Route</h1>

                <br/>

                <input
                name="src"

                className="form-control"

                placeholder="Source"

                onChange={
                    this.handleInput
                }
                />

                <input
                name="dest"

                className="form-control"

                placeholder="Destination"

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