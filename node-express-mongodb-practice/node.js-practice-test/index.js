/** This is Node Js Server Creating Code */

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello From Node Server.");
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("About From Node Server");
  } else if (req.url === "/blog") {
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Blog From Node Server.");
  }
});
server.listen(5000, () => {
  console.log("server is running on port 5000.");
});
