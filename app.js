///Listen for submit button

document.querySelector('#loan-form').addEventListener('submit',function(e){

  //Hide results
  document.getElementById('results').style.display = 'none';


  //Show results
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults,5500);

  e.preventDefault();
});


// Calculate results

function calculateResults(){
  console.log('Calculating ...');
  //Grab the UI vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const monthly_payment = document.getElementById('monthly-payment');
  const total_payment = document.getElementById('total-payment');
  const total_interest = document.getElementById('total-interest');

  //alert(`${amount.value} , ${interest.value} , ${years.value}`);
  //Parse to int
  const principal =  parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayments = parseFloat(years.value)*12; // months

  //Compute monthly payment
  const x = Math.pow(1+calculatedInterest,calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x-1);

  if(isFinite(monthly)){
    monthly_payment.value = monthly.toFixed(2);
    total_payment.value = (monthly*calculatedPayments).toFixed(2);
    total_interest.value = ((monthly*calculatedPayments)-principal).toFixed(2);

    //Hide results
  document.getElementById('results').style.display = 'block';


  //Show results
  document.getElementById('loading').style.display = 'none';

  }else{



    showError('Please check input numbers');


  }

  function showError(error){
      //Hide results
  document.getElementById('results').style.display = 'none';


  //Show results
  document.getElementById('loading').style.display = 'none';


    //Create a div
    const errorDiv = document.createElement('div');
    //Get Elements
    const card  = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    //Add class
    errorDiv.className = 'alert alert-danger';
    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert error above heading
    card.insertBefore(errorDiv,heading);
    //Set time out , to go away the error alert after 3 seconds
    setTimeout(clearError,2000);


  }

  //Clear error
  function clearError(){
    document.querySelector('.alert').remove();
  }

}




