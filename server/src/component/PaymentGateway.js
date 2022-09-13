const validator = require("../helpers/validate");
const stripe = require('stripe')('Key...');

const PaymentGateway = {

    async paymentMethod(req, res){
        console.log("Hello--->",req.body);
        const validationRule = {
           "token" : "required|string"
        }

        validator(req.body, validationRule, {}, (err, status) => {
            if(!status) {
                res.status(422).send({
                    success: false,
                    message: 'Errors',
                    data: err
                })
            }
        });

        try {
            const customer = await stripe.customers.create({
                email: 'xyz@example.com',
                source: token.id
              });

            res.status(200).send({
                message:"Payment Successfull",
                data: customer
            })
        } catch (err) {
            console.log("err----->",err);
            res.status(422).send(err);
        }
    }
}

module.exports = PaymentGateway;