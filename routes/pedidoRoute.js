const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const PedidoController = require("../controller/PedidoController");

router.get("/pedido/add", PedidoController.abreadd);
router.post("/pedido/add", PedidoController.add);
router.get("/pedido/lst", PedidoController.list);
router.post("/pedido/lst", PedidoController.filtro);
router.get("/pedido/edt/:id", PedidoController.abreedt);
router.post("/pedido/edt/:id", PedidoController.edt);
router.get("/pedido/del/:id", PedidoController.del);

module.exports = router;
