const express = require("express");
const controller = require("../controllers/motorcycleController");
const motorcycleRoutes = require("./motorcycleRoutes");

const router = express.Router();

router.get("/", controller.getInfo);
router.use("/motorcycles", motorcycleRoutes);

module.exports = router;
