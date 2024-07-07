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
            _context.next = 6;
            return listUpcomingEvents();
          case 6:
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
  document.querySelector("#meet-time").textContent = "";
  document.querySelector("#meet-org").textContent = ""; //Organizer
  document.querySelector("#btn-end").style.display = "none";
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
    background-color: yellowgreen;    
}

#reserve-dialog[open]{
    position: relative;
    display:flex;
    flex-direction: column;
    background-color: rgb(90, 58, 98);
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
`, "",{"version":3,"sources":["webpack://./src/dialog.css"],"names":[],"mappings":"AAAA;;GAEG;;AAEH;IACI,8BAA8B;IAC9B,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;IACtB,iCAAiC;IACjC,UAAU;IACV,WAAW;IACX,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;IACb,+BAA+B;AACnC;;AAEA;IACI,aAAa;IACb,SAAS;IACT,YAAY;;AAEhB;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,WAAW;IACX,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;;AAGA,8BAA8B;AAC9B;IACI,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,YAAY;IACZ,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,6BAA6B;IAC7B,yBAAyB;IACzB,kBAAkB;IAClB,kDAAkD;EACpD;EACA;;IAEE,oBAAoB;AACxB;EACE;IACE;MACE,wBAAwB;IAC1B;;IAEA;MACE,wBAAwB;IAC1B;EACF;;AAEF,sBAAsB;;;;;;AAMtB;IACI;;QAEI,qBAAqB;QACrB,kBAAkB;QAClB,SAAS;QACT,uCAAuC;IAC3C;IACA;;IAEA;AACJ;AACA;IACI;;IAEA;IACA;QACI,QAAQ;QACR,SAAS;IACb;AACJ","sourcesContent":["/* .hide{  \n    animation: dia-close 1s linear;     \n} */\n\n#reserve-dialog:not([open]){  \n    animation: dia-close 1s linear; \n    background-color: yellowgreen;    \n}\n\n#reserve-dialog[open]{\n    position: relative;\n    display:flex;\n    flex-direction: column;\n    background-color: rgb(90, 58, 98);\n    width: 70%;\n    height: 50%;\n    margin: auto;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n    border-style: none;\n    padding: 10px;\n    animation: dia-open 0.1s linear;   \n}\n\n#reserve-btngroup{\n    display: flex;\n    gap: 20px;\n    margin: auto;\n    \n}\n#reserve-dialog::backdrop{\n    backdrop-filter: blur(3px);\n}\n\n#reserve-header{\n    display: flex;\n    width: 100%;\n    justify-content: center;\n}\n\n#reserve-close{\n    position: absolute;\n    right: 10px;\n    font-size: 50px;\n    color: white;\n    margin-left: auto;\n}\n\n\n/* Spinner element on button */\n.button--loading .button__text {\n    visibility: hidden;\n    opacity: 0;\n  }\n  \n  .button--loading::after {\n    content: \"\";\n    position: absolute;\n    width: 24px;\n    height: 24px;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    margin: auto;\n    border: 4px solid transparent;\n    border-top-color: #ffffff;\n    border-radius: 50%;\n    animation: button-loading-spinner 1s ease infinite;\n  }\n  .button__text {\n    \n    transition: all 0.2s;\n}\n  @keyframes button-loading-spinner {\n    from {\n      transform: rotate(0turn);\n    }\n  \n    to {\n      transform: rotate(1turn);\n    }\n  }\n\n/* Spinner button end*/\n\n\n\n\n\n@keyframes dia-open{\n    0%{\n        \n        transform: scale(95%);\n        position: relative;\n        top: -10%;\n        background-color: rgba(100, 100, 100,0);\n    }\n    100%{\n\n    }\n}\n@keyframes dia-close{\n    0%{\n        \n    }\n    100%{\n        width: 0;\n        height: 0;\n    }\n}\n"],"sourceRoot":""}]);
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


`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,kBAAkB,EAAE,WAAW;IAC/B,+BAA+B,EAAE,kBAAkB;IACnD,2BAA2B;IAC3B,4BAA4B;IAC5B,+BAA+B;AACnC;AACA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,iBAAiB;IACjB,WAAW;IACX,YAAY;AAChB;;AAEA;;GAEG;AACH;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,sCAAsC;IACtC,MAAM;AACV;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,2BAA2B;IAC3B,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,OAAO;;AAEX;AACA;IACI,cAAc;AAClB;;;;;;AAMA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;AACvB;;;;;AAKA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,cAAc;IACd,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,YAAY;IACZ,aAAa;AACjB;;AAEA,8CAA8C;AAC9C;IACI,aAAa;IACb,OAAO;IACP,6BAA6B;IAC7B,gCAAgC;IAChC,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;AACtB;;;AAGA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,gBAAgB;IAChB,iCAAiC;IACjC,iBAAiB,EAAE,aAAa;IAChC,kBAAkB;IAClB,YAAY;IACZ,mBAAmB;AACvB;;;;AAIA;IACI,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;;;AAIA;IACI,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,cAAc;AAClB;;;AAGA,qBAAqB;;AAErB;IACI,YAAY;AAChB;AACA;IACI,cAAc;IACd,yBAAyB;IACzB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,mBAAmB;AACvB;AACA;IACI,cAAc;AAClB;AACA;IACI,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,iCAAiC;IACjC,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,yBAAyB;;AAE7B;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;IACnB,uBAAuB;IACvB,6BAA6B;IAC7B,gBAAgB;IAChB,YAAY;AAChB;AACA;IACI,qBAAqB;IACrB,yBAAyB;IACzB,oCAAoC;IACpC,WAAW;AACf;AACA;IACI,sBAAsB;IACtB,iCAAiC;AACrC","sourcesContent":["*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    --pri-col: #252424; /*#252424;*/\n    --sec-col: rgb(19, 35, 49, 0.3); /*rgb(19, 35, 49)*/\n    --card-col: rgb(24, 43, 60);\n    --btn-prim: rgb(49, 49, 142);\n    font-family: \"Lato\", sans-serif;\n}\nbody{\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    height: 100vh; \n}\n#bg-img{\n    position: absolute;\n    z-index: -1;\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n}\n\n/* div{\n    background-color: transparent;\n} */\n.container{\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: transparent;\n    /* background-color: var(--pri-col); */\n    flex:1;\n}\n.main-content{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 50px 50px 0px 50px;\n    gap: 30px;\n}\n\n.time-content{\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    flex-direction: row;\n    flex: 1;\n    \n}\n.title-time-container{\n    flex-shrink: 0;\n}\n\n\n\n\n\n.header-content{\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n\n\n\n#no-events{\n    position: absolute;\n    top: 50%;\n    left: 30%;\n    font-size: 4em;\n    text-align: center;\n    color:white;\n}\n\n#connect-GA{\n    position: absolute;\n    top: 50%;\n    left: 40%;\n    width: 300px;\n    height: 100px;\n}\n\n/* Secondary content / upcomming meeitngs css*/\n.sec-content{\n    display: flex;\n    flex: 1;\n    background-color: transparent;\n    background-color: var(--sec-col);\n    max-height: 200px;\n    width: 100vw;\n    overflow-x: scroll;\n    padding-left: 10px;\n}\n\n\n.sec-content div{\n    display: flex;\n    flex-direction: column;\n    gap: 2px;\n    min-width: 400px;\n    background-color: var(--card-col);\n    padding-top: 10px; /*tjek værdi*/\n    padding-left: 10px;\n    margin: 10px;\n    border-radius: 10px;\n}\n\n\n\n.sec-content h1{\n    padding-bottom: 15px;\n    font-size: 2.2em;\n}\n.sec-content h2{\n    font-size: 1.2em;\n}\n\n\n\n#btn-end, #btn-reserve{\n    display: none;\n}\n\n#current-time{\n    font-size: 5em;\n    text-align: center;\n    margin: auto 0;\n}\n\n\n/*GENERAL utilitites*/\n\nh1, h2, h3{\n    color: white;\n}\nh1{\n    font-size: 3em;\n    color: rgb(212, 209, 209);\n    margin-bottom: 15px;\n}\nh2{\n    font-size: 4em;\n    margin-bottom: 10px;\n}\nh3{\n    font-size: 2em;\n}\nbutton{\n    padding: 5px 10px;\n    font-size: 2em;\n}\n\n.primary-btn{\n    position:relative;\n    padding: 15px 25px;\n    font-size: 2em;\n    border-radius: 10px;\n    border-style: none;\n    background-color: var(--btn-prim);\n    color: white;\n    font-weight: 600;\n}\n\n.primary-btn:active{\n    transform: scale(95%);\n    color: rgb(187, 185, 185);\n    \n}\n\n.secondary-btn{\n    position: relative;\n    padding: 15px 25px;\n    font-size: 2em;\n    border-radius: 10px;\n    border: 2px solid white;\n    background-color: transparent;\n    font-weight: 600;\n    color: white;\n}\n.secondary-btn:active{\n    transform: scale(95%);\n    color: rgb(187, 185, 185);\n    border: 1px solid rgb(187, 185, 185);\n    margin: 1px;\n}\n.secondary-btn:disabled{\n    color: rgb(98, 98, 98);\n    border: 1px solid rgb(98, 98, 98);\n}\n\n\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBbUM7QUFDRztBQUNGO0FBQ1Q7QUFDTjtBQUNTO0FBQ2Q7QUFDeUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9jb3VudERvd24uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvZ2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9tYW5pcHVsYXRlTWVldGluZ3MuanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvc3RhdGVDb250cm9sbGVyLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL0NEU3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL2RpYWxvZy5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL0NEU3R5bGUuY3NzPzg4Y2IiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvLi9zcmMvZGlhbG9nLmNzcz82ZTBlIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2t0ZW1wL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFja3RlbXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2t0ZW1wL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2t0ZW1wL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrdGVtcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0NhbGN1bGF0ZSB0aGUgY2lyY3VtZmVyZW5jZSB0byB0aGUgY291bnREb3duIHRpbWVyLCBzbyByZW1haW5pbmcgdGltZSBjYW4gYmUgc2hvd25cbmZ1bmN0aW9uIGNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2Uoc3RhcnRUaW1lLGVuZFRpbWUpe1xuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3Qgc3RhcnRUaW1lSW5NaWxsaXMgPSBzdGFydFRpbWUuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGVuZFRpbWVJbk1pbGxpcyA9IGVuZFRpbWUuZ2V0VGltZSgpO1xuXG4gICAgY29uc3QgdG90YWxNZWV0aW5nVGltZSA9IGVuZFRpbWVJbk1pbGxpcyAtIHN0YXJ0VGltZUluTWlsbGlzO1xuICAgIGNvbnN0IGVsYWJzZWRNZWV0aW5nVGltZSA9IHRvZGF5IC0gc3RhcnRUaW1lSW5NaWxsaXM7XG4gICAgY29uc3QgcGVyY2VudE1lZXRpbmdFbGFic2VkID0gZWxhYnNlZE1lZXRpbmdUaW1lL3RvdGFsTWVldGluZ1RpbWUqMTAwO1xuICAgIHJldHVybiAocGVyY2VudE1lZXRpbmdFbGFic2VkICogMTEuMyk7IC8vMTEuMyBpcyAxJSBvZiB0aGUgY2lyY3VtZmVyZW5jZSB2YWx1ZSB1c2VkIHRvIGRyYXcgdGhlIGNpcmNsZS4gVG90YWwgY2lyYyBpcyA9IDIqUEkqcmFkaXVzXG59XG5cbi8vQ2FsY3VsYXRlcyBob3cgbWFueSBtaW51dGVzIGlzIGxlZnQgb2YgY3VycmVudCBhY3RpdmUgbWVldGluZ1xuZnVuY3Rpb24gY2FsY3VsYXRlUmVtYWluaW5nVGltZShlbmRUaW1lKXtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IGVuZFRpbWVJbk1pbGxpcyA9IGVuZFRpbWUuZ2V0VGltZSgpO1xuICAgIHJldHVybiAoZW5kVGltZUluTWlsbGlzLXRvZGF5KS8xMDAwLzYwOyBcbn1cblxuZXhwb3J0e2NhbGN1bGF0ZVJlbWFpbmluZ1RpbWUsIGNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2V9IiwiXG5cblxubGV0IGxpc3RlZEV2ZW50cztcbi8qIGV4cG9ydGVkIGdhcGlMb2FkZWQgKi9cbiAgICAgIC8qIGV4cG9ydGVkIGdpc0xvYWRlZCAqL1xuICAgICAgLyogZXhwb3J0ZWQgaGFuZGxlQXV0aENsaWNrICovXG4gICAgICAvKiBleHBvcnRlZCBoYW5kbGVTaWdub3V0Q2xpY2sgKi9cblxuICAgICAgLy8gVE9ETyhkZXZlbG9wZXIpOiBTZXQgdG8gY2xpZW50IElEIGFuZCBBUEkga2V5IGZyb20gdGhlIERldmVsb3BlciBDb25zb2xlXG4gICAgICBjb25zdCBDTElFTlRfSUQgPSAnOTc0MzUxNTQ4NDM0LTQ3bDNsb2FxMjdoa2dsNmg1dXJjM2I5dXY0bmxuNzB0LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tJztcbiAgICAgIGNvbnN0IEFQSV9LRVkgPSAnQUl6YVN5QnlENUJoZWhVY1BJVDJhVFFyU0hxZEdqeDhPaGt4dzZvJztcblxuICAgICAgLy8gRGlzY292ZXJ5IGRvYyBVUkwgZm9yIEFQSXMgdXNlZCBieSB0aGUgcXVpY2tzdGFydFxuICAgICAgY29uc3QgRElTQ09WRVJZX0RPQyA9ICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9kaXNjb3ZlcnkvdjEvYXBpcy9jYWxlbmRhci92My9yZXN0JztcblxuICAgICAgLy8gQXV0aG9yaXphdGlvbiBzY29wZXMgcmVxdWlyZWQgYnkgdGhlIEFQSTsgbXVsdGlwbGUgc2NvcGVzIGNhbiBiZVxuICAgICAgLy8gaW5jbHVkZWQsIHNlcGFyYXRlZCBieSBzcGFjZXMuXG4gICAgICBjb25zdCBTQ09QRVMgPSAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9jYWxlbmRhcic7XG5cbiAgICAgIGxldCB0b2tlbkNsaWVudDtcbiAgICAgIFxuICAgICAgbGV0IGdhcGlJbml0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBnaXNJbml0ZWQgPSBmYWxzZTtcbiAgICAgIGxldCBhdXRob3JpemVkID0gZmFsc2U7XG4gICAgIC8vIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3JpemVfYnV0dG9uJykuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgLy9kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbm91dF9idXR0b24nKS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbGJhY2sgYWZ0ZXIgYXBpLmpzIGlzIGxvYWRlZC5cbiAgICAgICAqL1xuICAgICAgd2luZG93LmdhcGlMb2FkZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGdhcGkubG9hZCgnY2xpZW50JywgaW5pdGlhbGl6ZUdhcGlDbGllbnQpO1xuICAgICAgIFxuICAgICAgfVxuICAgIFxuICAgICAgLyoqXG4gICAgICAgKiBDYWxsYmFjayBhZnRlciB0aGUgQVBJIGNsaWVudCBpcyBsb2FkZWQuIExvYWRzIHRoZVxuICAgICAgICogZGlzY292ZXJ5IGRvYyB0byBpbml0aWFsaXplIHRoZSBBUEkuXG4gICAgICAgKi9cbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGluaXRpYWxpemVHYXBpQ2xpZW50KCkge1xuICAgICAgICBhd2FpdCBnYXBpLmNsaWVudC5pbml0KHtcbiAgICAgICAgICBhcGlLZXk6IEFQSV9LRVksXG4gICAgICAgICAgZGlzY292ZXJ5RG9jczogW0RJU0NPVkVSWV9ET0NdLFxuICAgICAgICB9KTtcbiAgICAgICAgZ2FwaUluaXRlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQ2FsbGJhY2sgYWZ0ZXIgR29vZ2xlIElkZW50aXR5IFNlcnZpY2VzIGFyZSBsb2FkZWQuXG4gICAgICAgKi9cbiAgICAgICAgd2luZG93Lmdpc0xvYWRlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB0b2tlbkNsaWVudCA9IGdvb2dsZS5hY2NvdW50cy5vYXV0aDIuaW5pdFRva2VuQ2xpZW50KHtcbiAgICAgICAgICBjbGllbnRfaWQ6IENMSUVOVF9JRCxcbiAgICAgICAgICBzY29wZTogU0NPUEVTLFxuICAgICAgICAgIGFjY2Vzc190eXBlOiAnb2ZmbGluZScsXG4gICAgICAgICAgcHJvbXB0OiAnY29uc2VudCcsXG4gICAgICAgICAgY2FsbGJhY2s6ICcnLCAvLyBkZWZpbmVkIGxhdGVyXG4gICAgICAgIH0pO1xuICAgICAgICBnaXNJbml0ZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgIFxuICAgICAgLyoqXG4gICAgICAgKiAgU2lnbiBpbiB0aGUgdXNlciB1cG9uIGJ1dHRvbiBjbGljay5cbiAgICAgICAqL1xuICAgICAgd2luZG93LmhhbmRsZUF1dGhDbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdG9rZW5DbGllbnQuY2FsbGJhY2sgPSBhc3luYyAocmVzcCkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwLmVycm9yICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IChyZXNwKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb25uZWN0LUdBJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICBhdXRob3JpemVkID0gdHJ1ZTtcbiAgICAgICAgICBcbiAgICAgICAgICBhd2FpdCBsaXN0VXBjb21pbmdFdmVudHMoKTsgXG4gICAgICAgIH07XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChnYXBpLmNsaWVudC5nZXRUb2tlbigpID09PSBudWxsKSB7XG4gICAgICAgICAgLy8gUHJvbXB0IHRoZSB1c2VyIHRvIHNlbGVjdCBhIEdvb2dsZSBBY2NvdW50IGFuZCBhc2sgZm9yIGNvbnNlbnQgdG8gc2hhcmUgdGhlaXIgZGF0YVxuICAgICAgICAgIC8vIHdoZW4gZXN0YWJsaXNoaW5nIGEgbmV3IHNlc3Npb24uXG4gICAgICAgICAgdG9rZW5DbGllbnQucmVxdWVzdEFjY2Vzc1Rva2VuKHtwcm9tcHQ6ICdjb25zZW50J30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNraXAgZGlzcGxheSBvZiBhY2NvdW50IGNob29zZXIgYW5kIGNvbnNlbnQgZGlhbG9nIGZvciBhbiBleGlzdGluZyBzZXNzaW9uLlxuICAgICAgICAgIHRva2VuQ2xpZW50LnJlcXVlc3RBY2Nlc3NUb2tlbih7cHJvbXB0OiAnJ30pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgXG5cbiAgICAgIC8vUmV2b2tlIGFjY2VzcyB0byBHb29nbGUgQWNjb3VudCAtIGNvbXBsZXRlbHkgcmVtb3ZlcyBwcmlvciBhY2Nlc3NcbiAgICAgIHdpbmRvdy5yZXZva2VBY2Nlc3MgPSBmdW5jdGlvbiAoKXtcbiAgICAgICAgY29uc3QgdG9rZW4gPSBnYXBpLmNsaWVudC5nZXRUb2tlbigpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBjb25zdCByZXZva2VVcmwgPSBgaHR0cHM6Ly9hY2NvdW50cy5nb29nbGUuY29tL28vb2F1dGgyL3Jldm9rZT90b2tlbj0ke3Rva2VuLmFjY2Vzc190b2tlbn1gO1xuICAgICAgICAgIGZldGNoKHJldm9rZVVybClcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FjY2VzcyB0b2tlbiByZXZva2VkJyk7XG4gICAgICAgICAgICAgIGdhcGkuY2xpZW50LnNldFRva2VuKG51bGwpOyAvLyBDbGVhciB0aGUgdG9rZW5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZXZva2luZyBhY2Nlc3MgdG9rZW4nLCBlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICBcbiAgICAgIC8qKlxuICAgICAgICogIFNpZ24gb3V0IHRoZSB1c2VyIHVwb24gYnV0dG9uIGNsaWNrLlxuICAgICAgICovXG4gICAgICB3aW5kb3cuaGFuZGxlU2lnbm91dENsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gZ2FwaS5jbGllbnQuZ2V0VG9rZW4oKTtcbiAgICAgICAgaWYgKHRva2VuICE9PSBudWxsKSB7XG4gICAgICAgICAgZ29vZ2xlLmFjY291bnRzLm9hdXRoMi5yZXZva2UodG9rZW4uYWNjZXNzX3Rva2VuKTtcbiAgICAgICAgICBnYXBpLmNsaWVudC5zZXRUb2tlbignJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgXG4gICAgICAvL0ZldGNoIHVwY29tbWluZyBldmVudHNcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGxpc3RVcGNvbWluZ0V2ZW50cygpIHtcbiAgICAgICAgbGV0IHJlc3BvbnNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAnY2FsZW5kYXJJZCc6ICdwcmltYXJ5JyxcbiAgICAgICAgICAgICd0aW1lTWluJzogKG5ldyBEYXRlKCkpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAnc2hvd0RlbGV0ZWQnOiBmYWxzZSxcbiAgICAgICAgICAgICdzaW5nbGVFdmVudHMnOiB0cnVlLFxuICAgICAgICAgICAgJ21heFJlc3VsdHMnOiA2LFxuICAgICAgICAgICAgJ29yZGVyQnknOiAnc3RhcnRUaW1lJyxcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZ2FwaS5jbGllbnQuY2FsZW5kYXIuZXZlbnRzLmxpc3QocmVxdWVzdCk7XG4gICAgICAgICAgbGlzdGVkRXZlbnRzID0gYXdhaXQgcmVzcG9uc2UucmVzdWx0Lml0ZW1zO1xuICAgICAgICAgIFxuICAgICAgICAgIFxuXG5cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgIFxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG5cbiAgICAgIFxuICAgICAgLy9SZXF1ZXN0IHVwY29taW5nIGV2ZW50cyBldmVyeSB4IG1pbnV0ZSB0byBzdGFydCBwcm9jZXNzaW5nIHBvcnRlbnRpYWwgY2hhbmdlcyBpbiB0aGUgY2FsZW5kYXJcbiAgICAgIHNldEludGVydmFsKCgpPT4ge1xuICAgICAgICBpZiAoZ2FwaUluaXRlZCAmJiBnaXNJbml0ZWQgJiYgYXV0aG9yaXplZCl7IC8vQ2hlY2sgaWYgd2UgaGF2ZSBnb3R0ZW4gYSB0b2tlbiwgbG9hZGVkIHRoZSBsaWJyYXJ5IGFuZCBhbHNvIGF1dGhvcml6ZWQgYSB1c2VyXG4gICAgICAgICAgbGlzdFVwY29taW5nRXZlbnRzKCk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc29sZS5sb2cobGlzdGVkRXZlbnRzKTtcbiAgICAgICAgfVxuICAgICAgfSwgMzAwMDApO1xuXG4gICAgICBzZXRJbnRlcnZhbCgoKT0+IHtcbiAgICAgICAgaWYgKGdhcGlJbml0ZWQgJiYgZ2lzSW5pdGVkICYmIGF1dGhvcml6ZWQpeyAvL0NoZWNrIGlmIHdlIGhhdmUgZ290dGVuIGEgdG9rZW4sIGlmIHllcywgd2UgY2xhaW0gYSBuZXcgYWNjZXNzX3Rva2VuIGV2ZXJ5IGhvdXJcbiAgICAgICAgICBoYW5kbGVBdXRoQ2xpY2soKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkkgaGFuZGxlZCBhdXRob3JpemF0aW9uIGF1dG9tYXRpY2FsbHlcIik7XG4gICAgICAgIH1cbiAgICAgIH0sIDM1MDAwMDApO1xuXG5cblxuICAgICAgXG4gICAgICAvL2NyZWF0ZSBuZXcgZXZlbnRzIGluIHRoZSBHb29nbGUgY2FsZW5kYXIgY29vbmVjdGVkXG4gICAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVFdmVudChleHRlbmRlZFRpbWUpe1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGNvbnN0IHRvZGF5UGx1cyA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRvZGF5UGx1cy5zZXRNaW51dGVzKHRvZGF5LmdldE1pbnV0ZXMoKStleHRlbmRlZFRpbWUpOyAvL1PDpnQgc2x1dHRpZHNwdW5rdCB0aWwgYW5naXZldCBmb3Jsw6ZuZ2Vsc2VcbiAgXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICdzdW1tYXJ5JzogJ0FkLWhvYyBtw7hkZScsXG4gICAgICAgICAgJ3N0YXJ0Jzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICAgICdlbmQnOiB7XG4gICAgICAgICAgICAnZGF0ZVRpbWUnOiB0b2RheVBsdXMudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy5pbnNlcnQoe1xuICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuICAgICAgICAgICdyZXNvdXJjZSc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0VXBjb21pbmdFdmVudHMoKTtcbiAgICAgICAgLy9jb21tZW50ZWQgdGhpcyBvdXQsIGFzIGl0IGRpZCBub3RoaW5nIGdvb2QgXG4gICAgICAgIC8vIHJlcXVlc3QuZXhlY3V0ZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAvLyAgIGFwcGVuZCgnRXZlbnQgY3JlYXRlZDogJyArIGV2ZW50Lmh0bWxMaW5rKTtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIFxuICAgICAgfVxuXG4gICAgICAvL0VuZCBjdXJyZW50IG1lZXRpbmdcbiAgICAgIGFzeW5jIGZ1bmN0aW9uIGVuZEV2ZW50KHN0YXJ0VGltZSl7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoc3RhcnRUaW1lKTtcbiAgXG4gICAgICAgIGNvbnN0IGV2ZW50ID0ge1xuICAgICAgICAgICdzdW1tYXJ5JzogbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnksXG4gICAgICAgICAgJ3N0YXJ0Jzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogc3RhcnREYXRlLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAndGltZVpvbmUnOiAnRXVyb3BlL0NvcGVuaGFnZW4nXG4gICAgICAgICAgfSxcbiAgICAgICAgICAnZW5kJzoge1xuICAgICAgICAgICAgJ2RhdGVUaW1lJzogdG9kYXkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICd0aW1lWm9uZSc6ICdFdXJvcGUvQ29wZW5oYWdlbidcbiAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgcmVxdWVzdCA9IGF3YWl0IGdhcGkuY2xpZW50LmNhbGVuZGFyLmV2ZW50cy51cGRhdGUoe1xuICAgICAgICAgICdjYWxlbmRhcklkJzogJ3ByaW1hcnknLFxuICAgICAgICAgICdldmVudElkJzogbGlzdGVkRXZlbnRzWzBdLmlkLFxuICAgICAgICAgICdyZXNvdXJjZSc6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0VXBjb21pbmdFdmVudHMoKTsgLy9cblxuICAgICAgICAvL2NvbW1lbnRlZCB0aGlzIG91dCwgYXMgaXQgZGlkIG5vdGhpbmcgZ29vZCBcbiAgICAgICAgLy8gcmVxdWVzdC5leGVjdXRlKGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIC8vICAgYXBwZW5kKCdFdmVudCBjcmVhdGVkOiAnICsgZXZlbnQuaHRtbExpbmspO1xuICAgICAgICAvLyB9KTtcbiAgICAgICAgXG4gICAgICB9XG4gICAgICBcbiAgICAgIGV4cG9ydCB7Z2FwaUluaXRlZCwgZ2lzSW5pdGVkLCBsaXN0ZWRFdmVudHMsIGF1dGhvcml6ZWQsIGNyZWF0ZUV2ZW50LCBlbmRFdmVudH1cbiAgICAgICAgXG4iLCJpbXBvcnQgeyBjcmVhdGVFdmVudCwgZW5kRXZlbnQsIGxpc3RlZEV2ZW50c30gZnJvbSBcIi4vZ2FwaVwiO1xuaW1wb3J0IHsgYW5pbWF0aW9uQWN0aXZlIH0gZnJvbSBcIi4vc3RhdGVDb250cm9sbGVyXCI7XG5cbmNvbnN0IGVuZE1lZXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLWVuZCcpO1xuXG5jb25zdCByZXNlcnZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1yZXNlcnZlJyk7XG5jb25zdCByZXNlcnZlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtZGlhbG9nJyk7XG5jb25zdCBjbG9zZVJlc2VydmVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZS1jbG9zZScpO1xuY29uc3QgY2lyY2xlQW5pbU91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2lubmVyLWNpcmNsZScpO1xuXG5jb25zdCByZXNlcnZlXzEwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtMTAnKTtcbmNvbnN0IHJlc2VydmVfMTUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzZXJ2ZS0xNScpO1xuY29uc3QgcmVzZXJ2ZV8zMCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXNlcnZlLTMwJyk7XG5jb25zdCByZXNlcnZlXzYwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc2VydmUtNjAnKTtcblxuLy9FbmQgbWVldGluZ1xuZW5kTWVldGluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57IFxuICAgIGVuZEN1cnJlbnRNZWV0aW5nKCk7XG4gICAgZW5kTWVldGluZy5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xuXG4gICAgLy9BbmltYXRpb25cbiAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRkb3duLS1lbmQnKTsvL1N0YXJ0IGFuaW1hdGlvblxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNpcmNsZUFuaW1PdXRlci5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gMTEzMDsgLy9TZXQgY2lyY3VtZmVyZW5jZSB0byBjbG9zZWRcbiAgICAgICAgY2lyY2xlQW5pbU91dGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvdW50ZG93bi0tZW5kJyk7Ly8gcmVzZXQgaXQsIHNvIHdlIGNhbiBhbmltYXRlIGxhdGVyIGFnYWluXG4gICAgICB9LCAxNTAwKTtcbiAgICAgIC8vYW5pbWF0aW9uQWN0aXZlID0gZmFsc2U7IC8vTWFrZSBpdCBwb3NzaWJsZSB0byBzdGFydCBhbmltYXRpb24gb24gbWVldGluZyBzdGFydC4uIEzDhlM6IHVka29tbWVudGVyZXQsIGRhIHbDpnJkaWVuIGVyIHNhdCB0aWwgMCDDpWJlbmJhcnQsIG9nIEpTIGFuc2VyIGRlbm5lIHbDpnJkaSBzb20gdsOmcmVuZGUgZXQgb2JqZWN0IG1lZCBrdW4gZW4gXCJnZXR0ZXJcIlxuICAgICAgXG59KVxuXG4vL29wZW4gZGlhbG9nIG1vZGFsXG5yZXNlcnZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICByZXNlcnZlRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgIGlmKGxpc3RlZEV2ZW50cy5sZW5ndGghPTApeyBjaGVja0Rpc2FibGVkUmVzZXJ2ZVRpbWVzKCk7fSAvLyBDaGVjayBob3cgbXVjaCB0aW1lIHRoZXJlIGlzIHRvIG5leHQgbWVldGluZywgYW5kIGRpc2FibGUgb3B0aW9ucyBpZiB0aGUgZXhjZWVkIHRpbWUgdG8gdXBjb21pbmcgbWVldGluZ1xufSlcblxuLy9jbG9zZSBkaWFsb2cgbW9kYWwgd2l0aCBubyBwaWNrXG5jbG9zZVJlc2VydmVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIHJlc2VydmVEaWFsb2cuY2xvc2UoKTtcbn0pXG5cbnJlc2VydmVfMTAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNyZWF0ZUV2ZW50KDEwKTtcbiAgICByZXNlcnZlRGlhbG9nLmNsb3NlKCk7XG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xufSlcblxucmVzZXJ2ZV8xNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgY3JlYXRlRXZlbnQoMTUpO1xuICAgIHJlc2VydmVEaWFsb2cuY2xvc2UoKTtcbiAgICByZXNlcnZlLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tLWxvYWRpbmdcIik7XG59KVxuXG5yZXNlcnZlXzMwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBjcmVhdGVFdmVudCgzMCk7XG4gICAgcmVzZXJ2ZURpYWxvZy5jbG9zZSgpO1xuICAgIHJlc2VydmUuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbn0pXG5cbnJlc2VydmVfNjAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgIGNyZWF0ZUV2ZW50KDYwKTtcbiAgICByZXNlcnZlRGlhbG9nLmNsb3NlKCk7XG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xufSlcblxuLy9DYWxjdWxhdGVzIHRoZSBhbW91bnQgb2YgbWludXRlcyB1bnRpbCBuZXh0IG1lZXRpbmcgaXMgc3RhcnRpbmdcbmZ1bmN0aW9uIHRpbWVUb05leHRNZWV0aW5nKCl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IG5leHRNZWV0aW5nID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICBcbiAgICByZXR1cm4gKG5leHRNZWV0aW5nLmdldFRpbWUoKS8xMDAwLzYwKSAtICh0b2RheS5nZXRUaW1lKCkvMTAwMC82MCk7XG59XG5cbi8vU2V0cyB0aGUgYWQtaG9jIGJvb2tpbmcgYnV0dG9ucyB0byBlbmFibGVkL2Rpc2FibGVkLCBkZXBlbmRpbmcgb24gaWYgdGhleSB3b3VsZCBvdmVybGFwIHVwY29taW5nIG1lZXRpbmdcbmZ1bmN0aW9uIGNoZWNrRGlzYWJsZWRSZXNlcnZlVGltZXMoKXtcbiAgICBpZih0aW1lVG9OZXh0TWVldGluZygpPDYwKXtcbiAgICAgICAgcmVzZXJ2ZV82MC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtyZXNlcnZlXzYwLmRpc2FibGVkID0gZmFsc2U7fVxuICAgIGlmKHRpbWVUb05leHRNZWV0aW5nKCk8MzApe1xuICAgICAgICByZXNlcnZlXzMwLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge3Jlc2VydmVfMzAuZGlzYWJsZWQgPSBmYWxzZTt9XG4gICAgaWYodGltZVRvTmV4dE1lZXRpbmcoKTwxNSl7XG4gICAgICAgIHJlc2VydmVfMTUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH0gZWxzZSB7cmVzZXJ2ZV8xNS5kaXNhYmxlZCA9IGZhbHNlO31cbiAgICBpZih0aW1lVG9OZXh0TWVldGluZygpPDEwKXtcbiAgICAgICAgcmVzZXJ2ZV8xMC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfSBlbHNlIHtyZXNlcnZlXzEwLmRpc2FibGVkID0gZmFsc2U7fVxufVxuXG5mdW5jdGlvbiBlbmRDdXJyZW50TWVldGluZygpe1xuICAgIGVuZEV2ZW50KGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7XG59XG5cbmV4cG9ydCB7cmVzZXJ2ZSwgZW5kTWVldGluZywgY2lyY2xlQW5pbU91dGVyfSIsImltcG9ydCB7IGdhcGlJbml0ZWQsIGdpc0luaXRlZCwgbGlzdGVkRXZlbnRzLCBhdXRob3JpemVkfSBmcm9tIFwiLi9nYXBpXCI7XG5pbXBvcnQgeyBjYWxjdWxhdGVDaXJjbGVDaXJjdW1mZXJlbmNlLCBjYWxjdWxhdGVSZW1haW5pbmdUaW1lfSBmcm9tIFwiLi9jb3VudERvd25cIjtcbmltcG9ydCB7IHJlc2VydmUsZW5kTWVldGluZywgY2lyY2xlQW5pbU91dGVyIH0gZnJvbSBcIi4vbWFuaXB1bGF0ZU1lZXRpbmdzXCI7XG5jb25zdCB1Z2VkYWdlID0gW1wiU8O4bmRhZ1wiLFwiTWFuZGFnXCIsXCJUaXJzZGFnXCIsXCJPbnNkYWdcIixcIlRvcnNkYWdcIixcIkZyZWRhZ1wiLFwiTMO4cmRhZ1wiXTtcbmNvbnN0IHNlY0NvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VjLWNvbnRlbnQnKTtcbmxldCBtZWV0aW5nU3RhdGU7IC8vIHVzZWQgdG8gZGV0ZXJtaW5lIHRoZSBzdGF0ZSB0aGUgc2NyZWVuIGFyZSBpbiwgYW5kIGZ4IHRvIGRldGVybWluZSBpZiB0aGVyZSBhcmUgbWVldGluZ3Mgd2UgY2FuIGVuZCAvLzAgPSBubyBtZWV0aW5ncywgMSA9IG1lZXRpbmdzIGluIHRoZSBjYWxlbmRhciwgMiwgbWVldGluZyBpcyBhY3RpdmVcbmxldCBhbmltYXRpb25BY3RpdmUgPSBmYWxzZTtcbmltcG9ydCBiZ0ltZ0ZyZWUgZnJvbSAnLi9pbWcvQmctaW1nLnBuZyc7XG5pbXBvcnQgYmdJbWdPY2N1cGllZCBmcm9tICcuL2ltZy9CZy1pbWctb2NjdXBpZWQucG5nJztcblxuLy9EbyB3ZSBoYXZlIGFueSBtZWV0aW5ncyBpbiB0aGUgY2FsZW5kYXI/XG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICBpZiAoZ2FwaUluaXRlZCAmJiBnaXNJbml0ZWQgJiYgYXV0aG9yaXplZCl7XG4gICAgICAgIGN1cnJlbnRUaW1lKCk7IC8vIEFsd2F5cyBjYWxsIGFuZCBkaXNwbGF5IHRoZSBjdXJyZW50IHRpbWUgb2YgZGF5XG5cblxuICAgICAgICAvL0NoZWNraW5nIGlmIHRoZXJlIGFyZSBtb3JlIHRoYW4ganVzdCBvbmUgZXZlbnQsIGFuZCBzZXRzIGJhY2tncm91bmQgb2YgdXBjb21pbmcgbWVldGluZyBiYWNrZ3JvdW5kIHRvIHRyYW5zcGFyZW50IG9nIHNlbWkgdHJhbnNwYXJlbnRcbiAgICAgICAgaWYgKGxpc3RlZEV2ZW50cy5sZW5ndGg8Mil7XG4gICAgICAgICAgICBzZWNDb250ZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgICAgfWVsc2Uge3NlY0NvbnRlbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ2YXIoLS1zZWMtY29sKVwiO31cblxuXG5cbiAgICAgICAgLy9TZXF1ZW5jZSB0byBjaGVjayBmb3IgI29mIG1lZXRpbmdzIGFuZCBkcmF3IHRoZSBVSSBhY2NvcmRpbmdseVxuICAgICAgICBpZiAoIWxpc3RlZEV2ZW50cy5sZW5ndGg9PTApeyAvL0NoZWNraW5nIGlmIHRoZXJlIGFyZSBhbnkgbWVldGluZ3MgaW4gdGhlIGNhbGVuZGFyXG4gICAgICAgICAgICAvLyBjb25zdCBuZXh0TWVldGluZyA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1swXS5zdGFydC5kYXRlVGltZSk7ICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGlmIChjaGVja0lmQWN0aXZlTWVldGluZyhsaXN0ZWRFdmVudHNbMF0uc3RhcnQuZGF0ZVRpbWUsbGlzdGVkRXZlbnRzWzBdLmVuZC5kYXRlVGltZSkpeyAvL1wiY2hlY2tpbmcgaWYgaXQgYW55IG9mIHRoZSBtZWV0aW5ncyBpcyBhY3RpdmUhXCJcbiAgICAgICAgICAgICAgICBhY3RpdmVNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWRkaXRpb25hbE1lZXRpbmdzKCk7XG4gICAgICAgICAgICAgICAgbWVldGluZ1N0YXRlID0gMjtcblxuICAgICAgICAgICAgICAgIC8vQW5pbWF0ZSBjaXJjbGUgb24gbWVldGluZyBzdGFydFxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRpb25BY3RpdmUgPT0gZmFsc2Upe1xuICAgICAgICAgICAgICAgICAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LmFkZCgnY291bnRkb3duLS1zdGFydCcpOy8vU3RhcnQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaXJjbGVBbmltT3V0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnY291bnRkb3duLS1zdGFydCcpOy8vIHJlc2V0IGl0LCBzbyB3ZSBjYW4gYW5pbWF0ZSBsYXRlciBhZ2FpblxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTUwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZSB7IC8vKFwiV2UgaGF2ZSBtZWV0aW5ncyBpbiB0aGUgY2FsZW5kYXIsIGJ1dCBub25lIGlzIGFjdGl2ZSFcIik7XG4gICAgICAgICAgICAgICAgdXBjb21pbmdNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5QWRkaXRpb25hbE1lZXRpbmdzKCk7XG4gICAgICAgICAgICAgICAgbWVldGluZ1N0YXRlID0gMTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb25BY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHsvL1dlIGhhdmUgbm8gbWVlZXRpbmdzXG4gICAgICAgICAgICBtZWV0aW5nU3RhdGUgPSAwO1xuICAgICAgICAgICAgZW1wdHlNZWV0aW5nU3RhdGUoKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSBcbiAgfSwgNTAwMCk7XG5cblxuXG5cblxuZnVuY3Rpb24gY2hlY2tJZkFjdGl2ZU1lZXRpbmcoc3RhcnRUaW1lLCBlbmRUaW1lKXtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShzdGFydFRpbWUpO1xuICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKGVuZFRpbWUpO1xuICAgIFxuICAgIGlmIChzdGFydCA8PSB0b2RheSAmJiBlbmQgPj0gdG9kYXkpe1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwY29taW5nTWVldGluZ1N0YXRlKCl7XG4gICAgXG4gICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzWzBdLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICBjb25zdCBzdGFydFRpbWVNaW5zQ29udiA9IChzdGFydFRpbWUuZ2V0TWludXRlcygpIDwgMTAgPyAnMCcgOiAnJykgKyBzdGFydFRpbWUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZShsaXN0ZWRFdmVudHNbMF0uZW5kLmRhdGVUaW1lKTtcbiAgICBjb25zdCBlbmRUaW1lTWluc0NvbnYgPSAoZW5kVGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGVuZFRpbWUuZ2V0TWludXRlcygpO1xuXG4gICAgLy9TaG93XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpdGxlXCIpLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzWzBdLnN1bW1hcnk7IC8vTWVldCB0aXRsZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC1vcmdcIikudGV4dENvbnRlbnQgPSBsaXN0ZWRFdmVudHNbMF0uY3JlYXRvci5lbWFpbC5zbGljZSgwLGxpc3RlZEV2ZW50c1swXS5jcmVhdG9yLmVtYWlsLnNlYXJjaCgnQCcpKTsvL09yZ2FuaXplciB3aXRob3V0IEBnbWFpbC5jb21cbiAgICBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZXQtdGltZVwiKS50ZXh0Q29udGVudCA9IGAke2dldFdlZWtEYXlOYW1lKHN0YXJ0VGltZSl9LCAke3N0YXJ0VGltZS5nZXRIb3VycygpfToke3N0YXJ0VGltZU1pbnNDb252fSAtICR7ZW5kVGltZS5nZXRIb3VycygpfToke2VuZFRpbWVNaW5zQ29udn1gOyAvL01lZXQgdGltZVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXJlc2VydmVcIikuc3R5bGUuZGlzcGxheSA9XCJibG9ja1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW1nXCIpLnNyYyA9IGJnSW1nRnJlZTtcblxuICAgIC8vSGlkZVxuICAgIHJlc2VydmUuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbiAgICBlbmRNZWV0aW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuby1ldmVudHNcIikudGV4dENvbnRlbnQgPVwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGRvd24tY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPVwiaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tZW5kXCIpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBcbiAgICBcbn1cblxuLy9JZiB0aGVyZSBhcmUgbm8gbWVldGluZ3MgZmV0Y2hlZCB0aG91Z2ggdGhlIEFQSSwgZHVlIHRvIG5vIHVwY29taW5nIG1lZXRpbmdzXG5mdW5jdGlvbiBlbXB0eU1lZXRpbmdTdGF0ZSgpe1xuXG4gICAgLy9TaG93XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNuby1ldmVudHNcIikudGV4dENvbnRlbnQgPVwiSW5nZW4gQmVnaXZlbmhlZGVyXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tcmVzZXJ2ZVwiKS5zdHlsZS5kaXNwbGF5ID1cImJsb2NrXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb3VudGRvd24tY29udGFpbmVyXCIpLnN0eWxlLnZpc2liaWxpdHkgPVwiaGlkZGVuXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNiZy1pbWdcIikuc3JjID0gYmdJbWdGcmVlO1xuXG4gICAgLy9IaWRlXG4gICAgcmVzZXJ2ZS5jbGFzc0xpc3QucmVtb3ZlKFwiYnV0dG9uLS1sb2FkaW5nXCIpO1xuICAgICAgICAgIGVuZE1lZXRpbmcuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZXQtdGl0bGVcIikudGV4dENvbnRlbnQgPVwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LXRpbWVcIikudGV4dENvbnRlbnQgPVwiXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZWV0LW9yZ1wiKS50ZXh0Q29udGVudCA9XCJcIjsgLy9Pcmdhbml6ZXJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1lbmRcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIFxufVxuXG5mdW5jdGlvbiBhY3RpdmVNZWV0aW5nU3RhdGUoKXtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShsaXN0ZWRFdmVudHNbMF0uc3RhcnQuZGF0ZVRpbWUpO1xuICAgIGNvbnN0IHN0YXJ0VGltZU1pbnNDb252ID0gKHN0YXJ0VGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIHN0YXJ0VGltZS5nZXRNaW51dGVzKCk7XG4gICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1swXS5lbmQuZGF0ZVRpbWUpO1xuICAgIGNvbnN0IGVuZFRpbWVNaW5zQ29udiA9IChlbmRUaW1lLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnIDogJycpICsgZW5kVGltZS5nZXRNaW51dGVzKCk7XG5cblxuICAgIC8vU2hvd1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGltZS1jb250ZW50XCIpLnN0eWxlLmRpc3BsYXkgPVwiZ3JpZFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC10aXRsZVwiKS50ZXh0Q29udGVudCA9IGxpc3RlZEV2ZW50c1swXS5zdW1tYXJ5OyAvL01lZXQgdGl0bGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lZXQtb3JnXCIpLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzWzBdLmNyZWF0b3IuZW1haWwuc2xpY2UoMCxsaXN0ZWRFdmVudHNbMF0uY3JlYXRvci5lbWFpbC5zZWFyY2goJ0AnKSk7IC8vT3JnYW5pemVyIHdpdGhvdXQgQGdtYWlsLmNvbVxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbWVldC10aW1lXCIpLnRleHRDb250ZW50ID0gYCR7Z2V0V2Vla0RheU5hbWUoc3RhcnRUaW1lKX0sICR7c3RhcnRUaW1lLmdldEhvdXJzKCl9OiR7c3RhcnRUaW1lTWluc0NvbnZ9IC0gJHtlbmRUaW1lLmdldEhvdXJzKCl9OiR7ZW5kVGltZU1pbnNDb252fWA7IC8vTWVldCB0aW1lXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNudW1iZXJcIikudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGNhbGN1bGF0ZVJlbWFpbmluZ1RpbWUoZW5kVGltZSkpfSBtaW5gO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY291bnRkb3duLWNvbnRhaW5lclwiKS5zdHlsZS52aXNpYmlsaXR5ID1cInZpc2libGVcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5uZXItY2lyY2xlJykuc3R5bGUuc3Ryb2tlRGFzaG9mZnNldCA9IGNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2Uoc3RhcnRUaW1lLGVuZFRpbWUpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWVuZFwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYmctaW1nXCIpLnNyYyA9IGJnSW1nT2NjdXBpZWQ7XG5cbiAgICAvL0hpZGVcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1yZXNlcnZlXCIpLnN0eWxlLmRpc3BsYXkgPVwibm9uZVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbm8tZXZlbnRzXCIpLnRleHRDb250ZW50ID1cIlwiO1xuICAgIHJlc2VydmUuY2xhc3NMaXN0LnJlbW92ZShcImJ1dHRvbi0tbG9hZGluZ1wiKTtcbiAgICBlbmRNZWV0aW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJidXR0b24tLWxvYWRpbmdcIik7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlBZGRpdGlvbmFsTWVldGluZ3MoKXtcbiAgICBjb25zdCB1cGNDb250YWluZXIgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYy1jb250ZW50Jyk7XG4gICAgdXBjQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGlzdGVkRXZlbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgLy9TZXQgdGltZSBjb3JyZWN0bHlcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUobGlzdGVkRXZlbnRzW2ldLnN0YXJ0LmRhdGVUaW1lKTtcbiAgICAgICAgY29uc3Qgc3RhcnRUaW1lTWluc0NvbnYgPSAoc3RhcnRUaW1lLmdldE1pbnV0ZXMoKSA8IDEwID8gJzAnIDogJycpICsgc3RhcnRUaW1lLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgY29uc3QgZW5kVGltZSA9IG5ldyBEYXRlKGxpc3RlZEV2ZW50c1tpXS5lbmQuZGF0ZVRpbWUpO1xuICAgICAgICBjb25zdCBlbmRUaW1lTWluc0NvbnYgPSAoZW5kVGltZS5nZXRNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGVuZFRpbWUuZ2V0TWludXRlcygpO1xuXG4gICAgICAgIC8vRGVmaW5lIGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJ1cGNvbWluZy1jYXJkXCIpO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGl0bGVcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzW2ldLnN1bW1hcnk7XG5cbiAgICAgICAgY29uc3Qgb3JnYW5pemVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBvcmdhbml6ZXIuY2xhc3NMaXN0LmFkZChcInVwY29taW5nLW9yZ1wiKTtcbiAgICAgICAgb3JnYW5pemVyLnRleHRDb250ZW50ID0gbGlzdGVkRXZlbnRzW2ldLmNyZWF0b3IuZW1haWw7XG5cbiAgICAgICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgdGltZS5jbGFzc0xpc3QuYWRkKFwidXBjb21pbmctdGltZVwiKTtcbiAgICAgICAgdGltZS50ZXh0Q29udGVudCA9IGAke2dldFdlZWtEYXlOYW1lKHN0YXJ0VGltZSl9LCAke3N0YXJ0VGltZS5nZXRIb3VycygpfToke3N0YXJ0VGltZU1pbnNDb252fSAtICR7ZW5kVGltZS5nZXRIb3VycygpfToke2VuZFRpbWVNaW5zQ29udn1gOyBcbiAgICAgICAgXG4gICAgICAgIC8vQXBwZW5kIGVsZW1lbnRzXG4gICAgICAgIHVwY0NvbnRhaW5lci5hcHBlbmQoY2FyZCk7XG4gICAgICAgIGNhcmQuYXBwZW5kKHRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmQob3JnYW5pemVyKTtcbiAgICAgICAgY2FyZC5hcHBlbmQodGltZSk7XG4gICAgfVxufVxuXG5cbi8vQ2FsY3VsYXRlcyB3aGljaCBkYXkgb2YgdGhlIHdlZWsgaXQgaXMuIFdpaWwgZGlzcGxheSBcIkkgZGFnIC8gSSBtb3JnZW5cIiwgaWYgdGhlIG1lZXRpbmcgaXMgd2l0aGluIHRoYXQgdGltZWZyYW1lXG5mdW5jdGlvbiBnZXRXZWVrRGF5TmFtZShtZWV0aW5nRGF0ZSl7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKHRvZGF5LmdldFVUQ0RheSgpID09IG1lZXRpbmdEYXRlLmdldFVUQ0RheSgpKXsgLy9TYW1tZSB1Z2VkYWdcbiAgICAgICAgcmV0dXJuIFwiSSBkYWdcIjtcbiAgICB9XG4gICAgXG4gICAgaWYgKHRvZGF5LmdldFVUQ0RheSgpICE9PSBtZWV0aW5nRGF0ZS5nZXRVVENEYXkoKSl7Ly9Gb3Jza2VsbGlnZSB1Z2VkYWdlXG4gICAgICAgIFxuICAgICAgICBpZih0b2RheS5nZXRVVENEYXkoKSA9PSA2KXsvL0h2aXMgZGV0IGVyIGzDuHJkYWcsIHRqZWtrZXIgdmkgbGlnZSBtYW51ZWx0IG9tIG7DpnN0ZSBkYWcgZXIgc8O4bmRhZyAoMCksIG9nIGFuZ2l2ZXIgZGVydmVkIFwiSSBtb3JnZW5cIlxuICAgICAgICAgICAgaWYgKG1lZXRpbmdEYXRlID09IDApe1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkkgbW9yZ2VuXCI7XG4gICAgICAgICAgICB9IGVsc2UgeyByZXR1cm4gdWdlZGFnZVttZWV0aW5nRGF0ZS5nZXRVVENEYXkoKV19OyAvL1JldHVuZXIgZGF0bywgaHZpcyBkZXQgZXIgbMOmbmdlcmUgdGlkIHRpbCBtw7hkZXQgZW5kIGRhZ2VuIGVmdGVyXG5cbiAgICAgICAgfSBlbHNlIGlmIChtZWV0aW5nRGF0ZS5nZXRVVENEYXkoKS10b2RheS5nZXRVVENEYXkoKSA9PSAxKXsgLy9IdmlzIG3DuGRldCBlciBpIG1vcmdlblxuICAgICAgICAgICAgcmV0dXJuIFwiSSBtb3JnZW5cIjtcbiAgICAgICAgfSBlbHNlIHsgcmV0dXJuIHVnZWRhZ2VbbWVldGluZ0RhdGUuZ2V0VVRDRGF5KCldfTsgLy9SZXR1bmVyIGRhdG8sIGh2aXMgZGV0IGVyIGzDpm5nZXJlIHRpZCB0aWwgbcO4ZGV0IGVuZCBkYWdlbiBlZnRlclxuICAgIH1cbn1cblxuXG5mdW5jdGlvbiBjdXJyZW50VGltZSgpe1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBjdXJyZW50VGltZUNvbnZlcnRlZCA9IChjdXJyZW50VGltZS5nZXRVVENNaW51dGVzKCkgPCAxMCA/ICcwJyA6ICcnKSArIGN1cnJlbnRUaW1lLmdldFVUQ01pbnV0ZXMoKTtcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnJlbnQtdGltZScpLnRleHRDb250ZW50ID0gYCR7dG9kYXkuZ2V0SG91cnMoKX06JHtjdXJyZW50VGltZUNvbnZlcnRlZH1gXG4gICAgXG59XG5cbmV4cG9ydCB7YW5pbWF0aW9uQWN0aXZlfTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNvdW50ZG93bi1jb250YWluZXJ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyAgXG4gICAgaGVpZ2h0OjQxNXB4O1xuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5zdmd7XG4gICAgZGlzcGxheTpmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyBcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuI251bWJlcntcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogNWVtO1xufVxuXG4jb3V0ZXItY2lyY2xleyAvKiBiYWNrZ3JvdW5kIHRvIHRpbWVyKi9cbiAgICBmaWxsOm5vbmU7XG4gICAgc3Ryb2tlOiAjRDk4MjgyO1xuICAgIHN0cm9rZS13aWR0aDogNDBweDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIHI6MTgwOyBcbiAgICBjeDo1MCU7XG4gICAgY3k6NTAlO1xufVxuI2lubmVyLWNpcmNsZXsgLyogdGltZXIgaW5kaWNhdG9yKi9cbiAgICBmaWxsOm5vbmU7XG4gICAgc3Ryb2tlOiAjZmZmO1xuICAgIHN0cm9rZS13aWR0aDogNDBweDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgIHI6MTgwOyBcbiAgICBjeDo1MCU7XG4gICAgY3k6NTAlOyBcbn1cblxuXG4uY291bnRkb3duLS1zdGFydHtcbiAgICBhbmltYXRpb246IGFuaW0tb3BlbiAxLjVzIGVhc2Utb3V0OyBcbn1cbi5jb3VudGRvd24tLWVuZHtcbiAgICBhbmltYXRpb246IGFuaW0tY2xvc2UgMS41cyBlYXNlLW91dDsgXG59XG5cbkBrZXlmcmFtZXMgYW5pbS1jbG9zZSB7XG4gICBcbiAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDExMzA7XG4gICAgfVxufVxuQGtleWZyYW1lcyBhbmltLW9wZW4ge1xuICAgXG4gICAgMCV7XG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XG4gICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMTMwO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgfVxufVxuXG5cbiN0aW1lcntcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5cblxuXG4jaW5kaWNhdG9yLWFuaW17XG4gICAgZmlsbDogbm9uZTtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBhbmltYXRpb246IGFuaW0gMC4zcyBlYXNlLW91dDtcbiAgICBzdHJva2U6IHdoaXRlO1xuICAgIHN0cm9rZS13aWR0aDogMnB4O1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMjkwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMjkwO1xuICAgIGFuaW1hdGlvbjogYW5pbSAyLjVzIGVhc2UtaW4gaW5maW5pdGUgcmV2ZXJzZTtcbiAgICAvKiBhbmltYXRpb246IGFuaW0tY2xvc2UgMXMgZWFzZS1vdXQgcmV2ZXJzZTsgKi9cbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgcjoyMDU7IFxuICAgIGN4OjUwJTtcbiAgICBjeTo1MCU7XG59XG5cbkBrZXlmcmFtZXMgYW5pbSB7XG4gICAgMCUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2MDA7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQwMGRlZyk7XG4gICAgfVxuICAgIDEwMCV7XG4gICAgICAgIHRyYW5zZm9ybTpyb3RhdGUoNzIwZGVnKTtcbiAgICB9XG4gICAgXG59XG5cblxuXG5cbi8qIC5zdmctb24tZGVsZXRle1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTsgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFuaW1hdGlvbjogYW5pbWEgMXMgZWFzZS1vdXQ7XG59XG5Aa2V5ZnJhbWVzIGFuaW1hIHtcblxuICAgIDEwMCV7XG4gICAgICAgIHNjYWxlOiAxNTAlO1xuICAgIH1cbn0gKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9DRFN0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsY0FBYztBQUNsQjs7QUFFQSxlQUFlLHVCQUF1QjtJQUNsQyxTQUFTO0lBQ1QsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLEtBQUs7SUFDTCxNQUFNO0lBQ04sTUFBTTtBQUNWO0FBQ0EsZUFBZSxtQkFBbUI7SUFDOUIsU0FBUztJQUNULFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQixLQUFLO0lBQ0wsTUFBTTtJQUNOLE1BQU07QUFDVjs7O0FBR0E7SUFDSSxrQ0FBa0M7QUFDdEM7QUFDQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTs7SUFFSTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7QUFDSjtBQUNBOztJQUVJO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLG9CQUFvQjtJQUN4QjtBQUNKOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7Ozs7O0FBS0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsNkNBQTZDO0lBQzdDLCtDQUErQztJQUMvQyx3QkFBd0I7SUFDeEIsS0FBSztJQUNMLE1BQU07SUFDTixNQUFNO0FBQ1Y7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksdUJBQXVCO1FBQ3ZCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCOztBQUVKOzs7OztBQUtBOzs7Ozs7Ozs7Ozs7Ozs7R0FlR1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY291bnRkb3duLWNvbnRhaW5lcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47ICBcXG4gICAgaGVpZ2h0OjQxNXB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDEgLyAxO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuc3Zne1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuXFxuI251bWJlcntcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6d2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbn1cXG5cXG4jb3V0ZXItY2lyY2xleyAvKiBiYWNrZ3JvdW5kIHRvIHRpbWVyKi9cXG4gICAgZmlsbDpub25lO1xcbiAgICBzdHJva2U6ICNEOTgyODI7XFxuICAgIHN0cm9rZS13aWR0aDogNDBweDtcXG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMTEzMDtcXG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XFxuICAgIHI6MTgwOyBcXG4gICAgY3g6NTAlO1xcbiAgICBjeTo1MCU7XFxufVxcbiNpbm5lci1jaXJjbGV7IC8qIHRpbWVyIGluZGljYXRvciovXFxuICAgIGZpbGw6bm9uZTtcXG4gICAgc3Ryb2tlOiAjZmZmO1xcbiAgICBzdHJva2Utd2lkdGg6IDQwcHg7XFxuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XFxuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xcbiAgICByOjE4MDsgXFxuICAgIGN4OjUwJTtcXG4gICAgY3k6NTAlOyBcXG59XFxuXFxuXFxuLmNvdW50ZG93bi0tc3RhcnR7XFxuICAgIGFuaW1hdGlvbjogYW5pbS1vcGVuIDEuNXMgZWFzZS1vdXQ7IFxcbn1cXG4uY291bnRkb3duLS1lbmR7XFxuICAgIGFuaW1hdGlvbjogYW5pbS1jbG9zZSAxLjVzIGVhc2Utb3V0OyBcXG59XFxuXFxuQGtleWZyYW1lcyBhbmltLWNsb3NlIHtcXG4gICBcXG4gICAgMTAwJSB7XFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMTMwO1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDExMzA7XFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBhbmltLW9wZW4ge1xcbiAgIFxcbiAgICAwJXtcXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTEzMDtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDExMzA7XFxuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcXG4gICAgfVxcbn1cXG5cXG5cXG4jdGltZXJ7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4jaW5kaWNhdG9yLWFuaW17XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgYW5pbWF0aW9uOiBhbmltIDAuM3MgZWFzZS1vdXQ7XFxuICAgIHN0cm9rZTogd2hpdGU7XFxuICAgIHN0cm9rZS13aWR0aDogMnB4O1xcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxMjkwO1xcbiAgICBzdHJva2UtZGFzaG9mZnNldDogMTI5MDtcXG4gICAgYW5pbWF0aW9uOiBhbmltIDIuNXMgZWFzZS1pbiBpbmZpbml0ZSByZXZlcnNlO1xcbiAgICAvKiBhbmltYXRpb246IGFuaW0tY2xvc2UgMXMgZWFzZS1vdXQgcmV2ZXJzZTsgKi9cXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbiAgICByOjIwNTsgXFxuICAgIGN4OjUwJTtcXG4gICAgY3k6NTAlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGFuaW0ge1xcbiAgICAwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcXG4gICAgfVxcbiAgICA0MCUge1xcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDE2MDA7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0MDBkZWcpO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuICAgICAgICB0cmFuc2Zvcm06cm90YXRlKDcyMGRlZyk7XFxuICAgIH1cXG4gICAgXFxufVxcblxcblxcblxcblxcbi8qIC5zdmctb24tZGVsZXRle1xcbiAgICBkaXNwbGF5OmZsZXg7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtOTBkZWcpOyBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYW5pbWF0aW9uOiBhbmltYSAxcyBlYXNlLW91dDtcXG59XFxuQGtleWZyYW1lcyBhbmltYSB7XFxuXFxuICAgIDEwMCV7XFxuICAgICAgICBzY2FsZTogMTUwJTtcXG4gICAgfVxcbn0gKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIC5oaWRleyAgXG4gICAgYW5pbWF0aW9uOiBkaWEtY2xvc2UgMXMgbGluZWFyOyAgICAgXG59ICovXG5cbiNyZXNlcnZlLWRpYWxvZzpub3QoW29wZW5dKXsgIFxuICAgIGFuaW1hdGlvbjogZGlhLWNsb3NlIDFzIGxpbmVhcjsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93Z3JlZW47ICAgIFxufVxuXG4jcmVzZXJ2ZS1kaWFsb2dbb3Blbl17XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig5MCwgNTgsIDk4KTtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYW5pbWF0aW9uOiBkaWEtb3BlbiAwLjFzIGxpbmVhcjsgICBcbn1cblxuI3Jlc2VydmUtYnRuZ3JvdXB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIFxufVxuI3Jlc2VydmUtZGlhbG9nOjpiYWNrZHJvcHtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuI3Jlc2VydmUtaGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbiNyZXNlcnZlLWNsb3Nle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG5cbi8qIFNwaW5uZXIgZWxlbWVudCBvbiBidXR0b24gKi9cbi5idXR0b24tLWxvYWRpbmcgLmJ1dHRvbl9fdGV4dCB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbiAgXG4gIC5idXR0b24tLWxvYWRpbmc6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IGJ1dHRvbi1sb2FkaW5nLXNwaW5uZXIgMXMgZWFzZSBpbmZpbml0ZTtcbiAgfVxuICAuYnV0dG9uX190ZXh0IHtcbiAgICBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbn1cbiAgQGtleWZyYW1lcyBidXR0b24tbG9hZGluZy1zcGlubmVyIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDB0dXJuKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDF0dXJuKTtcbiAgICB9XG4gIH1cblxuLyogU3Bpbm5lciBidXR0b24gZW5kKi9cblxuXG5cblxuXG5Aa2V5ZnJhbWVzIGRpYS1vcGVue1xuICAgIDAle1xuICAgICAgICBcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTEwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLDApO1xuICAgIH1cbiAgICAxMDAle1xuXG4gICAgfVxufVxuQGtleWZyYW1lcyBkaWEtY2xvc2V7XG4gICAgMCV7XG4gICAgICAgIFxuICAgIH1cbiAgICAxMDAle1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2RpYWxvZy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0dBRUc7O0FBRUg7SUFDSSw4QkFBOEI7SUFDOUIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZOztBQUVoQjtBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOzs7QUFHQSw4QkFBOEI7QUFDOUI7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtFQUNaOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0RBQWtEO0VBQ3BEO0VBQ0E7O0lBRUUsb0JBQW9CO0FBQ3hCO0VBQ0U7SUFDRTtNQUNFLHdCQUF3QjtJQUMxQjs7SUFFQTtNQUNFLHdCQUF3QjtJQUMxQjtFQUNGOztBQUVGLHNCQUFzQjs7Ozs7O0FBTXRCO0lBQ0k7O1FBRUkscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsdUNBQXVDO0lBQzNDO0lBQ0E7O0lBRUE7QUFDSjtBQUNBO0lBQ0k7O0lBRUE7SUFDQTtRQUNJLFFBQVE7UUFDUixTQUFTO0lBQ2I7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiAuaGlkZXsgIFxcbiAgICBhbmltYXRpb246IGRpYS1jbG9zZSAxcyBsaW5lYXI7ICAgICBcXG59ICovXFxuXFxuI3Jlc2VydmUtZGlhbG9nOm5vdChbb3Blbl0peyAgXFxuICAgIGFuaW1hdGlvbjogZGlhLWNsb3NlIDFzIGxpbmVhcjsgXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvd2dyZWVuOyAgICBcXG59XFxuXFxuI3Jlc2VydmUtZGlhbG9nW29wZW5de1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6ZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDkwLCA1OCwgOTgpO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBhbmltYXRpb246IGRpYS1vcGVuIDAuMXMgbGluZWFyOyAgIFxcbn1cXG5cXG4jcmVzZXJ2ZS1idG5ncm91cHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIFxcbn1cXG4jcmVzZXJ2ZS1kaWFsb2c6OmJhY2tkcm9we1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuI3Jlc2VydmUtaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNyZXNlcnZlLWNsb3Nle1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcblxcblxcbi8qIFNwaW5uZXIgZWxlbWVudCBvbiBidXR0b24gKi9cXG4uYnV0dG9uLS1sb2FkaW5nIC5idXR0b25fX3RleHQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICBcXG4gIC5idXR0b24tLWxvYWRpbmc6OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmZmZmZmO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGFuaW1hdGlvbjogYnV0dG9uLWxvYWRpbmctc3Bpbm5lciAxcyBlYXNlIGluZmluaXRlO1xcbiAgfVxcbiAgLmJ1dHRvbl9fdGV4dCB7XFxuICAgIFxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcXG59XFxuICBAa2V5ZnJhbWVzIGJ1dHRvbi1sb2FkaW5nLXNwaW5uZXIge1xcbiAgICBmcm9tIHtcXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwdHVybik7XFxuICAgIH1cXG4gIFxcbiAgICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pO1xcbiAgICB9XFxuICB9XFxuXFxuLyogU3Bpbm5lciBidXR0b24gZW5kKi9cXG5cXG5cXG5cXG5cXG5cXG5Aa2V5ZnJhbWVzIGRpYS1vcGVue1xcbiAgICAwJXtcXG4gICAgICAgIFxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgdG9wOiAtMTAlO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMDAsIDEwMCwgMTAwLDApO1xcbiAgICB9XFxuICAgIDEwMCV7XFxuXFxuICAgIH1cXG59XFxuQGtleWZyYW1lcyBkaWEtY2xvc2V7XFxuICAgIDAle1xcbiAgICAgICAgXFxuICAgIH1cXG4gICAgMTAwJXtcXG4gICAgICAgIHdpZHRoOiAwO1xcbiAgICAgICAgaGVpZ2h0OiAwO1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC0tcHJpLWNvbDogIzI1MjQyNDsgLyojMjUyNDI0OyovXG4gICAgLS1zZWMtY29sOiByZ2IoMTksIDM1LCA0OSwgMC4zKTsgLypyZ2IoMTksIDM1LCA0OSkqL1xuICAgIC0tY2FyZC1jb2w6IHJnYigyNCwgNDMsIDYwKTtcbiAgICAtLWJ0bi1wcmltOiByZ2IoNDksIDQ5LCAxNDIpO1xuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cbmJvZHl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMHZoOyBcbn1cbiNiZy1pbWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLyogZGl2e1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufSAqL1xuLmNvbnRhaW5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1jb2wpOyAqL1xuICAgIGZsZXg6MTtcbn1cbi5tYWluLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiA1MHB4IDUwcHggMHB4IDUwcHg7XG4gICAgZ2FwOiAzMHB4O1xufVxuXG4udGltZS1jb250ZW50e1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleDogMTtcbiAgICBcbn1cbi50aXRsZS10aW1lLWNvbnRhaW5lcntcbiAgICBmbGV4LXNocmluazogMDtcbn1cblxuXG5cblxuXG4uaGVhZGVyLWNvbnRlbnR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuXG5cblxuI25vLWV2ZW50c3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogMzAlO1xuICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjp3aGl0ZTtcbn1cblxuI2Nvbm5lY3QtR0F7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLyogU2Vjb25kYXJ5IGNvbnRlbnQgLyB1cGNvbW1pbmcgbWVlaXRuZ3MgY3NzKi9cbi5zZWMtY29udGVudHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWNvbCk7XG4gICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cblxuLnNlYy1jb250ZW50IGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAycHg7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWNvbCk7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7IC8qdGplayB2w6ZyZGkqL1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW46IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuXG5cbi5zZWMtY29udGVudCBoMXtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDIuMmVtO1xufVxuLnNlYy1jb250ZW50IGgye1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cblxuXG4jYnRuLWVuZCwgI2J0bi1yZXNlcnZle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbiNjdXJyZW50LXRpbWV7XG4gICAgZm9udC1zaXplOiA1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0byAwO1xufVxuXG5cbi8qR0VORVJBTCB1dGlsaXRpdGVzKi9cblxuaDEsIGgyLCBoM3tcbiAgICBjb2xvcjogd2hpdGU7XG59XG5oMXtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICBjb2xvcjogcmdiKDIxMiwgMjA5LCAyMDkpO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5oMntcbiAgICBmb250LXNpemU6IDRlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaDN7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5idXR0b257XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5wcmltYXJ5LWJ0bntcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDI1cHg7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnRuLXByaW0pO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ucHJpbWFyeS1idG46YWN0aXZle1xuICAgIHRyYW5zZm9ybTogc2NhbGUoOTUlKTtcbiAgICBjb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xuICAgIFxufVxuXG4uc2Vjb25kYXJ5LWJ0bntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uc2Vjb25kYXJ5LWJ0bjphY3RpdmV7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xuICAgIGNvbG9yOiByZ2IoMTg3LCAxODUsIDE4NSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE4NywgMTg1LCAxODUpO1xuICAgIG1hcmdpbjogMXB4O1xufVxuLnNlY29uZGFyeS1idG46ZGlzYWJsZWR7XG4gICAgY29sb3I6IHJnYig5OCwgOTgsIDk4KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoOTgsIDk4LCA5OCk7XG59XG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsa0JBQWtCLEVBQUUsV0FBVztJQUMvQiwrQkFBK0IsRUFBRSxrQkFBa0I7SUFDbkQsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QiwrQkFBK0I7QUFDbkM7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztHQUVHO0FBQ0g7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHNDQUFzQztJQUN0QyxNQUFNO0FBQ1Y7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixPQUFPOztBQUVYO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOzs7Ozs7QUFNQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOzs7OztBQUtBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQSw4Q0FBOEM7QUFDOUM7SUFDSSxhQUFhO0lBQ2IsT0FBTztJQUNQLDZCQUE2QjtJQUM3QixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixpQ0FBaUM7SUFDakMsaUJBQWlCLEVBQUUsYUFBYTtJQUNoQyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7OztBQUlBO0lBQ0ksb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7O0FBSUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOzs7QUFHQSxxQkFBcUI7O0FBRXJCO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7O0FBRTdCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLFdBQVc7QUFDZjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlDQUFpQztBQUNyQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqe1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC0tcHJpLWNvbDogIzI1MjQyNDsgLyojMjUyNDI0OyovXFxuICAgIC0tc2VjLWNvbDogcmdiKDE5LCAzNSwgNDksIDAuMyk7IC8qcmdiKDE5LCAzNSwgNDkpKi9cXG4gICAgLS1jYXJkLWNvbDogcmdiKDI0LCA0MywgNjApO1xcbiAgICAtLWJ0bi1wcmltOiByZ2IoNDksIDQ5LCAxNDIpO1xcbiAgICBmb250LWZhbWlseTogXFxcIkxhdG9cXFwiLCBzYW5zLXNlcmlmO1xcbn1cXG5ib2R5e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGhlaWdodDogMTAwdmg7IFxcbn1cXG4jYmctaW1ne1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLyogZGl2e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59ICovXFxuLmNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaS1jb2wpOyAqL1xcbiAgICBmbGV4OjE7XFxufVxcbi5tYWluLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgcGFkZGluZzogNTBweCA1MHB4IDBweCA1MHB4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi50aW1lLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgZmxleDogMTtcXG4gICAgXFxufVxcbi50aXRsZS10aW1lLWNvbnRhaW5lcntcXG4gICAgZmxleC1zaHJpbms6IDA7XFxufVxcblxcblxcblxcblxcblxcbi5oZWFkZXItY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5cXG5cXG5cXG4jbm8tZXZlbnRze1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiAzMCU7XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4jY29ubmVjdC1HQXtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNDAlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcblxcbi8qIFNlY29uZGFyeSBjb250ZW50IC8gdXBjb21taW5nIG1lZWl0bmdzIGNzcyovXFxuLnNlYy1jb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2VjLWNvbCk7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG5cXG5cXG4uc2VjLWNvbnRlbnQgZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDJweDtcXG4gICAgbWluLXdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1jb2wpO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDsgLyp0amVrIHbDpnJkaSovXFxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5cXG5cXG4uc2VjLWNvbnRlbnQgaDF7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcbiAgICBmb250LXNpemU6IDIuMmVtO1xcbn1cXG4uc2VjLWNvbnRlbnQgaDJ7XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcblxcblxcblxcbiNidG4tZW5kLCAjYnRuLXJlc2VydmV7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiNjdXJyZW50LXRpbWV7XFxuICAgIGZvbnQtc2l6ZTogNWVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogYXV0byAwO1xcbn1cXG5cXG5cXG4vKkdFTkVSQUwgdXRpbGl0aXRlcyovXFxuXFxuaDEsIGgyLCBoM3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5oMXtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIGNvbG9yOiByZ2IoMjEyLCAyMDksIDIwOSk7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcbmgye1xcbiAgICBmb250LXNpemU6IDRlbTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XFxuaDN7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbn1cXG5idXR0b257XFxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG59XFxuXFxuLnByaW1hcnktYnRue1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idG4tcHJpbSk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLnByaW1hcnktYnRuOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xcbiAgICBjb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xcbiAgICBcXG59XFxuXFxuLnNlY29uZGFyeS1idG57XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZzogMTVweCAyNXB4O1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5zZWNvbmRhcnktYnRuOmFjdGl2ZXtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSg5NSUpO1xcbiAgICBjb2xvcjogcmdiKDE4NywgMTg1LCAxODUpO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTg3LCAxODUsIDE4NSk7XFxuICAgIG1hcmdpbjogMXB4O1xcbn1cXG4uc2Vjb25kYXJ5LWJ0bjpkaXNhYmxlZHtcXG4gICAgY29sb3I6IHJnYig5OCwgOTgsIDk4KTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDk4LCA5OCwgOTgpO1xcbn1cXG5cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9DRFN0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0NEU3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2RpYWxvZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9kaWFsb2cuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAqIGFzIGNzcyBmcm9tIFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIGNzczIgZnJvbSBcIi4vQ0RTdHlsZS5jc3NcIjtcbmltcG9ydCAqIGFzIGNzczMgZnJvbSBcIi4vZGlhbG9nLmNzc1wiXG5pbXBvcnQgJy4vc3RhdGVDb250cm9sbGVyJztcbmltcG9ydCAnLi9jb3VudERvd24nO1xuaW1wb3J0ICcuL21hbmlwdWxhdGVNZWV0aW5ncyc7XG5pbXBvcnQgJy4vZ2FwaSc7XG5pbXBvcnQgYmdJbWdGcmVlIGZyb20gJy4vaW1nL0JnLWltZy5wbmcnO1xuaW1wb3J0IGJnSW1nT2NjdXBpZWQgZnJvbSAnLi9pbWcvQmctaW1nLW9jY3VwaWVkLnBuZyc7XG5cblxuXG5cblxuXG5cblxuIl0sIm5hbWVzIjpbImNhbGN1bGF0ZUNpcmNsZUNpcmN1bWZlcmVuY2UiLCJzdGFydFRpbWUiLCJlbmRUaW1lIiwidG9kYXkiLCJEYXRlIiwiZ2V0VGltZSIsInN0YXJ0VGltZUluTWlsbGlzIiwiZW5kVGltZUluTWlsbGlzIiwidG90YWxNZWV0aW5nVGltZSIsImVsYWJzZWRNZWV0aW5nVGltZSIsInBlcmNlbnRNZWV0aW5nRWxhYnNlZCIsImNhbGN1bGF0ZVJlbWFpbmluZ1RpbWUiLCJfcmVnZW5lcmF0b3JSdW50aW1lIiwiZSIsInQiLCJyIiwiT2JqZWN0IiwicHJvdG90eXBlIiwibiIsImhhc093blByb3BlcnR5IiwibyIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJpIiwiU3ltYm9sIiwiYSIsIml0ZXJhdG9yIiwiYyIsImFzeW5jSXRlcmF0b3IiLCJ1IiwidG9TdHJpbmdUYWciLCJkZWZpbmUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJ3cmFwIiwiR2VuZXJhdG9yIiwiY3JlYXRlIiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsInR5cGUiLCJhcmciLCJjYWxsIiwiaCIsImwiLCJmIiwicyIsInkiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwicCIsImQiLCJnZXRQcm90b3R5cGVPZiIsInYiLCJ2YWx1ZXMiLCJnIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiaW52b2tlIiwiX3R5cGVvZiIsInJlc29sdmUiLCJfX2F3YWl0IiwidGhlbiIsImNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnIiwiRXJyb3IiLCJkb25lIiwibWV0aG9kIiwiZGVsZWdhdGUiLCJtYXliZUludm9rZURlbGVnYXRlIiwic2VudCIsIl9zZW50IiwiZGlzcGF0Y2hFeGNlcHRpb24iLCJhYnJ1cHQiLCJUeXBlRXJyb3IiLCJyZXN1bHROYW1lIiwibmV4dCIsIm5leHRMb2MiLCJwdXNoVHJ5RW50cnkiLCJ0cnlMb2MiLCJjYXRjaExvYyIsImZpbmFsbHlMb2MiLCJhZnRlckxvYyIsInRyeUVudHJpZXMiLCJwdXNoIiwicmVzZXRUcnlFbnRyeSIsImNvbXBsZXRpb24iLCJyZXNldCIsImlzTmFOIiwibGVuZ3RoIiwiZGlzcGxheU5hbWUiLCJpc0dlbmVyYXRvckZ1bmN0aW9uIiwiY29uc3RydWN0b3IiLCJuYW1lIiwibWFyayIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiYXdyYXAiLCJhc3luYyIsIlByb21pc2UiLCJrZXlzIiwicmV2ZXJzZSIsInBvcCIsInByZXYiLCJjaGFyQXQiLCJzbGljZSIsInN0b3AiLCJydmFsIiwiaGFuZGxlIiwiY29tcGxldGUiLCJmaW5pc2giLCJfY2F0Y2giLCJkZWxlZ2F0ZVlpZWxkIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwibGlzdGVkRXZlbnRzIiwiQ0xJRU5UX0lEIiwiQVBJX0tFWSIsIkRJU0NPVkVSWV9ET0MiLCJTQ09QRVMiLCJ0b2tlbkNsaWVudCIsImdhcGlJbml0ZWQiLCJnaXNJbml0ZWQiLCJhdXRob3JpemVkIiwid2luZG93IiwiZ2FwaUxvYWRlZCIsImdhcGkiLCJsb2FkIiwiaW5pdGlhbGl6ZUdhcGlDbGllbnQiLCJfaW5pdGlhbGl6ZUdhcGlDbGllbnQiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsImNsaWVudCIsImluaXQiLCJhcGlLZXkiLCJkaXNjb3ZlcnlEb2NzIiwiZ2lzTG9hZGVkIiwiZ29vZ2xlIiwiYWNjb3VudHMiLCJvYXV0aDIiLCJpbml0VG9rZW5DbGllbnQiLCJjbGllbnRfaWQiLCJzY29wZSIsImFjY2Vzc190eXBlIiwicHJvbXB0IiwiY2FsbGJhY2siLCJoYW5kbGVBdXRoQ2xpY2siLCJfcmVmIiwiX2NhbGxlZSIsInJlc3AiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwiZXJyb3IiLCJ1bmRlZmluZWQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJsaXN0VXBjb21pbmdFdmVudHMiLCJfeCIsImdldFRva2VuIiwicmVxdWVzdEFjY2Vzc1Rva2VuIiwicmV2b2tlQWNjZXNzIiwidG9rZW4iLCJyZXZva2VVcmwiLCJjb25jYXQiLCJhY2Nlc3NfdG9rZW4iLCJmZXRjaCIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInNldFRva2VuIiwiaGFuZGxlU2lnbm91dENsaWNrIiwicmV2b2tlIiwiX2xpc3RVcGNvbWluZ0V2ZW50cyIsIl9jYWxsZWUzIiwicmVxdWVzdCIsIl9jYWxsZWUzJCIsIl9jb250ZXh0MyIsInRvSVNPU3RyaW5nIiwiY2FsZW5kYXIiLCJldmVudHMiLCJsaXN0IiwicmVzdWx0IiwiaXRlbXMiLCJ0MCIsIm1lc3NhZ2UiLCJzZXRJbnRlcnZhbCIsImNyZWF0ZUV2ZW50IiwiX3gyIiwiX2NyZWF0ZUV2ZW50IiwiX2NhbGxlZTQiLCJleHRlbmRlZFRpbWUiLCJ0b2RheVBsdXMiLCJldmVudCIsIl9jYWxsZWU0JCIsIl9jb250ZXh0NCIsInNldE1pbnV0ZXMiLCJnZXRNaW51dGVzIiwiaW5zZXJ0IiwiZW5kRXZlbnQiLCJfeDMiLCJfZW5kRXZlbnQiLCJfY2FsbGVlNSIsInN0YXJ0RGF0ZSIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsInN1bW1hcnkiLCJ1cGRhdGUiLCJpZCIsImFuaW1hdGlvbkFjdGl2ZSIsImVuZE1lZXRpbmciLCJyZXNlcnZlIiwicmVzZXJ2ZURpYWxvZyIsImNsb3NlUmVzZXJ2ZURpYWxvZyIsImNpcmNsZUFuaW1PdXRlciIsInJlc2VydmVfMTAiLCJyZXNlcnZlXzE1IiwicmVzZXJ2ZV8zMCIsInJlc2VydmVfNjAiLCJhZGRFdmVudExpc3RlbmVyIiwiZW5kQ3VycmVudE1lZXRpbmciLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0Iiwic3Ryb2tlRGFzaG9mZnNldCIsInJlbW92ZSIsInNob3dNb2RhbCIsImNoZWNrRGlzYWJsZWRSZXNlcnZlVGltZXMiLCJjbG9zZSIsInRpbWVUb05leHRNZWV0aW5nIiwibmV4dE1lZXRpbmciLCJzdGFydCIsImRhdGVUaW1lIiwiZGlzYWJsZWQiLCJ1Z2VkYWdlIiwic2VjQ29udGVudCIsIm1lZXRpbmdTdGF0ZSIsImJnSW1nRnJlZSIsImJnSW1nT2NjdXBpZWQiLCJjdXJyZW50VGltZSIsImJhY2tncm91bmRDb2xvciIsImNoZWNrSWZBY3RpdmVNZWV0aW5nIiwiZW5kIiwiYWN0aXZlTWVldGluZ1N0YXRlIiwiZGlzcGxheUFkZGl0aW9uYWxNZWV0aW5ncyIsInVwY29taW5nTWVldGluZ1N0YXRlIiwiZW1wdHlNZWV0aW5nU3RhdGUiLCJzdGFydFRpbWVNaW5zQ29udiIsImVuZFRpbWVNaW5zQ29udiIsInRleHRDb250ZW50IiwiY3JlYXRvciIsImVtYWlsIiwic2VhcmNoIiwiZ2V0V2Vla0RheU5hbWUiLCJnZXRIb3VycyIsInNyYyIsInZpc2liaWxpdHkiLCJNYXRoIiwiZmxvb3IiLCJ1cGNDb250YWluZXIiLCJyZXBsYWNlQ2hpbGRyZW4iLCJjYXJkIiwiY3JlYXRlRWxlbWVudCIsInRpdGxlIiwib3JnYW5pemVyIiwidGltZSIsImFwcGVuZCIsIm1lZXRpbmdEYXRlIiwiZ2V0VVRDRGF5IiwiY3VycmVudFRpbWVDb252ZXJ0ZWQiLCJnZXRVVENNaW51dGVzIiwiY3NzIiwiY3NzMiIsImNzczMiXSwic291cmNlUm9vdCI6IiJ9