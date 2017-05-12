// require é uma funcao js para incorporar outros arquivos js (bibliotecas)
var http = require('http');

var server = http.createServer(function(requisicao, resposta) {

    var categoria = requisicao.url;

    if (categoria == "/tecnologia") {
        resposta.end("<html><body>Noticias de tecnologia</body></html>");    
    } else if (categoria == "/moda") {
        resposta.end("<html><body>Noticias de moda</body></html>");
    } else if (categoria == "/beleza") {
        resposta.end("<html><body>Noticias de beleza</body></html>");
    } else {
        resposta.end("<html><body>Portal de noticias</body></html>");
    }
});

server.listen(3000);