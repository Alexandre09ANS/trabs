const Pedido = require("../model/Pedido");
const Produto = require("../model/Produto");
const Cliente = require("../model/Cliente");

function abreadd(req, res) {
  Cliente.find({}, function (err, clientes) {
    Produto.find({}, function (err, produtos) {
      res.render("pedido/add", { Produtos: produtos, Clientes: clientes });
    });
  });
}

function add(req, res) {
  let pedido = new Pedido(
    /*req.body*/ {
      produto: req.body.produto,
      avaliacaoProdutos: req.body.avaliacaoProdutos,
      cliente: req.body.cliente,
      data: new Date(),
    }
  );

  pedido.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/pedido/lst");
    }
  });
}

function list(req, res) {
  Pedido.find({})
    .populate("produto")
    .populate("cliente")
    .exec(function (err, pedidos) {
      res.render("pedido/lst", { Pedidos: pedidos });
    });
}

function filtro(req, res) {
  Pedido.find(
    { titulo: new RegExp(req.body.pesquisar, "i") },
    function (err, pedidos) {
      res.render("pedido/lst", { Pedidos: pedidos });
    }
  );
}

function del(req, res) {
  Pedido.findByIdAndDelete(req.params.id, function (err, pedidos) {
    res.redirect("/admin/pedido/lst");
  });
}

function abreedt(req, res) {
  Pedido.findById(req.params.id, function (err, pedido) {
    Cliente.find({}, function (err, clientes) {
      Produto.find({}).exec(function (err, produtos) {
        res.render("pedido/edt", {
          Pedido: pedido,
          Produtos: produtos,
          Clientes: clientes,
        });
      });
    });
  });
}

function edt(req, res) {
  Pedido.findByIdAndUpdate(
    req.params.id,
    {
      produto: req.body.produto,
      avaliacaoProdutos: req.body.avaliacaoProdutos,
      cliente: req.body.cliente,
      data: new Date(),
    },
    function (err, pedido) {
      res.redirect("/admin/pedido/lst");
    }
  );
}

module.exports = {
  abreadd,
  add,
  list,
  filtro,
  abreedt,
  edt,
  del,
};
