const Cliente = require("../model/Cliente");

function abreadd(req, res) {
  res.render("cliente/add");
}

function add(req, res) {
  let cliente = new Cliente(
    /*req.body*/ {
      nome: req.body.nome,
      celular: req.body.senha,
      cpf: req.body.cpf,
      foto: req.file.filename,
    }
  );

  cliente.save(function (err) {
    if (err) {
      console.log(err);
    } else {
      res.redirect("/admin/cliente/lst");
    }
  });
}

function list(req, res) {
  Cliente.find({}, function (err, clientes) {
    res.render("cliente/lst", { Clientes: clientes });
  });
}

function filtro(req, res) {
  Cliente.find(
    { nome: new RegExp(req.body.pesquisar, "i") },
    function (err, clientes) {
      res.render("cliente/lst", { Clientes: Clientes });
    }
  );
}

function del(req, res) {
  Cliente.findByIdAndDelete(req.params.id, function (err, clientes) {
    res.redirect("/admin/cliente/lst");
  });
}

function abreedt(req, res) {
  Cliente.findById(req.params.id, function (err, cliente) {
    res.render("cliente/edt", { Cliente: cliente });
  });
}

function edt(req, res) {
  Cliente.findByIdAndUpdate(
    req.params.id,
    {
      nome: req.body.nome,
      celular: req.body.celular,
      cpf: req.body.cpf,
      foto: req.file.filename,
    },
    function (err, cliente) {
      res.redirect("/admin/cliente/lst");
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
