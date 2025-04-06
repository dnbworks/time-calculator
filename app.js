var format = "00:00:00"; // hh:mm:ss
var a = "03:38:56";
var b = "08:58:06";


function calculateTime(time1, time2, opearator){
	// validate the input format
	
	const timePattern = /^\d{2}:\d{2}:\d{2}$/;

	if (!timePattern.test(time1) || !timePattern.test(time2)) {
			throw new Error("Invalid time format. Please use hh:mm:ss.");
	}

	const [h1, m1, s1] = time1.split(":").map(Number);
	const [h2, m2, s2] = time2.split(":").map(Number);

	// calculate total seconds for both times
	const totalSeconds1 = h1 * 3600 + m1 * 60 + s1;
	const totalSeconds2 = h2 * 3600 + m2 * 60 + s2;

	let resultSeconds;

	// perform the operation
	if (opearator === 'add') {
		resultSeconds = totalSeconds1 + totalSeconds2;
	} else if (opearator === 'subtract') {
		resultSeconds = totalSeconds1 - totalSeconds2;
		// if the result is negative, set it to zero
		if (resultSeconds < 0) {
			resultSeconds = 0
		}
	} else {
		throw new Error("Invalid operation. Please use the add or subtract");
	}

	// convert total seconds back to hh:mm:ss
	const hours = Math.floor(resultSeconds / 3600);
	const minutes = Math.floor((resultSeconds % 3600) / 60);
	const seconds = resultSeconds % 60;

	// format the result to hh:mm:ss
	const result = [
		String(hours).padStart(2, '0'),
		String(minutes).padStart(2, '0'),
		String(seconds).padStart(2, '0'),
	].join(':');
		return result;
}


// example usage

try {
	const time1 = "01:34:23";
	const time2 = "02:45:13";
	const additionalResult = calculateTime(time1, time2, 'add');
	console.log(additionalResult);
	const subtractResult = calculateTime(time2, time1, 'subtract');
	console.log(subtractResult);
} catch (error) {
	console.error(error.message);
}
