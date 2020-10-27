// Listener form
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// calculate Results function
function calculateResults(e) {

    console.log('calculate .......')

    // UI variable and getElementById from html
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment'); 
    const totalPayment = document.getElementById('total-payment'); 
    const totalInterest = document.getElementById('total-interest'); 

    const principle = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) / 12;

    // compute monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principle*x*calculatedInterest)/(x-1);

    if(isFinite(monthly)) {
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calculatedPayments).toFixed(2);
        totalInterest.value = ((monthly * calculatedPayments)-principle).toFixed(2);
    } else {
        showError('Please check your number');
    }

    e.preventDefault();
}

// Show Error
function showError(error) {
    // create a div
    const errorDiv = document.createElement('div');

    // get elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    // add class to errordiv
    errorDiv.className = 'alert alert-danger';

    // create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    // insert error above heading
    card.insertBefore(errorDiv, heading);

    // Clear error after 3 seconds
    setTimeout(clearError, 2000);
}

// function clear Error
function clearError() {
    document.querySelector('.alert').remove();
}