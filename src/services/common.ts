import axios from  'axios';
const SERVER_BASE_URL = 'http://localhost:4000';
const FETCH_ITEMS_URL = '/items';

const getItems = function () {
    return axios.get(`${SERVER_BASE_URL + FETCH_ITEMS_URL}`, {
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(response => response.data)
    .catch(error => {
        return Promise.reject(error.response.data);
    });
}

const updateItem = function (id: string, role: string) {
    let paramData = {
        role: role
    };
    return axios.put(`${SERVER_BASE_URL + FETCH_ITEMS_URL + '/' + id}`, paramData, {
        headers: {
            'Accept' : 'application/json'
        }
    })
    .then(response => response.data)
    .catch(error => {
        return Promise.reject(error.response.data)
    })
}

const removeItem = function (id: string) {
    return axios.delete(`${SERVER_BASE_URL + FETCH_ITEMS_URL + '/' + id}`, {
        headers: {
            'Accept' : 'application/json',
        }
    })
    .then(response => response.data)
    .catch(error => {
        return Promise.reject(error.response.data)
    })
}

export default {
    getItems,
    updateItem,
    removeItem
}