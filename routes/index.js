const express = require('express');
const router = express.Router();

// if using modules
/*
import express from "express"
const  router = express.Router();*/

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
//export default router