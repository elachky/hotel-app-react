import * as actionType from './actionTypes';
import axios from 'axios';

const getData = (data) => ({
    type: actionType.GET_DATA,
    payload: data
})

const filterCity = (cites) => ({
    type: actionType.FILTER,
    payload: cites
});

export const filterAction = (city) => (dispatch, getState) => {
    const { initialHotels } = getState();
    dispatch(filterCity(initialHotels.filter(item => (new RegExp(`${city}`, 'i').test(item.city)))));
}

export const getDataAction = () => (dispatch) => {
    axios.get('http://localhost:3004/data')
        .then((response) => {
            dispatch(getData(response.data));
        })
        .catch(error => console.log(error));
}
