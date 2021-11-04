import axios from "axios";

const BASE_URL = 'https://localhost:44329/api/';

export const ENDPIONTS = {
    CUSTOMER: 'Customer',
    AUTOPART: 'AutoPart',
    ORDER: 'Order'
}

export const createEndpoint = endpoint => {
    let url = BASE_URL + endpoint + '/';

    return {
        fetchAll: () => axios.get(url),
        create: newRecord => axios.post(url, newRecord),
        update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
        fetchById: id => axios.get(url + id),
        delete: id => axios.delete(url + id)
    }
}
