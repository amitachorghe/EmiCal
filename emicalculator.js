var slider1 = document.getElementById("amount");
var slider2 = document.getElementById("interest");
var slider3 = document.getElementById("year");
var output1 = document.getElementById("demo1");
var output2 = document.getElementById("demo2");
var output3 = document.getElementById("demo3");

output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;

slider1.oninput = function() {
	output1.innerHTML = this.value;
	var out1=output1;
}
slider2.oninput = function() {
	output2.innerHTML = this.value;
	var out2=output2;
}
slider3.oninput = function() {
	output3.innerHTML = this.value;
	var out2=output3;
}

document.getElementById("loan-form").addEventListener("submit", computeResults);

function computeResults(e) {
	const UIamount = slider1.value;
	const UIinterest = slider2.value;
	const UIyear = slider3.value;

	const principal = parseFloat(UIamount);
	const calculateInterest = parseFloat(UIinterest) / 100 /12;
	const calculatedPayments = parseFloat(UIyear) * 12;

	const x = Math.pow(1+ calculateInterest, calculatedPayments);
	const monthly = (principal * x * calculateInterest) / (x-1);
	const monthlyPayment = monthly.toFixed(2);

	const totalInterest = (monthly * calculatedPayments - principal).toFixed(2);
	const totalPayment = (monthly * calculatedPayments).toFixed(2);

	document.getElementById("monthlyPayment").innerHTML = "₹ " + monthlyPayment; 
	document.getElementById("totalInterest").innerHTML = "₹ " + totalInterest; 
	document.getElementById("totalPayment").innerHTML = "₹ " + totalPayment; 
	e.preventDefault();
	


}