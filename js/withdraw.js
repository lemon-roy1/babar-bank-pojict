document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawFiled = document.getElementById('withdraw-filed');
   const newWithdrawAmont = withdrawFiled.value
   const withdrawString = parseFloat(newWithdrawAmont);
   
   withdrawFiled.value = '';
    
     
    const withdrawTotal = document.getElementById('withdraw-total');
    const newTotalWithdraw = withdrawTotal.innerText;
    const withdrawTotalString = parseFloat(newTotalWithdraw)
    

    const currentWithdrawTotal = withdrawTotalString + withdrawString;
    withdrawTotal.innerText = currentWithdrawTotal ;

    const balansAmont = document.getElementById('balance-total');
    const totalBalans = balansAmont.innerText;
    const totalBalansAmont = parseFloat(totalBalans);
    
    const newBalanseTotal = totalBalansAmont - withdrawString
    balansAmont.innerText = newBalanseTotal;
    
    
})