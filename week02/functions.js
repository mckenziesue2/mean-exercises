//1
function add(num1, num2) {
	return num1 + num2;
}

console.log(add(2,3));

//2

var compare = function(num1, num2, num3) {
	if (num3 > num2 && num3 > num1) {
		console.log(num3);
	} else if (num2 > num1 && num2 > num3) {
		console.log(num2);
	} else if (num1 > num2 && num1 > num3) {
		console.log(num1);
	} else {
		console.log('There is a problem with your numbers or no greatest number.');
	}
};

compare(3,42,100);

//3
function evenodd(number) {
	if (number % 2 === 0) {
		return "even";
	} else {
		return "odd";
	}
}

console.log(evenodd(42));

//4
var str = function(string) {
	if (string.length <= 20) {
		return string + string;
	} else {
		return string.substr(0, string.length / 2);
	}
};

console.log(str('This post is an article that is about computer programming.'));

//5
function fibonacci(n) {
	return n += n;
}

var fibonacci1 = console.log(fibonacci(1));
var fibonacci2 = console.log(fibonacci(fibonacci(fibonacci(fibonacci(1)))));

//6
var q = function(x, y, z) {
	return (x*x) + (2*x) - 3;
	return (y*y) + (2*y) - 3;
	return (z*z) + (2*z) - 3;
};

console.log(q(2, 5, 9));

//7
function frequent(str) {
	for (var i = 0; i < str.length; i++) {
		str.toLowerCase();
		console.log(i);
	}
}

console.log(frequent('McKenzie Sue Rucker'));



