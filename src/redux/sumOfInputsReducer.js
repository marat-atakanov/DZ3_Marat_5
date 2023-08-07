import {types} from "./types";

const initialState = {
    num: 0,
    sumList: [],

}

export default function sumOfInputReducer (state = initialState, action) {
    switch (action.type) {
        case types.LIST_SUMS:
            return {...state, sumList: [...state.sumList, state.num]};
        case types.SUM_INPUT:
            return {...state, num: state.num + Number(action.payload)}
        case types.CLEAR:
            return {...state, num: 0, sumList: []}
        default:
            return state;
    }
}