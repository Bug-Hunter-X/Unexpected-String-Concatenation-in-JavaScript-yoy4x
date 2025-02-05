function foo(a, b) {
  // Explicit type checking to ensure both inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return "Invalid input: Both arguments must be numbers";
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: "Invalid input: Both arguments must be numbers" 