const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

/* Sample in-memory data */
const team = {
  name: "Platform Engineering",
  owner: "DevOps Team Chetan testing if CICD Works ):",
  email: "platform@company.com"
};

const services = [
  {
    name: "auth-service",
    language: "Node.js",
    owner: "Security Team",
    status: "running"
  },
  {
    name: "payment-service",
    language: "Java",
    owner: "Payments Team",
    status: "running"
  },
  {
    name: "notification-service",
    language: "Python",
    owner: "Messaging Team",
    status: "degraded"
  }
];

/* Routes */
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

app.get("/team", (req, res) => {
  res.json(team);
});

app.get("/services", (req, res) => {
  res.json(services);
});

app.get("/service/:name", (req, res) => {
  const service = services.find(
    s => s.name === req.params.name
  );

  if (!service) {
    return res.status(404).json({ error: "Service not found" });
  }

  res.json(service);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
