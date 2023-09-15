"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KnexService = void 0;
var knex_1 = __importDefault(require("knex"));
var knexConfig = require('../config/knex');
var KnexService = /** @class */ (function () {
    function KnexService() {
        this.obterConexao = function () {
            if (!KnexService.conn) {
                KnexService.conn = (0, knex_1.default)(knexConfig);
            }
            return KnexService.conn;
        };
    }
    return KnexService;
}());
exports.KnexService = KnexService;
