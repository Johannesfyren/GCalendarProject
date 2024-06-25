const codeEx = {
    "kind": "calendar#event",
    "etag": "\"1234567890123456\"",
    "id": "abc123",
    "status": "confirmed",
    "htmlLink": "https://www.google.com/calendar/event?eid=abc123",
    "created": "2024-06-22T22:00:00Z",
    "updated": "2024-06-22T23:00:00Z",
    "summary": "Team Meeting",
    "description": "Monthly team sync meeting",
    "location": "Conference Room 1",
    "colorId": "5",
    "creator": {
      "id": "creator123",
      "email": "creator@example.com",
      "displayName": "John Doe",
      "self": true
    },
    "organizer": {
      "id": "organizer123",
      "email": "organizer@example.com",
      "displayName": "Jane Smith",
      "self": false
    },
    "start": {
      "date": "2024-06-25",
      "dateTime": "2024-06-25T13:00:00Z",
      "timeZone": "Copenhagen"
    },
    "end": {
      "date": "2024-06-25",
      "dateTime": "2024-06-25T15:16:00Z",
      "timeZone": "Copenhagen"
    },
    "endTimeUnspecified": false,
    "recurrence": [
      "RRULE:FREQ=MONTHLY;BYDAY=1MO"
    ],
    "recurringEventId": "rec123",
    "originalStartTime": {
      "date": "2024-07-01",
      "dateTime": "2024-07-01T09:00:00Z",
      "timeZone": "America/Los_Angeles"
    },
    "transparency": "opaque",
    "visibility": "default",
    "iCalUID": "abc123@google.com",
    "sequence": 0,
    "attendees": [
      {
        "id": "attendee1",
        "email": "attendee1@example.com",
        "displayName": "Alice Johnson",
        "organizer": false,
        "self": false,
        "resource": false,
        "optional": false,
        "responseStatus": "accepted",
        "comment": "Looking forward to it!",
        "additionalGuests": 0
      }
    ],
    "attendeesOmitted": false,
    "extendedProperties": {
      "private": {
        "key1": "value1"
      },
      "shared": {
        "key2": "value2"
      }
    },
    "hangoutLink": "https://meet.google.com/abc-defg-hij",
    "conferenceData": {
      "createRequest": {
        "requestId": "xyz123",
        "conferenceSolutionKey": {
          "type": "hangoutsMeet"
        },
        "status": {
          "statusCode": "success"
        }
      },
      "entryPoints": [
        {
          "entryPointType": "video",
          "uri": "https://meet.google.com/abc-defg-hij",
          "label": "Google Meet",
          "pin": "123456",
          "accessCode": "987654",
          "meetingCode": "abc-defg-hij",
          "passcode": "pass123",
          "password": "pwd123"
        }
      ],
      "conferenceSolution": {
        "key": {
          "type": "hangoutsMeet"
        },
        "name": "Google Meet",
        "iconUri": "https://www.gstatic.com/images/icons/material/product/2x/hangouts_meet_64dp.png"
      },
      "conferenceId": "xyz123",
      "signature": "abcdef123456",
      "notes": "Join the meeting at the provided link."
    },
    "gadget": {
      "type": "application/x-google-gadget",
      "title": "Gadget Title",
      "link": "https://www.example.com/gadget",
      "iconLink": "https://www.example.com/icon.png",
      "width": 300,
      "height": 200,
      "display": "icon",
      "preferences": {
        "key3": "value3"
      }
    },
    "anyoneCanAddSelf": true,
    "guestsCanInviteOthers": true,
    "guestsCanModify": false,
    "guestsCanSeeOtherGuests": true,
    "privateCopy": false,
    "locked": false,
    "reminders": {
      "useDefault": false,
      "overrides": [
        {
          "method": "email",
          "minutes": 30
        }
      ]
    },
    "source": {
      "url": "https://www.example.com/source",
      "title": "Event Source"
    },
    "workingLocationProperties": {
      "type": "office",
      "homeOffice": null,
      "customLocation": {
        "label": "Home Office"
      },
      "officeLocation": {
        "buildingId": "bldg1",
        "floorId": "floor1",
        "floorSectionId": "sec1",
        "deskId": "desk1",
        "label": "Desk 1"
      }
    },
    "outOfOfficeProperties": {
      "autoDeclineMode": "manual",
      "declineMessage": "Out of office, will respond later."
    },
    "focusTimeProperties": {
      "autoDeclineMode": "manual",
      "declineMessage": "In focus time, will respond later.",
      "chatStatus": "DoNotDisturb"
    },
    "attachments": [
      {
        "fileUrl": "https://www.example.com/file.pdf",
        "title": "Agenda",
        "mimeType": "application/pdf",
        "iconLink": "https://www.example.com/icon.pdf",
        "fileId": "file123"
      }
    ],
    "eventType": "default"
  }
  
export default {codeEx}