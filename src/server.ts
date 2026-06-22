import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import cors from 'cors';
import { join } from 'node:path';
import { sampleAccounts } from './data';
import jwt from 'jsonwebtoken';
import { secretKey } from './credentials';

const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
app.use(express.json());
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */

/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

app.use(cors({
  credentials:true,
  origin:[`http://localhost:4200`]
}));

app.get("/api/accounts", (req, res) => {
  res.send(sampleAccounts);
});

app.post("/api/users/login", (req, res) => {
  const {email, password} = req.body;
  const account = sampleAccounts.find(account => account.email === email && account.password === password);

  if (account) {
    res.send(generateTokenResponse(account));
  }
  else {
    res.status(400).send("Account name or password is not valid!");
  }
});

const generateTokenResponse = (account:any) => {
  const token = jwt.sign({
    email:account.email
  }, secretKey, {
    expiresIn:"30d"
  });

  account.token = token;
  return account;
}

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
