describe('The radioBill factory function' , function(){
    it('should return a total call cost of R8.25 if 3 call were added and it is R2.75 per call' , function(){
        
        let radioBill = RadioBills();

        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        
        assert.equal(8.25, radioBill.getCheckedCallTotal())
        

        
    });

    it("should return a sms cost of R1.50 if 2 sms' and 1 call are added and the total " , function(){
        
        let radioBill = RadioBills();

    
        radioBill.checkedSms();
        radioBill.checkedSms();
        radioBill.checkedCall();
        
        assert.equal(1.5, radioBill.getCheckedSmsTotal());
        assert.equal(2.75, radioBill.getCheckedCallTotal());
        assert.equal(4.25, radioBill.getCheckedTotal());
        
    });

    it("should return nothing/ zero if the calls or sms' are not checked " , function(){
        
        let radioBill = RadioBills();

    
        // radioBill.checkedSms();
        // radioBill.checkedSms();
        // radioBill.checkedCall();
        
        assert.equal(0, radioBill.getCheckedSmsTotal());
        assert.equal(0, radioBill.getCheckedCallTotal());
        assert.equal(0, radioBill.getCheckedTotal());
        
    });  

    it('should return a warning level signal if the overall total cost is above R30 and less than R50' , function(){
        
        let radioBill = RadioBills();

        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        
        assert.equal(30.25, radioBill.getCheckedCallTotal());
        assert.equal(0, radioBill.getCheckedSmsTotal());
        assert.equal(30.25, radioBill.getCheckedTotal());
        assert.equal('warning', radioBill.radioClassLevels());
        

        
    });

    it('should return a critical level signal if the overall total cost is above  R50' , function(){
        
        let radioBill = RadioBills();

        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        radioBill.checkedCall();
        
        assert.equal(63.25, radioBill.getCheckedCallTotal());
        assert.equal(0, radioBill.getCheckedSmsTotal());
        assert.equal(63.25, radioBill.getCheckedTotal());
        assert.equal('critical', radioBill.radioClassLevels());
        

        
    });



});