"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_1 = require("../actions/action");
const CompanyReducer = (state = [], action) => {
    switch (action.type) {
        case action_1.INIT_DATA:
            return action.payload;
        case action_1.ADD_COMPANY:
            return [...state, action.payload];
        case action_1.DELETE_COMPANY:
            return state.filter((company) => company.company_id !== action.payload);
        case action_1.UPDATE_COMPANY:
            return state.map((company) => company.company_id === action.payload.company_id
                ? action.payload
                : company);
        default:
            return state;
    }
};
exports.default = CompanyReducer;
