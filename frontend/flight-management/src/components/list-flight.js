import React,
{
    Component
}
from "react";

import FlightRestService
from "../services/flight-rest-service";

import {
    motion
}
from "framer-motion";

export default class ListFlights
extends Component {

    constructor(props){

        super(props);

        this.service =
        new FlightRestService();

        this.state = {

            flights:[]
        };
    }

    componentDidMount(){

        this.getFlights();
    }

    getFlights(){

        this.service
            .getAllFlights()
            .then(data=>{

                this.setState({
                    flights:data
                });
            });
    }

    deleteFlight(code){

        if(
            window.confirm(
                "Delete this flight?"
            )
        ){

            this.service
                .deleteFlight(code)
                .then(()=>{

                    this.getFlights();
                });
        }
    }

    render(){

        return(

            <div>

                <h1
                style={{
                    marginBottom:"30px"
                }}
                >
                    Flights
                </h1>

                <div className="flight-grid">

                    {
                    this.state.flights
                    .map((flight,index)=>(

                        <motion.div

                            className="flight-card"

                            key={index}

                            whileHover={{
                                scale:1.03
                            }}
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

                            <br/>

                            <button

                            className="delete-btn"

                            onClick={()=>{

                                this.deleteFlight(
                                    flight.code
                                );
                            }}
                            >
                                Delete
                            </button>

                        </motion.div>
                    ))
                    }

                </div>

            </div>
        );
    }
}