User friendly Loan calculator

* Calculates the monthly payment
* Calculates the montly interstest
* Calculates the total amount of payment
* Bootstrap lib included to provide nice UI
* img dir for .gif file  , to show UX

 The project was created to show the basic functions of Vanilla Javascript and to try the math problem (series like)

 //Parse to int
  const principal =  parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value)/100/12;
  const calculatedPayments = parseFloat(years.value)*12; // months

  //Compute monthly payment
  const x = Math.pow(1+calculatedInterest,calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x-1);
