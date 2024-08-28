
/**
 *  function that groups anagrams together from an array of strings.
 *
 * @param an array of strings
 * @returns anagrams groups 
 */
function groupAnagrams(strs) {
    const map = new Map();

    strs.forEach(str => {
        const sortedStr = str.split('').sort().join('');
        if (map.has(sortedStr)) {
            map.get(sortedStr).push(str);
        } else {
            map.set(sortedStr, [str]);
        }
    });

    return Array.from(map.values());
}

/**
 *   function that converts a string to title case, where the first letter of each word is capitalized.
 *
 * @param an string to capitalize
 * @returns capitalized string
 */
function toTitleCase(input) {
    return input
        .toLowerCase()
        .split(' ')
        .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(' '); 
}



/**
 *    Helper function to determine if a number is prime.
 *
 * @param a number to check if is prime or not
 * @returns boolean value to determine was the number prime or not
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}


/**
 *   Function to calculate the sum of all prime numbers up to n
 *
 * @param a prime number to calculate
 * @returns sum of all prime numbers up to the number n
 */
function sumOfPrimes(n) {
    let sum = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }
    return sum;
}

// Example usage
console.log(sumOfPrimes(10)); // Output: 17 (2 + 3 + 5 + 7)


module.exports = { groupAnagrams,  toTitleCase, sumOfPrimes };
