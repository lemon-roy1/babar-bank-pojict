document.getElementById("btn-click").addEventListener('click',function(){
    const dopositfield = document.getElementById('doposit-field');
    const dopositAmont = dopositfield.value;
     const newDopositAmont =  parseFloat(dopositAmont);
     


    const dopositTotalAmont = document.getElementById('doposit-total');
    const dopositTotal = dopositTotalAmont.innerText;
    const newDpositTotal = parseFloat(dopositTotal);



    const currontDopositamont = newDopositAmont + newDpositTotal
    dopositTotalAmont.innerText = currontDopositamont;
    dopositfield.value = '';
    
    const balanceTotal = document.getElementById('balance-total');
     const nawTotalBalance = balanceTotal.innerText;
    const totalBalanse = parseFloat(nawTotalBalance);
    

    const currintBalanseTotal = totalBalanse + newDopositAmont;
    balanceTotal.innerText = currintBalanseTotal;


})