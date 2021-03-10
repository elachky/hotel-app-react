import * as actionType from './actionTypes'

const inititaleState = {
    initialHotels: [],
    hotels: [],
    initReservation:[],
    reservation: []
}

const reducer = (state = inititaleState, action) => {
    switch (action.type) {
        case actionType.FILTER:
            return { ...state, hotels: action.payload }
        case actionType.GET_DATA:
            return { ...state, initialHotels: action.payload.hotels, hotels: action.payload.hotels, initReservation: action.payload.reservation};
        default:
            return state
    }
}

export default reducer;