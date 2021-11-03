import axios from "axios";

const BASE_URL = 'https://localhost:44329/api/';

export const ENDPIONTS = {
    CUSTOMER: 'Customer'
}

export const createEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';

    return {
        fetchAll: () => axios.get(url)
    }
}
