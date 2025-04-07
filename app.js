
// TimeCalculator.js

class TimeCalculator {
	static format = "00:00:00"; // hh:mm:ss

	static validateTimeFormat(time) {
					const timePattern = /^\d{2}:\d{2}:\d{2}$/;
					if (!timePattern.test(time)) {
									throw new Error("Invalid time format. Please use hh:mm:ss.");
					}
	}

	static calculateTime(time1, time2, operator) {
					// Validate the input format
					this.validateTimeFormat(time1);
					this.validateTimeFormat(time2);

					const [h1, m1, s1] = time1.split(":").map(Number);
					const [h2, m2, s2] = time2.split(":").map(Number);

					// Calculate total seconds for both times
					const totalSeconds1 = h1 * 3600 + m1 * 60 + s1;
					const totalSeconds2 = h2 * 3600 + m2 * 60 + s2;

					let resultSeconds;

					// Perform the operation
					if (operator === 'add') {
									resultSeconds = totalSeconds1 + totalSeconds2;
					} else if (operator === 'subtract') {
									resultSeconds = totalSeconds1 - totalSeconds2;
									// If the result is negative, set it to zero
									if (resultSeconds < 0) {
													resultSeconds = 0;
									}
					} else {
									throw new Error("Invalid operation. Please use 'add' or 'subtract'.");
					}

					// Convert total seconds back to hh:mm:ss
					const hours = Math.floor(resultSeconds / 3600);
					const minutes = Math.floor((resultSeconds % 3600) / 60);
					const seconds = resultSeconds % 60;

					// Format the result to hh:mm:ss
					const result = [
									String(hours).padStart(2, '0'),
									String(minutes).padStart(2, '0'),
									String(seconds).padStart(2, '0'),
					].join(':');

					return result;
	}
}

// Export the library for Node.js or browser
if (typeof module !== 'undefined' && module.exports) {
	module.exports = TimeCalculator; // For Node.js
} else {
	window.TimeCalculator = TimeCalculator; // For browser
}

// example usage

// Example usage
try {
	const time1 = "01:34:23";
	const time2 = "02:45:13";
	const additionalResult = TimeCalculator.calculateTime(time1, time2, 'add');
	console.log(additionalResult); // Output: "04:19:36"
	
	const subtractResult = TimeCalculator.calculateTime(time2, time1, 'subtract');
	console.log(subtractResult); // Output: "01:10:50"
} catch (error) {
	console.error(error.message);
}