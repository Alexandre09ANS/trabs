const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const ProdutoController = require("../controller/ProdutoController");

router.get("/produto/add", ProdutoController.abreadd);
router.post("/produto/add", upload.single("foto"), ProdutoController.add);
router.get("/produto/lst", ProdutoController.list);
router.post("/produto/lst", ProdutoController.filtro);
router.get("/produto/edt/:id", ProdutoController.abreedt);
router.post("/produto/edt/:id", upload.single("foto"), ProdutoController.edt);
router.get("produto/del/:id", ProdutoController.del);

module.exports = router;
