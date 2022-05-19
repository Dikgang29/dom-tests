describe('The textBill factory function' , function(){
    it('should show that 2 call will be R5.50 if the call cost R2.75 and send one sms that costs R0.75 and a total of R6.25 ' , function(){
        
        let textBills = TextWithBills();

        textBills.makeCall();
        textBills.makeCall();
        textBills.sendSms();
        
        assert.equal(5.5,textBills.getCallTotal());
        assert.equal(0.75,textBills.getSmsTotal());
        assert.equal(6.25,textBills.getTotal());

        
    });
    it('should show that 5 call will be R13.75 if the call cost R2.75 ' , function(){
        
        let textBills = TextWithBills();

        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        
        assert.equal(13.75,textBills.getCallTotal());
        assert.equal(0,textBills.getSmsTotal());
        assert.equal(13.75,textBills.getTotal());

        
    });

    it("should show that 4 sms' will be R3 if the sms cost is R0.75 " , function(){
        
        let textBills = TextWithBills();

        textBills.sendSms();
        textBills.sendSms();
        textBills.sendSms();
        textBills.sendSms();
        
        assert.equal(3.00, textBills.getSmsTotal());
        assert.equal(0.00, textBills.getCallTotal());
        assert.equal(3.0, textBills.getTotal());

        
    });

    it("should show how much  5 sms' will cost and  and how much 3 calls with call with the overall total " , function(){
        
        let textBills = TextWithBills();

        textBills.sendSms();
        textBills.sendSms();
        textBills.sendSms();
        textBills.sendSms();
        textBills.sendSms();

        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();

        
        assert.equal(3.75, textBills.getSmsTotal());
        assert.equal(8.25, textBills.getCallTotal());
        assert.equal(12.00, textBills.getTotal());

        
    });

    it("should show that if the total exceeds R30 it will show the warning level signal  " , function(){
        
        let textBills = TextWithBills();

       

        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();


        
        assert.equal(0, textBills.getSmsTotal());
        assert.equal(33, textBills.getCallTotal());
        assert.equal(33, textBills.getTotal());
        assert.equal('warning', textBills.levels());

        
    });

    it("should show that if the total exceeds R50 it will show the critical level signal  " , function(){
        
        let textBills = TextWithBills();

       

        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();
        textBills.makeCall();


        
        assert.equal(0, textBills.getSmsTotal());
        assert.equal(52.25, textBills.getCallTotal());
        assert.equal(52.25, textBills.getTotal());
        assert.equal('critical', textBills.levels());

        
    });

});