// api/auth.js

const fs = require('fs').promises;
const path = require('path');
const { authenticate } = require('@google-cloud/local-auth');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

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

export default async function handler(req, res) {

    res.setHeader('Access-Control-Allow-Origin', '*'); // Allows all domains to access
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); // Allowed methods
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allowed headers
  if (req.method === 'GET') {
    try {
      const client = await authenticate({
        scopes: SCOPES,
        keyfilePath: CREDENTIALS_PATH,
      });

      await saveCredentials(client);
      res.status(200).send('Authentication successful! Refresh token saved.' + client);
    } catch (error) {
      console.error('Error during authentication:', error);
      res.status(500).send('Authentication failed.');
    }
  } else {
    res.status(405).send('Method Not Allowed');
  }
}
