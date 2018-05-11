const ADD_NAME = 'ADD_NAME';
const ADD_ADDRESS = 'ADD_ADDRESS';
const ADD_CITY = 'ADD_CITY';
const ADD_STATE = 'ADD_STATE';
const ADD_ZIP = 'ADD_ZIP';
const ADD_IMG = 'ADD_IMG';
const ADD_MORTGAGE = 'ADD_MORTGAGE';
const ADD_RENT = 'ADD_RENT';

const CANCEL_BUTTON = 'CANCEL_BUTTON';

const initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    img: '',
    mortgage: '',
    rent: ''
}

export function addName(name){
    return {
        type: ADD_NAME,
        payload: name,
        
    }
}
export function addAddress(address){
    return {
        type: ADD_ADDRESS,
        payload: address
    }
}
export function addCity(city){
    return {
        type: ADD_CITY,
        payload: city
    }
}
export function addState(state){
    return {
        type: ADD_STATE,
        payload: state
    }
}
export function addZip(zip){
    return {
        type: ADD_ZIP,
        payload: zip
    }
}
export function addImg(img){
    console.log(img)
    return {
        type: ADD_IMG,
        payload: img
    }
}
export function addMortgage(mortgage){
    return {
        type: ADD_MORTGAGE,
        payload: mortgage
    }
}
export function addRent(rent){
    return {
        type: ADD_RENT,
        payload: rent
    }
}
export function getState(){
    return {
        type: 'GET_STATE'
    }
}

export function cancelWizard(){
    return {
        type: CANCEL_BUTTON,
        payload: initialState
    }
}




// + '_FULFILLED'

export default function reducer (state = initialState, action) {
    switch (action.type) {
        case ADD_NAME:
        return Object.assign( {}, state, {name: action.payload})
        case ADD_ADDRESS:
        return Object.assign( {}, state, {address: action.payload})
        case ADD_CITY:
        return Object.assign( {}, state, {city: action.payload})
        case ADD_STATE:
        return Object.assign( {}, state, {state: action.payload})
        case ADD_ZIP:
        return Object.assign( {}, state, {zip: action.payload});
        case ADD_IMG:
        return Object.assign( {}, state, {img: action.payload});
        case ADD_MORTGAGE:
        return Object.assign( {}, state, {mortgage: action.payload});
        case ADD_RENT:
        return Object.assign( {}, state, {rent: action.payload});
        case CANCEL_BUTTON:
        return Object.assign( {}, state, {state: action.payload});
        case 'GET_STATE':
        console.log(`It Worked`);
        return state;
        // case GET_PEOPLE + '_FULFILLED';
            // return Object.assign({}, state, { people: action.payload })
        default:
            return state;
    }
}