/*
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const express = require('express');
const router = express.Router();*/


import express from "express"
const  router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//module.exports = router;
export default router