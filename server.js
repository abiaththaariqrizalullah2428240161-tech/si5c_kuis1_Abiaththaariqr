require("dotenv").config();

const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const logger = require("./middlewares/logger");
const { errorHandler, notFound } = require("./middlewares/errorHandler");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(logger);
app.use(express.json());

app.use("/", routes);

// 404 untuk route yang tidak tersedia
app.use(notFound);

// Error handler terpusat, termasuk JSON rusak
app.use(errorHandler);

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
  });
}

module.exports = app;
