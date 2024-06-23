import * as css from "./style.css";
import codeEx from "./codex.js"
const calendarName = document.querySelector("#cal-name");
const btnReserve = document.querySelector("#btn-reserve");
const meetingTitle = document.querySelector("#meet-title");
const meetingTime = document.querySelector("#meet-time");


const startTime = new Date(codeEx.codeEx.start.dateTime);
const endTime = new Date(codeEx.codeEx.end.dateTime);

meetingTitle.textContent = codeEx.codeEx.summary;

console.log(startTime.getHours());
console.log(endTime.getHours());
console.log(codeEx.codeEx.start.dateTime);

