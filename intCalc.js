

var rate = document.querySelector("#RateInput");
var balance = document.querySelector("#BalInput");
var term = document.querySelector("#TermInput");
var gobuttton = document.querySelector("#gobutton");
var clear = document.querySelector("#clear");
var answer = document.querySelector("#answer");


rate.addEventListener("input", function(){
	});

balance.addEventListener("input", function(){
	});	


gobuttton.addEventListener("click", calculate)


function calculate() {

	if (gobuttton.innerHTML === "Reset"){
		// empty strings for inputs and span go here
		rate.value= "";
		balance.value= "";
		term.value= "";
		answer.innerHTML = "";
		gobuttton.innerHTML = "Go!"; 

	} else {
		var calRate = parseFloat(rate.value);
		var calBalance = parseFloat(balance.value);
		var calTerm = parseInt(term.value);
		var finalProduct = calRate * calBalance/100/365 * calTerm;
		answer.innerHTML = "$" + finalProduct.toFixed(2);
		gobuttton.innerHTML = "Reset";
	}
};