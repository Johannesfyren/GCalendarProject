import { gapiInited, gisInited, listedEvents, authorized} from "./gapi";
const ugedage = ["Søndag","Mandag","Tirsdag","Onsdag","Torsdag","Fredag","Lørdag"];

//Do we have any meetings in the calendar?
setInterval(function() {
    if (gapiInited && gisInited && authorized){

        if (!listedEvents.length==0){ //Checking if there are any meetings in the calendar

            if (checkIfActiveMeeting(listedEvents[0].start.dateTime,listedEvents[0].end.dateTime)){ //"checking if it any of the meetings is active!"
                activeMeetingState();
                displayAdditionalMeetings();
                

            }else { //("We have meetings in the calendar, but none is active!");
                upcomingMeetingState();
                displayAdditionalMeetings();
                
            }
        }
        else {//We have no meeetings coming up
            
            emptyMeetingState();
        }
    } 
  }, 5000);



function checkIfActiveMeeting(startTime, endTime){
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
    document.querySelector("#meet-org").textContent = listedEvents[0].creator.email;
    document.querySelector("#meet-time").textContent = `${getWeekDayName(startTime)}, ${startTime.getHours()}:${startTimeMinsConv} - ${endTime.getHours()}:${endTimeMinsConv}`; //Meet time
    document.querySelector("#btn-reserve").style.display ="block";
    document.querySelector("#no-events").textContent ="";
    document.querySelector(".countdown-container").style.visibility ="hidden";
    
}

function emptyMeetingState(){
    document.querySelector("#no-events").textContent ="Ingen Begivenheder";
    document.querySelector("#meet-title").textContent ="";
    document.querySelector("#meet-time").textContent ="";
    document.querySelector("#meet-org").textContent ="";
    document.querySelector("#btn-reserve").style.display ="block";
    document.querySelector(".countdown-container").style.visibility ="hidden";
}

function activeMeetingState(){
    const startTime = new Date(listedEvents[0].start.dateTime);
    const startTimeMinsConv = (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
    const endTime = new Date(listedEvents[0].end.dateTime);
    const endTimeMinsConv = (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();

    document.querySelector(".time-content").style.display ="grid";
    document.querySelector("#meet-title").textContent = listedEvents[0].summary; //Meet title
    document.querySelector("#meet-org").textContent =listedEvents[0].creator.email;
    document.querySelector("#meet-time").textContent = `${getWeekDayName(startTime)}, ${startTime.getHours()}:${startTimeMinsConv} - ${endTime.getHours()}:${endTimeMinsConv}`; //Meet time
    document.querySelector("#btn-reserve").style.display ="none";
    document.querySelector("#no-events").textContent ="";
    document.querySelector("#number").textContent = `${Math.floor(calculateRemainingTime(endTime))} min`;
    document.querySelector(".countdown-container").style.visibility ="visible";
    document.querySelector('circle#myCircle').style.strokeDashoffset = calculateCircleCircumference(startTime,endTime);
    
}

function displayAdditionalMeetings(){
    const upcContainer  = document.querySelector('.sec-content');
    upcContainer.replaceChildren();
    for (let i = 1; i < listedEvents.length; i++){
        //Set time correctly
        const startTime = new Date(listedEvents[i].start.dateTime);
        const startTimeMinsConv = (startTime.getMinutes() < 10 ? '0' : '') + startTime.getMinutes();
        const endTime = new Date(listedEvents[i].end.dateTime);
        const endTimeMinsConv = (endTime.getMinutes() < 10 ? '0' : '') + endTime.getMinutes();

        //Define elements
        const card = document.createElement("div");
        card.classList.add("upcoming-card");

        const title = document.createElement("h1");
        title.classList.add("upcoming-title");
        title.textContent = listedEvents[i].summary;

        const organizer = document.createElement("h2");
        organizer.classList.add("upcoming-org");
        organizer.textContent = listedEvents[i].creator.email;

        const time = document.createElement("h2");
        time.classList.add("upcoming-time");
        time.textContent = `${getWeekDayName(startTime)}, ${startTime.getHours()}:${startTimeMinsConv} - ${endTime.getHours()}:${endTimeMinsConv}`; 
        
        //Append elements
        upcContainer.append(card);
        card.append(title);
        card.append(organizer);
        card.append(time);
    }
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
    return (percentMeetingElabsed * 11.3); //11.3 is 1% of the circumference value used to draw the circle
    
}

function getWeekDayName(meetingDate){
    const today = new Date();

    if (today.getUTCDay() == meetingDate.getUTCDay()){ //Samme ugedag
        return "I dag";
    }
    
    if (today.getUTCDay() !== meetingDate.getUTCDay()){//Forskellige ugedage
        
        if(today.getUTCDay() == 6){//Hvis det er lørdag, tjekker vi lige manuelt om næste dag er søndag (0), og angiver derved "I morgen"
            if (meetingDate == 0){
                return "I morgen";
            } else { return ugedage[meetingDate.getUTCDay()]}; //Retuner dato, hvis det er længere tid til mødet end dagen efter

        } else if (meetingDate.getUTCDay()-today.getUTCDay() == 1){ //Hvis mødet er i morgen
            return "I morgen";
        } else { return ugedage[meetingDate.getUTCDay()]}; //Retuner dato, hvis det er længere tid til mødet end dagen efter
    }
}




