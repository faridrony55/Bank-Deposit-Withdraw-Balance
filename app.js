 
document.getElementById('deposit').addEventListener('click', function(){

   //get deposit value
   const deposit  = document.getElementById('depositAmount');
   const newDepositAmountString = deposit.value; 
   const newDepositAmount = parseFloat(newDepositAmountString); 

   //add deposit
   const depositField = document.getElementById('depositField');
   const previouseDepositeTotalString = depositField.innerText;
   const previouseDepositeTotal = parseFloat(previouseDepositeTotalString)

   //total deposite
   const currentDepositAmount =  previouseDepositeTotal  +  newDepositAmount ;
   depositField.innerText = currentDepositAmount;

   // balance sheet
   const  balanceField = document.getElementById('balanceField');
   const balanceFieldString =  balanceField.innerText;
   const  previouseBalanceField = parseFloat(balanceFieldString);
   //total Balance
   const currentBalanceAmount =  previouseBalanceField  +  newDepositAmount ;
   balanceField.innerText = currentBalanceAmount;



   //clear deposit field
   deposit.value = '';

});

document.getElementById('withdraw').addEventListener('click', function(){
   const withdraw  = document.getElementById('withdrawAmount');
   const withdrawAmountString = withdraw.value;
   const withdrawAmount = parseFloat(withdrawAmountString);

   const withdrawField = document.getElementById('withdrawField');
   const previousWithdrawFieldString =  withdrawField.innerText;
   const previousWithdrawField = parseFloat(previousWithdrawFieldString);

   const TotalWithdraw = previousWithdrawField + withdrawAmount;
   withdrawField.innerText = TotalWithdraw;


  // balance sheet
  const  balanceField = document.getElementById('balanceField');
  const balanceFieldString =  balanceField.innerText;
  const  previouseBalanceField = parseFloat(balanceFieldString);
  //total Balance
  const currentBalanceAmount =  previouseBalanceField  - withdrawAmount ;
  balanceField.innerText = currentBalanceAmount;

 
   withdraw.value = '';

});