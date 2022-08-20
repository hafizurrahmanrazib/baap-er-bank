// Step-01: Add Click Event Handler With The Submit Button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Step-02:Get the email address inside the email input field
    // Always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-03:Get The Password inside the password input field
    //3-a: Set id on the html element
    // 3-b:get the element 
    // 3-c:get the value from the element
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //Danger: Don't check or verify email and password on the client side
    // Step-4:Verify Email And Password and check whether valid user or not
    if (email === 'sontan@baap.com' && password === 'secret') {
        window.location.href = 'bank.html';
    }
    else {
        alert('You Type a Wrong User Name Or Password. Please Check Out Again Your User Name Or Password And Correct It');
    }
})