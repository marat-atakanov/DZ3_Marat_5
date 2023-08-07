import {types} from "./types";

export function changeTitleAction() {
    return {
        type: types.CHANGE_TITLE
    }
}

export function withParamsAction(title) {
    return {
        type: types.WITH_PARAMS,
        payload: title
    }
}

export function changeInputAction(value) {
    return {
        type: types.VALUE,
        payload: value
    }
}

export function addUserAction(user) {
    return {
        type: types.ADD_USER,
        payload: user
    }
}

export function deleteAllAction() {
    return {
        type: types.DELETE_ALL,
    }
}

export function listSumsAction() {
    return {
        type: types.LIST_SUMS,
    }
}

export function sumInputAction(value) {
    return {
        type: types.SUM_INPUT,
        payload: value
    }
}

export function clearAction () {
    return {
        type: types.CLEAR
    }
}
