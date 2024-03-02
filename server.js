const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const port = process.env.PORT || 5070;

const usersRoute = require("./routes/usersRoute");
const boardRoutes = require("./routes/boardRoutes");
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/board", boardRoutes);

const path = require("path");
const authMiddleWare = require("./middlewares/authMiddleWare");
app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "dist")));
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
  
app.listen(port, () => console.log(`Node server listening on port ${port}!`));
