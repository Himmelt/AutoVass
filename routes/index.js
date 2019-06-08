const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('index', {title: 'Auto Vass Program'});
});

router.post('/', function (req, res) {
    res.render('index', {title: 'Auto Vass Program', data: req.body});
});

module.exports = router;