var app = require('./config/server');

var msg = require('./mod_teste');

// configurando as views
app.get('/', function(request, response) {
    response.render("home/index");
});

app.get('/noticias', function(request, response) {
    response.render("noticias/noticias");
});

app.get('/formulario_inclusao_noticia', function(request, response) {
    response.render("admin/form_add_noticia");
});


// escutando na porta XXX e uma função de callback para executar na subida do servidor.
app.listen(3000, function() {
    console.log(msg());
});
