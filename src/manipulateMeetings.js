import { createEvent } from "./gapi";

const reserve = document.querySelector('#btn-reserve');
const reserveDialog = document.querySelector('#reserve-dialog');
const closeReserveDialog = document.querySelector('#reserve-close');

const reserve_10 = document.querySelector('#reserve-10');
const reserve_15 = document.querySelector('#reserve-15');
const reserve_30 = document.querySelector('#reserve-30');
const reserve_60 = document.querySelector('#reserve-60');


reserve.addEventListener('click', ()=>{
    reserveDialog.showModal();
})

closeReserveDialog.addEventListener('click', ()=>{
    reserveDialog.close();
})

reserve_10.addEventListener('click', ()=>{
    createEvent(10);
    reserveDialog.close();
})

reserve_15.addEventListener('click', ()=>{
    createEvent(15);
    reserveDialog.close();
})

reserve_30.addEventListener('click', ()=>{
    createEvent(30);
    reserveDialog.close();
})

reserve_60.addEventListener('click', ()=>{
    createEvent(60);
    reserveDialog.close();
})
