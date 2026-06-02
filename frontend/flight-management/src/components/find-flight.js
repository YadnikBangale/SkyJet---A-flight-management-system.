import React,
{
    Component
}
from "react";

import FlightRestService
from "../services/flight-rest-service";

export default class FindFlight
extends Component {

    constructor(props){

        super(props);

        this.service =
        new FlightRestService();

        this.state = {

            code:'',
            flight:null
        };
    }

    handleInput=(e)=>{

        this.setState({
            code:e.target.value
        });
    }

    onSearch=()=>{

        this.service
            .getByCode(this.state.code)
            .then(data=>{

                this.setState({
                    flight:data
                });
            });
    }

    render(){

        return(

            <div className="glass-card">

                <h1>Find Flight</h1>

                <br/>

                <input
                className="form-control"
                placeholder="Enter Flight Code"

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

                {
                this.state.flight && (

                    <div className="flight-card">

                        <div className="flight-title">
                            {
                            this.state.flight.carrier
                            }
                        </div>

                        <div className="flight-route">

                            {
                            this.state.flight.source
                            }

                            →

                            {
                            this.state.flight.destination
                            }

                        </div>

                        <div className="price">

                            ₹
                            {
                            this.state.flight.cost
                            }

                        </div>

                    </div>
                )
                }

            </div>
        );
    }
}