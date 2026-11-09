require("dotenv").config();

const http = require("http");
const connectDatabase = require("./database");

const PORT = process.env.PORT;

async function startServer() {
  await connectDatabase();

  const server = http.createServer(function (request, response) {
    response.write("MyBank server is running");
    response.end();
  });

  server.listen(PORT, function () {
    console.log("Server running at http://localhost:" + PORT);
  });
}

startServer();