
function RadioBills(){

    // call and sms costs
    let checkedCallCost = 2.75;
    let checkedSmsCost = 0.75;

    // call, sms totals and overrall total
    let checkedSmsTotal = 0;
    let checkedCallTotal = 0;
   // let checkedTotal = 0;



    function checkedCall(){
        checkedCallTotal+=checkedCallCost;
    }

    function getCheckedCallTotal() {
        
        return checkedCallTotal;
    }
    function checkedSms(){

        checkedSmsTotal+=checkedSmsCost;
    }

    function getCheckedSmsTotal(){

        return checkedSmsTotal;
    }

    function getCheckedTotal(){
        return checkedCallTotal + checkedSmsTotal;
    }

    function radioClassLevels(){
        if(getCheckedTotal()>=30 && getCheckedTotal()<50){
            return 'warning';
        }
        if(getCheckedTotal()>=50){
            return 'critical';
        }
    }
    return{

        checkedCall,
        getCheckedCallTotal,
        checkedSms,
        getCheckedSmsTotal,
        getCheckedTotal,
        radioClassLevels
    }
}