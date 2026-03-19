import { Router } from "express";

const SubscriptionsRoutes = Router();

SubscriptionsRoutes.get("/", (req, res) => {
    res.send({ "title":"GET all subscription"})
})
SubscriptionsRoutes.get("/:id", (req, res) => {
    res.send({"title":"GET subscription details"})
})
SubscriptionsRoutes.post("/", (req, res) => {
    res.send({"title":"Create new  subscription"})
})
SubscriptionsRoutes.put("/:id", (req, res) => {
    res.send({"title":"Update subscription"})
})
SubscriptionsRoutes.delete("/:id", (req, res) => {
    res.send({"title":"DELETE  subscription"})
})
SubscriptionsRoutes.get('/user/:id', (req, res) => {
    res.send({ "title": "GET all users subscriptions" })
})
SubscriptionsRoutes.put('/:id/cancel', (req, res) => {
    res.send({ "title": "cancel users subscriptions" })
})
SubscriptionsRoutes.get('/upcoming-renewals', (req, res) => {
    res.send({ "title": "GET upcoming renewals subscriptions" })
})


export default SubscriptionsRoutes;