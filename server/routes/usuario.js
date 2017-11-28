/**
 * Created by Wizao on 05-11-2017.
 */
'use strict'

var express = require('express');
var UsuarioController = require('../controllers/usuario');

var api = express.Router();

api.get('/prueba', UsuarioController.pruebaUsuario);
api.post('/registro', UsuarioController.guardarUsuario);
api.get('/buscar', UsuarioController.buscarUsuario);
api.post('/iniciarSesion', UsuarioController.inicioSesion);

module.exports = api;