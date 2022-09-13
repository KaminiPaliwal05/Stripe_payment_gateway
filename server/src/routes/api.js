var router = require('express').Router();

const PaymentGateway = require("../component/PaymentGateway");

router.post('/payment',PaymentGateway.paymentMethod);


module.exports = router;