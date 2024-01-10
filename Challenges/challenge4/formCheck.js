// Gain Access to form elements
const submitButton = document.getElementById('submit');
const nameField = document.getElementById('name');
const phoneField = document.getElementById('phone');
const emailField = document.getElementById('email');
const form = document.getElementById('form');

// Add event listener to submit button
submitButton.addEventListener('click', checkForm);
form.addEventListener('onsubmit', checkForm);

function checkForm(){

    /*
        In this method check whether name, email, and phone number have input.
        If they are blank turn the fields red.  Otherwise, do nothing.
     */

    // Check name field
    if(nameField.value === ''){
        alert("Not all boxes are filled")

        document.getElementById('lbl_name').style.color = 'red';
        return false;
    }else{
        document.getElementById('lbl_name').style.color = 'black';
    }


}