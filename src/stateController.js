import { listUpcomingEvents, gapiInited, gisInited, listedEvents, authorized} from "./gapi";
const fetchTest = document.querySelector("#test-fetch");
let state = 0;


//Do we have any meetings in the calendar?
setInterval(function() {
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
        else {
            //We have no meeetings coming up
            emptyMeetingState();
            state=0;
        }
    } 
  }, 5000);



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
    document.querySelector("#number").textContent = `${Math.floor(calculateRemainingTime(endTime))} min`;
    document.querySelector('circle#myCircle').style.strokeDashoffset = calculateCircleCircumference(startTime,endTime);
    
    
   
    
}

function calculateRemainingTime(endTime){
    const today = new Date().getTime();
    const endTimeInMillis = endTime.getTime();
    return (endTimeInMillis-today)/1000/60;
}

function calculateCircleCircumference(startTime,endTime){
    const today = new Date().getTime();
    
    const startTimeInMillis = startTime.getTime();
    const endTimeInMillis = endTime.getTime();

    const totalMeetingTime = endTimeInMillis - startTimeInMillis;
    const elabsedMeetingTime = today - startTimeInMillis;
    const percentMeetingElabsed = elabsedMeetingTime/totalMeetingTime*100;
    console.log(`totalMeetingTime${totalMeetingTime}`);
    console.log(`elabsedtime${elabsedMeetingTime}`);
    console.log(`percentmeetingelablsed ${percentMeetingElabsed}`);
    return (percentMeetingElabsed * 4.5); //4.5 is 1% of the circumfrence value used to draw the circle
    
}




