import axios from "axios";

const BASE_URL =
"http://localhost:8085/api/v1/flights";

export default class FlightRestService {

    // GET ALL FLIGHTS

    getAllFlights() {

        return axios
            .get(
                BASE_URL + "/all"
            )
            .then(
                response => response.data
            );
    }

    // SAVE FLIGHT

    saveFlight(flight) {

        return axios
            .post(
                BASE_URL + "/add",
                flight
            )
            .then(
                response => response.data
            );
    }

    // FIND BY CODE

    getByCode(code){

        return axios
            .get(
                BASE_URL + "/" + code
            )
            .then(
                response => response.data
            );
    }

    // FIND BY CARRIER

    getByCarrier(carrier){

        return axios
            .get(
                BASE_URL +
                "/carrier/" +
                carrier
            )
            .then(
                response => response.data
            );
    }

    // FIND BY ROUTE

    getByRoute(src,dest){

        return axios
            .get(
                BASE_URL +
                "/route?src=" +
                src +
                "&dest=" +
                dest
            )
            .then(
                response => response.data
            );
    }

    // FIND BY PRICE

    getByPrice(min,max){

        return axios
            .get(
                BASE_URL +
                "/price?min=" +
                min +
                "&max=" +
                max
            )
            .then(
                response => response.data
            );
    }

    // DELETE FLIGHT

    deleteFlight(code){

        return axios.delete(
            BASE_URL + "/" + code
        );
    }
}