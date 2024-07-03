import { createEvent } from "./gapi";

const reserve = document.querySelector('#btn-reserve');

reserve.addEventListener('click', ()=>{
    createEvent(30);
    console.log("dad");
})
