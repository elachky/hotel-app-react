import DATA from './data';
import * as actionType from './actionTypes'

const inititaleState = {
    initialHotels: DATA.hotels,
    hotels: DATA.hotels,
    initReservation:DATA.reservation,
    reservation: DATA.reservation
}

const reducer = (state = inititaleState, action) => {
    switch (action.type) {
        case actionType.FILTER:
            return { ...state, hotels: action.payload }
        default:
            return state
    }
}

export default reducer;