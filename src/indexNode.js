const http = require('http');
const fs = require('fs').promises;
const path = require('path');
const process = require('process');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');


// // Scopes for Google Calendar API.
// const SCOPES = ['https://www.googleapis.com/auth/calendar'];

// // Paths to store the refresh token and credentials.
// const TOKEN_PATH = path.join(process.cwd(), 'token.json');
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

// /**
//  * Save the refresh token to token.json.
//  *
//  * @param {OAuth2Client} client
//  * @return {Promise<void>}
//  */
// async function saveCredentials(client) {
//   const content = await fs.readFile(CREDENTIALS_PATH);
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: 'authorized_user',
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token, // Only saving the refresh token
//   });
//   await fs.writeFile(TOKEN_PATH, payload);
// }

// /**
//  * Authorize and save the refresh token.
//  *
//  */
// async function authorizeAndSaveToken() {
//   const client = await authenticate({
//     scopes: SCOPES,
//     keyfilePath: CREDENTIALS_PATH,
//   });

//   if (client.credentials.refresh_token) {
//     await saveCredentials(client);
//     console.log('Refresh token saved successfully.');
//   } else {
//     console.log('No refresh token found.');
//   }
// }

// authorizeAndSaveToken().catch(console.error);


// HERFRA PRØVER VI EN EMITTER


const PORT = process.env.PORT || 3000;

// Scopes for Google Calendar API
const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const TOKEN_PATH = path.join(__dirname, 'token.json');
const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');

// Function to save credentials
async function saveCredentials(client) {
  const content = await fs.readFile(CREDENTIALS_PATH);
  const keys = JSON.parse(content);
  const key = keys.installed || keys.web;
  const payload = JSON.stringify({
    type: 'authorized_user',
    client_id: key.client_id,
    client_secret: key.client_secret,
    refresh_token: client.credentials.refresh_token,
  });
  await fs.writeFile(TOKEN_PATH, payload);
}

const server = http.createServer(async (req, res) => {
  if (req.method === 'GET' && req.url === 'https://g-calendar-project.vercel.app/auth') {
    try {
      const client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
      });
      await saveCredentials(client);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Authentication successful! Refresh token saved.');
    } catch (error) {
      console.error('Error during authentication:', error);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Authentication failed.');
    }
  } else if (req.method === 'GET') {
    // Serve your static files (e.g., HTML, CSS, JS) here
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<html><body><h1>Welcome</h1><button id="authButton">Authenticate</button><script src="yourScript.js"></script></body></html>');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});