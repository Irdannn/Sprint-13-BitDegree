"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
;
const apiURL = 'https://jsonplaceholder.typicode.com/users';
const fetchFunction = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield (0, node_fetch_1.default)(url).then(response => response.json());
    return data.map((customer) => {
        return {
            id: customer.id,
            name: customer.name,
            streetAddress: `${customer.address.suite} ${customer.address.street}`,
            company: customer.company.name
        };
    });
});
fetchFunction(apiURL).then(users => console.log(users));
