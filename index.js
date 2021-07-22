const express = require("express");
const mongoose = require("mongoose");

const api = require("./api-routes/url_routes");

const app = express();

mongoose
  .connect("mongodb://localhost/url_shortner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Error connecting to MongoDB", err));

// express middlewares
app.use(express.json());

// routes
app.use("/api", api);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
