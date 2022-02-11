import { IncomingMessage, ServerResponse } from 'http';

const { createServer } = require('http');
const express = require('express');
const { parse } = require('url');
const Gun = require('gun');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
const basePath = `http://${hostname}:${port}`;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

export interface ErrnoException extends Error {
  errno?: number;
  code?: string;
  path?: string;
  syscall?: string;
  stack?: string;
}

app.prepare().then(() => {
  const server = express();

  server.use(Gun.serve);

  Gun({ web: server });

  createServer(async (req: IncomingMessage, res: ServerResponse) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      const { pathname, query } = parsedUrl;

      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  }).listen(port, (err: ErrnoException) => {
    if (err) throw err;
    console.log(`> Ready on ${basePath}`);
  });
});

export {};
