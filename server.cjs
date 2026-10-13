const http = require('node:http');
const { readFile } = require('node:fs/promises');
const path = require('node:path');

const root = path.join(__dirname, 'public');
const types = { '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };

const server = http.createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { Allow: 'GET, HEAD' });
    return res.end('Method not allowed');
  }
  let pathname;
  try {
    pathname = decodeURIComponent(req.url.split('?')[0]);
  } catch {
    res.writeHead(400);
    return res.end('Bad request');
  }
  const file = path.resolve(root, `.${pathname === '/' ? '/index.html' : pathname}`);
  if (!file.startsWith(root + path.sep)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  try {
    const content = await readFile(file);
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    res.end(req.method === 'HEAD' ? undefined : content);
  } catch (error) {
    const missing = ['ENOENT', 'ENOTDIR', 'EISDIR'].includes(error.code);
    res.writeHead(missing ? 404 : 500);
    res.end(missing ? 'Not found' : 'Internal server error');
  }
});

if (require.main === module) {
  const port = Number(process.env.PORT || 3000);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error('PORT must be an integer between 1 and 65535.');
    process.exit(1);
  }
  server.on('error', (error) => {
    console.error(`서버 실행 실패: ${error.message}`);
    process.exit(1);
  });
  server.listen(port, '127.0.0.1', () => console.log(`http://localhost:${port}`));
}

module.exports = server;
