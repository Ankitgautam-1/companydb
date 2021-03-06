"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const axiosConfig = axios_1.default.create({
    baseURL: "http://localhost:3030/",
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
        Accpet: "application/json",
    },
});
exports.default = axiosConfig;
