"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('sample test', () => {
    it('responds with an array of strings', async () => {
        const response = await (0, supertest_1.default)(app_1.default).get('/sample');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.every((item) => typeof item === 'string')).toBe(true);
    });
});
