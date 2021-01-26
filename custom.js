// login btn event 
const loginBtn = document.getElementById('login');

loginBtn.addEventListener('click', function () {
   const loginArea = document.getElementById('login-area');
   const transaction = document.getElementById('transaction');

   loginArea.style.display = "none";
   transaction.style.display = "block";
});


// deposite btn event
const depositeBtn = document.getElementById('deposite');

depositeBtn.addEventListener('click', function () {

   const depositeNumber = getInputNumber('depositeAmount');

   updateSpanText('currentDeposite', depositeNumber);
   updateSpanText('currentBalance', depositeNumber);

   document.getElementById('depositeAmount').value = "";

})

// withdraw btn event
const withdrawBtn = document.getElementById('withdraw');

withdrawBtn.addEventListener('click', function () {
   const withdrawAmount = getInputNumber('withdrawAmount');
   updateSpanText('currentWithdraw', withdrawAmount);
   updateSpanText('currentBalance', -1 * withdrawAmount);
   document.getElementById('withdrawAmount').value = "";
})

// functions
function getInputNumber(id) {
   const amount = document.getElementById(id).value;
   const amountNumber = parseFloat(amount);

   return amountNumber;
}

function updateSpanText(id, addedAmound) {
   const current = document.getElementById(id).innerText;
   const currentNumber = parseFloat(current);
   const totalAmount = addedAmound + currentNumber;

   document.getElementById(id).innerText = totalAmount;
}

