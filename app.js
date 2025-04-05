var format = "00:00:00"; // hh:mm:ss
var a = "03:38:56";
var b = "08:58:06";


function calculate(a, b) {
	var a_split = a.split(":");
	var b_split = b.split(":");


	// calculate secs
	let totalSeconds = parseInt(a_split[2]) + parseInt(b_split[2]);

	
	// let answer = a + b;
	return totalSeconds / 60;
}

console.log(calculate(a, b));

// create a time calculator
