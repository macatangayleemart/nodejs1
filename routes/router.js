const express = require('express');
const router = express.Router();
const hp = require('../controller/Control.js')

router.get('/', hp.lee);
router.get('/opo', hp.mart);
router.get('/report', hp.report);
router.get('/sigepo', hp.sigepo);
router.get('/salamatpo', hp.salamatpo);
module.exports = router;