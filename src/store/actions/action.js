"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompany = exports.deleteCompany = exports.addCompany = exports.UPDATE_COMPANY = exports.DELETE_COMPANY = exports.ADD_COMPANY = exports.INIT_DATA = void 0;
exports.INIT_DATA = "INIT_DATA";
exports.ADD_COMPANY = "ADD_COMPANY";
exports.DELETE_COMPANY = "DELETE_COMPANY";
exports.UPDATE_COMPANY = "UPDATE_COMPANY";
const initTheData = (payload) => {
    return {
        type: exports.INIT_DATA,
        payload: payload,
    };
};
const addCompany = (payload) => {
    return {
        type: exports.ADD_COMPANY,
        payload: payload,
    };
};
exports.addCompany = addCompany;
const deleteCompany = (payload) => {
    return {
        type: exports.DELETE_COMPANY,
        payload: payload,
    };
};
exports.deleteCompany = deleteCompany;
const updateCompany = (payload) => {
    return {
        type: exports.UPDATE_COMPANY,
        payload: payload,
    };
};
exports.updateCompany = updateCompany;
exports.default = initTheData;
