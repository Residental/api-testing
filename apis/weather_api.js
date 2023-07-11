const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});



const req = http.request('https://catfact.ninja/fact', res => {
	const data = [];

	res.on('data', _ => data.push(_))
	res.on('end', () => console.log(data.join()))
});

req.end();

// server.listen(PORT, () => {
//   console.log(`Server running at PORT:${PORT}/`);
// });