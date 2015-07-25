//ProjectEuler_1_MultiplesOf3And5

/* Instructions:
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function Sum3s5s(num) {
	//Use input 'num' as the upper limit, below which to find your multiples of 3's and 5's
	var numArr = [];

	for (var i = 0; i < num; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			numArr.push(i);
		}
	}

	return numArr.reduce(function(a,b) {return a+b;});
}

console.log(Sum3s5s(1000));