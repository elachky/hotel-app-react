import * as actionType from '../actions/actionTypes'

const inititaleState = {
    initialHotels: [],
    hotels: [],
    initReservation: [],
    hotelDetails: null,
    reservation: []
}

const reducer = (state = inititaleState, action) => {
    switch (action.type) {
        case actionType.GET_DATA:
            return { ...state, initialHotels: action.payload.hotels, hotels: action.payload.hotels, initReservation: action.payload.reservation };
        case actionType.FILTER:
            return { ...state, hotels: action.payload }
        case actionType.GET_HOTEL_BY_ID:
            return {...state, hotelDetails : action.payload}
        default:
            return state
    }
}

export default reducer;