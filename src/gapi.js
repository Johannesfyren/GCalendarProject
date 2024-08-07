


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
      const SCOPES = 'https://www.googleapis.com/auth/calendar';

      let tokenClient;
      
      let gapiInited = false;
      let gisInited = false;
      let authorized = false;
     // document.getElementById('authorize_button').style.visibility = 'hidden';
      //document.getElementById('signout_button').style.visibility = 'hidden';

      /**
       * Callback after api.js is loaded.
       */
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
        tokenClient = google.accounts.oauth2.initTokenClient({
          client_id: CLIENT_ID,
          scope: SCOPES,
          access_type: 'offline',
          prompt: 'consent',
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
           document.querySelector('#connect-GA').style.display = 'none';
          authorized = true;
          console.log(resp);
          await listUpcomingEvents(); 
        };
        

        if (gapi.client.getToken() === null) {
          // Prompt the user to select a Google Account and ask for consent to share their data
          // when establishing a new session.
          tokenClient.requestAccessToken({prompt: 'consent', access_type: 'offline'});
        } else {
          // Skip display of account chooser and consent dialog for an existing session.
          tokenClient.requestAccessToken({prompt: ''});
        }
      }

     

      //Revoke access to Google Account - completely removes prior access
      window.revokeAccess = function (){
        const token = gapi.client.getToken();
        if (token) {
          const revokeUrl = `https://accounts.google.com/o/oauth2/revoke?token=${token.access_token}`;
          fetch(revokeUrl)
            .then(response => {
              console.log('Access token revoked');
              gapi.client.setToken(null); // Clear the token
            })
            .catch(error => {
              console.error('Error revoking access token', error);
            });
        }
      }
     
      /**
       *  Sign out the user upon button click.
       */
      window.handleSignoutClick = function() {
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
            'maxResults': 6,
            'orderBy': 'startTime',
          };
          response = await gapi.client.calendar.events.list(request);
          listedEvents = await response.result.items;
          
          


        } catch (err) {
          console.log(err.message);
          console.log('login error occurred - we could handle the event with dialog here')
          
          return;
        }

        
      }
      

      
      //Request upcoming events every x minute to start processing portential changes in the calendar
      setInterval(()=> {
        if (gapiInited && gisInited && authorized){ //Check if we have gotten a token, loaded the library and also authorized a user
          listUpcomingEvents();
          
          console.log(listedEvents);
        }
      }, 30000);

      setInterval(()=> {
        if (gapiInited && gisInited && authorized){ //Check if we have gotten a token, if no, we claim a new access_token every hour
          handleAuthClick();
          console.log("I handled authorization automatically");
        }
      }, 3500000);



      
      //create new events in the Google calendar coonected
      async function createEvent(extendedTime){
        const today = new Date();
        const todayPlus = new Date();
        todayPlus.setMinutes(today.getMinutes()+extendedTime); //Sæt sluttidspunkt til angivet forlængelse
  
        const event = {
          'summary': 'Ad-hoc møde',
          'start': {
            'dateTime': today.toISOString(),
            'timeZone': 'Europe/Copenhagen'
          },
          'end': {
            'dateTime': todayPlus.toISOString(),
            'timeZone': 'Europe/Copenhagen'
          },
          
        };
        
        const request = await gapi.client.calendar.events.insert({
          'calendarId': 'primary',
          'resource': event
        });
        listUpcomingEvents();
        //commented this out, as it did nothing good 
        // request.execute(function(event) {
        //   append('Event created: ' + event.htmlLink);
        // });
        
      }

      //End current meeting
      async function endEvent(startTime){
        const today = new Date();
        const startDate = new Date(startTime);
  
        const event = {
          'summary': listedEvents[0].summary,
          'start': {
            'dateTime': startDate.toISOString(),
            'timeZone': 'Europe/Copenhagen'
          },
          'end': {
            'dateTime': today.toISOString(),
            'timeZone': 'Europe/Copenhagen'
          },
        };
        
        const request = await gapi.client.calendar.events.update({
          'calendarId': 'primary',
          'eventId': listedEvents[0].id,
          'resource': event
        });
        listUpcomingEvents(); //

        //commented this out, as it did nothing good 
        // request.execute(function(event) {
        //   append('Event created: ' + event.htmlLink);
        // });
        
      }
      
      export {gapiInited, gisInited, listedEvents, authorized, createEvent, endEvent}
        
