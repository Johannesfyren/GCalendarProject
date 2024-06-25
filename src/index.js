import * as css from "./style.css";
import codeEx from "./codex.js"
//import { gapiLoaded } from "./gapi.js";


const calendarName = document.querySelector("#cal-name");
const btnReserve = document.querySelector("#btn-reserve");
const meetingTitle = document.querySelector("#meet-title");
const meetingTime = document.querySelector("#meet-time");


const startTime = new Date(codeEx.codeEx.start.dateTime);
const endTime = new Date(codeEx.codeEx.end.dateTime);

const today = new Date();

meetingTitle.textContent = codeEx.codeEx.summary;




console.log("start testing time diffs");



checkActiveMeeting(startTime,endTime);

function checkActiveMeeting(startTime, endTime){
    const today = new Date();
    
    if (startTime <= today && endTime >= today){
        console.log("Time is within!");
        
        //check if meeting spans multiple hours
        

    }
}




