const express = require ('express')
const path = require('path')
const PORT = process.env.PORT || 5002
const bodyParser = require('body-parser')
const {callback} = require("chart.js/helpers");

express()
    .use(express.static(path.join(__dirname, 'dist')))
    .use(bodyParser.urlencoded({extended: true}))
    .use(bodyParser.json())
    .set('views', path.join(__dirname, 'dist'))
    .set('view engine', 'html')
    .get('/', (req, res)=>{
        console.log("Entry point");
        res.render('index.html');
    })
    .get('/test_api', (req, res)=>{
        console.log("test_api");
        res.status(200).send('OK');
    })
    .get('/get_bitcoin_price', (req, res)=>{
        console.log("get_bitcoin_price");
        const btc = require('./server/bitcoinController');
        btc.getBitcoinPrice(function (price) {
            res.status(200).send(price);
        });

    })
    .get('/test_get_api_key', (req, res)=>{
        console.log("get_api_key");
        const key = require('./server/apiKeyController');
        res.status(200).send(key.generateApiKey());
    })
    .post('/test_add_orders', (req, res)=> {
        let body = req.body;
        const oc = require('./server/orderscontroller');
        oc.addOrders(body, req, (rowcount, errorMsg)=> {
            if (rowcount > 0){
                res.status(200).send('Orders submitted pending payment confirmation');
            } else {
                if (errorMsg != undefined){
                    res.status(404).send('Orders not sent');
                }
            }
        });
    })
    .listen(PORT, ()=> console.log(`Listening on ${ PORT }`));