//Calculate the circumference to the countDown timer, so remaining time can be shown
function calculateCircleCircumference(startTime,endTime){
    const today = new Date().getTime();
    const startTimeInMillis = startTime.getTime();
    const endTimeInMillis = endTime.getTime();

    const totalMeetingTime = endTimeInMillis - startTimeInMillis;
    const elabsedMeetingTime = today - startTimeInMillis;
    const percentMeetingElabsed = elabsedMeetingTime/totalMeetingTime*100;
    return (percentMeetingElabsed * 11.3); //11.3 is 1% of the circumference value used to draw the circle
}

//Calculates how many minutes is left of current active meeting
function calculateRemainingTime(endTime){
    const today = new Date().getTime();
    const endTimeInMillis = endTime.getTime();
    return (endTimeInMillis-today)/1000/60;
}

export{calculateRemainingTime, calculateCircleCircumference}