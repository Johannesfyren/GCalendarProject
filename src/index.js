import * as css from "./style.css";
import * as css2 from "./CDStyle.css";
import * as css3 from "./dialog.css"
import './stateController';
import './countDown';
import './manipulateMeetings';
import './gapi';


const calendarName = document.querySelector("#cal-name");
const btnReserve = document.querySelector("#btn-reserve");
const meetingTitle = document.querySelector("#meet-title");
const meetingTime = document.querySelector("#meet-time");


const startTime = new Date(codeEx.codeEx.start.dateTime);
const endTime = new Date(codeEx.codeEx.end.dateTime);

const today = new Date();

meetingTitle.textContent = codeEx.codeEx.summary;


const teststart = new Date("2024-06-26T14:45:00+02:00");
const testend = new Date("2024-06-26T15:45:00+02:00");
console.log(` testing dates: ${today>testend}`)



console.log(today);
console.log(teststart);
console.log(testend);







