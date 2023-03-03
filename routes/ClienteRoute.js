const express = require("express");
const router = express.Router();
const upload = require("../config/upload");

const ClienteController = require("../controller/ClienteController");

router.get("/cliente/add", ClienteController.abreadd);
router.post("/cliente/add", upload.single("foto"), ClienteController.add);
router.get("/cliente/lst", ClienteController.list);
router.post("/cliente/lst", ClienteController.filtro);
router.get("/cliente/edt/:id", ClienteController.abreedt);
router.post("/cliente/edt/:id", upload.single("foto"), ClienteController.edt);
router.get("/cliente/del/:id", ClienteController.del);

module.exports = router;
