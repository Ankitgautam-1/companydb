"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toolkit_1 = require("@reduxjs/toolkit");
const redux_devtools_extension_1 = require("redux-devtools-extension");
const reducer_1 = __importDefault(require("./reducer/reducer"));
const store = (0, toolkit_1.configureStore)({
    reducer: reducer_1.default,
    devTools: (0, redux_devtools_extension_1.composeWithDevTools)(),
});
exports.default = store;
