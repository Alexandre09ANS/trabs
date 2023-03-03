const mongoose = require("../config/conexao");

const pedidoSchema = new mongoose.Schema({
  produto: {
    type: mongoose.Types.ObjectId,
    ref: "produto",
  },
  avaliacaoProdutos: String,
  cliente: {
    type: mongoose.Types.ObjectId,
    ref: "cliente",
  },

  data: Date,
});

const pedido = mongoose.model("pedido", pedidoSchema);

module.exports = pedido;
