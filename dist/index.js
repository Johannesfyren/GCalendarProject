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
      prompt: 'consent'
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
          _context3.next = 14;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0.message);
          return _context3.abrupt("return");
        case 14:
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
    //Check if we have gotten a token, if yes, we claim a new access_token every hour
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
    organizer.textContent = _gapi__WEBPACK_IMPORTED_MODULE_0__.listedEvents[i].creator.email;
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
    padding-left: 10px;
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



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB,EAAE,WAAW;IAC/B,+BAA+B,EAAE,kBAAkB;IACnD,2BAA2B;IAC3B,4BAA4B;IAC5B,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;;GAEG;AACH;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,sCAAsC;IACtC,MAAM;AACV;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,OAAO;;AAEX;AACA;IACI,cAAc;AAClB;AACA;IACI,cAAc;IACd,cAAc;AAClB;;;;;;AAMA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;;;;AAKA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,OAAO;IACP,6BAA6B;IAC7B,gCAAgC;IAChC,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,gBAAgB;IAChB,iCAAiC;IACjC,iBAAiB,EAAE,aAAa;IAChC,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;;;AAIA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;;;AAIA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;AAClB;;;AAGA;IACI,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,cAAc;IACd,WAAW;IACX,kBAAkB;AACtB;;;;;;;AAOA,qBAAqB;;AAErB;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;;AAE7B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,oCAAoC;IACpC,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,iCAAiC;AACrC","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --pri-col: #252424; /*#252424;*/\n    --sec-col: rgb(19, 35, 49, 0.3); /*rgb(19, 35, 49)*/\n    --card-col: rgb(24, 43, 60);\n    --btn-prim: rgb(49, 49, 142);\n    font-family: \"Lato\", sans-serif;\n}\nbody{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 100vh; \n}\n#bg-img{\n    position: absolute;\n    z-index: -1;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n}\n\n/* div{\n    background-color: transparent;\n} */\n.container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: transparent;\n    /* background-color: var(--pri-col); */\n    flex:1;\n}\n.main-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 50px 50px 0px 50px;\n    gap: 30px;\n}\n\n.time-content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    flex-direction: row;\n    flex: 1;\n    \n}\n.title-time-container{\n    flex-shrink: 0;\n}\n.title-time-container>div{\n    flex-shrink: 0;\n    margin: 20px 0;\n}\n\n\n\n\n\n.header-content{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n\n\n#no-events{\n    position: absolute;\n    top: 50%;\n    left: 30%;\n    font-size: 4em;\n    text-align: center;\n    color:white;\n}\n\n#connect-GA{\n    position: absolute;\n    top: 50%;\n    left: 40%;\n    width: 300px;\n    height: 100px;\n}\n\n/* Secondary content / upcomming meeitngs css*/\n.sec-content{\n    display: flex;\n    flex: 1;\n    background-color: transparent;\n    background-color: var(--sec-col);\n    max-height: 200px;\n    width: 100vw;\n    overflow-x: scroll;\n    padding-left: 10px;\n}\n\n\n.sec-content div{\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    min-width: 400px;\n    background-color: var(--card-col);\n    padding-top: 10px; /*tjek værdi*/\n    padding-left: 10px;\n    margin: 10px;\n    border-radius: 10px;\n}\n\n\n\n.sec-content h1{\n    padding-bottom: 15px;\n    font-size: 2.2em;\n}\n.sec-content h2{\n    font-size: 1.2em;\n}\n\n\n\n#btn-end, #btn-reserve{\n    display: none;\n}\n\n#current-time{\n    font-size: 5em;\n    text-align: center;\n    margin: auto 0;\n}\n\n\n.flex-icon-meet, .flex-icon-time{\n    display: none;\n    align-items: center;\n    \n}\n.flex-icon-meet ion-icon, .flex-icon-time ion-icon{\n    display: flex;\n    align-items: center;\n    font-size: 2em;\n    color: #fff;\n    margin-right: 10px;\n}\n\n\n\n\n\n\n/*GENERAL utilitites*/\n\nh1, h2, h3{\n    color: white;\n}\nh1{\n    font-size: 3em;\n    color: rgb(212, 209, 209);\n    margin-bottom: 15px;\n}\nh2{\n    font-size: 4em;\n    margin-bottom: 10px;\n}\nh3{\n    font-size: 2em;\n}\nbutton{\n    padding: 5px 10px;\n    font-size: 2em;\n}\n\n.primary-btn{\n    position:relative;\n    padding: 15px 25px;\n    font-size: 2em;\n    border-radius: 10px;\n    border-style: none;\n    background-color: var(--btn-prim);\n    color: white;\n    font-weight: 600;\n}\n\n.primary-btn:active{\n    transform: scale(95%);\n    color: rgb(187, 185, 185);\n    \n}\n\n.secondary-btn{\n    position: relative;\n    padding: 15px 25px;\n    font-size: 2em;\n    border-radius: 10px;\n    border: 2px solid white;\n    background-color: transparent;\n    font-weight: 600;\n    color: white;\n}\n.secondary-btn:active{\n    transform: scale(95%);\n    color: rgb(187, 185, 185);\n    border: 1px solid rgb(187, 185, 185);\n    margin: 1px;\n}\n.secondary-btn:disabled{\n    color: rgb(98, 98, 98);\n    border: 1px solid rgb(98, 98, 98);\n}\n\n\n\n"],"sourceRoot":""}]);
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









})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUM7QUFDRztBQUNGO0FBQ1Q7QUFDTjtBQUNTO0FBQ2Q7QUFDeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9jb3VudERvd24uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvZ2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9tYW5pcHVsYXRlTWVldGluZ3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvc3RhdGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL0NEU3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL0NEU3R5bGUuY3NzPzg4Y2IiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvZGlhbG9nLmNzcz82ZTBlIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2t0ZW1wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2t0ZW1wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NhbGN1bGF0ZSB0aGUgY2lyY3VtZmVyZW5jZSB0byB0aGUgY291bnREb3duIHRpbWVyLCBzbyByZW1haW5pbmcgdGltZSBjYW4gYmUgc2hvd25cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2Uoc3RhcnRUaW1lLGVuZFRpbWUpe1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3Qgc3RhcnRUaW1lSW5NaWxsaXMgPSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGVuZFRpbWVJbk1pbGxpcyA9IGVuZFRpbWUuZ2V0VGltZSgpO1xuXG4gICAgY29uc3QgdG90YWxNZWV0aW5nVGltZSA9IGVuZFRpbWVJbk1pbGxpcyAtIHN0YXJ0VGltZUluTWlsbGlzO1xuICAgIGNvbnN0IGVsYWJzZWRNZWV0aW5nVGltZSA9IHRvZGF5IC0gc3RhcnRUaW1lSW5NaWxsaXM7XG4gICAgY29uc3QgcGVyY2VudE1lZXRpbmdFbGFic2VkID0gZWxhYnNlZE1lZXRpbmdUaW1lL3RvdGFsTWVldGluZ1RpbWUqMTAwO1xuICAgIHJldHVybiAocGVyY2VudE1lZXRpbmdFbGFic2VkICogMTEuMyk7IC8vMTEuMyBpcyAxJSBvZiB0aGUgY2lyY3VtZmVyZW5jZSB2YWx1ZSB1c2VkIHRvIGRyYXcgdGhlIGNpcmNsZS4gVG90YWwgY2lyYyBpcyA9IDIqUEkqcmFkaXVzXG59XG5cbi8vQ2FsY3VsYXRlcyBob3cgbWFueSBtaW51dGVzIGlzIGxlZnQgb2YgY3VycmVudCBhY3RpdmUgbWVldGluZ1xuZnVuY3Rpb24gY2FsY3VsYXRlUmVtYWluaW5nVGltZShlbmRUaW1lKXtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGVuZFRpbWVJbk1pbGxpcyA9IGVuZFRpbWUuZ2V0VGltZSgpO1xuICAgIHJldHVybiAoZW5kVGltZUluTWlsbGlzLXRvZGF5KS8xMDAwLzYwOyBcbn1cblxuZXhwb3J0e2NhbGN1bGF0ZVJlbWFpbmluZ1RpbWUsIGNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2V9IiwiXG5cblxubGV0IGxpc3RlZEV2ZW50cztcbi8qIGV4cG9ydGVkIGdhcGlMb2FkZWQgKi9cbiAgICAgIC8qIGV4cG9ydGVkIGdpc0xvYWRlZCAqL1xuICAgICAgLyogZXhwb3J0ZWQgaGFuZGxlQXV0aENsaWNrICovXG4gICAgICAvKiBleHBvcnRlZCBoYW5kbGVTaWdub3V0Q2xpY2sgKi9cblxuICAgICAgLy8gVE9ETyhkZXZlbG9wZXIpOiBTZXQgdG8gY2xpZW50IElEIGFuZCBBUEkga2V5IGZyb20gdGhlIERldmVsb3BlciBDb25zb2xlXG4gICAgICBjb25zdCBDTElFTlRfSUQgPSAnOTc0MzUxNTQ4NDM0LTQ3bDNsb2FxMjdoa2dsNmg1dXJjM2I5dXY0bmxuNzB0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcbiAgICAgIGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QnlENUJoZWhVY1BJVDJhVFFyU0hxZEdqeDhPaGt4dzZvJztcblxuICAgICAgLy8gRGlzY292ZXJ5IGRvYyBVUkwgZm9yIEFQSXMgdXNlZCBieSB0aGUgcXVpY2tzdGFydFxuICAgICAgY29uc3QgRElTQ09WRVJZX0RPQyA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9jYWxlbmRhci92My9yZXN0JztcblxuICAgICAgLy8gQXV0aG9yaXphdGlvbiBzY29wZXMgcmVxdWlyZWQgYnkgdGhlIEFQSTsgbXVsdGlwbGUgc2NvcGVzIGNhbiBiZVxuICAgICAgLy8gaW5jbHVkZWQsIHNlcGFyYXRlZCBieSBzcGFjZXMuXG4gICAgICBjb25zdCBTQ09QRVMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jYWxlbmRhcic7XG5cbiAgICAgIGxldCB0b2tlbkNsaWVudDtcbiAgICAgIFxuICAgICAgbGV0IGdhcGlJbml0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBnaXNJbml0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBhdXRob3JpemVkID0gZmFsc2U7XG4gICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3JpemVfYnV0dG9uJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbm91dF9idXR0b24nKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbGJhY2sgYWZ0ZXIgYXBpLmpzIGlzIGxvYWRlZC5cbiAgICAgICAqL1xuICAgICAgd2luZG93LmdhcGlMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdhcGkubG9hZCgnY2xpZW50JywgaW5pdGlhbGl6ZUdhcGlDbGllbnQpO1xuICAgICAgIFxuICAgICAgfVxuICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsYmFjayBhZnRlciB0aGUgQVBJIGNsaWVudCBpcyBsb2FkZWQuIExvYWRzIHRoZVxuICAgICAgICogZGlzY292ZXJ5IGRvYyB0byBpbml0aWFsaXplIHRoZSBBUEkuXG4gICAgICAgKi9cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVHYXBpQ2xpZW50KCkge1xuICAgICAgICBhd2FpdCBnYXBpLmNsaWVudC5pbml0KHtcbiAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXG4gICAgICAgICAgZGlzY292ZXJ5RG9jczogW0RJU0NPVkVSWV9ET0NdLFxuICAgICAgICB9KTtcbiAgICAgICAgZ2FwaUluaXRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbGJhY2sgYWZ0ZXIgR29vZ2xlIElkZW50aXR5IFNlcnZpY2VzIGFyZSBsb2FkZWQuXG4gICAgICAgKi9cbiAgICAgICAgd2luZG93Lmdpc0xvYWRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2tlbkNsaWVudCA9IGdvb2dsZS5hY2NvdW50cy5vYXV0aDIuaW5pdFRva2VuQ2xpZW50KHtcbiAgICAgICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcbiAgICAgICAgICBzY29wZTogU0NPUEVTLFxuICAgICAgICAgIGFjY2Vzc190eXBlOiAnb2ZmbGluZScsXG4gICAgICAgICAgcHJvbXB0OiAnY29uc2VudCcsXG4gICAgICAgICAgY2FsbGJhY2s6ICcnLCAvLyBkZWZpbmVkIGxhdGVyXG4gICAgICAgIH0pO1xuICAgICAgICBnaXNJbml0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgIFxuICAgICAgLyoqXG4gICAgICAgKiAgU2lnbiBpbiB0aGUgdXNlciB1cG9uIGJ1dHRvbiBjbGljay5cbiAgICAgICAqL1xuICAgICAgd2luZG93LmhhbmRsZUF1dGhDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9rZW5DbGllbnQuY2FsbGJhY2sgPSBhc3luYyAocmVzcCkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChyZXNwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25uZWN0LUdBJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBhdXRob3JpemVkID0gdHJ1ZTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgICAgICAgICBhd2FpdCBsaXN0VXBjb21pbmdFdmVudHMoKTsgXG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChnYXBpLmNsaWVudC5nZXRUb2tlbigpID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gUHJvbXB0IHRoZSB1c2VyIHRvIHNlbGVjdCBhIEdvb2dsZSBBY2NvdW50IGFuZCBhc2sgZm9yIGNvbnNlbnQgdG8gc2hhcmUgdGhlaXIgZGF0YVxuICAgICAgICAgIC8vIHdoZW4gZXN0YWJsaXNoaW5nIGEgbmV3IHNlc3Npb24uXG4gICAgICAgICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHtwcm9tcHQ6ICdjb25zZW50J30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNraXAgZGlzcGxheSBvZiBhY2NvdW50IGNob29zZXIgYW5kIGNvbnNlbnQgZGlhbG9nIGZvciBhbiBleGlzdGluZyBzZXNzaW9uLlxuICAgICAgICAgIHRva2VuQ2xpZW50LnJlcXVlc3RBY2Nlc3NUb2tlbih7cHJvbXB0OiAnJ30pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgXG5cbiAgICAgIC8vUmV2b2tlIGFjY2VzcyB0byBHb29nbGUgQWNjb3VudCAtIGNvbXBsZXRlbHkgcmVtb3ZlcyBwcmlvciBhY2Nlc3NcbiAgICAgIHdpbmRvdy5yZXZva2VBY2Nlc3MgPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnYXBpLmNsaWVudC5nZXRUb2tlbigpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBjb25zdCByZXZva2VVcmwgPSBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3Jldm9rZT90b2tlbj0ke3Rva2VuLmFjY2Vzc190b2tlbn1gO1xuICAgICAgICAgIGZldGNoKHJldm9rZVVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjY2VzcyB0b2tlbiByZXZva2VkJyk7XG4gICAgICAgICAgICAgIGdhcGkuY2xpZW50LnNldFRva2VuKG51bGwpOyAvLyBDbGVhciB0aGUgdG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXZva2luZyBhY2Nlc3MgdG9rZW4nLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICBcbiAgICAgIC8qKlxuICAgICAgICogIFNpZ24gb3V0IHRoZSB1c2VyIHVwb24gYnV0dG9uIGNsaWNrLlxuICAgICAgICovXG4gICAgICB3aW5kb3cuaGFuZGxlU2lnbm91dENsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2FwaS5jbGllbnQuZ2V0VG9rZW4oKTtcbiAgICAgICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICAgICAgZ29vZ2xlLmFjY291bnRzLm9hdXRoMi5yZXZva2UodG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICBnYXBpLmNsaWVudC5zZXRUb2tlbignJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgXG4gICAgICAvL0ZldGNoIHVwY29tbWluZyBldmVudHNcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxpc3RVcGNvbWluZ0V2ZW50cygpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAnY2FsZW5kYXJJZCc6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICd0aW1lTWluJzogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAnc2hvd0RlbGV0ZWQnOiBmYWxzZSxcbiAgICAgICAgICAgICdzaW5nbGVFdmVudHMnOiB0cnVlLFxuICAgICAgICAgICAgJ21heFJlc3VsdHMnOiA2LFxuICAgICAgICAgICAgJ29yZGVyQnknOiAnc3RhcnRUaW1lJyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZ2FwaS5jbGllbnQuY2FsZW5kYXIuZXZlbnRzLmxpc3QocmVxdWVzdCk7XG4gICAgICAgICAgbGlzdGVkRXZlbnRzID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0Lml0ZW1zO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIFxuICAgICAgLy9SZXF1ZXN0IHVwY29taW5nIGV2ZW50cyBldmVyeSB4IG1pbnV0ZSB0byBzdGFydCBwcm9jZXNzaW5nIHBvcnRlbnRpYWwgY2hhbmdlcyBpbiB0aGUgY2FsZW5kYXJcbiAgICAgIHNldEludGVydmFsKCgpPT4ge1xuICAgICAgICBpZiAoZ2FwaUluaXRlZCAmJiBnaXNJbml0ZWQgJiYgYXV0aG9yaXplZCl7IC8vQ2hlY2sgaWYgd2UgaGF2ZSBnb3R0ZW4gYSB0b2tlbiwgbG9hZGVkIHRoZSBsaWJyYXJ5IGFuZCBhbHNvIGF1dGhvcml6ZWQgYSB1c2VyXG4gICAgICAgICAgbGlzdFVwY29taW5nRXZlbnRzKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2cobGlzdGVkRXZlbnRzKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMDApO1xuXG4gICAgICBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgICAgaWYgKGdhcGlJbml0ZWQgJiYgZ2lzSW5pdGVkICYmIGF1dGhvcml6ZWQpeyAvL0NoZWNrIGlmIHdlIGhhdmUgZ290dGVuIGEgdG9rZW4sIGlmIHllcywgd2UgY2xhaW0gYSBuZXcgYWNjZXNzX3Rva2VuIGV2ZXJ5IGhvdXJcbiAgICAgICAgICBoYW5kbGVBdXRoQ2xpY2soKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgaGFuZGxlZCBhdXRob3JpemF0aW9uIGF1dG9tYXRpY2FsbHlcIik7XG4gICAgICAgIH1cbiAgICAgIH0sIDM1MDAwMDApO1xuXG5cblxuICAgICAgXG4gICAgICAvL2NyZWF0ZSBuZXcgZXZlbnRzIGluIHRoZSBHb29nbGUgY2FsZW5kYXIgY29vbmVjdGVkXG4gICAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudChleHRlbmRlZFRpbWUpe1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRvZGF5UGx1cyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRvZGF5UGx1cy5zZXRNaW51dGVzKHRvZGF5LmdldE1pbnV0ZXMoKStleHRlbmRlZFRpbWUpOyAvL1PDpnQgc2x1dHRpZHNwdW5rdCB0aWwgYW5naXZldCBmb3Jsw6ZuZ2Vsc2VcbiAgXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICdzdW1tYXJ5JzogJ0FkLWhvYyBtw7hkZScsXG4gICAgICAgICAgJ3N0YXJ0Jzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICAgICdlbmQnOiB7XG4gICAgICAgICAgICAnZGF0ZVRpbWUnOiB0b2RheVBsdXMudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy5pbnNlcnQoe1xuICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuICAgICAgICAgICdyZXNvdXJjZSc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0VXBjb21pbmdFdmVudHMoKTtcbiAgICAgICAgLy9jb21tZW50ZWQgdGhpcyBvdXQsIGFzIGl0IGRpZCBub3RoaW5nIGdvb2QgXG4gICAgICAgIC8vIHJlcXVlc3QuZXhlY3V0ZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyAgIGFwcGVuZCgnRXZlbnQgY3JlYXRlZDogJyArIGV2ZW50Lmh0bWxMaW5rKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICAvL0VuZCBjdXJyZW50IG1lZXRpbmdcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVuZEV2ZW50KHN0YXJ0VGltZSl7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcbiAgXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICdzdW1tYXJ5JzogbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnksXG4gICAgICAgICAgJ3N0YXJ0Jzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogc3RhcnREYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAndGltZVpvbmUnOiAnRXVyb3BlL0NvcGVuaGFnZW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnZW5kJzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy51cGRhdGUoe1xuICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuICAgICAgICAgICdldmVudElkJzogbGlzdGVkRXZlbnRzWzBdLmlkLFxuICAgICAgICAgICdyZXNvdXJjZSc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0VXBjb21pbmdFdmVudHMoKTsgLy9cblxuICAgICAgICAvL2NvbW1lbnRlZCB0aGlzIG91dCwgYXMgaXQgZGlkIG5vdGhpbmcgZ29vZCBcbiAgICAgICAgLy8gcmVxdWVzdC5leGVjdXRlKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vICAgYXBwZW5kKCdFdmVudCBjcmVhdGVkOiAnICsgZXZlbnQuaHRtbExpbmspO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGV4cG9ydCB7Z2FwaUluaXRlZCwgZ2lzSW5pdGVkLCBsaXN0ZWRFdmVudHMsIGF1dGhvcml6ZWQsIGNyZWF0ZUV2ZW50LCBlbmRFdmVudH1cbiAgICAgICAgXG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudCwgZW5kRXZlbnQsIGxpc3RlZEV2ZW50c30gZnJvbSBcIi4vZ2FwaVwiO1xuaW1wb3J0IHsgYW5pbWF0aW9uQWN0aXZlIH0gZnJvbSBcIi4vc3RhdGVDb250cm9sbGVyXCI7XG5cbmNvbnN0IGVuZE1lZXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWVuZCcpO1xuXG5jb25zdCByZXNlcnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1yZXNlcnZlJyk7XG5jb25zdCByZXNlcnZlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtZGlhbG9nJyk7XG5jb25zdCBjbG9zZVJlc2VydmVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZS1jbG9zZScpO1xuY29uc3QgY2lyY2xlQW5pbU91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lubmVyLWNpcmNsZScpO1xuXG5jb25zdCByZXNlcnZlXzEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtMTAnKTtcbmNvbnN0IHJlc2VydmVfMTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZS0xNScpO1xuY29uc3QgcmVzZXJ2ZV8zMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlcnZlLTMwJyk7XG5jb25zdCByZXNlcnZlXzYwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtNjAnKTtcblxuLy9FbmQgbWVldGluZ1xuZW5kTWVldGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IFxuICAgIGVuZEN1cnJlbnRNZWV0aW5nKCk7XG4gICAgZW5kTWVldGluZy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xuXG4gICAgLy9BbmltYXRpb25cbiAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRkb3duLS1lbmQnKTsvL1N0YXJ0IGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNpcmNsZUFuaW1PdXRlci5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gMTEzMDsgLy9TZXQgY2lyY3VtZmVyZW5jZSB0byBjbG9zZWRcbiAgICAgICAgY2lyY2xlQW5pbU91dGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZG93bi0tZW5kJyk7Ly8gcmVzZXQgaXQsIHNvIHdlIGNhbiBhbmltYXRlIGxhdGVyIGFnYWluXG4gICAgICB9LCAxNTAwKTtcbiAgICAgIC8vYW5pbWF0aW9uQWN0aXZlID0gZmFsc2U7IC8vTWFrZSBpdCBwb3NzaWJsZSB0byBzdGFydCBhbmltYXRpb24gb24gbWVldGluZyBzdGFydC4uIEzDhlM6IHVka29tbWVudGVyZXQsIGRhIHbDpnJkaWVuIGVyIHNhdCB0aWwgMCDDpWJlbmJhcnQsIG9nIEpTIGFuc2VyIGRlbm5lIHbDpnJkaSBzb20gdsOmcmVuZGUgZXQgb2JqZWN0IG1lZCBrdW4gZW4gXCJnZXR0ZXJcIlxuICAgICAgXG59KVxuXG4vL29wZW4gZGlhbG9nIG1vZGFsXG5yZXNlcnZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZXNlcnZlRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGlmKGxpc3RlZEV2ZW50cy5sZW5ndGghPTApeyBjaGVja0Rpc2FibGVkUmVzZXJ2ZVRpbWVzKCk7fSAvLyBDaGVjayBob3cgbXVjaCB0aW1lIHRoZXJlIGlzIHRvIG5leHQgbWVldGluZywgYW5kIGRpc2FibGUgb3B0aW9ucyBpZiB0aGUgZXhjZWVkIHRpbWUgdG8gdXBjb21pbmcgbWVldGluZ1xufSlcblxuLy9jbG9zZSBkaWFsb2cgbW9kYWwgd2l0aCBubyBwaWNrXG5jbG9zZVJlc2VydmVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHJlc2VydmVEaWFsb2cuY2xvc2UoKTtcbn0pXG5cbnJlc2VydmVfMTAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNyZWF0ZUV2ZW50KDEwKTtcbiAgICByZXNlcnZlRGlhbG9nLmNsb3NlKCk7XG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xufSlcblxucmVzZXJ2ZV8xNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY3JlYXRlRXZlbnQoMTUpO1xuICAgIHJlc2VydmVEaWFsb2cuY2xvc2UoKTtcbiAgICByZXNlcnZlLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tLWxvYWRpbmdcIik7XG59KVxuXG5yZXNlcnZlXzMwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjcmVhdGVFdmVudCgzMCk7XG4gICAgcmVzZXJ2ZURpYWxvZy5jbG9zZSgpO1xuICAgIHJlc2VydmUuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbn0pXG5cbnJlc2VydmVfNjAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNyZWF0ZUV2ZW50KDYwKTtcbiAgICByZXNlcnZlRGlhbG9nLmNsb3NlKCk7XG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xufSlcblxuLy9DYWxjdWxhdGVzIHRoZSBhbW91bnQgb2YgbWludXRlcyB1bnRpbCBuZXh0IG1lZXRpbmcgaXMgc3RhcnRpbmdcbmZ1bmN0aW9uIHRpbWVUb05leHRNZWV0aW5nKCl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5leHRNZWV0aW5nID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICBcbiAgICByZXR1cm4gKG5leHRNZWV0aW5nLmdldFRpbWUoKS8xMDAwLzYwKSAtICh0b2RheS5nZXRUaW1lKCkvMTAwMC82MCk7XG59XG5cbi8vU2V0cyB0aGUgYWQtaG9jIGJvb2tpbmcgYnV0dG9ucyB0byBlbmFibGVkL2Rpc2FibGVkLCBkZXBlbmRpbmcgb24gaWYgdGhleSB3b3VsZCBvdmVybGFwIHVwY29taW5nIG1lZXRpbmdcbmZ1bmN0aW9uIGNoZWNrRGlzYWJsZWRSZXNlcnZlVGltZXMoKXtcbiAgICBpZih0aW1lVG9OZXh0TWVldGluZygpPDYwKXtcbiAgICAgICAgcmVzZXJ2ZV82MC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtyZXNlcnZlXzYwLmRpc2FibGVkID0gZmFsc2U7fVxuICAgIGlmKHRpbWVUb05leHRNZWV0aW5nKCk8MzApe1xuICAgICAgICByZXNlcnZlXzMwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge3Jlc2VydmVfMzAuZGlzYWJsZWQgPSBmYWxzZTt9XG4gICAgaWYodGltZVRvTmV4dE1lZXRpbmcoKTwxNSl7XG4gICAgICAgIHJlc2VydmVfMTUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7cmVzZXJ2ZV8xNS5kaXNhYmxlZCA9IGZhbHNlO31cbiAgICBpZih0aW1lVG9OZXh0TWVldGluZygpPDEwKXtcbiAgICAgICAgcmVzZXJ2ZV8xMC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtyZXNlcnZlXzEwLmRpc2FibGVkID0gZmFsc2U7fVxufVxuXG5mdW5jdGlvbiBlbmRDdXJyZW50TWVldGluZygpe1xuICAgIGVuZEV2ZW50KGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7XG59XG5cbmV4cG9ydCB7cmVzZXJ2ZSwgZW5kTWVldGluZywgY2lyY2xlQW5pbU91dGVyfSIsImltcG9ydCB7IGdhcGlJbml0ZWQsIGdpc0luaXRlZCwgbGlzdGVkRXZlbnRzLCBhdXRob3JpemVkfSBmcm9tIFwiLi9nYXBpXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVDaXJjbGVDaXJjdW1mZXJlbmNlLCBjYWxjdWxhdGVSZW1haW5pbmdUaW1lfSBmcm9tIFwiLi9jb3VudERvd25cIjtcbmltcG9ydCB7IHJlc2VydmUsZW5kTWVldGluZywgY2lyY2xlQW5pbU91dGVyIH0gZnJvbSBcIi4vbWFuaXB1bGF0ZU1lZXRpbmdzXCI7XG5jb25zdCB1Z2VkYWdlID0gW1wiU8O4bmRhZ1wiLFwiTWFuZGFnXCIsXCJUaXJzZGFnXCIsXCJPbnNkYWdcIixcIlRvcnNkYWdcIixcIkZyZWRhZ1wiLFwiTMO4cmRhZ1wiXTtcbmNvbnN0IHNlY0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjLWNvbnRlbnQnKTtcbmxldCBtZWV0aW5nU3RhdGU7IC8vIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBzdGF0ZSB0aGUgc2NyZWVuIGFyZSBpbiwgYW5kIGZ4IHRvIGRldGVybWluZSBpZiB0aGVyZSBhcmUgbWVldGluZ3Mgd2UgY2FuIGVuZCAvLzAgPSBubyBtZWV0aW5ncywgMSA9IG1lZXRpbmdzIGluIHRoZSBjYWxlbmRhciwgMiwgbWVldGluZyBpcyBhY3RpdmVcbmxldCBhbmltYXRpb25BY3RpdmUgPSBmYWxzZTtcbmltcG9ydCBiZ0ltZ0ZyZWUgZnJvbSAnLi9pbWcvQmctaW1nLnBuZyc7XG5pbXBvcnQgYmdJbWdPY2N1cGllZCBmcm9tICcuL2ltZy9CZy1pbWctb2NjdXBpZWQucG5nJztcblxuLy9EbyB3ZSBoYXZlIGFueSBtZWV0aW5ncyBpbiB0aGUgY2FsZW5kYXI/XG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAoZ2FwaUluaXRlZCAmJiBnaXNJbml0ZWQgJiYgYXV0aG9yaXplZCl7XG4gICAgICAgIGN1cnJlbnRUaW1lKCk7IC8vIEFsd2F5cyBjYWxsIGFuZCBkaXNwbGF5IHRoZSBjdXJyZW50IHRpbWUgb2YgZGF5XG5cblxuICAgICAgICAvL0NoZWNraW5nIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4ganVzdCBvbmUgZXZlbnQsIGFuZCBzZXRzIGJhY2tncm91bmQgb2YgdXBjb21pbmcgbWVldGluZyBiYWNrZ3JvdW5kIHRvIHRyYW5zcGFyZW50IG9nIHNlbWkgdHJhbnNwYXJlbnRcbiAgICAgICAgaWYgKGxpc3RlZEV2ZW50cy5sZW5ndGg8Mil7XG4gICAgICAgICAgICBzZWNDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfWVsc2Uge3NlY0NvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zZWMtY29sKVwiO31cblxuXG5cbiAgICAgICAgLy9TZXF1ZW5jZSB0byBjaGVjayBmb3IgI29mIG1lZXRpbmdzIGFuZCBkcmF3IHRoZSBVSSBhY2NvcmRpbmdseVxuICAgICAgICBpZiAoIWxpc3RlZEV2ZW50cy5sZW5ndGg9PTApeyAvL0NoZWNraW5nIGlmIHRoZXJlIGFyZSBhbnkgbWVldGluZ3MgaW4gdGhlIGNhbGVuZGFyXG4gICAgICAgICAgICAvLyBjb25zdCBuZXh0TWVldGluZyA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7ICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChjaGVja0lmQWN0aXZlTWVldGluZyhsaXN0ZWRFdmVudHNbMF0uc3RhcnQuZGF0ZVRpbWUsbGlzdGVkRXZlbnRzWzBdLmVuZC5kYXRlVGltZSkpeyAvL1wiY2hlY2tpbmcgaWYgaXQgYW55IG9mIHRoZSBtZWV0aW5ncyBpcyBhY3RpdmUhXCJcbiAgICAgICAgICAgICAgICBhY3RpdmVNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWRkaXRpb25hbE1lZXRpbmdzKCk7XG4gICAgICAgICAgICAgICAgbWVldGluZ1N0YXRlID0gMjtcblxuICAgICAgICAgICAgICAgIC8vQW5pbWF0ZSBjaXJjbGUgb24gbWVldGluZyBzdGFydFxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25BY3RpdmUgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRkb3duLS1zdGFydCcpOy8vU3RhcnQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRkb3duLS1zdGFydCcpOy8vIHJlc2V0IGl0LCBzbyB3ZSBjYW4gYW5pbWF0ZSBsYXRlciBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZSB7IC8vKFwiV2UgaGF2ZSBtZWV0aW5ncyBpbiB0aGUgY2FsZW5kYXIsIGJ1dCBub25lIGlzIGFjdGl2ZSFcIik7XG4gICAgICAgICAgICAgICAgdXBjb21pbmdNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWRkaXRpb25hbE1lZXRpbmdzKCk7XG4gICAgICAgICAgICAgICAgbWVldGluZ1N0YXRlID0gMTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25BY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsvL1dlIGhhdmUgbm8gbWVlZXRpbmdzXG4gICAgICAgICAgICBtZWV0aW5nU3RhdGUgPSAwO1xuICAgICAgICAgICAgZW1wdHlNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBcbiAgfSwgNTAwMCk7XG5cblxuXG5cblxuZnVuY3Rpb24gY2hlY2tJZkFjdGl2ZU1lZXRpbmcoc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICAgIFxuICAgIGlmIChzdGFydCA8PSB0b2RheSAmJiBlbmQgPj0gdG9kYXkpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwY29taW5nTWVldGluZ1N0YXRlKCl7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICBjb25zdCBzdGFydFRpbWVNaW5zQ29udiA9IChzdGFydFRpbWUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgOiAnJykgKyBzdGFydFRpbWUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShsaXN0ZWRFdmVudHNbMF0uZW5kLmRhdGVUaW1lKTtcbiAgICBjb25zdCBlbmRUaW1lTWluc0NvbnYgPSAoZW5kVGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGVuZFRpbWUuZ2V0TWludXRlcygpO1xuXG4gICAgLy9TaG93XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnk7IC8vTWVldCB0aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC1vcmdcIikudGV4dENvbnRlbnQgPSBsaXN0ZWRFdmVudHNbMF0uY3JlYXRvci5lbWFpbC5zbGljZSgwLGxpc3RlZEV2ZW50c1swXS5jcmVhdG9yLmVtYWlsLnNlYXJjaCgnQCcpKTsvL09yZ2FuaXplciB3aXRob3V0IEBnbWFpbC5jb21cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZXQtdGltZVwiKS50ZXh0Q29udGVudCA9IGAke2dldFdlZWtEYXlOYW1lKHN0YXJ0VGltZSl9LCAke3N0YXJ0VGltZS5nZXRIb3VycygpfToke3N0YXJ0VGltZU1pbnNDb252fSAtICR7ZW5kVGltZS5nZXRIb3VycygpfToke2VuZFRpbWVNaW5zQ29udn1gOyAvL01lZXQgdGltZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXJlc2VydmVcIikuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW1nXCIpLnNyYyA9IGJnSW1nRnJlZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1pY29uLW1lZXQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWljb24tdGltZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvL0hpZGVcbiAgICByZXNlcnZlLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG4gICAgZW5kTWVldGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm8tZXZlbnRzXCIpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRkb3duLWNvbnRhaW5lclwiKS5zdHlsZS52aXNpYmlsaXR5ID1cImhpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWVuZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgXG4gICAgXG59XG5cbi8vSWYgdGhlcmUgYXJlIG5vIG1lZXRpbmdzIGZldGNoZWQgdGhvdWdoIHRoZSBBUEksIGR1ZSB0byBubyB1cGNvbWluZyBtZWV0aW5nc1xuZnVuY3Rpb24gZW1wdHlNZWV0aW5nU3RhdGUoKXtcblxuICAgIC8vU2hvd1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm8tZXZlbnRzXCIpLnRleHRDb250ZW50ID1cIkluZ2VuIEJlZ2l2ZW5oZWRlclwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXJlc2VydmVcIikuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRkb3duLWNvbnRhaW5lclwiKS5zdHlsZS52aXNpYmlsaXR5ID1cImhpZGRlblwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW1nXCIpLnNyYyA9IGJnSW1nRnJlZTtcblxuICAgIC8vSGlkZVxuICAgIHJlc2VydmUuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbiAgICAgICAgICBlbmRNZWV0aW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpdGxlXCIpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC10aW1lXCIpLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC1vcmdcIikudGV4dENvbnRlbnQgPVwiXCI7IC8vT3JnYW5pemVyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tZW5kXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1pY29uLW1lZXQnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWljb24tdGltZScpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgXG59XG5cbmZ1bmN0aW9uIGFjdGl2ZU1lZXRpbmdTdGF0ZSgpe1xuICAgIGNvbnN0IHN0YXJ0VGltZSA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7XG4gICAgY29uc3Qgc3RhcnRUaW1lTWluc0NvbnYgPSAoc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnIDogJycpICsgc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCBlbmRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLmVuZC5kYXRlVGltZSk7XG4gICAgY29uc3QgZW5kVGltZU1pbnNDb252ID0gKGVuZFRpbWUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgOiAnJykgKyBlbmRUaW1lLmdldE1pbnV0ZXMoKTtcblxuXG4gICAgLy9TaG93XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50aW1lLWNvbnRlbnRcIikuc3R5bGUuZGlzcGxheSA9XCJncmlkXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnk7IC8vTWVldCB0aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC1vcmdcIikudGV4dENvbnRlbnQgPSBsaXN0ZWRFdmVudHNbMF0uY3JlYXRvci5lbWFpbC5zbGljZSgwLGxpc3RlZEV2ZW50c1swXS5jcmVhdG9yLmVtYWlsLnNlYXJjaCgnQCcpKTsgLy9Pcmdhbml6ZXIgd2l0aG91dCBAZ21haWwuY29tXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpbWVcIikudGV4dENvbnRlbnQgPSBgJHtnZXRXZWVrRGF5TmFtZShzdGFydFRpbWUpfSwgJHtzdGFydFRpbWUuZ2V0SG91cnMoKX06JHtzdGFydFRpbWVNaW5zQ29udn0gLSAke2VuZFRpbWUuZ2V0SG91cnMoKX06JHtlbmRUaW1lTWluc0NvbnZ9YDsgLy9NZWV0IHRpbWVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI251bWJlclwiKS50ZXh0Q29udGVudCA9IGAke01hdGguZmxvb3IoY2FsY3VsYXRlUmVtYWluaW5nVGltZShlbmRUaW1lKSl9IG1pbmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGRvd24tY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPVwidmlzaWJsZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbm5lci1jaXJjbGUnKS5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gY2FsY3VsYXRlQ2lyY2xlQ2lyY3VtZmVyZW5jZShzdGFydFRpbWUsZW5kVGltZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tZW5kXCIpLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1pbWdcIikuc3JjID0gYmdJbWdPY2N1cGllZDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmxleC1pY29uLW1lZXQnKS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mbGV4LWljb24tdGltZScpLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAvL0hpZGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1yZXNlcnZlXCIpLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm8tZXZlbnRzXCIpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIHJlc2VydmUuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbiAgICBlbmRNZWV0aW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRpdGlvbmFsTWVldGluZ3MoKXtcbiAgICBjb25zdCB1cGNDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYy1jb250ZW50Jyk7XG4gICAgdXBjQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdGVkRXZlbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9TZXQgdGltZSBjb3JyZWN0bHlcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzW2ldLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lTWluc0NvbnYgPSAoc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnIDogJycpICsgc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1tpXS5lbmQuZGF0ZVRpbWUpO1xuICAgICAgICBjb25zdCBlbmRUaW1lTWluc0NvbnYgPSAoZW5kVGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGVuZFRpbWUuZ2V0TWludXRlcygpO1xuXG4gICAgICAgIC8vRGVmaW5lIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1jYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzW2ldLnN1bW1hcnk7XG5cbiAgICAgICAgY29uc3Qgb3JnYW5pemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBvcmdhbml6ZXIuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLW9yZ1wiKTtcbiAgICAgICAgb3JnYW5pemVyLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzW2ldLmNyZWF0b3IuZW1haWw7XG5cbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGltZVwiKTtcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke2dldFdlZWtEYXlOYW1lKHN0YXJ0VGltZSl9LCAke3N0YXJ0VGltZS5nZXRIb3VycygpfToke3N0YXJ0VGltZU1pbnNDb252fSAtICR7ZW5kVGltZS5nZXRIb3VycygpfToke2VuZFRpbWVNaW5zQ29udn1gOyBcbiAgICAgICAgXG4gICAgICAgIC8vQXBwZW5kIGVsZW1lbnRzXG4gICAgICAgIHVwY0NvbnRhaW5lci5hcHBlbmQoY2FyZCk7XG4gICAgICAgIGNhcmQuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmQob3JnYW5pemVyKTtcbiAgICAgICAgY2FyZC5hcHBlbmQodGltZSk7XG4gICAgfVxufVxuXG5cbi8vQ2FsY3VsYXRlcyB3aGljaCBkYXkgb2YgdGhlIHdlZWsgaXQgaXMuIFdpaWwgZGlzcGxheSBcIkkgZGFnIC8gSSBtb3JnZW5cIiwgaWYgdGhlIG1lZXRpbmcgaXMgd2l0aGluIHRoYXQgdGltZWZyYW1lXG5mdW5jdGlvbiBnZXRXZWVrRGF5TmFtZShtZWV0aW5nRGF0ZSl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKHRvZGF5LmdldFVUQ0RheSgpID09IG1lZXRpbmdEYXRlLmdldFVUQ0RheSgpKXsgLy9TYW1tZSB1Z2VkYWdcbiAgICAgICAgcmV0dXJuIFwiSSBkYWdcIjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRvZGF5LmdldFVUQ0RheSgpICE9PSBtZWV0aW5nRGF0ZS5nZXRVVENEYXkoKSl7Ly9Gb3Jza2VsbGlnZSB1Z2VkYWdlXG4gICAgICAgIFxuICAgICAgICBpZih0b2RheS5nZXRVVENEYXkoKSA9PSA2KXsvL0h2aXMgZGV0IGVyIGzDuHJkYWcsIHRqZWtrZXIgdmkgbGlnZSBtYW51ZWx0IG9tIG7DpnN0ZSBkYWcgZXIgc8O4bmRhZyAoMCksIG9nIGFuZ2l2ZXIgZGVydmVkIFwiSSBtb3JnZW5cIlxuICAgICAgICAgICAgaWYgKG1lZXRpbmdEYXRlID09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkkgbW9yZ2VuXCI7XG4gICAgICAgICAgICB9IGVsc2UgeyByZXR1cm4gdWdlZGFnZVttZWV0aW5nRGF0ZS5nZXRVVENEYXkoKV19OyAvL1JldHVuZXIgZGF0bywgaHZpcyBkZXQgZXIgbMOmbmdlcmUgdGlkIHRpbCBtw7hkZXQgZW5kIGRhZ2VuIGVmdGVyXG5cbiAgICAgICAgfSBlbHNlIGlmIChtZWV0aW5nRGF0ZS5nZXRVVENEYXkoKS10b2RheS5nZXRVVENEYXkoKSA9PSAxKXsgLy9IdmlzIG3DuGRldCBlciBpIG1vcmdlblxuICAgICAgICAgICAgcmV0dXJuIFwiSSBtb3JnZW5cIjtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIHVnZWRhZ2VbbWVldGluZ0RhdGUuZ2V0VVRDRGF5KCldfTsgLy9SZXR1bmVyIGRhdG8sIGh2aXMgZGV0IGVyIGzDpm5nZXJlIHRpZCB0aWwgbcO4ZGV0IGVuZCBkYWdlbiBlZnRlclxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjdXJyZW50VGltZSgpe1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50VGltZUNvbnZlcnRlZCA9IChjdXJyZW50VGltZS5nZXRVVENNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGN1cnJlbnRUaW1lLmdldFVUQ01pbnV0ZXMoKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGltZScpLnRleHRDb250ZW50ID0gYCR7dG9kYXkuZ2V0SG91cnMoKX06JHtjdXJyZW50VGltZUNvbnZlcnRlZH1gXG4gICAgXG59XG5cbmV4cG9ydCB7YW5pbWF0aW9uQWN0aXZlfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvdW50ZG93bi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAgXG4gICAgaGVpZ2h0OjQxNXB4O1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5zdmd7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuI251bWJlcntcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogNWVtO1xufVxuXG4jb3V0ZXItY2lyY2xleyAvKiBiYWNrZ3JvdW5kIHRvIHRpbWVyKi9cbiAgICBmaWxsOm5vbmU7XG4gICAgc3Ryb2tlOiAjRDk4MjgyO1xuICAgIHN0cm9rZS13aWR0aDogNDBweDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIHI6MTgwOyBcbiAgICBjeDo1MCU7XG4gICAgY3k6NTAlO1xufVxuI2lubmVyLWNpcmNsZXsgLyogdGltZXIgaW5kaWNhdG9yKi9cbiAgICBmaWxsOm5vbmU7XG4gICAgc3Ryb2tlOiAjZmZmO1xuICAgIHN0cm9rZS13aWR0aDogNDBweDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIHI6MTgwOyBcbiAgICBjeDo1MCU7XG4gICAgY3k6NTAlOyBcbn1cblxuXG4uY291bnRkb3duLS1zdGFydHtcbiAgICBhbmltYXRpb246IGFuaW0tb3BlbiAxLjVzIGVhc2Utb3V0OyBcbn1cbi5jb3VudGRvd24tLWVuZHtcbiAgICBhbmltYXRpb246IGFuaW0tY2xvc2UgMS41cyBlYXNlLW91dDsgXG59XG5cbkBrZXlmcmFtZXMgYW5pbS1jbG9zZSB7XG4gICBcbiAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDExMzA7XG4gICAgfVxufVxuQGtleWZyYW1lcyBhbmltLW9wZW4ge1xuICAgXG4gICAgMCV7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTMwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxufVxuXG5cbiN0aW1lcntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuXG4jaW5kaWNhdG9yLWFuaW17XG4gICAgZmlsbDogbm9uZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBhbmltYXRpb246IGFuaW0gMC4zcyBlYXNlLW91dDtcbiAgICBzdHJva2U6IHdoaXRlO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMjkwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMjkwO1xuICAgIGFuaW1hdGlvbjogYW5pbSAyLjVzIGVhc2UtaW4gaW5maW5pdGUgcmV2ZXJzZTtcbiAgICAvKiBhbmltYXRpb246IGFuaW0tY2xvc2UgMXMgZWFzZS1vdXQgcmV2ZXJzZTsgKi9cbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgcjoyMDU7IFxuICAgIGN4OjUwJTtcbiAgICBjeTo1MCU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2MDA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQwMGRlZyk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNzIwZGVnKTtcbiAgICB9XG4gICAgXG59XG5cblxuXG5cbi8qIC5zdmctb24tZGVsZXRle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFuaW1hdGlvbjogYW5pbWEgMXMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hIHtcblxuICAgIDEwMCV7XG4gICAgICAgIHNjYWxlOiAxNTAlO1xuICAgIH1cbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9DRFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQSxlQUFlLHVCQUF1QjtJQUNsQyxTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtBQUNWO0FBQ0EsZUFBZSxtQkFBbUI7SUFDOUIsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixLQUFLO0lBQ0wsTUFBTTtJQUNOLE1BQU07QUFDVjs7O0FBR0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7QUFDSjtBQUNBOztJQUVJO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN4QjtBQUNKOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7Ozs7O0FBS0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLCtDQUErQztJQUMvQyx3QkFBd0I7SUFDeEIsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0FBQ1Y7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCOztBQUVKOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7R0FlR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47ICBcXG4gICAgaGVpZ2h0OjQxNXB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuc3Zne1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI251bWJlcntcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4jb3V0ZXItY2lyY2xleyAvKiBiYWNrZ3JvdW5kIHRvIHRpbWVyKi9cXG4gICAgZmlsbDpub25lO1xcbiAgICBzdHJva2U6ICNEOTgyODI7XFxuICAgIHN0cm9rZS13aWR0aDogNDBweDtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIHI6MTgwOyBcXG4gICAgY3g6NTAlO1xcbiAgICBjeTo1MCU7XFxufVxcbiNpbm5lci1jaXJjbGV7IC8qIHRpbWVyIGluZGljYXRvciovXFxuICAgIGZpbGw6bm9uZTtcXG4gICAgc3Ryb2tlOiAjZmZmO1xcbiAgICBzdHJva2Utd2lkdGg6IDQwcHg7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICByOjE4MDsgXFxuICAgIGN4OjUwJTtcXG4gICAgY3k6NTAlOyBcXG59XFxuXFxuXFxuLmNvdW50ZG93bi0tc3RhcnR7XFxuICAgIGFuaW1hdGlvbjogYW5pbS1vcGVuIDEuNXMgZWFzZS1vdXQ7IFxcbn1cXG4uY291bnRkb3duLS1lbmR7XFxuICAgIGFuaW1hdGlvbjogYW5pbS1jbG9zZSAxLjVzIGVhc2Utb3V0OyBcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltLWNsb3NlIHtcXG4gICBcXG4gICAgMTAwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDExMzA7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBhbmltLW9wZW4ge1xcbiAgIFxcbiAgICAwJXtcXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTEzMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcbn1cXG5cXG5cXG4jdGltZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4jaW5kaWNhdG9yLWFuaW17XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYW5pbWF0aW9uOiBhbmltIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMjkwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTI5MDtcXG4gICAgYW5pbWF0aW9uOiBhbmltIDIuNXMgZWFzZS1pbiBpbmZpbml0ZSByZXZlcnNlO1xcbiAgICAvKiBhbmltYXRpb246IGFuaW0tY2xvc2UgMXMgZWFzZS1vdXQgcmV2ZXJzZTsgKi9cXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICByOjIwNTsgXFxuICAgIGN4OjUwJTtcXG4gICAgY3k6NTAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW0ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICA0MCUge1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2MDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MDBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDcyMGRlZyk7XFxuICAgIH1cXG4gICAgXFxufVxcblxcblxcblxcblxcbi8qIC5zdmctb24tZGVsZXRle1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uOiBhbmltYSAxcyBlYXNlLW91dDtcXG59XFxuQGtleWZyYW1lcyBhbmltYSB7XFxuXFxuICAgIDEwMCV7XFxuICAgICAgICBzY2FsZTogMTUwJTtcXG4gICAgfVxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC5oaWRleyAgXG4gICAgYW5pbWF0aW9uOiBkaWEtY2xvc2UgMXMgbGluZWFyOyAgICAgXG59ICovXG5cbiNyZXNlcnZlLWRpYWxvZzpub3QoW29wZW5dKXsgIFxuICAgIGFuaW1hdGlvbjogZGlhLWNsb3NlIDFzIGxpbmVhcjsgICBcbn1cblxuI3Jlc2VydmUtZGlhbG9nW29wZW5de1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAxZjNmO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBhbmltYXRpb246IGRpYS1vcGVuIDAuMXMgbGluZWFyOyAgIFxufVxuXG4jcmVzZXJ2ZS1idG5ncm91cHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgXG59XG4jcmVzZXJ2ZS1kaWFsb2c6OmJhY2tkcm9we1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xufVxuXG4jcmVzZXJ2ZS1oZWFkZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuI3Jlc2VydmUtY2xvc2V7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG5cblxuLyogU3Bpbm5lciBlbGVtZW50IG9uIGJ1dHRvbiAqL1xuLmJ1dHRvbi0tbG9hZGluZyAuYnV0dG9uX190ZXh0IHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmJ1dHRvbi0tbG9hZGluZzo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogYnV0dG9uLWxvYWRpbmctc3Bpbm5lciAxcyBlYXNlIGluZmluaXRlO1xuICB9XG4gIC5idXR0b25fX3RleHQge1xuICAgIFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xufVxuICBAa2V5ZnJhbWVzIGJ1dHRvbi1sb2FkaW5nLXNwaW5uZXIge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMHR1cm4pO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xuICAgIH1cbiAgfVxuXG4vKiBTcGlubmVyIGJ1dHRvbiBlbmQqL1xuXG5cblxuXG5cbkBrZXlmcmFtZXMgZGlhLW9wZW57XG4gICAgMCV7XG4gICAgICAgIFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDk1JSk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAtMTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsMCk7XG4gICAgfVxuICAgIDEwMCV7XG5cbiAgICB9XG59XG5Aa2V5ZnJhbWVzIGRpYS1jbG9zZXtcbiAgICAwJXtcbiAgICAgICAgXG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgfVxufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZGlhbG9nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7R0FFRzs7QUFFSDtJQUNJLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsWUFBWTs7QUFFaEI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7O0FBR0EsOEJBQThCO0FBQzlCO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtEQUFrRDtFQUNwRDtFQUNBOztJQUVFLG9CQUFvQjtBQUN4QjtFQUNFO0lBQ0U7TUFDRSx3QkFBd0I7SUFDMUI7O0lBRUE7TUFDRSx3QkFBd0I7SUFDMUI7RUFDRjs7QUFFRixzQkFBc0I7Ozs7OztBQU10QjtJQUNJOztRQUVJLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsU0FBUztRQUNULHVDQUF1QztJQUMzQztJQUNBOztJQUVBO0FBQ0o7QUFDQTtJQUNJOztJQUVBO0lBQ0E7UUFDSSxRQUFRO1FBQ1IsU0FBUztJQUNiO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogLmhpZGV7ICBcXG4gICAgYW5pbWF0aW9uOiBkaWEtY2xvc2UgMXMgbGluZWFyOyAgICAgXFxufSAqL1xcblxcbiNyZXNlcnZlLWRpYWxvZzpub3QoW29wZW5dKXsgIFxcbiAgICBhbmltYXRpb246IGRpYS1jbG9zZSAxcyBsaW5lYXI7ICAgXFxufVxcblxcbiNyZXNlcnZlLWRpYWxvZ1tvcGVuXXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDFmM2Y7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIGhlaWdodDogNTAlO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGFuaW1hdGlvbjogZGlhLW9wZW4gMC4xcyBsaW5lYXI7ICAgXFxufVxcblxcbiNyZXNlcnZlLWJ0bmdyb3Vwe1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgXFxufVxcbiNyZXNlcnZlLWRpYWxvZzo6YmFja2Ryb3B7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4jcmVzZXJ2ZS1oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3Jlc2VydmUtY2xvc2V7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuXFxuLyogU3Bpbm5lciBlbGVtZW50IG9uIGJ1dHRvbiAqL1xcbi5idXR0b24tLWxvYWRpbmcgLmJ1dHRvbl9fdGV4dCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG4gIFxcbiAgLmJ1dHRvbi0tbG9hZGluZzo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci10b3AtY29sb3I6ICNmZmZmZmY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYW5pbWF0aW9uOiBidXR0b24tbG9hZGluZy1zcGlubmVyIDFzIGVhc2UgaW5maW5pdGU7XFxuICB9XFxuICAuYnV0dG9uX190ZXh0IHtcXG4gICAgXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xcbn1cXG4gIEBrZXlmcmFtZXMgYnV0dG9uLWxvYWRpbmctc3Bpbm5lciB7XFxuICAgIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKTtcXG4gICAgfVxcbiAgXFxuICAgIHRvIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybik7XFxuICAgIH1cXG4gIH1cXG5cXG4vKiBTcGlubmVyIGJ1dHRvbiBlbmQqL1xcblxcblxcblxcblxcblxcbkBrZXlmcmFtZXMgZGlhLW9wZW57XFxuICAgIDAle1xcbiAgICAgICAgXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDk1JSk7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB0b3A6IC0xMCU7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwMCwgMTAwLCAxMDAsMCk7XFxuICAgIH1cXG4gICAgMTAwJXtcXG5cXG4gICAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGRpYS1jbG9zZXtcXG4gICAgMCV7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAxMDAle1xcbiAgICAgICAgd2lkdGg6IDA7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLS1wcmktY29sOiAjMjUyNDI0OyAvKiMyNTI0MjQ7Ki9cbiAgICAtLXNlYy1jb2w6IHJnYigxOSwgMzUsIDQ5LCAwLjMpOyAvKnJnYigxOSwgMzUsIDQ5KSovXG4gICAgLS1jYXJkLWNvbDogcmdiKDI0LCA0MywgNjApO1xuICAgIC0tYnRuLXByaW06IHJnYig0OSwgNDksIDE0Mik7XG4gICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xufVxuYm9keXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwdmg7IFxufVxuI2JnLWltZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogLTE7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBkaXZ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59ICovXG4uY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpLWNvbCk7ICovXG4gICAgZmxleDoxO1xufVxuLm1haW4tY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDUwcHggNTBweCAwcHggNTBweDtcbiAgICBnYXA6IDMwcHg7XG59XG5cbi50aW1lLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4OiAxO1xuICAgIFxufVxuLnRpdGxlLXRpbWUtY29udGFpbmVye1xuICAgIGZsZXgtc2hyaW5rOiAwO1xufVxuLnRpdGxlLXRpbWUtY29udGFpbmVyPmRpdntcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBtYXJnaW46IDIwcHggMDtcbn1cblxuXG5cblxuXG4uaGVhZGVyLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5cblxuI25vLWV2ZW50c3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMzAlO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuI2Nvbm5lY3QtR0F7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLyogU2Vjb25kYXJ5IGNvbnRlbnQgLyB1cGNvbW1pbmcgbWVlaXRuZ3MgY3NzKi9cbi5zZWMtY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWNvbCk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cblxuLnNlYy1jb250ZW50IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbCk7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7IC8qdGplayB2w6ZyZGkqL1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG5cbi5zZWMtY29udGVudCBoMXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDIuMmVtO1xufVxuLnNlYy1jb250ZW50IGgye1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cblxuXG4jYnRuLWVuZCwgI2J0bi1yZXNlcnZle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjdXJyZW50LXRpbWV7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0byAwO1xufVxuXG5cbi5mbGV4LWljb24tbWVldCwgLmZsZXgtaWNvbi10aW1le1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbn1cbi5mbGV4LWljb24tbWVldCBpb24taWNvbiwgLmZsZXgtaWNvbi10aW1lIGlvbi1pY29ue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cblxuXG5cblxuXG4vKkdFTkVSQUwgdXRpbGl0aXRlcyovXG5cbmgxLCBoMiwgaDN7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuaDF7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuaDJ7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbmgze1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuYnV0dG9ue1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4ucHJpbWFyeS1idG57XG4gICAgcG9zaXRpb246cmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1wcmltKTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnByaW1hcnktYnRuOmFjdGl2ZXtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDk1JSk7XG4gICAgY29sb3I6IHJnYigxODcsIDE4NSwgMTg1KTtcbiAgICBcbn1cblxuLnNlY29uZGFyeS1idG57XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDE1cHggMjVweDtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnNlY29uZGFyeS1idG46YWN0aXZle1xuICAgIHRyYW5zZm9ybTogc2NhbGUoOTUlKTtcbiAgICBjb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODcsIDE4NSwgMTg1KTtcbiAgICBtYXJnaW46IDFweDtcbn1cbi5zZWNvbmRhcnktYnRuOmRpc2FibGVke1xuICAgIGNvbG9yOiByZ2IoOTgsIDk4LCA5OCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xufVxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUUsV0FBVztJQUMvQiwrQkFBK0IsRUFBRSxrQkFBa0I7SUFDbkQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztHQUVHO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxNQUFNO0FBQ1Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixPQUFPOztBQUVYO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsY0FBYztBQUNsQjs7Ozs7O0FBTUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtBQUN2Qjs7Ozs7QUFLQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsWUFBWTtJQUNaLGFBQWE7QUFDakI7O0FBRUEsOENBQThDO0FBQzlDO0lBQ0ksYUFBYTtJQUNiLE9BQU87SUFDUCw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGlCQUFpQixFQUFFLGFBQWE7SUFDaEMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7Ozs7QUFJQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7OztBQUlBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7Ozs7OztBQU9BLHFCQUFxQjs7QUFFckI7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5Qjs7QUFFN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLDZCQUE2QjtJQUM3QixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUNBQWlDO0FBQ3JDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLS1wcmktY29sOiAjMjUyNDI0OyAvKiMyNTI0MjQ7Ki9cXG4gICAgLS1zZWMtY29sOiByZ2IoMTksIDM1LCA0OSwgMC4zKTsgLypyZ2IoMTksIDM1LCA0OSkqL1xcbiAgICAtLWNhcmQtY29sOiByZ2IoMjQsIDQzLCA2MCk7XFxuICAgIC0tYnRuLXByaW06IHJnYig0OSwgNDksIDE0Mik7XFxuICAgIGZvbnQtZmFtaWx5OiBcXFwiTGF0b1xcXCIsIHNhbnMtc2VyaWY7XFxufVxcbmJvZHl7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiAxMDB2aDsgXFxufVxcbiNiZy1pbWd7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4vKiBkaXZ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn0gKi9cXG4uY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpLWNvbCk7ICovXFxuICAgIGZsZXg6MTtcXG59XFxuLm1haW4tY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggMHB4IDUwcHg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnRpbWUtY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4OiAxO1xcbiAgICBcXG59XFxuLnRpdGxlLXRpbWUtY29udGFpbmVye1xcbiAgICBmbGV4LXNocmluazogMDtcXG59XFxuLnRpdGxlLXRpbWUtY29udGFpbmVyPmRpdntcXG4gICAgZmxleC1zaHJpbms6IDA7XFxuICAgIG1hcmdpbjogMjBweCAwO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uaGVhZGVyLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuXFxuXFxuXFxuI25vLWV2ZW50c3tcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogMzAlO1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuI2Nvbm5lY3QtR0F7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDQwJTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG4vKiBTZWNvbmRhcnkgY29udGVudCAvIHVwY29tbWluZyBtZWVpdG5ncyBjc3MqL1xcbi5zZWMtY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlYy1jb2wpO1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuXFxuXFxuLnNlYy1jb250ZW50IGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAycHg7XFxuICAgIG1pbi13aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtY29sKTtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7IC8qdGplayB2w6ZyZGkqL1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuXFxuXFxuLnNlYy1jb250ZW50IGgxe1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gICAgZm9udC1zaXplOiAyLjJlbTtcXG59XFxuLnNlYy1jb250ZW50IGgye1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbn1cXG5cXG5cXG5cXG4jYnRuLWVuZCwgI2J0bi1yZXNlcnZle1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jY3VycmVudC10aW1le1xcbiAgICBmb250LXNpemU6IDVlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW46IGF1dG8gMDtcXG59XFxuXFxuXFxuLmZsZXgtaWNvbi1tZWV0LCAuZmxleC1pY29uLXRpbWV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4uZmxleC1pY29uLW1lZXQgaW9uLWljb24sIC5mbGV4LWljb24tdGltZSBpb24taWNvbntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcblxcblxcblxcblxcblxcbi8qR0VORVJBTCB1dGlsaXRpdGVzKi9cXG5cXG5oMSwgaDIsIGgze1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmgxe1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgY29sb3I6IHJnYigyMTIsIDIwOSwgMjA5KTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuaDJ7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG5oM3tcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcbmJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5cXG4ucHJpbWFyeS1idG57XFxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ0bi1wcmltKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ucHJpbWFyeS1idG46YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDk1JSk7XFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODUsIDE4NSk7XFxuICAgIFxcbn1cXG5cXG4uc2Vjb25kYXJ5LWJ0bntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLnNlY29uZGFyeS1idG46YWN0aXZle1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDk1JSk7XFxuICAgIGNvbG9yOiByZ2IoMTg3LCAxODUsIDE4NSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxODcsIDE4NSwgMTg1KTtcXG4gICAgbWFyZ2luOiAxcHg7XFxufVxcbi5zZWNvbmRhcnktYnRuOmRpc2FibGVke1xcbiAgICBjb2xvcjogcmdiKDk4LCA5OCwgOTgpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XFxufVxcblxcblxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NEU3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vQ0RTdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZGlhbG9nLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICogYXMgY3NzIGZyb20gXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgY3NzMiBmcm9tIFwiLi9DRFN0eWxlLmNzc1wiO1xuaW1wb3J0ICogYXMgY3NzMyBmcm9tIFwiLi9kaWFsb2cuY3NzXCJcbmltcG9ydCAnLi9zdGF0ZUNvbnRyb2xsZXInO1xuaW1wb3J0ICcuL2NvdW50RG93bic7XG5pbXBvcnQgJy4vbWFuaXB1bGF0ZU1lZXRpbmdzJztcbmltcG9ydCAnLi9nYXBpJztcbmltcG9ydCBiZ0ltZ0ZyZWUgZnJvbSAnLi9pbWcvQmctaW1nLnBuZyc7XG5pbXBvcnQgYmdJbWdPY2N1cGllZCBmcm9tICcuL2ltZy9CZy1pbWctb2NjdXBpZWQucG5nJztcblxuXG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiY2FsY3VsYXRlQ2lyY2xlQ2lyY3VtZmVyZW5jZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJ0b2RheSIsIkRhdGUiLCJnZXRUaW1lIiwic3RhcnRUaW1lSW5NaWxsaXMiLCJlbmRUaW1lSW5NaWxsaXMiLCJ0b3RhbE1lZXRpbmdUaW1lIiwiZWxhYnNlZE1lZXRpbmdUaW1lIiwicGVyY2VudE1lZXRpbmdFbGFic2VkIiwiY2FsY3VsYXRlUmVtYWluaW5nVGltZSIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJlIiwidCIsInIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJuIiwiaGFzT3duUHJvcGVydHkiLCJvIiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImkiLCJTeW1ib2wiLCJhIiwiaXRlcmF0b3IiLCJjIiwiYXN5bmNJdGVyYXRvciIsInUiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIndyYXAiLCJHZW5lcmF0b3IiLCJjcmVhdGUiLCJDb250ZXh0IiwibWFrZUludm9rZU1ldGhvZCIsInRyeUNhdGNoIiwidHlwZSIsImFyZyIsImNhbGwiLCJoIiwibCIsImYiLCJzIiwieSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJwIiwiZCIsImdldFByb3RvdHlwZU9mIiwidiIsInZhbHVlcyIsImciLCJkZWZpbmVJdGVyYXRvck1ldGhvZHMiLCJmb3JFYWNoIiwiX2ludm9rZSIsIkFzeW5jSXRlcmF0b3IiLCJpbnZva2UiLCJfdHlwZW9mIiwicmVzb2x2ZSIsIl9fYXdhaXQiLCJ0aGVuIiwiY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmciLCJFcnJvciIsImRvbmUiLCJtZXRob2QiLCJkZWxlZ2F0ZSIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsIlR5cGVFcnJvciIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXNOYU4iLCJsZW5ndGgiLCJkaXNwbGF5TmFtZSIsImlzR2VuZXJhdG9yRnVuY3Rpb24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsImtleXMiLCJyZXZlcnNlIiwicG9wIiwicHJldiIsImNoYXJBdCIsInNsaWNlIiwic3RvcCIsInJ2YWwiLCJoYW5kbGUiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsImRlbGVnYXRlWWllbGQiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJsaXN0ZWRFdmVudHMiLCJDTElFTlRfSUQiLCJBUElfS0VZIiwiRElTQ09WRVJZX0RPQyIsIlNDT1BFUyIsInRva2VuQ2xpZW50IiwiZ2FwaUluaXRlZCIsImdpc0luaXRlZCIsImF1dGhvcml6ZWQiLCJ3aW5kb3ciLCJnYXBpTG9hZGVkIiwiZ2FwaSIsImxvYWQiLCJpbml0aWFsaXplR2FwaUNsaWVudCIsIl9pbml0aWFsaXplR2FwaUNsaWVudCIsIl9jYWxsZWUyIiwiX2NhbGxlZTIkIiwiX2NvbnRleHQyIiwiY2xpZW50IiwiaW5pdCIsImFwaUtleSIsImRpc2NvdmVyeURvY3MiLCJnaXNMb2FkZWQiLCJnb29nbGUiLCJhY2NvdW50cyIsIm9hdXRoMiIsImluaXRUb2tlbkNsaWVudCIsImNsaWVudF9pZCIsInNjb3BlIiwiYWNjZXNzX3R5cGUiLCJwcm9tcHQiLCJjYWxsYmFjayIsImhhbmRsZUF1dGhDbGljayIsIl9yZWYiLCJfY2FsbGVlIiwicmVzcCIsIl9jYWxsZWUkIiwiX2NvbnRleHQiLCJlcnJvciIsInVuZGVmaW5lZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiZGlzcGxheSIsImNvbnNvbGUiLCJsb2ciLCJsaXN0VXBjb21pbmdFdmVudHMiLCJfeCIsImdldFRva2VuIiwicmVxdWVzdEFjY2Vzc1Rva2VuIiwicmV2b2tlQWNjZXNzIiwidG9rZW4iLCJyZXZva2VVcmwiLCJjb25jYXQiLCJhY2Nlc3NfdG9rZW4iLCJmZXRjaCIsInJlc3BvbnNlIiwic2V0VG9rZW4iLCJoYW5kbGVTaWdub3V0Q2xpY2siLCJyZXZva2UiLCJfbGlzdFVwY29taW5nRXZlbnRzIiwiX2NhbGxlZTMiLCJyZXF1ZXN0IiwiX2NhbGxlZTMkIiwiX2NvbnRleHQzIiwidG9JU09TdHJpbmciLCJjYWxlbmRhciIsImV2ZW50cyIsImxpc3QiLCJyZXN1bHQiLCJpdGVtcyIsInQwIiwibWVzc2FnZSIsInNldEludGVydmFsIiwiY3JlYXRlRXZlbnQiLCJfeDIiLCJfY3JlYXRlRXZlbnQiLCJfY2FsbGVlNCIsImV4dGVuZGVkVGltZSIsInRvZGF5UGx1cyIsImV2ZW50IiwiX2NhbGxlZTQkIiwiX2NvbnRleHQ0Iiwic2V0TWludXRlcyIsImdldE1pbnV0ZXMiLCJpbnNlcnQiLCJlbmRFdmVudCIsIl94MyIsIl9lbmRFdmVudCIsIl9jYWxsZWU1Iiwic3RhcnREYXRlIiwiX2NhbGxlZTUkIiwiX2NvbnRleHQ1Iiwic3VtbWFyeSIsInVwZGF0ZSIsImlkIiwiYW5pbWF0aW9uQWN0aXZlIiwiZW5kTWVldGluZyIsInJlc2VydmUiLCJyZXNlcnZlRGlhbG9nIiwiY2xvc2VSZXNlcnZlRGlhbG9nIiwiY2lyY2xlQW5pbU91dGVyIiwicmVzZXJ2ZV8xMCIsInJlc2VydmVfMTUiLCJyZXNlcnZlXzMwIiwicmVzZXJ2ZV82MCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmRDdXJyZW50TWVldGluZyIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJzdHJva2VEYXNob2Zmc2V0IiwicmVtb3ZlIiwic2hvd01vZGFsIiwiY2hlY2tEaXNhYmxlZFJlc2VydmVUaW1lcyIsImNsb3NlIiwidGltZVRvTmV4dE1lZXRpbmciLCJuZXh0TWVldGluZyIsInN0YXJ0IiwiZGF0ZVRpbWUiLCJkaXNhYmxlZCIsInVnZWRhZ2UiLCJzZWNDb250ZW50IiwibWVldGluZ1N0YXRlIiwiYmdJbWdGcmVlIiwiYmdJbWdPY2N1cGllZCIsImN1cnJlbnRUaW1lIiwiYmFja2dyb3VuZENvbG9yIiwiY2hlY2tJZkFjdGl2ZU1lZXRpbmciLCJlbmQiLCJhY3RpdmVNZWV0aW5nU3RhdGUiLCJkaXNwbGF5QWRkaXRpb25hbE1lZXRpbmdzIiwidXBjb21pbmdNZWV0aW5nU3RhdGUiLCJlbXB0eU1lZXRpbmdTdGF0ZSIsInN0YXJ0VGltZU1pbnNDb252IiwiZW5kVGltZU1pbnNDb252IiwidGV4dENvbnRlbnQiLCJjcmVhdG9yIiwiZW1haWwiLCJzZWFyY2giLCJnZXRXZWVrRGF5TmFtZSIsImdldEhvdXJzIiwic3JjIiwidmlzaWJpbGl0eSIsInJlcGxhY2VDaGlsZHJlbiIsIk1hdGgiLCJmbG9vciIsInVwY0NvbnRhaW5lciIsImNhcmQiLCJjcmVhdGVFbGVtZW50IiwidGl0bGUiLCJvcmdhbml6ZXIiLCJ0aW1lIiwiYXBwZW5kIiwibWVldGluZ0RhdGUiLCJnZXRVVENEYXkiLCJjdXJyZW50VGltZUNvbnZlcnRlZCIsImdldFVUQ01pbnV0ZXMiLCJjc3MiLCJjc3MyIiwiY3NzMyJdLCJzb3VyY2VSb290IjoiIn0=