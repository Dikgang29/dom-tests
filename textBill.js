function TextWithBills(){

    //calls and sms totals
    let setCallCost = 2.75;
    let setSmsCost = 0.75;

    let textWarning = 30;
    let textCritical = 50;

    //the totals
    let textSmsTotal = 0;
    let textCallTotal = 0;
    
   // let overallTotal = 0;

    function sendSms(){
        textSmsTotal += setSmsCost;
    }

    function getSmsTotal(){
        return textSmsTotal;
    }


    function makeCall(){
         textCallTotal +=setCallCost;
    }
function getCallTotal(){
    return textCallTotal;
}


function getTotal(){

    return textCallTotal + textSmsTotal;
}

function levels(){

    if(getTotal()>=textWarning && getTotal()< textCritical){
        return 'warning';
    }
    if(getTotal()>=textCritical){
        return 'critical';
    }
}
    return{
        makeCall,
        getCallTotal,
        sendSms,
        getSmsTotal,
        getTotal,
        levels
       // aboveWarningLevel

    }
}