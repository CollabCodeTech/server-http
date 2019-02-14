const http = require("http");
const PORT = 8082;
const IP = "localhost";

const server = http.createServer(function(req, res) {
  const { url } = req;
  const response = [];
  response["/"] =
    "<h1 style='font-size: 100px; color: #f1596f;'>CollabCode</h1>";
  response["/user"] = "<h1 style='font-size: 100px; color: #f1596f;'>User</h1>";

  res.end(
    response[url] ||
      "<h1 style='font-size: 100px; color: #f1596f;'>Not found 404</h1>"
  );
});

server.listen(PORT, IP, function() {
  console.log(`Servidor de pé em: http://${IP}:${PORT}`);
});
