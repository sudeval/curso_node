var msg = "Este modulo possui apenas uma string";

// convencao para exportar modulos do CommonJS
// module.exports = msg;

// poderia retornar também uma funcao
module.exports = function() {
    var msginterna = "usando modulo com o commonJS";
    return msginterna;
}