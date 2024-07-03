import { createEvent } from "./gapi";

const reserve = document.querySelector('#btn-reserve');
const reserveDialog = document.querySelector('#reserve-dialog');
const closeReserveDialog = document.querySelector('#reserve-close');


reserve.addEventListener('click', ()=>{
    //createEvent(30);
    console.log("dad");
    reserveDialog.showModal();
})

closeReserveDialog.addEventListener('click', ()=>{
    //createEvent(30);
    console.log("dad");
    reserveDialog.close();
})
