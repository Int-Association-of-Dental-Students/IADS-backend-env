require("dotenv").config();

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const routes = require("./routes/routes");
const PublicationRoute = require("./routes/Committees/SCORE/PublicationsRoute");

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("connected to DB");
    app.use(bodyParser.json());
    app.use(express.json());

    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization,*"
      );
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
      next();
    });

    app.use(express.json());
    app.use("/api", routes);
    app.use("/api", PublicationRoute);
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.once("open", () => {
  console.log("connected to mongodb");
  app.listen(3001, () => console.log("server running"));
});

connectDB();
