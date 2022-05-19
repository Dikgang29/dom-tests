describe('The bill with settings factory function' , function(){
        it('should be able to set the call cost' , function(){
    
            let settingsBill = BillWithSettings();
            settingsBill.setCallCost(1.85);
            assert.equal(1.85, settingsBill.getCallCost());

            let settingsBill2 = BillWithSettings();
            settingsBill.setCallCost(2.75);
            assert.equal(2.75, settingsBill.getCallCost());
        });
        it('should be able to set the sms cost',function(){
            let settingsBill = BillWithSettings();
            settingsBill.setSmsCost(0.77);
            assert.equal(0.77, settingsBill.getSmsCost());

            let settingsBill2 = BillWithSettings();
            settingsBill2.setSmsCost(0.86);
            assert.equal(0.86, settingsBill2.getSmsCost());

        });

        it('should be able to set the sms and call cost',function(){
            let settingsBill = BillWithSettings();
            settingsBill.setSmsCost(0.89);
            settingsBill.setCallCost(2.77);
            assert.equal(2.77, settingsBill.getCallCost());
            assert.equal(0.89, settingsBill.getSmsCost());


            let settingsBill2 = BillWithSettings();
            settingsBill2.setCallCost(3);
            settingsBill2.setSmsCost(1.84);
            assert.equal(3.00, settingsBill2.getCallCost());
            assert.equal(1.84, settingsBill2.getSmsCost());
        });

        it('should be able to set the warning level',function(){
       let settingsBill = BillWithSettings();

       settingsBill.setWarningLevel(15);
       assert.equal(15, settingsBill.getWarningLevel());
        });

        it('should be able to set the critical level',function(){
            let settingsBill = BillWithSettings();
     
            settingsBill.setCriticalLevel(35);
            assert.equal(35, settingsBill.getCriticalLevel());
             });

             it('should be able to set the warning and critical level',function(){
                let settingsBill = BillWithSettings();
         
                settingsBill.setWarningLevel(20);
                settingsBill.setCriticalLevel(35);
                assert.equal(20, settingsBill.getWarningLevel());
                assert.equal(35, settingsBill.getCriticalLevel());
                 });

    });


    describe('Use values' , function(){
    it('should be able to add 3 call at a price 2.25 each' , function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(20);

        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);
        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(6.75,settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());

        
    });

    it('should be able add 2 call at price 1.57 each' , function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(5);

        
        settingsBill.setCallCost(1.57);
        settingsBill.setSmsCost(0.55);
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal(3.14,settingsBill.getTotalCost());
        assert.equal(3.14, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());

        
    });

    it('should be able add 5 sms at price 0.71 each' , function(){
        let settingsBill = BillWithSettings();
        settingsBill.setCriticalLevel(5);

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.71);
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();


        assert.equal(3.55,settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(3.55, settingsBill.getTotalSmsCost());

        
    });


    it('should be able add 4 sms at price 0.80 each and 2 calls at 3.11' , function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCriticalLevel(15);
        settingsBill.setCallCost(3.11);
        settingsBill.setSmsCost(0.80);
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.sendSms();
        settingsBill.makeCall();
        settingsBill.makeCall();

        


        assert.equal(9.42,settingsBill.getTotalCost());
        assert.equal(6.22, settingsBill.getTotalCallCost());
        assert.equal(3.20, settingsBill.getTotalSmsCost());

        
    });

});

describe('warning and critical level',function(){
    it("it should return a class name of 'Warning' if warning level is reached",function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(3.11);
        settingsBill.setSmsCost(0.80);
        settingsBill.setWarningLevel(10);
        settingsBill.setCriticalLevel(15);
        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal('warning', settingsBill.totalClassName());
    });
   
    it("it should return a class name of 'critical' if critical level is reached",function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(3.11);
        settingsBill.setSmsCost(0.80);
        settingsBill.setWarningLevel(5);
        settingsBill.setCriticalLevel(10);
        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal('critical', settingsBill.totalClassName());
    });

    it("it should allow the total to increase after reaching the critical level and then update the creatical level ",function(){
        let settingsBill = BillWithSettings();

        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(0.80);
        settingsBill.setWarningLevel(8);
        settingsBill.setCriticalLevel(10);
        
        
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();
        settingsBill.makeCall();

        assert.equal('critical', settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCost());

        settingsBill.setCriticalLevel(20);
        assert.equal('warning', settingsBill.totalClassName());
        settingsBill.makeCall();
        settingsBill.makeCall();
        assert.equal(15, settingsBill.getTotalCost());

    });
});