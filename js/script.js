function deposit() {
  let depositValue = document.getElementById("deposit-input").value;

  let depositTotal = document.getElementById("deposit-total");

  let balanceTotal = document.getElementById("balance-total");

  depositTotal.innerText = Number(depositTotal.innerText) + Number(depositValue);

balanceTotal.innerText = Number(depositTotal.innerText) ;


  depositValue.value = ''
};


// withdraw section 


function withdraw(){
  let withdrawInput = document.getElementById("withdraw-input").value;
console.log(withdrawInput)


}
