import * as css from "./style.css";
import * as css2 from "./CDStyle.css";
import * as css3 from "./dialog.css"
import './stateController';
import './countDown';
import './manipulateMeetings';
import './gapi';
import bgImgFree from './img/Bg-img.png';
import bgImgOccupied from './img/Bg-img-occupied.png';






async function authenticate() {
    const response = await fetch('/auth');
    const message = await response.text();
    console.log(message); // Log the message from the server
  }
  
  // Call the authenticate function when needed (e.g., on a button click)
  document.querySelector('.test-auth').addEventListener('click', authenticate);



