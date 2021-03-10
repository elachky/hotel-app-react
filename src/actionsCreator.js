import * as actionType from './actionTypes';

const filterCity = (cites) => ({
    type: actionType.FILTER,
    payload: cites
});

export const filterAction = (city) => (dispatch, getState) => {
    const initialHotels = getState().initialHotels;

    dispatch(filterCity(initialHotels.filter(item => (new RegExp(`^(${city})`).test(item.city)))));
}