// custom server

const { createServer } = require("http");
const { parse } = require("url");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3030;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      // Be sure to pass `true` as the second argument to `url.parse`.
      // This tells it to parse the query portion of the URL.
      const parsedUrl = parse(req.url, true);
      // const { pathname, query } = parsedUrl;

      //   if (pathname === "/a") {
      //     await app.render(req, res, "/a", query);
      //   } else if (pathname === "/b") {
      //     await app.render(req, res, "/b", query);
      //   } else {
      await handle(req, res, parsedUrl);
      //   }
    } catch (err) {
      console.error("Error occurred handling", req.url, err);
      res.statusCode = 500;
      res.end("internal server error");
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});

// const express = require("express");
// const next = require("next");
// // const compression = require("compression");
// const port = parseInt(process.env.PORT, 10) || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = express();
//   //   server.use(compression());

//   server.use(function (req, res, next) {
//     req.url = req.originalUrl.replace("/nextjs_custom_server/_next", "/_next");
//     next(); // be sure to let the next middleware handle the modified request.
//   });

//   server.get("/_next/*", (req, res) => {
//     handle(req, res);
//   });
//   server.all("*", (req, res) => {
//     handle(req, res);
//   });

//   server.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`Server ready on ${port}`);
//   });
// });
