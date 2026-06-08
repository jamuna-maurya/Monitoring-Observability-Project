const express = require("express");
const client = require("prom-client");

const app = express();

const register = new client.Registry();

client.collectDefaultMetrics({
  register
});

const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total HTTP Requests"
});

const errorRequests = new client.Counter({
  name: "http_errors_total",
  help: "Total Error Requests"
});

register.registerMetric(httpRequests);
register.registerMetric(errorRequests);

app.get("/", (req, res) => {
  httpRequests.inc();
  res.send("Monitoring Project Running");
});

app.get("/error", (req, res) => {
  errorRequests.inc();
  res.status(500).send("Internal Server Error");
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(3000, () => {
  console.log("App Running on Port 3000");
});
