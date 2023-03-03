const mongoose = require('../config/conexao');

const clienteSchema = new mongoose.Schema({
  nome: String,
  celular: String,
  cpf: String,
  foto: String,
});

const cliente = mongoose.model('cliente', clienteSchema);

module.exports = cliente;
