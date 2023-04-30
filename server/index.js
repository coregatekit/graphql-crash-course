require("dotenv").config();
const colors = require("colors");
const expresss = require("express");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

const app = expresss();

app.use(cors());

// Connect to database
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(PORT, console.log(`Server running on port ${PORT}`));
