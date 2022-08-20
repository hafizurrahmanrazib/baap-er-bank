// Step-01:Add Event Listener Or Handler To The Deposite Button
document.getElementById('btn-deposit').addEventListener('click', function () {
    //Step-02:Get the deposite amount from the deposite input field
    // For input field use (.value) to get value from inside the input field
    const depositFiled = document.getElementById('deposit-field');
    const newDepositAmountString = depositFiled.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-07:Clear the deposit field
    depositFiled.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please Provide a Valid Number');
        return;
    }

    // Step-03: Get The Curret Deposite Total
    // for non-input(element other than input,textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-4: Add Numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    // Set The Deposit Total
    depositTotalElement.innerText = currentDepositTotal;

    // Step-5: Get Balance Current Total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // Step-06: Calculate Current Total Balance
    const currentBalaceTotal = previousBalanceTotal + newDepositAmount;
    // Set the Balance Total
    balanceTotalElement.innerText = currentBalaceTotal;

})