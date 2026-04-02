const http = require('http');

const PORT = 6559;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from EC2! App is running on port 6559 🚀');
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});