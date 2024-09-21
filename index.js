/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/countDown.js":
/*!**************************!*\
  !*** ./src/countDown.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateCircleCircumference: () => (/* binding */ calculateCircleCircumference),
/* harmony export */   calculateRemainingTime: () => (/* binding */ calculateRemainingTime)
/* harmony export */ });
//Calculate the circumference to the countDown timer, so remaining time can be shown
function calculateCircleCircumference(startTime, endTime) {
  var today = new Date().getTime();
  var startTimeInMillis = startTime.getTime();
  var endTimeInMillis = endTime.getTime();
  var totalMeetingTime = endTimeInMillis - startTimeInMillis;
  var elabsedMeetingTime = today - startTimeInMillis;
  var percentMeetingElabsed = elabsedMeetingTime / totalMeetingTime * 100;
  return percentMeetingElabsed * 11.3; //11.3 is 1% of the circumference value used to draw the circle. Total circ is = 2*PI*radius
}

//Calculates how many minutes is left of current active meeting
function calculateRemainingTime(endTime) {
  var today = new Date().getTime();
  var endTimeInMillis = endTime.getTime();
  return (endTimeInMillis - today) / 1000 / 60;
}


/***/ }),

/***/ "./src/gapi.js":
/*!*********************!*\
  !*** ./src/gapi.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   authorized: () => (/* binding */ authorized),
/* harmony export */   createEvent: () => (/* binding */ createEvent),
/* harmony export */   endEvent: () => (/* binding */ endEvent),
/* harmony export */   gapiInited: () => (/* binding */ gapiInited),
/* harmony export */   gisInited: () => (/* binding */ gisInited),
/* harmony export */   listedEvents: () => (/* binding */ listedEvents)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var listedEvents;
/* exported gapiLoaded */
/* exported gisLoaded */
/* exported handleAuthClick */
/* exported handleSignoutClick */

// TODO(developer): Set to client ID and API key from the Developer Console
var CLIENT_ID = '974351548434-47l3loaq27hkgl6h5urc3b9uv4nln70t.apps.googleusercontent.com';
var API_KEY = 'AIzaSyByD5BhehUcPIT2aTQrSHqdGjx8Ohkxw6o';

// Discovery doc URL for APIs used by the quickstart
var DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
var SCOPES = 'https://www.googleapis.com/auth/calendar';
var tokenClient;
var gapiInited = false;
var gisInited = false;
var authorized = false;
// document.getElementById('authorize_button').style.visibility = 'hidden';
//document.getElementById('signout_button').style.visibility = 'hidden';

/**
 * Callback after api.js is loaded.
 */
window.gapiLoaded = function () {
  gapi.load('client', initializeGapiClient);
};

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
function initializeGapiClient() {
  return _initializeGapiClient.apply(this, arguments);
}
/**
 * Callback after Google Identity Services are loaded.
 */
function _initializeGapiClient() {
  _initializeGapiClient = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return gapi.client.init({
            apiKey: API_KEY,
            discoveryDocs: [DISCOVERY_DOC]
          });
        case 2:
          gapiInited = true;
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _initializeGapiClient.apply(this, arguments);
}
window.gisLoaded = function () {
  tokenClient = google.accounts.oauth2.initTokenClient({
    client_id: CLIENT_ID,
    scope: SCOPES,
    access_type: 'offline',
    prompt: 'consent',
    callback: '' // defined later
  });
  gisInited = true;
};

/**
 *  Sign in the user upon button click.
 */
window.handleAuthClick = function () {
  tokenClient.callback = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(resp) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            if (!(resp.error !== undefined)) {
              _context.next = 2;
              break;
            }
            throw resp;
          case 2:
            document.querySelector('#connect-GA').style.display = 'none';
            authorized = true;
            console.log(resp);
            _context.next = 7;
            return listUpcomingEvents();
          case 7:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
  if (gapi.client.getToken() === null) {
    // Prompt the user to select a Google Account and ask for consent to share their data
    // when establishing a new session.
    tokenClient.requestAccessToken({
      prompt: 'consent',
      access_type: 'offline'
    });
  } else {
    // Skip display of account chooser and consent dialog for an existing session.
    tokenClient.requestAccessToken({
      prompt: ''
    });
  }
};

//Revoke access to Google Account - completely removes prior access
window.revokeAccess = function () {
  var token = gapi.client.getToken();
  if (token) {
    var revokeUrl = "https://accounts.google.com/o/oauth2/revoke?token=".concat(token.access_token);
    fetch(revokeUrl).then(function (response) {
      console.log('Access token revoked');
      gapi.client.setToken(null); // Clear the token
    })["catch"](function (error) {
      console.error('Error revoking access token', error);
    });
  }
};

/**
 *  Sign out the user upon button click.
 */
window.handleSignoutClick = function () {
  var token = gapi.client.getToken();
  if (token !== null) {
    google.accounts.oauth2.revoke(token.access_token);
    gapi.client.setToken('');
  }
};

//Fetch upcomming events
function listUpcomingEvents() {
  return _listUpcomingEvents.apply(this, arguments);
} //Request upcoming events every x minute to start processing portential changes in the calendar
function _listUpcomingEvents() {
  _listUpcomingEvents = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var response, request;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          request = {
            'calendarId': 'primary',
            'timeMin': new Date().toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 6,
            'orderBy': 'startTime'
          };
          _context3.next = 4;
          return gapi.client.calendar.events.list(request);
        case 4:
          response = _context3.sent;
          _context3.next = 7;
          return response.result.items;
        case 7:
          listedEvents = _context3.sent;
          _context3.next = 15;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
          console.log('login error occurred - we could handle the event with dialog here');
          return _context3.abrupt("return");
        case 15:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return _listUpcomingEvents.apply(this, arguments);
}
setInterval(function () {
  if (gapiInited && gisInited && authorized) {
    //Check if we have gotten a token, loaded the library and also authorized a user
    listUpcomingEvents();
    console.log(listedEvents);
  }
}, 30000);
setInterval(function () {
  if (gapiInited && gisInited && authorized) {
    //Check if we have gotten a token, if no, we claim a new access_token every hour
    handleAuthClick();
    console.log("I handled authorization automatically");
  }
}, 3500000);

//create new events in the Google calendar coonected
function createEvent(_x2) {
  return _createEvent.apply(this, arguments);
} //End current meeting
function _createEvent() {
  _createEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(extendedTime) {
    var today, todayPlus, event, request;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          today = new Date();
          todayPlus = new Date();
          todayPlus.setMinutes(today.getMinutes() + extendedTime); //Sæt sluttidspunkt til angivet forlængelse
          event = {
            'summary': 'Ad-hoc møde',
            'start': {
              'dateTime': today.toISOString(),
              'timeZone': 'Europe/Copenhagen'
            },
            'end': {
              'dateTime': todayPlus.toISOString(),
              'timeZone': 'Europe/Copenhagen'
            }
          };
          _context4.next = 6;
          return gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event
          });
        case 6:
          request = _context4.sent;
          listUpcomingEvents();
          //commented this out, as it did nothing good 
          // request.execute(function(event) {
          //   append('Event created: ' + event.htmlLink);
          // });
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _createEvent.apply(this, arguments);
}
function endEvent(_x3) {
  return _endEvent.apply(this, arguments);
}
function _endEvent() {
  _endEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(startTime) {
    var today, startDate, event, request;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          today = new Date();
          startDate = new Date(startTime);
          event = {
            'summary': listedEvents[0].summary,
            'start': {
              'dateTime': startDate.toISOString(),
              'timeZone': 'Europe/Copenhagen'
            },
            'end': {
              'dateTime': today.toISOString(),
              'timeZone': 'Europe/Copenhagen'
            }
          };
          _context5.next = 5;
          return gapi.client.calendar.events.update({
            'calendarId': 'primary',
            'eventId': listedEvents[0].id,
            'resource': event
          });
        case 5:
          request = _context5.sent;
          listUpcomingEvents(); //

          //commented this out, as it did nothing good 
          // request.execute(function(event) {
          //   append('Event created: ' + event.htmlLink);
          // });
        case 7:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return _endEvent.apply(this, arguments);
}


/***/ }),

/***/ "./src/manipulateMeetings.js":
/*!***********************************!*\
  !*** ./src/manipulateMeetings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   circleAnimOuter: () => (/* binding */ circleAnimOuter),
/* harmony export */   endMeeting: () => (/* binding */ endMeeting),
/* harmony export */   reserve: () => (/* binding */ reserve)
/* harmony export */ });
/* harmony import */ var _gapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gapi */ "./src/gapi.js");
/* harmony import */ var _stateController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stateController */ "./src/stateController.js");


var endMeeting = document.querySelector('#btn-end');
var reserve = document.querySelector('#btn-reserve');
var reserveDialog = document.querySelector('#reserve-dialog');
var closeReserveDialog = document.querySelector('#reserve-close');
var circleAnimOuter = document.querySelector('#inner-circle');
var reserve_10 = document.querySelector('#reserve-10');
var reserve_15 = document.querySelector('#reserve-15');
var reserve_30 = document.querySelector('#reserve-30');
var reserve_60 = document.querySelector('#reserve-60');

//End meeting
endMeeting.addEventListener('click', function () {
  endCurrentMeeting();
  endMeeting.classList.add("button--loading");

  //Animation
  circleAnimOuter.classList.add('countdown--end'); //Start animation
  setTimeout(function () {
    circleAnimOuter.style.strokeDashoffset = 1130; //Set circumference to closed
    circleAnimOuter.classList.remove('countdown--end'); // reset it, so we can animate later again
  }, 1500);
  //animationActive = false; //Make it possible to start animation on meeting start.. LÆS: udkommenteret, da værdien er sat til 0 åbenbart, og JS anser denne værdi som værende et object med kun en "getter"
});

//open dialog modal
reserve.addEventListener('click', function () {
  reserveDialog.showModal();
  if (_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents.length != 0) {
    checkDisabledReserveTimes();
  } // Check how much time there is to next meeting, and disable options if the exceed time to upcoming meeting
});

//close dialog modal with no pick
closeReserveDialog.addEventListener('click', function () {
  reserveDialog.close();
});
reserve_10.addEventListener('click', function () {
  (0,_gapi__WEBPACK_IMPORTED_MODULE_0__.createEvent)(10);
  reserveDialog.close();
  reserve.classList.add("button--loading");
});
reserve_15.addEventListener('click', function () {
  (0,_gapi__WEBPACK_IMPORTED_MODULE_0__.createEvent)(15);
  reserveDialog.close();
  reserve.classList.add("button--loading");
});
reserve_30.addEventListener('click', function () {
  (0,_gapi__WEBPACK_IMPORTED_MODULE_0__.createEvent)(30);
  reserveDialog.close();
  reserve.classList.add("button--loading");
});
reserve_60.addEventListener('click', function () {
  (0,_gapi__WEBPACK_IMPORTED_MODULE_0__.createEvent)(60);
  reserveDialog.close();
  reserve.classList.add("button--loading");
});

//Calculates the amount of minutes until next meeting is starting
function timeToNextMeeting() {
  var today = new Date();
  var nextMeeting = new Date(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].start.dateTime);
  return nextMeeting.getTime() / 1000 / 60 - today.getTime() / 1000 / 60;
}

//Sets the ad-hoc booking buttons to enabled/disabled, depending on if they would overlap upcoming meeting
function checkDisabledReserveTimes() {
  if (timeToNextMeeting() < 60) {
    reserve_60.disabled = true;
  } else {
    reserve_60.disabled = false;
  }
  if (timeToNextMeeting() < 30) {
    reserve_30.disabled = true;
  } else {
    reserve_30.disabled = false;
  }
  if (timeToNextMeeting() < 15) {
    reserve_15.disabled = true;
  } else {
    reserve_15.disabled = false;
  }
  if (timeToNextMeeting() < 10) {
    reserve_10.disabled = true;
  } else {
    reserve_10.disabled = false;
  }
}
function endCurrentMeeting() {
  (0,_gapi__WEBPACK_IMPORTED_MODULE_0__.endEvent)(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].start.dateTime);
}


/***/ }),

/***/ "./src/stateController.js":
/*!********************************!*\
  !*** ./src/stateController.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   animationActive: () => (/* binding */ animationActive)
/* harmony export */ });
/* harmony import */ var _gapi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gapi */ "./src/gapi.js");
/* harmony import */ var _countDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./countDown */ "./src/countDown.js");
/* harmony import */ var _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manipulateMeetings */ "./src/manipulateMeetings.js");
/* harmony import */ var _img_Bg_img_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/Bg-img.png */ "./src/img/Bg-img.png");
/* harmony import */ var _img_Bg_img_occupied_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/Bg-img-occupied.png */ "./src/img/Bg-img-occupied.png");



var ugedage = ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"];
var secContent = document.querySelector('.sec-content');
var meetingState; // used to determine the state the screen are in, and fx to determine if there are meetings we can end //0 = no meetings, 1 = meetings in the calendar, 2, meeting is active
var animationActive = false;



//Do we have any meetings in the calendar?
setInterval(function () {
  if (_gapi__WEBPACK_IMPORTED_MODULE_0__.gapiInited && _gapi__WEBPACK_IMPORTED_MODULE_0__.gisInited && _gapi__WEBPACK_IMPORTED_MODULE_0__.authorized) {
    currentTime(); // Always call and display the current time of day

    //Checking if there are more than just one event, and sets background of upcoming meeting background to transparent og semi transparent
    if (_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents.length < 2) {
      secContent.style.backgroundColor = "transparent";
    } else {
      secContent.style.backgroundColor = "var(--sec-col)";
    }

    //Sequence to check for #of meetings and draw the UI accordingly
    if (!_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents.length == 0) {
      //Checking if there are any meetings in the calendar
      // const nextMeeting = new Date(listedEvents[0].start.dateTime);    

      if (checkIfActiveMeeting(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].start.dateTime, _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].end.dateTime)) {
        //"checking if it any of the meetings is active!"
        activeMeetingState();
        displayAdditionalMeetings();
        meetingState = 2;

        //Animate circle on meeting start
        if (animationActive == false) {
          _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.circleAnimOuter.classList.add('countdown--start'); //Start animation
          setTimeout(function () {
            _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.circleAnimOuter.classList.remove('countdown--start'); // reset it, so we can animate later again
            animationActive = true;
          }, 1500);
        }
      } else {
        //("We have meetings in the calendar, but none is active!");
        upcomingMeetingState();
        displayAdditionalMeetings();
        meetingState = 1;
        animationActive = false;
      }
    } else {
      //We have no meeetings
      meetingState = 0;
      emptyMeetingState();
      animationActive = false;
    }
  }
}, 5000);
function checkIfActiveMeeting(startTime, endTime) {
  var today = new Date();
  var start = new Date(startTime);
  var end = new Date(endTime);
  if (start <= today && end >= today) {
    return true;
  }
}
function upcomingMeetingState() {
  var startTime = new Date(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].start.dateTime);
  var startTimeMinsConv = (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
  var endTime = new Date(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].end.dateTime);
  var endTimeMinsConv = (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();

  //Show
  document.querySelector("#meet-title").textContent = _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].summary; //Meet title
  document.querySelector("#meet-org").textContent = _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].creator.email.slice(0, _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].creator.email.search('@')); //Organizer without @gmail.com
  document.querySelector("#meet-time").textContent = "".concat(getWeekDayName(startTime), ", ").concat(startTime.getHours(), ":").concat(startTimeMinsConv, " - ").concat(endTime.getHours(), ":").concat(endTimeMinsConv); //Meet time
  document.querySelector("#btn-reserve").style.display = "block";
  document.querySelector("#bg-img").src = _img_Bg_img_png__WEBPACK_IMPORTED_MODULE_3__;
  document.querySelector('.flex-icon-meet').style.display = 'flex';
  document.querySelector('.flex-icon-time').style.display = 'flex';

  //Hide
  _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.reserve.classList.remove("button--loading");
  _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.endMeeting.classList.remove("button--loading");
  document.querySelector("#no-events").textContent = "";
  document.querySelector(".countdown-container").style.visibility = "hidden";
  document.querySelector("#btn-end").style.display = "none";
}

//If there are no meetings fetched though the API, due to no upcoming meetings
function emptyMeetingState() {
  //Show
  document.querySelector("#no-events").textContent = "Ingen Begivenheder";
  document.querySelector("#btn-reserve").style.display = "block";
  document.querySelector(".countdown-container").style.visibility = "hidden";
  document.querySelector("#bg-img").src = _img_Bg_img_png__WEBPACK_IMPORTED_MODULE_3__;

  //Hide
  _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.reserve.classList.remove("button--loading");
  _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.endMeeting.classList.remove("button--loading");
  document.querySelector("#meet-title").textContent = "";
  document.querySelector("#meet-time").replaceChildren();
  document.querySelector("#meet-org").textContent = ""; //Organizer
  document.querySelector("#btn-end").style.display = "none";
  document.querySelector('.flex-icon-meet').style.display = 'none';
  document.querySelector('.flex-icon-time').style.display = 'none';
}
function activeMeetingState() {
  var startTime = new Date(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].start.dateTime);
  var startTimeMinsConv = (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
  var endTime = new Date(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].end.dateTime);
  var endTimeMinsConv = (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();

  //Show
  document.querySelector(".time-content").style.display = "grid";
  document.querySelector("#meet-title").textContent = _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].summary; //Meet title
  document.querySelector("#meet-org").textContent = _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].creator.email.slice(0, _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[0].creator.email.search('@')); //Organizer without @gmail.com
  document.querySelector("#meet-time").textContent = "".concat(getWeekDayName(startTime), ", ").concat(startTime.getHours(), ":").concat(startTimeMinsConv, " - ").concat(endTime.getHours(), ":").concat(endTimeMinsConv); //Meet time
  document.querySelector("#number").textContent = "".concat(Math.floor((0,_countDown__WEBPACK_IMPORTED_MODULE_1__.calculateRemainingTime)(endTime)), " min");
  document.querySelector(".countdown-container").style.visibility = "visible";
  document.querySelector('#inner-circle').style.strokeDashoffset = (0,_countDown__WEBPACK_IMPORTED_MODULE_1__.calculateCircleCircumference)(startTime, endTime);
  document.querySelector("#btn-end").style.display = "block";
  document.querySelector("#bg-img").src = _img_Bg_img_occupied_png__WEBPACK_IMPORTED_MODULE_4__;
  document.querySelector('.flex-icon-meet').style.display = 'flex';
  document.querySelector('.flex-icon-time').style.display = 'flex';

  //Hide
  document.querySelector("#btn-reserve").style.display = "none";
  document.querySelector("#no-events").textContent = "";
  _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.reserve.classList.remove("button--loading");
  _manipulateMeetings__WEBPACK_IMPORTED_MODULE_2__.endMeeting.classList.remove("button--loading");
}
function displayAdditionalMeetings() {
  var upcContainer = document.querySelector('.sec-content');
  upcContainer.replaceChildren();
  for (var i = 1; i < _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents.length; i++) {
    //Set time correctly
    var startTime = new Date(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[i].start.dateTime);
    var startTimeMinsConv = (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
    var endTime = new Date(_gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[i].end.dateTime);
    var endTimeMinsConv = (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();

    //Define elements
    var card = document.createElement("div");
    card.classList.add("upcoming-card");
    var title = document.createElement("h1");
    title.classList.add("upcoming-title");
    title.textContent = _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[i].summary;
    var organizer = document.createElement("h2");
    organizer.classList.add("upcoming-org");
    organizer.textContent = _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[i].creator.email.slice(0, _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[i].creator.email.search('@')); //Organizer without @gmail.com;

    var time = document.createElement("h2");
    time.classList.add("upcoming-time");
    time.textContent = "".concat(getWeekDayName(startTime), ", ").concat(startTime.getHours(), ":").concat(startTimeMinsConv, " - ").concat(endTime.getHours(), ":").concat(endTimeMinsConv);

    //Append elements
    upcContainer.append(card);
    card.append(title);
    card.append(organizer);
    card.append(time);
  }
}

//Calculates which day of the week it is. Wiil display "I dag / I morgen", if the meeting is within that timeframe
function getWeekDayName(meetingDate) {
  var today = new Date();
  if (today.getUTCDay() == meetingDate.getUTCDay()) {
    //Samme ugedag
    return "I dag";
  }
  if (today.getUTCDay() !== meetingDate.getUTCDay()) {
    //Forskellige ugedage

    if (today.getUTCDay() == 6) {
      //Hvis det er lørdag, tjekker vi lige manuelt om næste dag er søndag (0), og angiver derved "I morgen"
      if (meetingDate == 0) {
        return "I morgen";
      } else {
        return ugedage[meetingDate.getUTCDay()];
      }
      ; //Retuner dato, hvis det er længere tid til mødet end dagen efter
    } else if (meetingDate.getUTCDay() - today.getUTCDay() == 1) {
      //Hvis mødet er i morgen
      return "I morgen";
    } else {
      return ugedage[meetingDate.getUTCDay()];
    }
    ; //Retuner dato, hvis det er længere tid til mødet end dagen efter
  }
}
function currentTime() {
  var currentTime = new Date();
  var currentTimeConverted = (currentTime.getUTCMinutes() < 10 ? '0' : '') + currentTime.getUTCMinutes();
  var today = new Date();
  document.querySelector('#current-time').textContent = "".concat(today.getHours(), ":").concat(currentTimeConverted);
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/CDStyle.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/CDStyle.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.countdown-container{
    display: flex;
    position: relative;
    visibility: hidden;  
    height:415px;
    aspect-ratio: 1 / 1;
    justify-content: center;
    align-items: center;
    align-self: center;
    justify-self: center;
}
svg{
    display:flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg); 
    width: 100%;
    height: 100%;
}


#number{
    font-weight: 600;
    color:white;
    font-size: 5em;
}

#outer-circle{ /* background to timer*/
    fill:none;
    stroke: #D98282;
    stroke-width: 40px;
    stroke-dasharray: 1130;
    stroke-dashoffset: 0;
    r:180; 
    cx:50%;
    cy:50%;
}
#inner-circle{ /* timer indicator*/
    fill:none;
    stroke: #fff;
    stroke-width: 40px;
    stroke-dasharray: 1130;
    stroke-dashoffset: 0;
    r:180; 
    cx:50%;
    cy:50%; 
}


.countdown--start{
    animation: anim-open 1.5s ease-out; 
}
.countdown--end{
    animation: anim-close 1.5s ease-out; 
}

@keyframes anim-close {
   
    100% {
        stroke-dasharray: 1130;
        stroke-dashoffset: 1130;
    }
}
@keyframes anim-open {
   
    0%{
        stroke-dasharray: 1130;
        stroke-dashoffset: 1130;
    }
    100% {
        stroke-dasharray: 1130;
        stroke-dashoffset: 0;
    }
}


#timer{
    justify-content: center;
    align-items: center;
}




#indicator-anim{
    fill: none;
    width: 200px;
    height: 200px;
    animation: anim 0.3s ease-out;
    stroke: white;
    stroke-width: 2px;
    border-color: black;
    border-style: solid;
    stroke-dasharray: 1290;
    stroke-dashoffset: 1290;
    animation: anim 2.5s ease-in infinite reverse;
    /* animation: anim-close 1s ease-out reverse; */
    transform-origin: center;
    r:205; 
    cx:50%;
    cy:50%;
}

@keyframes anim {
    0% {
        transform: rotate(0deg);
    }
    40% {
        stroke-dashoffset: 1600;
        transform: rotate(400deg);
    }
    100%{
        transform:rotate(720deg);
    }
    
}




/* .svg-on-delete{
    display:flex;
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg); 
    width: 100%;
    height: 100%;
    animation: anima 1s ease-out;
}
@keyframes anima {

    100%{
        scale: 150%;
    }
} */`, "",{"version":3,"sources":["webpack://./src/CDStyle.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;AACxB;AACA;IACI,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,yBAAyB;IACzB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,gBAAgB;IAChB,WAAW;IACX,cAAc;AAClB;;AAEA,eAAe,uBAAuB;IAClC,SAAS;IACT,eAAe;IACf,kBAAkB;IAClB,sBAAsB;IACtB,oBAAoB;IACpB,KAAK;IACL,MAAM;IACN,MAAM;AACV;AACA,eAAe,mBAAmB;IAC9B,SAAS;IACT,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,oBAAoB;IACpB,KAAK;IACL,MAAM;IACN,MAAM;AACV;;;AAGA;IACI,kCAAkC;AACtC;AACA;IACI,mCAAmC;AACvC;;AAEA;;IAEI;QACI,sBAAsB;QACtB,uBAAuB;IAC3B;AACJ;AACA;;IAEI;QACI,sBAAsB;QACtB,uBAAuB;IAC3B;IACA;QACI,sBAAsB;QACtB,oBAAoB;IACxB;AACJ;;;AAGA;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;;;;AAKA;IACI,UAAU;IACV,YAAY;IACZ,aAAa;IACb,6BAA6B;IAC7B,aAAa;IACb,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,uBAAuB;IACvB,6CAA6C;IAC7C,+CAA+C;IAC/C,wBAAwB;IACxB,KAAK;IACL,MAAM;IACN,MAAM;AACV;;AAEA;IACI;QACI,uBAAuB;IAC3B;IACA;QACI,uBAAuB;QACvB,yBAAyB;IAC7B;IACA;QACI,wBAAwB;IAC5B;;AAEJ;;;;;AAKA;;;;;;;;;;;;;;;GAeG","sourcesContent":[".countdown-container{\n    display: flex;\n    position: relative;\n    visibility: hidden;  \n    height:415px;\n    aspect-ratio: 1 / 1;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    justify-self: center;\n}\nsvg{\n    display:flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: rotate(-90deg); \n    width: 100%;\n    height: 100%;\n}\n\n\n#number{\n    font-weight: 600;\n    color:white;\n    font-size: 5em;\n}\n\n#outer-circle{ /* background to timer*/\n    fill:none;\n    stroke: #D98282;\n    stroke-width: 40px;\n    stroke-dasharray: 1130;\n    stroke-dashoffset: 0;\n    r:180; \n    cx:50%;\n    cy:50%;\n}\n#inner-circle{ /* timer indicator*/\n    fill:none;\n    stroke: #fff;\n    stroke-width: 40px;\n    stroke-dasharray: 1130;\n    stroke-dashoffset: 0;\n    r:180; \n    cx:50%;\n    cy:50%; \n}\n\n\n.countdown--start{\n    animation: anim-open 1.5s ease-out; \n}\n.countdown--end{\n    animation: anim-close 1.5s ease-out; \n}\n\n@keyframes anim-close {\n   \n    100% {\n        stroke-dasharray: 1130;\n        stroke-dashoffset: 1130;\n    }\n}\n@keyframes anim-open {\n   \n    0%{\n        stroke-dasharray: 1130;\n        stroke-dashoffset: 1130;\n    }\n    100% {\n        stroke-dasharray: 1130;\n        stroke-dashoffset: 0;\n    }\n}\n\n\n#timer{\n    justify-content: center;\n    align-items: center;\n}\n\n\n\n\n#indicator-anim{\n    fill: none;\n    width: 200px;\n    height: 200px;\n    animation: anim 0.3s ease-out;\n    stroke: white;\n    stroke-width: 2px;\n    border-color: black;\n    border-style: solid;\n    stroke-dasharray: 1290;\n    stroke-dashoffset: 1290;\n    animation: anim 2.5s ease-in infinite reverse;\n    /* animation: anim-close 1s ease-out reverse; */\n    transform-origin: center;\n    r:205; \n    cx:50%;\n    cy:50%;\n}\n\n@keyframes anim {\n    0% {\n        transform: rotate(0deg);\n    }\n    40% {\n        stroke-dashoffset: 1600;\n        transform: rotate(400deg);\n    }\n    100%{\n        transform:rotate(720deg);\n    }\n    \n}\n\n\n\n\n/* .svg-on-delete{\n    display:flex;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: rotate(-90deg); \n    width: 100%;\n    height: 100%;\n    animation: anima 1s ease-out;\n}\n@keyframes anima {\n\n    100%{\n        scale: 150%;\n    }\n} */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/dialog.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/dialog.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* .hide{  
    animation: dia-close 1s linear;     
} */

#reserve-dialog:not([open]){  
    animation: dia-close 1s linear;   
}

#reserve-dialog[open]{
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: #001f3f;
    width: 70%;
    height: 50%;
    margin: auto;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border-style: none;
    padding: 10px;
    animation: dia-open 0.1s linear;   
}

#reserve-btngroup{
    display: flex;
    gap: 20px;
    margin: auto;
    
}
#reserve-dialog::backdrop{
    backdrop-filter: blur(3px);
}

#reserve-header{
    display: flex;
    width: 100%;
    justify-content: center;
}

#reserve-close{
    position: absolute;
    right: 10px;
    font-size: 50px;
    color: white;
    margin-left: auto;
}


/* Spinner element on button */
.button--loading .button__text {
    visibility: hidden;
    opacity: 0;
  }
  
  .button--loading::after {
    content: "";
    position: absolute;
    width: 24px;
    height: 24px;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    border: 4px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: button-loading-spinner 1s ease infinite;
  }
  .button__text {
    
    transition: all 0.2s;
}
  @keyframes button-loading-spinner {
    from {
      transform: rotate(0turn);
    }
  
    to {
      transform: rotate(1turn);
    }
  }

/* Spinner button end*/





@keyframes dia-open{
    0%{
        
        transform: scale(95%);
        position: relative;
        top: -10%;
        background-color: rgba(100, 100, 100,0);
    }
    100%{

    }
}
@keyframes dia-close{
    0%{
        
    }
    100%{
        width: 0;
        height: 0;
    }
}
`, "",{"version":3,"sources":["webpack://./src/dialog.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;IACI,8BAA8B;AAClC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,yBAAyB;IACzB,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;;AAEhB;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;;AAGA,8BAA8B;AAC9B;IACI,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;IAClB,kDAAkD;EACpD;EACA;;IAEE,oBAAoB;AACxB;EACE;IACE;MACE,wBAAwB;IAC1B;;IAEA;MACE,wBAAwB;IAC1B;EACF;;AAEF,sBAAsB;;;;;;AAMtB;IACI;;QAEI,qBAAqB;QACrB,kBAAkB;QAClB,SAAS;QACT,uCAAuC;IAC3C;IACA;;IAEA;AACJ;AACA;IACI;;IAEA;IACA;QACI,QAAQ;QACR,SAAS;IACb;AACJ","sourcesContent":["/* .hide{  \n    animation: dia-close 1s linear;     \n} */\n\n#reserve-dialog:not([open]){  \n    animation: dia-close 1s linear;   \n}\n\n#reserve-dialog[open]{\n    position: relative;\n    display:flex;\n    flex-direction: column;\n    background-color: #001f3f;\n    width: 70%;\n    height: 50%;\n    margin: auto;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n    border-style: none;\n    padding: 10px;\n    animation: dia-open 0.1s linear;   \n}\n\n#reserve-btngroup{\n    display: flex;\n    gap: 20px;\n    margin: auto;\n    \n}\n#reserve-dialog::backdrop{\n    backdrop-filter: blur(3px);\n}\n\n#reserve-header{\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n#reserve-close{\n    position: absolute;\n    right: 10px;\n    font-size: 50px;\n    color: white;\n    margin-left: auto;\n}\n\n\n/* Spinner element on button */\n.button--loading .button__text {\n    visibility: hidden;\n    opacity: 0;\n  }\n  \n  .button--loading::after {\n    content: \"\";\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    border: 4px solid transparent;\n    border-top-color: #ffffff;\n    border-radius: 50%;\n    animation: button-loading-spinner 1s ease infinite;\n  }\n  .button__text {\n    \n    transition: all 0.2s;\n}\n  @keyframes button-loading-spinner {\n    from {\n      transform: rotate(0turn);\n    }\n  \n    to {\n      transform: rotate(1turn);\n    }\n  }\n\n/* Spinner button end*/\n\n\n\n\n\n@keyframes dia-open{\n    0%{\n        \n        transform: scale(95%);\n        position: relative;\n        top: -10%;\n        background-color: rgba(100, 100, 100,0);\n    }\n    100%{\n\n    }\n}\n@keyframes dia-close{\n    0%{\n        \n    }\n    100%{\n        width: 0;\n        height: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    --pri-col: #252424; /*#252424;*/
    --sec-col: rgb(19, 35, 49, 0.3); /*rgb(19, 35, 49)*/
    --card-col: rgb(24, 43, 60);
    --btn-prim: rgb(49, 49, 142);
    font-family: "Lato", sans-serif;
}
body{
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh; 
    touch-action: none;
}
#bg-img{
    position: absolute;
    z-index: -1;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

/* div{
    background-color: transparent;
} */
.container{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: transparent;
    /* background-color: var(--pri-col); */
    flex:1;
}
.main-content{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 50px 50px 0px 50px;
    gap: 30px;
}

.time-content{
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-direction: row;
    flex: 1;
    
}
.title-time-container{
    flex-shrink: 0;
}
.title-time-container>div{
    flex-shrink: 0;
    margin: 20px 0;
}





.header-content{
    display: flex;
    justify-content: space-between;
    align-items: center;
}




#no-events{
    position: absolute;
    top: 50%;
    left: 30%;
    font-size: 4em;
    text-align: center;
    color:white;
}

#connect-GA{
    position: absolute;
    top: 50%;
    left: 40%;
    width: 300px;
    height: 100px;
}

/* Secondary content / upcomming meeitngs css*/
.sec-content{
    display: flex;
    flex: 1;
    background-color: transparent;
    background-color: var(--sec-col);
    max-height: 200px;
    width: 100vw;
    overflow-x: scroll;
    padding-left: 10px;
}


.sec-content div{
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 400px;
    background-color: var(--card-col);
    padding-top: 10px; /*tjek værdi*/
    padding-left: 15px;
    margin: 10px;
    border-radius: 10px;
}



.sec-content h1{
    padding-bottom: 15px;
    font-size: 2.2em;
}
.sec-content h2{
    font-size: 1.2em;
}



#btn-end, #btn-reserve{
    display: none;
}

#current-time{
    font-size: 5em;
    text-align: center;
    margin: auto 0;
}


.flex-icon-meet, .flex-icon-time{
    display: none;
    align-items: center;
    
}
.flex-icon-meet ion-icon, .flex-icon-time ion-icon{
    display: flex;
    align-items: center;
    font-size: 2em;
    color: #fff;
    margin-right: 10px;
}






/*GENERAL utilitites*/

h1, h2, h3{
    color: white;
}
h1{
    font-size: 3em;
    color: rgb(212, 209, 209);
    margin-bottom: 15px;
}
h2{
    font-size: 4em;
    margin-bottom: 10px;
}
h3{
    font-size: 2em;
}
button{
    padding: 5px 10px;
    font-size: 2em;
}

.primary-btn{
    position:relative;
    padding: 15px 25px;
    font-size: 2em;
    border-radius: 10px;
    border-style: none;
    background-color: var(--btn-prim);
    color: white;
    font-weight: 600;
}

.primary-btn:active{
    transform: scale(95%);
    color: rgb(187, 185, 185);
    
}

.secondary-btn{
    position: relative;
    padding: 15px 25px;
    font-size: 2em;
    border-radius: 10px;
    border: 2px solid white;
    background-color: transparent;
    font-weight: 600;
    color: white;
}
.secondary-btn:active{
    transform: scale(95%);
    color: rgb(187, 185, 185);
    border: 1px solid rgb(187, 185, 185);
    margin: 1px;
}
.secondary-btn:disabled{
    color: rgb(98, 98, 98);
    border: 1px solid rgb(98, 98, 98);
}





`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB,EAAE,WAAW;IAC/B,+BAA+B,EAAE,kBAAkB;IACnD,2BAA2B;IAC3B,4BAA4B;IAC5B,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;;GAEG;AACH;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,sCAAsC;IACtC,MAAM;AACV;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,OAAO;;AAEX;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,cAAc;AAClB;;;;;;AAMA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;;;;AAKA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,OAAO;IACP,6BAA6B;IAC7B,gCAAgC;IAChC,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,gBAAgB;IAChB,iCAAiC;IACjC,iBAAiB,EAAE,aAAa;IAChC,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;;;AAIA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;;;AAIA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;AAClB;;;AAGA;IACI,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,kBAAkB;AACtB;;;;;;;AAOA,qBAAqB;;AAErB;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;;AAE7B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,oCAAoC;IACpC,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,iCAAiC;AACrC","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --pri-col: #252424; /*#252424;*/\n    --sec-col: rgb(19, 35, 49, 0.3); /*rgb(19, 35, 49)*/\n    --card-col: rgb(24, 43, 60);\n    --btn-prim: rgb(49, 49, 142);\n    font-family: \"Lato\", sans-serif;\n}\nbody{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 100vh; \n    touch-action: none;\n}\n#bg-img{\n    position: absolute;\n    z-index: -1;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n}\n\n/* div{\n    background-color: transparent;\n} */\n.container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: transparent;\n    /* background-color: var(--pri-col); */\n    flex:1;\n}\n.main-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 50px 50px 0px 50px;\n    gap: 30px;\n}\n\n.time-content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    flex-direction: row;\n    flex: 1;\n    \n}\n.title-time-container{\n    flex-shrink: 0;\n}\n.title-time-container>div{\n    flex-shrink: 0;\n    margin: 20px 0;\n}\n\n\n\n\n\n.header-content{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n\n\n#no-events{\n    position: absolute;\n    top: 50%;\n    left: 30%;\n    font-size: 4em;\n    text-align: center;\n    color:white;\n}\n\n#connect-GA{\n    position: absolute;\n    top: 50%;\n    left: 40%;\n    width: 300px;\n    height: 100px;\n}\n\n/* Secondary content / upcomming meeitngs css*/\n.sec-content{\n    display: flex;\n    flex: 1;\n    background-color: transparent;\n    background-color: var(--sec-col);\n    max-height: 200px;\n    width: 100vw;\n    overflow-x: scroll;\n    padding-left: 10px;\n}\n\n\n.sec-content div{\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    min-width: 400px;\n    background-color: var(--card-col);\n    padding-top: 10px; /*tjek værdi*/\n    padding-left: 15px;\n    margin: 10px;\n    border-radius: 10px;\n}\n\n\n\n.sec-content h1{\n    padding-bottom: 15px;\n    font-size: 2.2em;\n}\n.sec-content h2{\n    font-size: 1.2em;\n}\n\n\n\n#btn-end, #btn-reserve{\n    display: none;\n}\n\n#current-time{\n    font-size: 5em;\n    text-align: center;\n    margin: auto 0;\n}\n\n\n.flex-icon-meet, .flex-icon-time{\n    display: none;\n    align-items: center;\n    \n}\n.flex-icon-meet ion-icon, .flex-icon-time ion-icon{\n    display: flex;\n    align-items: center;\n    font-size: 2em;\n    color: #fff;\n    margin-right: 10px;\n}\n\n\n\n\n\n\n/*GENERAL utilitites*/\n\nh1, h2, h3{\n    color: white;\n}\nh1{\n    font-size: 3em;\n    color: rgb(212, 209, 209);\n    margin-bottom: 15px;\n}\nh2{\n    font-size: 4em;\n    margin-bottom: 10px;\n}\nh3{\n    font-size: 2em;\n}\nbutton{\n    padding: 5px 10px;\n    font-size: 2em;\n}\n\n.primary-btn{\n    position:relative;\n    padding: 15px 25px;\n    font-size: 2em;\n    border-radius: 10px;\n    border-style: none;\n    background-color: var(--btn-prim);\n    color: white;\n    font-weight: 600;\n}\n\n.primary-btn:active{\n    transform: scale(95%);\n    color: rgb(187, 185, 185);\n    \n}\n\n.secondary-btn{\n    position: relative;\n    padding: 15px 25px;\n    font-size: 2em;\n    border-radius: 10px;\n    border: 2px solid white;\n    background-color: transparent;\n    font-weight: 600;\n    color: white;\n}\n.secondary-btn:active{\n    transform: scale(95%);\n    color: rgb(187, 185, 185);\n    border: 1px solid rgb(187, 185, 185);\n    margin: 1px;\n}\n.secondary-btn:disabled{\n    color: rgb(98, 98, 98);\n    border: 1px solid rgb(98, 98, 98);\n}\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/CDStyle.css":
/*!*************************!*\
  !*** ./src/CDStyle.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_CDStyle_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./CDStyle.css */ "./node_modules/css-loader/dist/cjs.js!./src/CDStyle.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_CDStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_CDStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_CDStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_CDStyle_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/dialog.css":
/*!************************!*\
  !*** ./src/dialog.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./dialog.css */ "./node_modules/css-loader/dist/cjs.js!./src/dialog.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_dialog_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/Bg-img-occupied.png":
/*!*************************************!*\
  !*** ./src/img/Bg-img-occupied.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bg-img-occupied.png";

/***/ }),

/***/ "./src/img/Bg-img.png":
/*!****************************!*\
  !*** ./src/img/Bg-img.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/Bg-img.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _CDStyle_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CDStyle.css */ "./src/CDStyle.css");
/* harmony import */ var _dialog_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog.css */ "./src/dialog.css");
/* harmony import */ var _stateController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stateController */ "./src/stateController.js");
/* harmony import */ var _countDown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./countDown */ "./src/countDown.js");
/* harmony import */ var _manipulateMeetings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manipulateMeetings */ "./src/manipulateMeetings.js");
/* harmony import */ var _gapi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gapi */ "./src/gapi.js");
/* harmony import */ var _img_Bg_img_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/Bg-img.png */ "./src/img/Bg-img.png");
/* harmony import */ var _img_Bg_img_occupied_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/Bg-img-occupied.png */ "./src/img/Bg-img-occupied.png");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }









function authenticate() {
  return _authenticate.apply(this, arguments);
} // Call the authenticate function when needed (e.g., on a button click)
function _authenticate() {
  _authenticate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var response, message;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('/auth');
        case 2:
          response = _context.sent;
          _context.next = 5;
          return response.text();
        case 5:
          message = _context.sent;
          console.log(message); // Log the message from the server
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _authenticate.apply(this, arguments);
}
document.querySelector('.test-auth').addEventListener('click', authenticate);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUV1RCxZQUFZLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL2NvdW50RG93bi5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9nYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL21hbmlwdWxhdGVNZWV0aW5ncy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9zdGF0ZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvQ0RTdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvZGlhbG9nLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvQ0RTdHlsZS5jc3M/ODhjYiIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9kaWFsb2cuY3NzPzZlMGUiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2t0ZW1wL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vQ2FsY3VsYXRlIHRoZSBjaXJjdW1mZXJlbmNlIHRvIHRoZSBjb3VudERvd24gdGltZXIsIHNvIHJlbWFpbmluZyB0aW1lIGNhbiBiZSBzaG93blxuZnVuY3Rpb24gY2FsY3VsYXRlQ2lyY2xlQ2lyY3VtZmVyZW5jZShzdGFydFRpbWUsZW5kVGltZSl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCBzdGFydFRpbWVJbk1pbGxpcyA9IHN0YXJ0VGltZS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZW5kVGltZUluTWlsbGlzID0gZW5kVGltZS5nZXRUaW1lKCk7XG5cbiAgICBjb25zdCB0b3RhbE1lZXRpbmdUaW1lID0gZW5kVGltZUluTWlsbGlzIC0gc3RhcnRUaW1lSW5NaWxsaXM7XG4gICAgY29uc3QgZWxhYnNlZE1lZXRpbmdUaW1lID0gdG9kYXkgLSBzdGFydFRpbWVJbk1pbGxpcztcbiAgICBjb25zdCBwZXJjZW50TWVldGluZ0VsYWJzZWQgPSBlbGFic2VkTWVldGluZ1RpbWUvdG90YWxNZWV0aW5nVGltZSoxMDA7XG4gICAgcmV0dXJuIChwZXJjZW50TWVldGluZ0VsYWJzZWQgKiAxMS4zKTsgLy8xMS4zIGlzIDElIG9mIHRoZSBjaXJjdW1mZXJlbmNlIHZhbHVlIHVzZWQgdG8gZHJhdyB0aGUgY2lyY2xlLiBUb3RhbCBjaXJjIGlzID0gMipQSSpyYWRpdXNcbn1cblxuLy9DYWxjdWxhdGVzIGhvdyBtYW55IG1pbnV0ZXMgaXMgbGVmdCBvZiBjdXJyZW50IGFjdGl2ZSBtZWV0aW5nXG5mdW5jdGlvbiBjYWxjdWxhdGVSZW1haW5pbmdUaW1lKGVuZFRpbWUpe1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgZW5kVGltZUluTWlsbGlzID0gZW5kVGltZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIChlbmRUaW1lSW5NaWxsaXMtdG9kYXkpLzEwMDAvNjA7IFxufVxuXG5leHBvcnR7Y2FsY3VsYXRlUmVtYWluaW5nVGltZSwgY2FsY3VsYXRlQ2lyY2xlQ2lyY3VtZmVyZW5jZX0iLCJcblxuXG5sZXQgbGlzdGVkRXZlbnRzO1xuLyogZXhwb3J0ZWQgZ2FwaUxvYWRlZCAqL1xuICAgICAgLyogZXhwb3J0ZWQgZ2lzTG9hZGVkICovXG4gICAgICAvKiBleHBvcnRlZCBoYW5kbGVBdXRoQ2xpY2sgKi9cbiAgICAgIC8qIGV4cG9ydGVkIGhhbmRsZVNpZ25vdXRDbGljayAqL1xuXG4gICAgICAvLyBUT0RPKGRldmVsb3Blcik6IFNldCB0byBjbGllbnQgSUQgYW5kIEFQSSBrZXkgZnJvbSB0aGUgRGV2ZWxvcGVyIENvbnNvbGVcbiAgICAgIGNvbnN0IENMSUVOVF9JRCA9ICc5NzQzNTE1NDg0MzQtNDdsM2xvYXEyN2hrZ2w2aDV1cmMzYjl1djRubG43MHQuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nO1xuICAgICAgY29uc3QgQVBJX0tFWSA9ICdBSXphU3lCeUQ1QmhlaFVjUElUMmFUUXJTSHFkR2p4OE9oa3h3Nm8nO1xuXG4gICAgICAvLyBEaXNjb3ZlcnkgZG9jIFVSTCBmb3IgQVBJcyB1c2VkIGJ5IHRoZSBxdWlja3N0YXJ0XG4gICAgICBjb25zdCBESVNDT1ZFUllfRE9DID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZWFwaXMuY29tL2Rpc2NvdmVyeS92MS9hcGlzL2NhbGVuZGFyL3YzL3Jlc3QnO1xuXG4gICAgICAvLyBBdXRob3JpemF0aW9uIHNjb3BlcyByZXF1aXJlZCBieSB0aGUgQVBJOyBtdWx0aXBsZSBzY29wZXMgY2FuIGJlXG4gICAgICAvLyBpbmNsdWRlZCwgc2VwYXJhdGVkIGJ5IHNwYWNlcy5cbiAgICAgIGNvbnN0IFNDT1BFUyA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL2NhbGVuZGFyJztcblxuICAgICAgbGV0IHRva2VuQ2xpZW50O1xuICAgICAgXG4gICAgICBsZXQgZ2FwaUluaXRlZCA9IGZhbHNlO1xuICAgICAgbGV0IGdpc0luaXRlZCA9IGZhbHNlO1xuICAgICAgbGV0IGF1dGhvcml6ZWQgPSBmYWxzZTtcbiAgICAgLy8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcml6ZV9idXR0b24nKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWdub3V0X2J1dHRvbicpLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsYmFjayBhZnRlciBhcGkuanMgaXMgbG9hZGVkLlxuICAgICAgICovXG4gICAgICB3aW5kb3cuZ2FwaUxvYWRlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZ2FwaS5sb2FkKCdjbGllbnQnLCBpbml0aWFsaXplR2FwaUNsaWVudCk7XG4gICAgICAgXG4gICAgICB9XG4gICAgXG4gICAgICAvKipcbiAgICAgICAqIENhbGxiYWNrIGFmdGVyIHRoZSBBUEkgY2xpZW50IGlzIGxvYWRlZC4gTG9hZHMgdGhlXG4gICAgICAgKiBkaXNjb3ZlcnkgZG9jIHRvIGluaXRpYWxpemUgdGhlIEFQSS5cbiAgICAgICAqL1xuICAgICAgYXN5bmMgZnVuY3Rpb24gaW5pdGlhbGl6ZUdhcGlDbGllbnQoKSB7XG4gICAgICAgIGF3YWl0IGdhcGkuY2xpZW50LmluaXQoe1xuICAgICAgICAgIGFwaUtleTogQVBJX0tFWSxcbiAgICAgICAgICBkaXNjb3ZlcnlEb2NzOiBbRElTQ09WRVJZX0RPQ10sXG4gICAgICAgIH0pO1xuICAgICAgICBnYXBpSW5pdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsYmFjayBhZnRlciBHb29nbGUgSWRlbnRpdHkgU2VydmljZXMgYXJlIGxvYWRlZC5cbiAgICAgICAqL1xuICAgICAgICB3aW5kb3cuZ2lzTG9hZGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRva2VuQ2xpZW50ID0gZ29vZ2xlLmFjY291bnRzLm9hdXRoMi5pbml0VG9rZW5DbGllbnQoe1xuICAgICAgICAgIGNsaWVudF9pZDogQ0xJRU5UX0lELFxuICAgICAgICAgIHNjb3BlOiBTQ09QRVMsXG4gICAgICAgICAgYWNjZXNzX3R5cGU6ICdvZmZsaW5lJyxcbiAgICAgICAgICBwcm9tcHQ6ICdjb25zZW50JyxcbiAgICAgICAgICBjYWxsYmFjazogJycsIC8vIGRlZmluZWQgbGF0ZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGdpc0luaXRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgXG4gICAgICAvKipcbiAgICAgICAqICBTaWduIGluIHRoZSB1c2VyIHVwb24gYnV0dG9uIGNsaWNrLlxuICAgICAgICovXG4gICAgICB3aW5kb3cuaGFuZGxlQXV0aENsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0b2tlbkNsaWVudC5jYWxsYmFjayA9IGFzeW5jIChyZXNwKSA9PiB7XG4gICAgICAgICAgaWYgKHJlc3AuZXJyb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgKHJlc3ApO1xuICAgICAgICAgIH1cbiAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nvbm5lY3QtR0EnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgIGF1dGhvcml6ZWQgPSB0cnVlO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICAgIGF3YWl0IGxpc3RVcGNvbWluZ0V2ZW50cygpOyBcbiAgICAgICAgfTtcbiAgICAgICAgXG5cbiAgICAgICAgaWYgKGdhcGkuY2xpZW50LmdldFRva2VuKCkgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBQcm9tcHQgdGhlIHVzZXIgdG8gc2VsZWN0IGEgR29vZ2xlIEFjY291bnQgYW5kIGFzayBmb3IgY29uc2VudCB0byBzaGFyZSB0aGVpciBkYXRhXG4gICAgICAgICAgLy8gd2hlbiBlc3RhYmxpc2hpbmcgYSBuZXcgc2Vzc2lvbi5cbiAgICAgICAgICB0b2tlbkNsaWVudC5yZXF1ZXN0QWNjZXNzVG9rZW4oe3Byb21wdDogJ2NvbnNlbnQnLCBhY2Nlc3NfdHlwZTogJ29mZmxpbmUnfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gU2tpcCBkaXNwbGF5IG9mIGFjY291bnQgY2hvb3NlciBhbmQgY29uc2VudCBkaWFsb2cgZm9yIGFuIGV4aXN0aW5nIHNlc3Npb24uXG4gICAgICAgICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHtwcm9tcHQ6ICcnfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICBcblxuICAgICAgLy9SZXZva2UgYWNjZXNzIHRvIEdvb2dsZSBBY2NvdW50IC0gY29tcGxldGVseSByZW1vdmVzIHByaW9yIGFjY2Vzc1xuICAgICAgd2luZG93LnJldm9rZUFjY2VzcyA9IGZ1bmN0aW9uICgpe1xuICAgICAgICBjb25zdCB0b2tlbiA9IGdhcGkuY2xpZW50LmdldFRva2VuKCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgIGNvbnN0IHJldm9rZVVybCA9IGBodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvcmV2b2tlP3Rva2VuPSR7dG9rZW4uYWNjZXNzX3Rva2VufWA7XG4gICAgICAgICAgZmV0Y2gocmV2b2tlVXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnQWNjZXNzIHRva2VuIHJldm9rZWQnKTtcbiAgICAgICAgICAgICAgZ2FwaS5jbGllbnQuc2V0VG9rZW4obnVsbCk7IC8vIENsZWFyIHRoZSB0b2tlblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHJldm9raW5nIGFjY2VzcyB0b2tlbicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgIFxuICAgICAgLyoqXG4gICAgICAgKiAgU2lnbiBvdXQgdGhlIHVzZXIgdXBvbiBidXR0b24gY2xpY2suXG4gICAgICAgKi9cbiAgICAgIHdpbmRvdy5oYW5kbGVTaWdub3V0Q2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnYXBpLmNsaWVudC5nZXRUb2tlbigpO1xuICAgICAgICBpZiAodG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgICBnb29nbGUuYWNjb3VudHMub2F1dGgyLnJldm9rZSh0b2tlbi5hY2Nlc3NfdG9rZW4pO1xuICAgICAgICAgIGdhcGkuY2xpZW50LnNldFRva2VuKCcnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBcbiAgICAgIC8vRmV0Y2ggdXBjb21taW5nIGV2ZW50c1xuICAgICAgYXN5bmMgZnVuY3Rpb24gbGlzdFVwY29taW5nRXZlbnRzKCkge1xuICAgICAgICBsZXQgcmVzcG9uc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHtcbiAgICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuICAgICAgICAgICAgJ3RpbWVNaW4nOiAobmV3IERhdGUoKSkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICdzaG93RGVsZXRlZCc6IGZhbHNlLFxuICAgICAgICAgICAgJ3NpbmdsZUV2ZW50cyc6IHRydWUsXG4gICAgICAgICAgICAnbWF4UmVzdWx0cyc6IDYsXG4gICAgICAgICAgICAnb3JkZXJCeSc6ICdzdGFydFRpbWUnLFxuICAgICAgICAgIH07XG4gICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBnYXBpLmNsaWVudC5jYWxlbmRhci5ldmVudHMubGlzdChyZXF1ZXN0KTtcbiAgICAgICAgICBsaXN0ZWRFdmVudHMgPSBhd2FpdCByZXNwb25zZS5yZXN1bHQuaXRlbXM7XG4gICAgICAgICAgXG4gICAgICAgICAgXG5cblxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yIG9jY3VycmVkIC0gd2UgY291bGQgaGFuZGxlIHRoZSBldmVudCB3aXRoIGRpYWxvZyBoZXJlJylcbiAgICAgICAgICBcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuXG4gICAgICBcbiAgICAgIC8vUmVxdWVzdCB1cGNvbWluZyBldmVudHMgZXZlcnkgeCBtaW51dGUgdG8gc3RhcnQgcHJvY2Vzc2luZyBwb3J0ZW50aWFsIGNoYW5nZXMgaW4gdGhlIGNhbGVuZGFyXG4gICAgICBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgICAgaWYgKGdhcGlJbml0ZWQgJiYgZ2lzSW5pdGVkICYmIGF1dGhvcml6ZWQpeyAvL0NoZWNrIGlmIHdlIGhhdmUgZ290dGVuIGEgdG9rZW4sIGxvYWRlZCB0aGUgbGlicmFyeSBhbmQgYWxzbyBhdXRob3JpemVkIGEgdXNlclxuICAgICAgICAgIGxpc3RVcGNvbWluZ0V2ZW50cygpO1xuICAgICAgICAgIFxuICAgICAgICAgIGNvbnNvbGUubG9nKGxpc3RlZEV2ZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0sIDMwMDAwKTtcblxuICAgICAgc2V0SW50ZXJ2YWwoKCk9PiB7XG4gICAgICAgIGlmIChnYXBpSW5pdGVkICYmIGdpc0luaXRlZCAmJiBhdXRob3JpemVkKXsgLy9DaGVjayBpZiB3ZSBoYXZlIGdvdHRlbiBhIHRva2VuLCBpZiBubywgd2UgY2xhaW0gYSBuZXcgYWNjZXNzX3Rva2VuIGV2ZXJ5IGhvdXJcbiAgICAgICAgICBoYW5kbGVBdXRoQ2xpY2soKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgaGFuZGxlZCBhdXRob3JpemF0aW9uIGF1dG9tYXRpY2FsbHlcIik7XG4gICAgICAgIH1cbiAgICAgIH0sIDM1MDAwMDApO1xuXG5cblxuICAgICAgXG4gICAgICAvL2NyZWF0ZSBuZXcgZXZlbnRzIGluIHRoZSBHb29nbGUgY2FsZW5kYXIgY29vbmVjdGVkXG4gICAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudChleHRlbmRlZFRpbWUpe1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRvZGF5UGx1cyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRvZGF5UGx1cy5zZXRNaW51dGVzKHRvZGF5LmdldE1pbnV0ZXMoKStleHRlbmRlZFRpbWUpOyAvL1PDpnQgc2x1dHRpZHNwdW5rdCB0aWwgYW5naXZldCBmb3Jsw6ZuZ2Vsc2VcbiAgXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICdzdW1tYXJ5JzogJ0FkLWhvYyBtw7hkZScsXG4gICAgICAgICAgJ3N0YXJ0Jzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICAgICdlbmQnOiB7XG4gICAgICAgICAgICAnZGF0ZVRpbWUnOiB0b2RheVBsdXMudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy5pbnNlcnQoe1xuICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuICAgICAgICAgICdyZXNvdXJjZSc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0VXBjb21pbmdFdmVudHMoKTtcbiAgICAgICAgLy9jb21tZW50ZWQgdGhpcyBvdXQsIGFzIGl0IGRpZCBub3RoaW5nIGdvb2QgXG4gICAgICAgIC8vIHJlcXVlc3QuZXhlY3V0ZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyAgIGFwcGVuZCgnRXZlbnQgY3JlYXRlZDogJyArIGV2ZW50Lmh0bWxMaW5rKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICAvL0VuZCBjdXJyZW50IG1lZXRpbmdcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVuZEV2ZW50KHN0YXJ0VGltZSl7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcbiAgXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICdzdW1tYXJ5JzogbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnksXG4gICAgICAgICAgJ3N0YXJ0Jzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogc3RhcnREYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAndGltZVpvbmUnOiAnRXVyb3BlL0NvcGVuaGFnZW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnZW5kJzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy51cGRhdGUoe1xuICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuICAgICAgICAgICdldmVudElkJzogbGlzdGVkRXZlbnRzWzBdLmlkLFxuICAgICAgICAgICdyZXNvdXJjZSc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0VXBjb21pbmdFdmVudHMoKTsgLy9cblxuICAgICAgICAvL2NvbW1lbnRlZCB0aGlzIG91dCwgYXMgaXQgZGlkIG5vdGhpbmcgZ29vZCBcbiAgICAgICAgLy8gcmVxdWVzdC5leGVjdXRlKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vICAgYXBwZW5kKCdFdmVudCBjcmVhdGVkOiAnICsgZXZlbnQuaHRtbExpbmspO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGV4cG9ydCB7Z2FwaUluaXRlZCwgZ2lzSW5pdGVkLCBsaXN0ZWRFdmVudHMsIGF1dGhvcml6ZWQsIGNyZWF0ZUV2ZW50LCBlbmRFdmVudH1cbiAgICAgICAgXG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudCwgZW5kRXZlbnQsIGxpc3RlZEV2ZW50c30gZnJvbSBcIi4vZ2FwaVwiO1xuaW1wb3J0IHsgYW5pbWF0aW9uQWN0aXZlIH0gZnJvbSBcIi4vc3RhdGVDb250cm9sbGVyXCI7XG5cbmNvbnN0IGVuZE1lZXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWVuZCcpO1xuXG5jb25zdCByZXNlcnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1yZXNlcnZlJyk7XG5jb25zdCByZXNlcnZlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtZGlhbG9nJyk7XG5jb25zdCBjbG9zZVJlc2VydmVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZS1jbG9zZScpO1xuY29uc3QgY2lyY2xlQW5pbU91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lubmVyLWNpcmNsZScpO1xuXG5jb25zdCByZXNlcnZlXzEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtMTAnKTtcbmNvbnN0IHJlc2VydmVfMTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZS0xNScpO1xuY29uc3QgcmVzZXJ2ZV8zMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlcnZlLTMwJyk7XG5jb25zdCByZXNlcnZlXzYwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtNjAnKTtcblxuLy9FbmQgbWVldGluZ1xuZW5kTWVldGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IFxuICAgIGVuZEN1cnJlbnRNZWV0aW5nKCk7XG4gICAgZW5kTWVldGluZy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xuXG4gICAgLy9BbmltYXRpb25cbiAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRkb3duLS1lbmQnKTsvL1N0YXJ0IGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNpcmNsZUFuaW1PdXRlci5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gMTEzMDsgLy9TZXQgY2lyY3VtZmVyZW5jZSB0byBjbG9zZWRcbiAgICAgICAgY2lyY2xlQW5pbU91dGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZG93bi0tZW5kJyk7Ly8gcmVzZXQgaXQsIHNvIHdlIGNhbiBhbmltYXRlIGxhdGVyIGFnYWluXG4gICAgICB9LCAxNTAwKTtcbiAgICAgIC8vYW5pbWF0aW9uQWN0aXZlID0gZmFsc2U7IC8vTWFrZSBpdCBwb3NzaWJsZSB0byBzdGFydCBhbmltYXRpb24gb24gbWVldGluZyBzdGFydC4uIEzDhlM6IHVka29tbWVudGVyZXQsIGRhIHbDpnJkaWVuIGVyIHNhdCB0aWwgMCDDpWJlbmJhcnQsIG9nIEpTIGFuc2VyIGRlbm5lIHbDpnJkaSBzb20gdsOmcmVuZGUgZXQgb2JqZWN0IG1lZCBrdW4gZW4gXCJnZXR0ZXJcIlxuICAgICAgXG59KVxuXG4vL29wZW4gZGlhbG9nIG1vZGFsXG5yZXNlcnZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZXNlcnZlRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGlmKGxpc3RlZEV2ZW50cy5sZW5ndGghPTApeyBjaGVja0Rpc2FibGVkUmVzZXJ2ZVRpbWVzKCk7fSAvLyBDaGVjayBob3cgbXVjaCB0aW1lIHRoZXJlIGlzIHRvIG5leHQgbWVldGluZywgYW5kIGRpc2FibGUgb3B0aW9ucyBpZiB0aGUgZXhjZWVkIHRpbWUgdG8gdXBjb21pbmcgbWVldGluZ1xufSlcblxuLy9jbG9zZSBkaWFsb2cgbW9kYWwgd2l0aCBubyBwaWNrXG5jbG9zZVJlc2VydmVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHJlc2VydmVEaWFsb2cuY2xvc2UoKTtcbn0pXG5cbnJlc2VydmVfMTAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNyZWF0ZUV2ZW50KDEwKTtcbiAgICByZXNlcnZlRGlhbG9nLmNsb3NlKCk7XG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xufSlcblxucmVzZXJ2ZV8xNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY3JlYXRlRXZlbnQoMTUpO1xuICAgIHJlc2VydmVEaWFsb2cuY2xvc2UoKTtcbiAgICByZXNlcnZlLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tLWxvYWRpbmdcIik7XG59KVxuXG5yZXNlcnZlXzMwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjcmVhdGVFdmVudCgzMCk7XG4gICAgcmVzZXJ2ZURpYWxvZy5jbG9zZSgpO1xuICAgIHJlc2VydmUuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbn0pXG5cbnJlc2VydmVfNjAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNyZWF0ZUV2ZW50KDYwKTtcbiAgICByZXNlcnZlRGlhbG9nLmNsb3NlKCk7XG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xufSlcblxuLy9DYWxjdWxhdGVzIHRoZSBhbW91bnQgb2YgbWludXRlcyB1bnRpbCBuZXh0IG1lZXRpbmcgaXMgc3RhcnRpbmdcbmZ1bmN0aW9uIHRpbWVUb05leHRNZWV0aW5nKCl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5leHRNZWV0aW5nID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICBcbiAgICByZXR1cm4gKG5leHRNZWV0aW5nLmdldFRpbWUoKS8xMDAwLzYwKSAtICh0b2RheS5nZXRUaW1lKCkvMTAwMC82MCk7XG59XG5cbi8vU2V0cyB0aGUgYWQtaG9jIGJvb2tpbmcgYnV0dG9ucyB0byBlbmFibGVkL2Rpc2FibGVkLCBkZXBlbmRpbmcgb24gaWYgdGhleSB3b3VsZCBvdmVybGFwIHVwY29taW5nIG1lZXRpbmdcbmZ1bmN0aW9uIGNoZWNrRGlzYWJsZWRSZXNlcnZlVGltZXMoKXtcbiAgICBpZih0aW1lVG9OZXh0TWVldGluZygpPDYwKXtcbiAgICAgICAgcmVzZXJ2ZV82MC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtyZXNlcnZlXzYwLmRpc2FibGVkID0gZmFsc2U7fVxuICAgIGlmKHRpbWVUb05leHRNZWV0aW5nKCk8MzApe1xuICAgICAgICByZXNlcnZlXzMwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge3Jlc2VydmVfMzAuZGlzYWJsZWQgPSBmYWxzZTt9XG4gICAgaWYodGltZVRvTmV4dE1lZXRpbmcoKTwxNSl7XG4gICAgICAgIHJlc2VydmVfMTUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7cmVzZXJ2ZV8xNS5kaXNhYmxlZCA9IGZhbHNlO31cbiAgICBpZih0aW1lVG9OZXh0TWVldGluZygpPDEwKXtcbiAgICAgICAgcmVzZXJ2ZV8xMC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtyZXNlcnZlXzEwLmRpc2FibGVkID0gZmFsc2U7fVxufVxuXG5mdW5jdGlvbiBlbmRDdXJyZW50TWVldGluZygpe1xuICAgIGVuZEV2ZW50KGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7XG59XG5cblxuZXhwb3J0IHtyZXNlcnZlLCBlbmRNZWV0aW5nLCBjaXJjbGVBbmltT3V0ZXJ9IiwiaW1wb3J0IHsgZ2FwaUluaXRlZCwgZ2lzSW5pdGVkLCBsaXN0ZWRFdmVudHMsIGF1dGhvcml6ZWR9IGZyb20gXCIuL2dhcGlcIjtcbmltcG9ydCB7IGNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2UsIGNhbGN1bGF0ZVJlbWFpbmluZ1RpbWV9IGZyb20gXCIuL2NvdW50RG93blwiO1xuaW1wb3J0IHsgcmVzZXJ2ZSxlbmRNZWV0aW5nLCBjaXJjbGVBbmltT3V0ZXIgfSBmcm9tIFwiLi9tYW5pcHVsYXRlTWVldGluZ3NcIjtcbmNvbnN0IHVnZWRhZ2UgPSBbXCJTw7huZGFnXCIsXCJNYW5kYWdcIixcIlRpcnNkYWdcIixcIk9uc2RhZ1wiLFwiVG9yc2RhZ1wiLFwiRnJlZGFnXCIsXCJMw7hyZGFnXCJdO1xuY29uc3Qgc2VjQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWMtY29udGVudCcpO1xubGV0IG1lZXRpbmdTdGF0ZTsgLy8gdXNlZCB0byBkZXRlcm1pbmUgdGhlIHN0YXRlIHRoZSBzY3JlZW4gYXJlIGluLCBhbmQgZnggdG8gZGV0ZXJtaW5lIGlmIHRoZXJlIGFyZSBtZWV0aW5ncyB3ZSBjYW4gZW5kIC8vMCA9IG5vIG1lZXRpbmdzLCAxID0gbWVldGluZ3MgaW4gdGhlIGNhbGVuZGFyLCAyLCBtZWV0aW5nIGlzIGFjdGl2ZVxubGV0IGFuaW1hdGlvbkFjdGl2ZSA9IGZhbHNlO1xuaW1wb3J0IGJnSW1nRnJlZSBmcm9tICcuL2ltZy9CZy1pbWcucG5nJztcbmltcG9ydCBiZ0ltZ09jY3VwaWVkIGZyb20gJy4vaW1nL0JnLWltZy1vY2N1cGllZC5wbmcnO1xuXG4vL0RvIHdlIGhhdmUgYW55IG1lZXRpbmdzIGluIHRoZSBjYWxlbmRhcj9cbnNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgIGlmIChnYXBpSW5pdGVkICYmIGdpc0luaXRlZCAmJiBhdXRob3JpemVkKXtcbiAgICAgICAgY3VycmVudFRpbWUoKTsgLy8gQWx3YXlzIGNhbGwgYW5kIGRpc3BsYXkgdGhlIGN1cnJlbnQgdGltZSBvZiBkYXlcblxuXG4gICAgICAgIC8vQ2hlY2tpbmcgaWYgdGhlcmUgYXJlIG1vcmUgdGhhbiBqdXN0IG9uZSBldmVudCwgYW5kIHNldHMgYmFja2dyb3VuZCBvZiB1cGNvbWluZyBtZWV0aW5nIGJhY2tncm91bmQgdG8gdHJhbnNwYXJlbnQgb2cgc2VtaSB0cmFuc3BhcmVudFxuICAgICAgICBpZiAobGlzdGVkRXZlbnRzLmxlbmd0aDwyICl7XG4gICAgICAgICAgICBzZWNDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfWVsc2Uge3NlY0NvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zZWMtY29sKVwiO31cblxuXG5cbiAgICAgICAgLy9TZXF1ZW5jZSB0byBjaGVjayBmb3IgI29mIG1lZXRpbmdzIGFuZCBkcmF3IHRoZSBVSSBhY2NvcmRpbmdseVxuICAgICAgICBpZiAoIWxpc3RlZEV2ZW50cy5sZW5ndGg9PTApeyAvL0NoZWNraW5nIGlmIHRoZXJlIGFyZSBhbnkgbWVldGluZ3MgaW4gdGhlIGNhbGVuZGFyXG4gICAgICAgICAgICAvLyBjb25zdCBuZXh0TWVldGluZyA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7ICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChjaGVja0lmQWN0aXZlTWVldGluZyhsaXN0ZWRFdmVudHNbMF0uc3RhcnQuZGF0ZVRpbWUsbGlzdGVkRXZlbnRzWzBdLmVuZC5kYXRlVGltZSkpeyAvL1wiY2hlY2tpbmcgaWYgaXQgYW55IG9mIHRoZSBtZWV0aW5ncyBpcyBhY3RpdmUhXCJcbiAgICAgICAgICAgICAgICBhY3RpdmVNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWRkaXRpb25hbE1lZXRpbmdzKCk7XG4gICAgICAgICAgICAgICAgbWVldGluZ1N0YXRlID0gMjtcblxuICAgICAgICAgICAgICAgIC8vQW5pbWF0ZSBjaXJjbGUgb24gbWVldGluZyBzdGFydFxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25BY3RpdmUgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRkb3duLS1zdGFydCcpOy8vU3RhcnQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRkb3duLS1zdGFydCcpOy8vIHJlc2V0IGl0LCBzbyB3ZSBjYW4gYW5pbWF0ZSBsYXRlciBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZSB7IC8vKFwiV2UgaGF2ZSBtZWV0aW5ncyBpbiB0aGUgY2FsZW5kYXIsIGJ1dCBub25lIGlzIGFjdGl2ZSFcIik7XG4gICAgICAgICAgICAgICAgdXBjb21pbmdNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWRkaXRpb25hbE1lZXRpbmdzKCk7XG4gICAgICAgICAgICAgICAgbWVldGluZ1N0YXRlID0gMTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25BY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsvL1dlIGhhdmUgbm8gbWVlZXRpbmdzXG4gICAgICAgICAgICBtZWV0aW5nU3RhdGUgPSAwO1xuICAgICAgICAgICAgZW1wdHlNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBcbiAgfSwgNTAwMCk7XG5cblxuXG5cblxuZnVuY3Rpb24gY2hlY2tJZkFjdGl2ZU1lZXRpbmcoc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICAgIFxuICAgIGlmIChzdGFydCA8PSB0b2RheSAmJiBlbmQgPj0gdG9kYXkpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwY29taW5nTWVldGluZ1N0YXRlKCl7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICBjb25zdCBzdGFydFRpbWVNaW5zQ29udiA9IChzdGFydFRpbWUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgOiAnJykgKyBzdGFydFRpbWUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShsaXN0ZWRFdmVudHNbMF0uZW5kLmRhdGVUaW1lKTtcbiAgICBjb25zdCBlbmRUaW1lTWluc0NvbnYgPSAoZW5kVGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGVuZFRpbWUuZ2V0TWludXRlcygpO1xuXG4gICAgLy9TaG93XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnk7IC8vTWVldCB0aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC1vcmdcIikudGV4dENvbnRlbnQgPSBsaXN0ZWRFdmVudHNbMF0uY3JlYXRvci5lbWFpbC5zbGljZSgwLGxpc3RlZEV2ZW50c1swXS5jcmVhdG9yLmVtYWlsLnNlYXJjaCgnQCcpKTsvL09yZ2FuaXplciB3aXRob3V0IEBnbWFpbC5jb21cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZXQtdGltZVwiKS50ZXh0Q29udGVudCA9IGAke2dldFdlZWtEYXlOYW1lKHN0YXJ0VGltZSl9LCAke3N0YXJ0VGltZS5nZXRIb3VycygpfToke3N0YXJ0VGltZU1pbnNDb252fSAtICR7ZW5kVGltZS5nZXRIb3VycygpfToke2VuZFRpbWVNaW5zQ29udn1gOyAvL01lZXQgdGltZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXJlc2VydmVcIikuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW1nXCIpLnNyYyA9IGJnSW1nRnJlZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1pY29uLW1lZXQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWljb24tdGltZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvL0hpZGVcbiAgICByZXNlcnZlLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG4gICAgZW5kTWVldGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm8tZXZlbnRzXCIpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRkb3duLWNvbnRhaW5lclwiKS5zdHlsZS52aXNpYmlsaXR5ID1cImhpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWVuZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgXG59XG5cbi8vSWYgdGhlcmUgYXJlIG5vIG1lZXRpbmdzIGZldGNoZWQgdGhvdWdoIHRoZSBBUEksIGR1ZSB0byBubyB1cGNvbWluZyBtZWV0aW5nc1xuZnVuY3Rpb24gZW1wdHlNZWV0aW5nU3RhdGUoKXtcblxuICAgIC8vU2hvd1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm8tZXZlbnRzXCIpLnRleHRDb250ZW50ID1cIkluZ2VuIEJlZ2l2ZW5oZWRlclwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXJlc2VydmVcIikuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRkb3duLWNvbnRhaW5lclwiKS5zdHlsZS52aXNpYmlsaXR5ID1cImhpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW1nXCIpLnNyYyA9IGJnSW1nRnJlZTtcblxuICAgIC8vSGlkZVxuICAgIHJlc2VydmUuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbiAgICAgICAgICBlbmRNZWV0aW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpdGxlXCIpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC10aW1lXCIpLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC1vcmdcIikudGV4dENvbnRlbnQgPVwiXCI7IC8vT3JnYW5pemVyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tZW5kXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1pY29uLW1lZXQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWljb24tdGltZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFjdGl2ZU1lZXRpbmdTdGF0ZSgpe1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7XG4gICAgY29uc3Qgc3RhcnRUaW1lTWluc0NvbnYgPSAoc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnIDogJycpICsgc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLmVuZC5kYXRlVGltZSk7XG4gICAgY29uc3QgZW5kVGltZU1pbnNDb252ID0gKGVuZFRpbWUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgOiAnJykgKyBlbmRUaW1lLmdldE1pbnV0ZXMoKTtcblxuXG4gICAgLy9TaG93XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9XCJncmlkXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnk7IC8vTWVldCB0aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC1vcmdcIikudGV4dENvbnRlbnQgPSBsaXN0ZWRFdmVudHNbMF0uY3JlYXRvci5lbWFpbC5zbGljZSgwLGxpc3RlZEV2ZW50c1swXS5jcmVhdG9yLmVtYWlsLnNlYXJjaCgnQCcpKTsgLy9Pcmdhbml6ZXIgd2l0aG91dCBAZ21haWwuY29tXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpbWVcIikudGV4dENvbnRlbnQgPSBgJHtnZXRXZWVrRGF5TmFtZShzdGFydFRpbWUpfSwgJHtzdGFydFRpbWUuZ2V0SG91cnMoKX06JHtzdGFydFRpbWVNaW5zQ29udn0gLSAke2VuZFRpbWUuZ2V0SG91cnMoKX06JHtlbmRUaW1lTWluc0NvbnZ9YDsgLy9NZWV0IHRpbWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlclwiKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoY2FsY3VsYXRlUmVtYWluaW5nVGltZShlbmRUaW1lKSl9IG1pbmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGRvd24tY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPVwidmlzaWJsZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbm5lci1jaXJjbGUnKS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gY2FsY3VsYXRlQ2lyY2xlQ2lyY3VtZmVyZW5jZShzdGFydFRpbWUsZW5kVGltZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tZW5kXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1pbWdcIikuc3JjID0gYmdJbWdPY2N1cGllZDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1pY29uLW1lZXQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWljb24tdGltZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvL0hpZGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1yZXNlcnZlXCIpLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm8tZXZlbnRzXCIpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIHJlc2VydmUuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbiAgICBlbmRNZWV0aW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRpdGlvbmFsTWVldGluZ3MoKXtcbiAgICBjb25zdCB1cGNDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYy1jb250ZW50Jyk7XG4gICAgdXBjQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdGVkRXZlbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9TZXQgdGltZSBjb3JyZWN0bHlcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzW2ldLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lTWluc0NvbnYgPSAoc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnIDogJycpICsgc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1tpXS5lbmQuZGF0ZVRpbWUpO1xuICAgICAgICBjb25zdCBlbmRUaW1lTWluc0NvbnYgPSAoZW5kVGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGVuZFRpbWUuZ2V0TWludXRlcygpO1xuXG4gICAgICAgIC8vRGVmaW5lIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1jYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzW2ldLnN1bW1hcnk7XG5cbiAgICAgICAgY29uc3Qgb3JnYW5pemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBvcmdhbml6ZXIuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLW9yZ1wiKTtcbiAgICAgICAgb3JnYW5pemVyLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzW2ldLmNyZWF0b3IuZW1haWwuc2xpY2UoMCxsaXN0ZWRFdmVudHNbaV0uY3JlYXRvci5lbWFpbC5zZWFyY2goJ0AnKSk7Ly9Pcmdhbml6ZXIgd2l0aG91dCBAZ21haWwuY29tO1xuXG4gICAgICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpbWUuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLXRpbWVcIik7XG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBgJHtnZXRXZWVrRGF5TmFtZShzdGFydFRpbWUpfSwgJHtzdGFydFRpbWUuZ2V0SG91cnMoKX06JHtzdGFydFRpbWVNaW5zQ29udn0gLSAke2VuZFRpbWUuZ2V0SG91cnMoKX06JHtlbmRUaW1lTWluc0NvbnZ9YDsgXG4gICAgICAgIFxuICAgICAgICAvL0FwcGVuZCBlbGVtZW50c1xuICAgICAgICB1cGNDb250YWluZXIuYXBwZW5kKGNhcmQpO1xuICAgICAgICBjYXJkLmFwcGVuZCh0aXRsZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kKG9yZ2FuaXplcik7XG4gICAgICAgIGNhcmQuYXBwZW5kKHRpbWUpO1xuICAgIH1cbn1cblxuXG4vL0NhbGN1bGF0ZXMgd2hpY2ggZGF5IG9mIHRoZSB3ZWVrIGl0IGlzLiBXaWlsIGRpc3BsYXkgXCJJIGRhZyAvIEkgbW9yZ2VuXCIsIGlmIHRoZSBtZWV0aW5nIGlzIHdpdGhpbiB0aGF0IHRpbWVmcmFtZVxuZnVuY3Rpb24gZ2V0V2Vla0RheU5hbWUobWVldGluZ0RhdGUpe1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGlmICh0b2RheS5nZXRVVENEYXkoKSA9PSBtZWV0aW5nRGF0ZS5nZXRVVENEYXkoKSl7IC8vU2FtbWUgdWdlZGFnXG4gICAgICAgIHJldHVybiBcIkkgZGFnXCI7XG4gICAgfVxuICAgIFxuICAgIGlmICh0b2RheS5nZXRVVENEYXkoKSAhPT0gbWVldGluZ0RhdGUuZ2V0VVRDRGF5KCkpey8vRm9yc2tlbGxpZ2UgdWdlZGFnZVxuICAgICAgICBcbiAgICAgICAgaWYodG9kYXkuZ2V0VVRDRGF5KCkgPT0gNil7Ly9IdmlzIGRldCBlciBsw7hyZGFnLCB0amVra2VyIHZpIGxpZ2UgbWFudWVsdCBvbSBuw6ZzdGUgZGFnIGVyIHPDuG5kYWcgKDApLCBvZyBhbmdpdmVyIGRlcnZlZCBcIkkgbW9yZ2VuXCJcbiAgICAgICAgICAgIGlmIChtZWV0aW5nRGF0ZSA9PSAwKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJIG1vcmdlblwiO1xuICAgICAgICAgICAgfSBlbHNlIHsgcmV0dXJuIHVnZWRhZ2VbbWVldGluZ0RhdGUuZ2V0VVRDRGF5KCldfTsgLy9SZXR1bmVyIGRhdG8sIGh2aXMgZGV0IGVyIGzDpm5nZXJlIHRpZCB0aWwgbcO4ZGV0IGVuZCBkYWdlbiBlZnRlclxuXG4gICAgICAgIH0gZWxzZSBpZiAobWVldGluZ0RhdGUuZ2V0VVRDRGF5KCktdG9kYXkuZ2V0VVRDRGF5KCkgPT0gMSl7IC8vSHZpcyBtw7hkZXQgZXIgaSBtb3JnZW5cbiAgICAgICAgICAgIHJldHVybiBcIkkgbW9yZ2VuXCI7XG4gICAgICAgIH0gZWxzZSB7IHJldHVybiB1Z2VkYWdlW21lZXRpbmdEYXRlLmdldFVUQ0RheSgpXX07IC8vUmV0dW5lciBkYXRvLCBodmlzIGRldCBlciBsw6ZuZ2VyZSB0aWQgdGlsIG3DuGRldCBlbmQgZGFnZW4gZWZ0ZXJcbiAgICB9XG59XG5cblxuZnVuY3Rpb24gY3VycmVudFRpbWUoKXtcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgY3VycmVudFRpbWVDb252ZXJ0ZWQgPSAoY3VycmVudFRpbWUuZ2V0VVRDTWludXRlcygpIDwgMTAgPyAnMCcgOiAnJykgKyBjdXJyZW50VGltZS5nZXRVVENNaW51dGVzKCk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyZW50LXRpbWUnKS50ZXh0Q29udGVudCA9IGAke3RvZGF5LmdldEhvdXJzKCl9OiR7Y3VycmVudFRpbWVDb252ZXJ0ZWR9YFxuICAgIFxufVxuXG5leHBvcnQge2FuaW1hdGlvbkFjdGl2ZX07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5jb3VudGRvd24tY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgIFxuICAgIGhlaWdodDo0MTVweDtcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuc3Zne1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5cbiNudW1iZXJ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDVlbTtcbn1cblxuI291dGVyLWNpcmNsZXsgLyogYmFja2dyb3VuZCB0byB0aW1lciovXG4gICAgZmlsbDpub25lO1xuICAgIHN0cm9rZTogI0Q5ODI4MjtcbiAgICBzdHJva2Utd2lkdGg6IDQwcHg7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICByOjE4MDsgXG4gICAgY3g6NTAlO1xuICAgIGN5OjUwJTtcbn1cbiNpbm5lci1jaXJjbGV7IC8qIHRpbWVyIGluZGljYXRvciovXG4gICAgZmlsbDpub25lO1xuICAgIHN0cm9rZTogI2ZmZjtcbiAgICBzdHJva2Utd2lkdGg6IDQwcHg7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICByOjE4MDsgXG4gICAgY3g6NTAlO1xuICAgIGN5OjUwJTsgXG59XG5cblxuLmNvdW50ZG93bi0tc3RhcnR7XG4gICAgYW5pbWF0aW9uOiBhbmltLW9wZW4gMS41cyBlYXNlLW91dDsgXG59XG4uY291bnRkb3duLS1lbmR7XG4gICAgYW5pbWF0aW9uOiBhbmltLWNsb3NlIDEuNXMgZWFzZS1vdXQ7IFxufVxuXG5Aa2V5ZnJhbWVzIGFuaW0tY2xvc2Uge1xuICAgXG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTMwO1xuICAgIH1cbn1cbkBrZXlmcmFtZXMgYW5pbS1vcGVuIHtcbiAgIFxuICAgIDAle1xuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTEzMDtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIH1cbn1cblxuXG4jdGltZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5cblxuI2luZGljYXRvci1hbmlte1xuICAgIGZpbGw6IG5vbmU7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgYW5pbWF0aW9uOiBhbmltIDAuM3MgZWFzZS1vdXQ7XG4gICAgc3Ryb2tlOiB3aGl0ZTtcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTI5MDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTI5MDtcbiAgICBhbmltYXRpb246IGFuaW0gMi41cyBlYXNlLWluIGluZmluaXRlIHJldmVyc2U7XG4gICAgLyogYW5pbWF0aW9uOiBhbmltLWNsb3NlIDFzIGVhc2Utb3V0IHJldmVyc2U7ICovXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgIHI6MjA1OyBcbiAgICBjeDo1MCU7XG4gICAgY3k6NTAlO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaW0ge1xuICAgIDAlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjAwO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MDBkZWcpO1xuICAgIH1cbiAgICAxMDAle1xuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDcyMGRlZyk7XG4gICAgfVxuICAgIFxufVxuXG5cblxuXG4vKiAuc3ZnLW9uLWRlbGV0ZXtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7IFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBhbmltYXRpb246IGFuaW1hIDFzIGVhc2Utb3V0O1xufVxuQGtleWZyYW1lcyBhbmltYSB7XG5cbiAgICAxMDAle1xuICAgICAgICBzY2FsZTogMTUwJTtcbiAgICB9XG59ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvQ0RTdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7QUFDbEI7O0FBRUEsZUFBZSx1QkFBdUI7SUFDbEMsU0FBUztJQUNULGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixLQUFLO0lBQ0wsTUFBTTtJQUNOLE1BQU07QUFDVjtBQUNBLGVBQWUsbUJBQW1CO0lBQzlCLFNBQVM7SUFDVCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0FBQ1Y7OztBQUdBO0lBQ0ksa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7O0lBRUk7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixvQkFBb0I7SUFDeEI7QUFDSjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7OztBQUtBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDZDQUE2QztJQUM3QywrQ0FBK0M7SUFDL0Msd0JBQXdCO0lBQ3hCLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtBQUNWOztBQUVBO0lBQ0k7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHVCQUF1QjtRQUN2Qix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHdCQUF3QjtJQUM1Qjs7QUFFSjs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7O0dBZUdcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNvdW50ZG93bi1jb250YWluZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAgXFxuICAgIGhlaWdodDo0MTVweDtcXG4gICAgYXNwZWN0LXJhdGlvOiAxIC8gMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcbnN2Z3tcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcblxcbiNudW1iZXJ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOndoaXRlO1xcbiAgICBmb250LXNpemU6IDVlbTtcXG59XFxuXFxuI291dGVyLWNpcmNsZXsgLyogYmFja2dyb3VuZCB0byB0aW1lciovXFxuICAgIGZpbGw6bm9uZTtcXG4gICAgc3Ryb2tlOiAjRDk4MjgyO1xcbiAgICBzdHJva2Utd2lkdGg6IDQwcHg7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICByOjE4MDsgXFxuICAgIGN4OjUwJTtcXG4gICAgY3k6NTAlO1xcbn1cXG4jaW5uZXItY2lyY2xleyAvKiB0aW1lciBpbmRpY2F0b3IqL1xcbiAgICBmaWxsOm5vbmU7XFxuICAgIHN0cm9rZTogI2ZmZjtcXG4gICAgc3Ryb2tlLXdpZHRoOiA0MHB4O1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgcjoxODA7IFxcbiAgICBjeDo1MCU7XFxuICAgIGN5OjUwJTsgXFxufVxcblxcblxcbi5jb3VudGRvd24tLXN0YXJ0e1xcbiAgICBhbmltYXRpb246IGFuaW0tb3BlbiAxLjVzIGVhc2Utb3V0OyBcXG59XFxuLmNvdW50ZG93bi0tZW5ke1xcbiAgICBhbmltYXRpb246IGFuaW0tY2xvc2UgMS41cyBlYXNlLW91dDsgXFxufVxcblxcbkBrZXlmcmFtZXMgYW5pbS1jbG9zZSB7XFxuICAgXFxuICAgIDEwMCUge1xcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTMwO1xcbiAgICB9XFxufVxcbkBrZXlmcmFtZXMgYW5pbS1vcGVuIHtcXG4gICBcXG4gICAgMCV7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDExMzA7XFxuICAgIH1cXG4gICAgMTAwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIH1cXG59XFxuXFxuXFxuI3RpbWVye1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuI2luZGljYXRvci1hbmlte1xcbiAgICBmaWxsOiBub25lO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIGFuaW1hdGlvbjogYW5pbSAwLjNzIGVhc2Utb3V0O1xcbiAgICBzdHJva2U6IHdoaXRlO1xcbiAgICBzdHJva2Utd2lkdGg6IDJweDtcXG4gICAgYm9yZGVyLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTI5MDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEyOTA7XFxuICAgIGFuaW1hdGlvbjogYW5pbSAyLjVzIGVhc2UtaW4gaW5maW5pdGUgcmV2ZXJzZTtcXG4gICAgLyogYW5pbWF0aW9uOiBhbmltLWNsb3NlIDFzIGVhc2Utb3V0IHJldmVyc2U7ICovXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG4gICAgcjoyMDU7IFxcbiAgICBjeDo1MCU7XFxuICAgIGN5OjUwJTtcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltIHtcXG4gICAgMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XFxuICAgIH1cXG4gICAgNDAlIHtcXG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxNjAwO1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDAwZGVnKTtcXG4gICAgfVxcbiAgICAxMDAle1xcbiAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSg3MjBkZWcpO1xcbiAgICB9XFxuICAgIFxcbn1cXG5cXG5cXG5cXG5cXG4vKiAuc3ZnLW9uLWRlbGV0ZXtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFuaW1hdGlvbjogYW5pbWEgMXMgZWFzZS1vdXQ7XFxufVxcbkBrZXlmcmFtZXMgYW5pbWEge1xcblxcbiAgICAxMDAle1xcbiAgICAgICAgc2NhbGU6IDE1MCU7XFxuICAgIH1cXG59ICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiAuaGlkZXsgIFxuICAgIGFuaW1hdGlvbjogZGlhLWNsb3NlIDFzIGxpbmVhcjsgICAgIFxufSAqL1xuXG4jcmVzZXJ2ZS1kaWFsb2c6bm90KFtvcGVuXSl7ICBcbiAgICBhbmltYXRpb246IGRpYS1jbG9zZSAxcyBsaW5lYXI7ICAgXG59XG5cbiNyZXNlcnZlLWRpYWxvZ1tvcGVuXXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMWYzZjtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYW5pbWF0aW9uOiBkaWEtb3BlbiAwLjFzIGxpbmVhcjsgICBcbn1cblxuI3Jlc2VydmUtYnRuZ3JvdXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufVxuI3Jlc2VydmUtZGlhbG9nOjpiYWNrZHJvcHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuI3Jlc2VydmUtaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNyZXNlcnZlLWNsb3Nle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8qIFNwaW5uZXIgZWxlbWVudCBvbiBidXR0b24gKi9cbi5idXR0b24tLWxvYWRpbmcgLmJ1dHRvbl9fdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5idXR0b24tLWxvYWRpbmc6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGJ1dHRvbi1sb2FkaW5nLXNwaW5uZXIgMXMgZWFzZSBpbmZpbml0ZTtcbiAgfVxuICAuYnV0dG9uX190ZXh0IHtcbiAgICBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbiAgQGtleWZyYW1lcyBidXR0b24tbG9hZGluZy1zcGlubmVyIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbiAgICB9XG4gIH1cblxuLyogU3Bpbm5lciBidXR0b24gZW5kKi9cblxuXG5cblxuXG5Aa2V5ZnJhbWVzIGRpYS1vcGVue1xuICAgIDAle1xuICAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLDApO1xuICAgIH1cbiAgICAxMDAle1xuXG4gICAgfVxufVxuQGtleWZyYW1lcyBkaWEtY2xvc2V7XG4gICAgMCV7XG4gICAgICAgIFxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBRUc7O0FBRUg7SUFDSSw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwrQkFBK0I7QUFDbkM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULFlBQVk7O0FBRWhCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7OztBQUdBLDhCQUE4QjtBQUM5QjtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUztJQUNULFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrREFBa0Q7RUFDcEQ7RUFDQTs7SUFFRSxvQkFBb0I7QUFDeEI7RUFDRTtJQUNFO01BQ0Usd0JBQXdCO0lBQzFCOztJQUVBO01BQ0Usd0JBQXdCO0lBQzFCO0VBQ0Y7O0FBRUYsc0JBQXNCOzs7Ozs7QUFNdEI7SUFDSTs7UUFFSSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCx1Q0FBdUM7SUFDM0M7SUFDQTs7SUFFQTtBQUNKO0FBQ0E7SUFDSTs7SUFFQTtJQUNBO1FBQ0ksUUFBUTtRQUNSLFNBQVM7SUFDYjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIC5oaWRleyAgXFxuICAgIGFuaW1hdGlvbjogZGlhLWNsb3NlIDFzIGxpbmVhcjsgICAgIFxcbn0gKi9cXG5cXG4jcmVzZXJ2ZS1kaWFsb2c6bm90KFtvcGVuXSl7ICBcXG4gICAgYW5pbWF0aW9uOiBkaWEtY2xvc2UgMXMgbGluZWFyOyAgIFxcbn1cXG5cXG4jcmVzZXJ2ZS1kaWFsb2dbb3Blbl17XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTpmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbmltYXRpb246IGRpYS1vcGVuIDAuMXMgbGluZWFyOyAgIFxcbn1cXG5cXG4jcmVzZXJ2ZS1idG5ncm91cHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIFxcbn1cXG4jcmVzZXJ2ZS1kaWFsb2c6OmJhY2tkcm9we1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuI3Jlc2VydmUtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNyZXNlcnZlLWNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcbi8qIFNwaW5uZXIgZWxlbWVudCBvbiBidXR0b24gKi9cXG4uYnV0dG9uLS1sb2FkaW5nIC5idXR0b25fX3RleHQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICBcXG4gIC5idXR0b24tLWxvYWRpbmc6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uLWxvYWRpbmctc3Bpbm5lciAxcyBlYXNlIGluZmluaXRlO1xcbiAgfVxcbiAgLmJ1dHRvbl9fdGV4dCB7XFxuICAgIFxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuICBAa2V5ZnJhbWVzIGJ1dHRvbi1sb2FkaW5nLXNwaW5uZXIge1xcbiAgICBmcm9tIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybik7XFxuICAgIH1cXG4gIFxcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcbiAgICB9XFxuICB9XFxuXFxuLyogU3Bpbm5lciBidXR0b24gZW5kKi9cXG5cXG5cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIGRpYS1vcGVue1xcbiAgICAwJXtcXG4gICAgICAgIFxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiAtMTAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLDApO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuXFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBkaWEtY2xvc2V7XFxuICAgIDAle1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC0tcHJpLWNvbDogIzI1MjQyNDsgLyojMjUyNDI0OyovXG4gICAgLS1zZWMtY29sOiByZ2IoMTksIDM1LCA0OSwgMC4zKTsgLypyZ2IoMTksIDM1LCA0OSkqL1xuICAgIC0tY2FyZC1jb2w6IHJnYigyNCwgNDMsIDYwKTtcbiAgICAtLWJ0bi1wcmltOiByZ2IoNDksIDQ5LCAxNDIpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cbmJvZHl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoOyBcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XG59XG4jYmctaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAtMTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIGRpdntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn0gKi9cbi5jb250YWluZXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmktY29sKTsgKi9cbiAgICBmbGV4OjE7XG59XG4ubWFpbi1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogNTBweCA1MHB4IDBweCA1MHB4O1xuICAgIGdhcDogMzBweDtcbn1cblxuLnRpbWUtY29udGVudHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDE7XG4gICAgXG59XG4udGl0bGUtdGltZS1jb250YWluZXJ7XG4gICAgZmxleC1zaHJpbms6IDA7XG59XG4udGl0bGUtdGltZS1jb250YWluZXI+ZGl2e1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIG1hcmdpbjogMjBweCAwO1xufVxuXG5cblxuXG5cbi5oZWFkZXItY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuXG4jbm8tZXZlbnRze1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAzMCU7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOndoaXRlO1xufVxuXG4jY29ubmVjdC1HQXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNDAlO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4vKiBTZWNvbmRhcnkgY29udGVudCAvIHVwY29tbWluZyBtZWVpdG5ncyBjc3MqL1xuLnNlYy1jb250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWMtY29sKTtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuXG4uc2VjLWNvbnRlbnQgZGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDJweDtcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtY29sKTtcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgLyp0amVrIHbDpnJkaSovXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG5cblxuLnNlYy1jb250ZW50IGgxe1xuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMi4yZW07XG59XG4uc2VjLWNvbnRlbnQgaDJ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuXG5cbiNidG4tZW5kLCAjYnRuLXJlc2VydmV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2N1cnJlbnQtdGltZXtcbiAgICBmb250LXNpemU6IDVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvIDA7XG59XG5cblxuLmZsZXgtaWNvbi1tZWV0LCAuZmxleC1pY29uLXRpbWV7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxufVxuLmZsZXgtaWNvbi1tZWV0IGlvbi1pY29uLCAuZmxleC1pY29uLXRpbWUgaW9uLWljb257XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuXG5cblxuXG5cbi8qR0VORVJBTCB1dGlsaXRpdGVzKi9cblxuaDEsIGgyLCBoM3tcbiAgICBjb2xvcjogd2hpdGU7XG59XG5oMXtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBjb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5oMntcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaDN7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5idXR0b257XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5wcmltYXJ5LWJ0bntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXByaW0pO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJpbWFyeS1idG46YWN0aXZle1xuICAgIHRyYW5zZm9ybTogc2NhbGUoOTUlKTtcbiAgICBjb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xuICAgIFxufVxuXG4uc2Vjb25kYXJ5LWJ0bntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uc2Vjb25kYXJ5LWJ0bjphY3RpdmV7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xuICAgIGNvbG9yOiByZ2IoMTg3LCAxODUsIDE4NSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NywgMTg1LCAxODUpO1xuICAgIG1hcmdpbjogMXB4O1xufVxuLnNlY29uZGFyeS1idG46ZGlzYWJsZWR7XG4gICAgY29sb3I6IHJnYig5OCwgOTgsIDk4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG59XG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUUsV0FBVztJQUMvQiwrQkFBK0IsRUFBRSxrQkFBa0I7SUFDbkQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztHQUVHO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxNQUFNO0FBQ1Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixPQUFPOztBQUVYO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7Ozs7O0FBTUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7Ozs7QUFLQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlCQUFpQixFQUFFLGFBQWE7SUFDaEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7Ozs7QUFJQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7Ozs7OztBQU9BLHFCQUFxQjs7QUFFckI7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1wcmktY29sOiAjMjUyNDI0OyAvKiMyNTI0MjQ7Ki9cXG4gICAgLS1zZWMtY29sOiByZ2IoMTksIDM1LCA0OSwgMC4zKTsgLypyZ2IoMTksIDM1LCA0OSkqL1xcbiAgICAtLWNhcmQtY29sOiByZ2IoMjQsIDQzLCA2MCk7XFxuICAgIC0tYnRuLXByaW06IHJnYig0OSwgNDksIDE0Mik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXG59XFxuI2JnLWltZ3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi8qIGRpdntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufSAqL1xcbi5jb250YWluZXJ7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmktY29sKTsgKi9cXG4gICAgZmxleDoxO1xcbn1cXG4ubWFpbi1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDUwcHggNTBweCAwcHggNTBweDtcXG4gICAgZ2FwOiAzMHB4O1xcbn1cXG5cXG4udGltZS1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXg6IDE7XFxuICAgIFxcbn1cXG4udGl0bGUtdGltZS1jb250YWluZXJ7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbn1cXG4udGl0bGUtdGltZS1jb250YWluZXI+ZGl2e1xcbiAgICBmbGV4LXNocmluazogMDtcXG4gICAgbWFyZ2luOiAyMHB4IDA7XFxufVxcblxcblxcblxcblxcblxcbi5oZWFkZXItY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4jbm8tZXZlbnRze1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4jY29ubmVjdC1HQXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi8qIFNlY29uZGFyeSBjb250ZW50IC8gdXBjb21taW5nIG1lZWl0bmdzIGNzcyovXFxuLnNlYy1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWNvbCk7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG4uc2VjLWNvbnRlbnQgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2wpO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgLyp0amVrIHbDpnJkaSovXFxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uc2VjLWNvbnRlbnQgaDF7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDIuMmVtO1xcbn1cXG4uc2VjLWNvbnRlbnQgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcblxcblxcbiNidG4tZW5kLCAjYnRuLXJlc2VydmV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjdXJyZW50LXRpbWV7XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbn1cXG5cXG5cXG4uZmxleC1pY29uLW1lZXQsIC5mbGV4LWljb24tdGltZXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcbi5mbGV4LWljb24tbWVldCBpb24taWNvbiwgLmZsZXgtaWNvbi10aW1lIGlvbi1pY29ue1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuLypHRU5FUkFMIHV0aWxpdGl0ZXMqL1xcblxcbmgxLCBoMiwgaDN7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuaDF7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBjb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5oMntcXG4gICAgZm9udC1zaXplOiA0ZW07XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbmgze1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuYnV0dG9ue1xcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5wcmltYXJ5LWJ0bntcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXByaW0pO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5wcmltYXJ5LWJ0bjphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoOTUlKTtcXG4gICAgY29sb3I6IHJnYigxODcsIDE4NSwgMTg1KTtcXG4gICAgXFxufVxcblxcbi5zZWNvbmRhcnktYnRue1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4uc2Vjb25kYXJ5LWJ0bjphY3RpdmV7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoOTUlKTtcXG4gICAgY29sb3I6IHJnYigxODcsIDE4NSwgMTg1KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NywgMTg1LCAxODUpO1xcbiAgICBtYXJnaW46IDFweDtcXG59XFxuLnNlY29uZGFyeS1idG46ZGlzYWJsZWR7XFxuICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYig5OCwgOTgsIDk4KTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ0RTdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DRFN0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgKiBhcyBjc3MgZnJvbSBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBjc3MyIGZyb20gXCIuL0NEU3R5bGUuY3NzXCI7XG5pbXBvcnQgKiBhcyBjc3MzIGZyb20gXCIuL2RpYWxvZy5jc3NcIlxuaW1wb3J0ICcuL3N0YXRlQ29udHJvbGxlcic7XG5pbXBvcnQgJy4vY291bnREb3duJztcbmltcG9ydCAnLi9tYW5pcHVsYXRlTWVldGluZ3MnO1xuaW1wb3J0ICcuL2dhcGknO1xuaW1wb3J0IGJnSW1nRnJlZSBmcm9tICcuL2ltZy9CZy1pbWcucG5nJztcbmltcG9ydCBiZ0ltZ09jY3VwaWVkIGZyb20gJy4vaW1nL0JnLWltZy1vY2N1cGllZC5wbmcnO1xuXG5cblxuXG5cblxuYXN5bmMgZnVuY3Rpb24gYXV0aGVudGljYXRlKCkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hdXRoJyk7XG4gICAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTsgLy8gTG9nIHRoZSBtZXNzYWdlIGZyb20gdGhlIHNlcnZlclxuICB9XG4gIFxuICAvLyBDYWxsIHRoZSBhdXRoZW50aWNhdGUgZnVuY3Rpb24gd2hlbiBuZWVkZWQgKGUuZy4sIG9uIGEgYnV0dG9uIGNsaWNrKVxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVzdC1hdXRoJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhdXRoZW50aWNhdGUpO1xuXG5cblxuIl0sIm5hbWVzIjpbImNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2UiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidG9kYXkiLCJEYXRlIiwiZ2V0VGltZSIsInN0YXJ0VGltZUluTWlsbGlzIiwiZW5kVGltZUluTWlsbGlzIiwidG90YWxNZWV0aW5nVGltZSIsImVsYWJzZWRNZWV0aW5nVGltZSIsInBlcmNlbnRNZWV0aW5nRWxhYnNlZCIsImNhbGN1bGF0ZVJlbWFpbmluZ1RpbWUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwibGlzdGVkRXZlbnRzIiwiQ0xJRU5UX0lEIiwiQVBJX0tFWSIsIkRJU0NPVkVSWV9ET0MiLCJTQ09QRVMiLCJ0b2tlbkNsaWVudCIsImdhcGlJbml0ZWQiLCJnaXNJbml0ZWQiLCJhdXRob3JpemVkIiwid2luZG93IiwiZ2FwaUxvYWRlZCIsImdhcGkiLCJsb2FkIiwiaW5pdGlhbGl6ZUdhcGlDbGllbnQiLCJfaW5pdGlhbGl6ZUdhcGlDbGllbnQiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsaWVudCIsImluaXQiLCJhcGlLZXkiLCJkaXNjb3ZlcnlEb2NzIiwiZ2lzTG9hZGVkIiwiZ29vZ2xlIiwiYWNjb3VudHMiLCJvYXV0aDIiLCJpbml0VG9rZW5DbGllbnQiLCJjbGllbnRfaWQiLCJzY29wZSIsImFjY2Vzc190eXBlIiwicHJvbXB0IiwiY2FsbGJhY2siLCJoYW5kbGVBdXRoQ2xpY2siLCJfcmVmIiwiX2NhbGxlZSIsInJlc3AiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJjb25zb2xlIiwibG9nIiwibGlzdFVwY29taW5nRXZlbnRzIiwiX3giLCJnZXRUb2tlbiIsInJlcXVlc3RBY2Nlc3NUb2tlbiIsInJldm9rZUFjY2VzcyIsInRva2VuIiwicmV2b2tlVXJsIiwiY29uY2F0IiwiYWNjZXNzX3Rva2VuIiwiZmV0Y2giLCJyZXNwb25zZSIsInNldFRva2VuIiwiaGFuZGxlU2lnbm91dENsaWNrIiwicmV2b2tlIiwiX2xpc3RVcGNvbWluZ0V2ZW50cyIsIl9jYWxsZWUzIiwicmVxdWVzdCIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInRvSVNPU3RyaW5nIiwiY2FsZW5kYXIiLCJldmVudHMiLCJsaXN0IiwicmVzdWx0IiwiaXRlbXMiLCJ0MCIsIm1lc3NhZ2UiLCJzZXRJbnRlcnZhbCIsImNyZWF0ZUV2ZW50IiwiX3gyIiwiX2NyZWF0ZUV2ZW50IiwiX2NhbGxlZTQiLCJleHRlbmRlZFRpbWUiLCJ0b2RheVBsdXMiLCJldmVudCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiaW5zZXJ0IiwiZW5kRXZlbnQiLCJfeDMiLCJfZW5kRXZlbnQiLCJfY2FsbGVlNSIsInN0YXJ0RGF0ZSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInN1bW1hcnkiLCJ1cGRhdGUiLCJpZCIsImFuaW1hdGlvbkFjdGl2ZSIsImVuZE1lZXRpbmciLCJyZXNlcnZlIiwicmVzZXJ2ZURpYWxvZyIsImNsb3NlUmVzZXJ2ZURpYWxvZyIsImNpcmNsZUFuaW1PdXRlciIsInJlc2VydmVfMTAiLCJyZXNlcnZlXzE1IiwicmVzZXJ2ZV8zMCIsInJlc2VydmVfNjAiLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kQ3VycmVudE1lZXRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic3Ryb2tlRGFzaG9mZnNldCIsInJlbW92ZSIsInNob3dNb2RhbCIsImNoZWNrRGlzYWJsZWRSZXNlcnZlVGltZXMiLCJjbG9zZSIsInRpbWVUb05leHRNZWV0aW5nIiwibmV4dE1lZXRpbmciLCJzdGFydCIsImRhdGVUaW1lIiwiZGlzYWJsZWQiLCJ1Z2VkYWdlIiwic2VjQ29udGVudCIsIm1lZXRpbmdTdGF0ZSIsImJnSW1nRnJlZSIsImJnSW1nT2NjdXBpZWQiLCJjdXJyZW50VGltZSIsImJhY2tncm91bmRDb2xvciIsImNoZWNrSWZBY3RpdmVNZWV0aW5nIiwiZW5kIiwiYWN0aXZlTWVldGluZ1N0YXRlIiwiZGlzcGxheUFkZGl0aW9uYWxNZWV0aW5ncyIsInVwY29taW5nTWVldGluZ1N0YXRlIiwiZW1wdHlNZWV0aW5nU3RhdGUiLCJzdGFydFRpbWVNaW5zQ29udiIsImVuZFRpbWVNaW5zQ29udiIsInRleHRDb250ZW50IiwiY3JlYXRvciIsImVtYWlsIiwic2VhcmNoIiwiZ2V0V2Vla0RheU5hbWUiLCJnZXRIb3VycyIsInNyYyIsInZpc2liaWxpdHkiLCJyZXBsYWNlQ2hpbGRyZW4iLCJNYXRoIiwiZmxvb3IiLCJ1cGNDb250YWluZXIiLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwib3JnYW5pemVyIiwidGltZSIsImFwcGVuZCIsIm1lZXRpbmdEYXRlIiwiZ2V0VVRDRGF5IiwiY3VycmVudFRpbWVDb252ZXJ0ZWQiLCJnZXRVVENNaW51dGVzIiwiY3NzIiwiY3NzMiIsImNzczMiLCJhdXRoZW50aWNhdGUiLCJfYXV0aGVudGljYXRlIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=