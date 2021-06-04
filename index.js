function calculate (){
    let vehiclePrice = document.getElementById('price').value;
    let downPayment = document.getElementById('downpmt').value;
    let tradeIn = document.getElementById('trade-in').value;
    let intRate = document.getElementById('interest-rate').value;
    let loanTerm = document.getElementById('loan-term').value;
    
    amount = +vehiclePrice;
    down = +downPayment;
    trade = +tradeIn;
    r = +intRate;
    term = +loanTerm;
    amountFinanced = amount - down - trade;
    
   event.preventDefault();
    
     annInterest = parseFloat(r),
        monInt = annInterest / 1200;
  
        if(!amount){
          alert('Please add a loan amount');
          return;
        }
      
       if(!term){
         term = 60;
         loanTerm =    document.getElementById('loan-term').value = 60;
       }
      
      if(!down){
        down=0;
        downPayment = document.getElementById('downpmt').value = 0;
        
      }
    
    
      if(!trade){
          trade = 0;
          tradeIn = document.getElementById('trade-in').value = '0';
        }
    
      if(!annInterest){
        r = 3.25;
        intRate = document.getElementById('interest-rate').value = 3.25;
      }
    
    let calculator = ((monInt + (monInt / (Math.pow((1 + monInt), term) -1))) * (amountFinanced || 0)).toFixed(2);
    
    let paymentResults = document.getElementById('results');
    paymentResults.classList.remove('hidden')
    paymentResults.innerHTML = '';

    
    let results = document.createElement('div');
    results.innerHTML = `<h1> Estimated Montly Payment:</h1> <h3> ${calculator} `
    
    paymentResults.appendChild(results);
    
    
  }