const assert = require('node:assert/strict');
const http = require('node:http');
const fs = require('node:fs');
const server = require('../server.cjs');

function request(path, method = 'GET') {
  return new Promise((resolve, reject) => {
    http.request({ host: '127.0.0.1', port: server.address().port, path, method }, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) }));
    }).on('error', reject).end();
  });
}

server.listen(0, '127.0.0.1', async () => {
  try {
    for (const [url, file, type] of [['/', 'index.html', 'text/html'], ['/styles.css', 'styles.css', 'text/css'], ['/script.js', 'script.js', 'text/javascript'], ['/assets/logo.svg', 'assets/logo.svg', 'image/svg+xml'], ['/assets/profile.png', 'assets/profile.png', 'image/png'], ['/assets/project-news.jpg', 'assets/project-news.jpg', 'image/jpeg']]) {
      const response = await request(url);
      assert.equal(response.status, 200);
      assert(response.headers['content-type'].startsWith(type));
      assert.deepEqual(response.body, fs.readFileSync(`public/${file}`));
    }
    assert.equal((await request('/index.html?preview=1')).status, 200);
    assert.equal((await request('/', 'HEAD')).body.length, 0);
    assert.equal((await request('/missing.html')).status, 404);
    assert.equal((await request('/package.json')).status, 404);
    assert.equal((await request('/%2e%2e/server.cjs')).status, 403);
    assert.equal((await request('/%ZZ')).status, 400);
    assert.equal((await request('/', 'POST')).status, 405);
    console.log('PASS: static files, MIME types, HEAD, missing paths, traversal, invalid URL, methods');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
server.on('error', (error) => { console.error(error); process.exitCode = 1; });
