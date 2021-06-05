"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const variables_1 = require("./config/variables");
const app = express_1.default();
app.use(body_parser_1.json());
app.listen(variables_1.PORT, () => console.log(`server running at port ${variables_1.PORT}`));
