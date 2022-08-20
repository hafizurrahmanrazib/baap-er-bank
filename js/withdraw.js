/*
1.Add event handler with the withdraw button
2.Get the withdraw amount from the withdraw input field
2-5.Also make sure to convert the input into a number by using parseFloat

3.Get previous withdraw total

4.Calculate Total Withdarw Amount
4-5.Set Total Withdraw Amount

5.Get The Previous Balance Total
6.Calculate New Balance Total
6-5:Set the new balance total

7.Clear The Input Field
*/

// Step-01:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step-02:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-07:Clear the deposit field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Provide a Valid Number');
        return;
    }

    // Step-03:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);



    // Step-05:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("You Don't Have Enought Money To Withdraw. Please Deposit More Money To Get This Amount.");
        return;
    }

    // Step-04:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    //Set The Withdraw Total
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // Step-06:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // Set The Balance Total
    balanceTotalElement.innerText = newBalanceTotal;

})