const http = require('http');
const fs = require('fs');

const reqListener = function (req, res) {
  // ①. 初始加载 index.html 网页内容。
  // ②. 对于 index.html 中对 wasm 的访问请求进行额外处理，避免进行下载 wasm 文件资源。
  f = req.url === '/' ? 'index.html' : '../fibonacci/pkg/fibonacci_bg.wasm';
  if (f === '../fibonacci/pkg/fibonacci_bg.wasm') {
    res.setHeader('Content-type', 'application/wasm')
  }
  res.writeHead(200)
  return fs.createReadStream(f).pipe(res)
}

const server = http.createServer(reqListener);
server.listen(8081);
console.log('listening: http://localhost:8081')
