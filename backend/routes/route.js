const express = require("express");
const Ctrl = require("../controller/ctrl");
const router = express.Router();

router.get("/content", Ctrl.getContent);
router.post("/content", Ctrl.createQue);
router.post("/content", Ctrl.createTag);

module.exports = router;
