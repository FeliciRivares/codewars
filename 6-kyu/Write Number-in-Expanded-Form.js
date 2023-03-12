// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'
// NOTE: All numbers will be whole numbers greater than 0.

// If you liked this kata, check out part 2!!

function expandedForm(num) {
    const numbers = Array.from(String(num), Number);
    const parts = [];
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] !== 0) {
        const stringZero = '0'.repeat(numbers.length - i - 1);
        parts.push(numbers[i] + stringZero);
      }
    }
    return parts.join(' + ');
  }