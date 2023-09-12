"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var knex = require('knex');
var knexConfig = require('../config/knex');
var conn;
function conectar() {
    if (conn) {
        return conn;
    }
    conn = knex(knexConfig);
    return conn;
}
exports.default = conectar();
