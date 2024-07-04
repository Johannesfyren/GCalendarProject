import { createEvent, endEvent, listedEvents } from "./gapi";

// document.querySelector("#button-reserve").classList.add("button--loading");

//btn.classList.add("button--loading");
//btn.classList.remove("button--loading");



const endMeeting = document.querySelector('#btn-end');

const reserve = document.querySelector('#btn-reserve');
const reserveDialog = document.querySelector('#reserve-dialog');
const closeReserveDialog = document.querySelector('#reserve-close');

const reserve_10 = document.querySelector('#reserve-10');
const reserve_15 = document.querySelector('#reserve-15');
const reserve_30 = document.querySelector('#reserve-30');
const reserve_60 = document.querySelector('#reserve-60');


endMeeting.addEventListener('click', ()=>{
    endCurrentMeeting();
    endMeeting.classList.add("button--loading");
})


reserve.addEventListener('click', ()=>{
    //checkDisabledReserveTimes();
    reserveDialog.showModal();
})

closeReserveDialog.addEventListener('click', ()=>{
    reserveDialog.close();
})

reserve_10.addEventListener('click', ()=>{
    createEvent(10);
    reserveDialog.close();
    reserve.classList.add("button--loading");
})

reserve_15.addEventListener('click', ()=>{
    createEvent(15);
    reserveDialog.close();
    reserve.classList.add("button--loading");
})

reserve_30.addEventListener('click', ()=>{
    createEvent(30);
    reserveDialog.close();
    reserve.classList.add("button--loading");
})

reserve_60.addEventListener('click', ()=>{
    createEvent(60);
    reserveDialog.close();
    reserve.classList.add("button--loading");
})

//Calculates the amount of minutes until next meeting is starting
function timeToNextMeeting(){
    const today = new Date();
    const nextMeeting = new Date(listedEvents[0].start.dateTime);
    
    return (nextMeeting.getTime()/1000/60) - (today.getTime()/1000/60);
}

//Sets the ad-hoc booking buttons to enabled/disabled, depending on if they would overlap upcoming meeting
function checkDisabledReserveTimes(){
    if(timeToNextMeeting()<60){
        reserve_60.disabled = true;
    } else {reserve_60.disabled = false;}
    if(timeToNextMeeting()<30){
        reserve_30.disabled = true;
    } else {reserve_30.disabled = false;}
    if(timeToNextMeeting()<15){
        reserve_15.disabled = true;
    } else {reserve_15.disabled = false;}
    if(timeToNextMeeting()<10){
        reserve_10.disabled = true;
    } else {reserve_10.disabled = false;}
}

function endCurrentMeeting(){
    endEvent(listedEvents[0].start.dateTime);
}

export {reserve, endMeeting}