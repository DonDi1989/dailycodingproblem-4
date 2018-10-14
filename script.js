const result = getResult([3, 4, -1, 1]);

function getResult(numbers) {
	let maxNumber = Math.max.apply(null, numbers),
		minNumber = Math.min.apply(null, numbers) > 0 ? Math.min.apply(null, numbers) : 1,
		solutionValue = 0;

	for(let i=1; i<maxNumber; i++) {
		if(!numbers.includes(i)) {
			solutionValue = i;
			break;
		}
	}

	return solutionValue ? solutionValue : maxNumber+1;
}

$("#result").html(result);