const testFetch = document.querySelector("#test-fetch");
let listedEvents;
/* exported gapiLoaded */
      /* exported gisLoaded */
      /* exported handleAuthClick */
      /* exported handleSignoutClick */

      // TODO(developer): Set to client ID and API key from the Developer Console
      const CLIENT_ID = '974351548434-47l3loaq27hkgl6h5urc3b9uv4nln70t.apps.googleusercontent.com';
      const API_KEY = 'AIzaSyByD5BhehUcPIT2aTQrSHqdGjx8Ohkxw6o';

      // Discovery doc URL for APIs used by the quickstart
      const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

      // Authorization scopes required by the API; multiple scopes can be
      // included, separated by spaces.
      const SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

      let tokenClient;
      let gapiInited = false;
      let gisInited = false;
      let authorized = false;
     // document.getElementById('authorize_button').style.visibility = 'hidden';
      //document.getElementById('signout_button').style.visibility = 'hidden';

      /**
       * Callback after api.js is loaded.
       */
      //console.log("GAPI.js loaded");
      window.gapiLoaded = function () {
        gapi.load('client', initializeGapiClient);
       
      }
    
      /**
       * Callback after the API client is loaded. Loads the
       * discovery doc to initialize the API.
       */
      async function initializeGapiClient() {
        await gapi.client.init({
          apiKey: API_KEY,
          discoveryDocs: [DISCOVERY_DOC],
        });
        gapiInited = true;
      }

      /**
       * Callback after Google Identity Services are loaded.
       */
        window.gisLoaded = function() {
        //console.log("gisLoaded");
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          callback: '', // defined later
        });
        gisInited = true;
      }

     
      /**
       *  Sign in the user upon button click.
       */
      window.handleAuthClick = function () {
        tokenClient.callback = async (resp) => {
          if (resp.error !== undefined) {
            throw (resp);
          }
           document.querySelector('#connect-GA').style.visibility = 'hidden';
         // document.getElementById('signout_button').style.visibility = 'visible';
          //document.getElementById('authorize_button').innerText = 'Refresh';
          authorized = true;
          await listUpcomingEvents();
        };

        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({prompt: 'consent'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({prompt: ''});
        }
      }



      /**
       *  Sign out the user upon button click.
       */
      function handleSignoutClick() {
        const token = gapi.client.getToken();
        if (token !== null) {
          google.accounts.oauth2.revoke(token.access_token);
          gapi.client.setToken('');
        }
      }

      
      //Fetch upcomming events
      async function listUpcomingEvents() {
        let response;
        try {
          const request = {
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 5,
            'orderBy': 'startTime',
          };
          response = await gapi.client.calendar.events.list(request);
          listedEvents = await response.result.items;
        } catch (err) {
          console.log(err.message);
          return;
        }

        
      }
      
      //Request upcoming events every minute to start processing portential changes in the calendar
      setInterval(()=> {
        if (gapiInited && gisInited && authorized){ //Check if we have gotten a token, loaded the library and also authorized a user
          listUpcomingEvents();
          console.log(listedEvents);
        }
      }, 5000);

      export {gapiInited, gisInited, listedEvents, authorized}
        
