
module.exports = function toReadable(number) {
    let numberToWord = [];
    const numbers = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', t3: 'thir', t4: 'for', t5: 'fif', t8: 'eigh', 20: 'twenty'
    };

    const hundreds = Math.floor(number / 100);
    const tens = Math.floor((number % 100) / 10);
    const ones = number % 10;

    if (number === 0) return 'zero';
    if (number > 99) numberToWord.push(numbers[hundreds] + ' hundred');

    if (tens === 0) {
        numberToWord.push(numbers[ones]);
    } else if (tens === 1) {
        numberToWord.push(numbers['1' + ones] || (ones !== 4 ? numbers['t' + ones] || numbers[ones] : numbers[ones]) + 'teen');
    } else {
        const part = numbers[tens + '0'] || (numbers['t' + tens] || numbers[tens]) + 'ty';
        numberToWord.push(numbers[ones] ? part + ' ' + numbers[ones] : part);
    }
    return numberToWord.join(' ').trim();
}
