// recuperando a biblioteca/modulo
var express = require('express');
// chamando a funcao.
var app = express();

// ajustando a propriedade do express para usar o EJS como view engine.
app.set('view engine', 'ejs');

// escutando na porta XXX e uma função de callback para executar na subida do servidor.
app.listen(3000, function() {
    console.log('Servidor rodando com Express');
});


// função de callback ao chamar a raiz localhost:3000
app.get('/', function(request, response) {
    // send por estar trabalhando com o express (apenas node seria .end)
    response.send("<html><body>Portal de noticias</body></html>");
});

app.get('/tecnologia', function(request, response) {
    // send por estar trabalhando com o express (apenas node seria .end)
    // response.send("<html><body>Noticias de tecnologia</body></html>");
    response.render("secao/tecnologia");
});