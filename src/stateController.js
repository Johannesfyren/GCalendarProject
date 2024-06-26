import { listUpcomingEvents, gapiInited, gisInited, listedEvents, authorized} from "./gapi";
const fetchTest = document.querySelector("#test-fetch");
let state = 0;


//Do we have any meetings in the calendar?
setInterval(function() {
    console.log(listedEvents);
    if (gapiInited && gisInited && authorized){
        console.log("Checking if there are any meetings in the calendar");
        if (!listedEvents.length==0){
            console.log("there are meetings in the calendar!");
            console.log("checking if it any of the meetings is active!");
            
            if (checkActiveMeeting(listedEvents[0].start.dateTime,listedEvents[0].end.dateTime)){
                console.log("We have an active meeting!");
                state=2; //active meeting
                activeMeetingState();
            }else { 
                console.log("We have meetings in the calendar, but none is active!");
                state=1; //there are meetings, but none is active
                upcomingMeetingState();
            }
        }
    } else {
        //We have no meeetings coming up
        emptyMeetingState();
        state=0;
    }
  }, 10000);



function checkActiveMeeting(startTime, endTime){
    const today = new Date();
    const start = new Date(startTime);
    const end = new Date(endTime);
    
    if (start <= today && end >= today){
        return true;
    }
}

function upcomingMeetingState(){
    
    const startTime = new Date(listedEvents[0].start.dateTime);
    const startTimeMinsConv = (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
    const endTime = new Date(listedEvents[0].end.dateTime);
    const endTimeMinsConv = (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();

    document.querySelector("#meet-title").textContent = listedEvents[0].summary; //Meet title
    document.querySelector("#meet-time").textContent = `${startTime.getHours()}:${startTimeMinsConv} - ${endTime.getHours()}:${endTimeMinsConv}`; //Meet time
    document.querySelector("#btn-reserve").style.display ="block";
    document.querySelector("#no-events").textContent ="";
}

function emptyMeetingState(){
    document.querySelector("#no-events").textContent ="Ingen Begivenheder";
    document.querySelector("#meet-title").textContent ="";
    document.querySelector("#meet-time").textContent ="";
    document.querySelector("#btn-reserve").style.display ="block";
}

function activeMeetingState(){
    const startTime = new Date(listedEvents[0].start.dateTime);
    const startTimeMinsConv = (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
    const endTime = new Date(listedEvents[0].end.dateTime);
    const endTimeMinsConv = (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();
    
    document.querySelector("#meet-title").textContent = listedEvents[0].summary; //Meet title
    document.querySelector("#meet-time").textContent = `${startTime.getHours()}:${startTimeMinsConv} - ${endTime.getHours()}:${endTimeMinsConv}`; //Meet time
    document.querySelector("#btn-reserve").style.display ="none";
    document.querySelector("#no-events").textContent ="";
    
}



fetchTest.addEventListener("click", ()=>{
    if(gapiInited && gisInited){
        console.log(listedEvents.result.items);
    }
    
    console.log("hello?");
});

