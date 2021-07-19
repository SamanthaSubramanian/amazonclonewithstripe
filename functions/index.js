// build express app and host it on cloud function

const functions = require("firebase-functions");
const express= require("express");
const cors = require("cors");
const {request, response} = require("express");
// eslint-disable-next-line max-len
const stripe = require("stripe")("sk_test_51IqI83SCDhiOY6FK51KgFtsrw6J10ul6qZricbFnsAkA79Enhgcv4pwX6Iu2rVjRtlH8qMnykQWGdeZFMTJQwN3y00o3v8vbHI");

// API

// App config
const app = express();

// middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response)=> response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
        const total = request.query.total;
        console.log("payment request received",total);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total,
            currency : "inr",
        });
        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
});
// Listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/clone-9df87/us-central1/api
