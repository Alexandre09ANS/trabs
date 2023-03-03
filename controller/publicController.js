const Pedido = require("../model/Pedido");
function abreindex(req, res) {
  Pedido.find({})
    .populate("produto")
    .populate("cliente")
    .exec(function (err, pedidos) {
      res.render("public/index", { Pedidos: pedidos });
    });
}

module.exports = {
  abreindex,
};
