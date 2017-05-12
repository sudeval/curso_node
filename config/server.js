// deixando as configurações em um único arquivo
var express = require('express');
var app = express();

// ajustando a propriedade do express para usar o EJS como view engine.
app.set('view engine', 'ejs');

module.exports = app;