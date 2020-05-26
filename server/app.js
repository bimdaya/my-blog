// const express = require('express');
// const next = require('next');
// const { Signale } = require('signale');

// const dev = process.env.NODE_ENV !== 'production';
// const port = process.env.PORT || 58366;
// const app = next({ dev });

// const handle = app.getRequestHandler();

// (async () => {
//   await app.prepare();
//   const server = express();
//   server.use('/static', express.static('public/static'));

//   server.get('*', (req, res) => handle(req, res));

//   server.listen(port, () => {
//     console.log('App is running on port ' + port);
//   });
// })();
