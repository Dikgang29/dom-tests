function BillWithSettings(){
    // variables for the settings
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    //variables for the totals
    var callCostTotal = 0;
    var smsCostTotal = 0;
    //var totalCost = 0;


    
// setting SMS 
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost;
    }
    //settings for call
    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
        return theCallCost;
    }
    //settings for the warning level
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }
    function getWarningLevel(){
        return theWarningLevel;
    }
    //settings for the critical level
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }
    function getCriticalLevel(){
        return theCriticalLevel;
    }
    //using the settings
    function makeCall(){
        if(!hasReachedCriticalLevel()){
            callCostTotal += theCallCost;

        }

    }

    function getTotalCost(){

        return  callCostTotal + smsCostTotal;
    }

    function getTotalCallCost(){

        return callCostTotal;
    }

    function sendSms(){
        if(!hasReachedCriticalLevel()){

            smsCostTotal += theSmsCost;
        }

    }
    
    function getTotalSmsCost(){

        return smsCostTotal;
    }

    function hasReachedCriticalLevel(){

        return getTotalCost() >= getCriticalLevel();
    }
    

    function totalClassName(){

        if(hasReachedCriticalLevel()) {
            return 'critical';
        }
    
        if(getTotalCost()>=getWarningLevel()){
            return 'warning';
        }
        

    }
    
    return{
        setSmsCost,
        getSmsCost,
        setCallCost,
        getCallCost,
        setWarningLevel,
        getWarningLevel, 
        setCriticalLevel,
        getCriticalLevel,
        makeCall,
        getTotalCost,
        getTotalCallCost,
        getTotalSmsCost,
        sendSms,
        totalClassName,
        
    }
}