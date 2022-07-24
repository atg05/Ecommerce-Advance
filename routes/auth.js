const express = require("express");

const router = express.Router();

// middlewares

const { authCheck } = require("../middlewares/auth");

//controller
const { createOrUpdateUser } = require("../controller/auth");

router
  .get("/avinash", createOrUpdateUser)
  .post("/create-or-update-user", authCheck, createOrUpdateUser);

module.exports = router;   
