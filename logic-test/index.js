var input = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

// Expected Outputs
// [
//  ["kita", "atik", "tika"],
//  ["aku", "kua"],
//  ["makan"],
//  ["kia"]
// ]

// function to sort by alphabetical
const sort = (input) => {
    // initialization for temporary data
	let temp;
	for (let i = 0; i < input.length - 1; i += 1) {
		for (let j = 0; j < input.length - 1; j += 1) {
            // console.log(input[j+i]);
			if (input[j] > input[j + 1]) {
				temp = input[j + 1];
				input[j + 1] = input[j];
				input[j] = temp;
			}
		}
	}
    // console.log(input);
	return input.join('');
};

const anagram = (input) => {
	let anagram = {};
	for (let indexInput = 0; indexInput < input.length; indexInput += 1) {
		let word = input[indexInput];
		let sorted = sort(word.split(''));
		//   console.log(sorted);            // aikt, aikt, aikt, aku, aik, aakmn, aku
		if (anagram[sorted] == undefined) {
			anagram[sorted] = [word];
            // console.log(anagram[sorted]); // ['kita'], ['aku'], ['kia'], ['makan']
		} else {
			anagram[sorted].push(word);
            // console.log(word);            // atik, tika, kua
		}
	}
	return Object.values(anagram);
};

console.log(anagram(input));
