// require é uma funcao js para incorporar outros arquivos js (bibliotecas)
var http = require('http');

var server = http.createServer(function(requisicao, resposta) {
    resposta.end("<html><body>Portal de noticias</body></html>");
});

server.listen(3000);