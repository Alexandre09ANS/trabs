const mongoose = require("../config/conexao");

const produtoSchema = new mongoose.Schema({
  Tipo: String,
  valor: String,
  Validade: Date,
  quantidade: String,
  codigoBarras: String,
  foto: String,
});

const produto = mongoose.model("produto", produtoSchema);

module.exports = produto;
