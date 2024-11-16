
const ABN_WEIGHTS = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];

// refer this doc - https://abr.business.gov.au/Help/AbnFormat
export const validateABN = (abn: string): boolean => {
	// Ensure ABN is exactly 11 digits and contains only numbers
	if (abn.length !== 11 || !/^\d+$/.test(abn)) return false;

	// Convert string to an array of numbers
	const abnDigits = abn.split("").map(Number);

	// Ensure the array has exactly 11 elements
	if (abnDigits.length !== 11) return false;

	// Subtract 1 from the first digit safely
	if (typeof abnDigits[0] === "number") {
		abnDigits[0] -= 1;
	} else {
		return false; // Invalid ABN if the first digit is not a number
	}

	// Calculate the sum using weighting factors
	const total = abnDigits.reduce((sum, digit, index) => {
		const weight = ABN_WEIGHTS[index] ?? 0;
		return sum + digit * weight;
	}, 0);

	// Check if the sum is divisible by 89
	return total % 89 === 0;
};