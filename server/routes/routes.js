const express = require('express');
// const router = require('express-promise-router')();
const router = require('express').Router();
const controller = require('../controller/reports');

// Connect routes to corresponding controller methods

router.post('/create', controller.create.post);
router.get('/report', controller.report.get);

module.exports = router;