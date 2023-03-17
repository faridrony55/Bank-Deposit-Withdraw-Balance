function getInputValueById(inputValue){
    const getValue  = document.getElementById(inputValue);
    const newGetValueString = getValue.value; 
    const newGetValue = parseFloat(newGetValueString);  
    getValue.value = '';
    return newGetValue ;
}

function getElementValueById(elementValue){
    const getValue = document.getElementById(elementValue);
    const prevGetValueString = getValue.innerText;
    const previouseTotalValue = parseFloat(prevGetValueString); 
    return previouseTotalValue;
}

function getCurrentValueById(prevValue, newValue){
    const textElement =  document.getElementById(prevValue); 
    const totalValue = textElement.innerText = newValue;
    return totalValue; 
}


function getBalanceValueById(balanceValue){
    const  getValue = document.getElementById(balanceValue);
    const getValueString =  getValue.innerText;
    const  previouseValue = parseFloat(getValueString); 
    return previouseValue;
}

document.getElementById('deposit').addEventListener('click', function(){
    //get deposit value
   const getInputValue =  getInputValueById('depositAmount');
    //add deposit 
   const getElementValue =  getElementValueById('depositField');
    //total deposite
    const totalValue =  getInputValue  +  getElementValue ;    
    getCurrentValueById('depositField', totalValue); 
    // balance sheet
    const getBalanceValue = getBalanceValueById('balanceField');
    const totalBalance = getInputValue + getBalanceValue   ;    
    getCurrentValueById('balanceField', totalBalance);     
 });
  

 document.getElementById('withdraw').addEventListener('click', function(){ 
    //get deposit value
    const getInputValue =  getInputValueById('withdrawAmount');
    //add deposit 
    const getElementValue =  getElementValueById('withdrawField');
  
     //total deposite
     const totalValue =  getInputValue +  getElementValue ;    
     getCurrentValueById('withdrawField', totalValue); 


    // balance sheet
    const getBalanceValue = getBalanceValueById('balanceField');
    const totalBalance =  getBalanceValue  - getInputValue  ;    
    getCurrentValueById('balanceField', totalBalance); 

    
  
 
 });