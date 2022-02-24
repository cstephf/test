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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Requester = void 0;
const got_1 = require("got");
const nanoid_1 = require("nanoid");
class Requester {
    constructor(url) {
        this.requester = got_1.default.extend({ prefixUrl: url });
    }
    get(path) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.requester.get(path || '').json();
                return Promise.resolve(response);
            }
            catch (error) {
                return Promise.reject(new Error(error.message));
            }
        });
    }
    post(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = (0, nanoid_1.nanoid)();
                payload['id'] = id;
                const response = yield this.requester.post({ json: payload }).json();
                return Promise.resolve(response);
            }
            catch (error) {
                return Promise.reject(new Error(error.message));
            }
        });
    }
}
exports.Requester = Requester;
