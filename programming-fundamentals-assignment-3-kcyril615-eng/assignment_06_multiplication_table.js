// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

// -----------------------------------------------------------------------------
// PART A — Print the Multiplication Table for a Single Number (1 to 12)
// -----------------------------------------------------------------------------
const readlineSync = require('readline-sync');

function printTable(num) {
  console.log(`Multiplication Table for ${num}:`);
 
  for (let i = 1; i <= 12; i++) {
    const product = num * i;
    const multiplier = String(i).padEnd(2, ' ');
    console.log(`${num}  x  ${multiplier} =  ${product}`);
  }
}
 
// -----------------------------------------------------------------------------
// PART B — Print Tables for Every Number from 1 to N
// -----------------------------------------------------------------------------
function printAllTables(n) {
  for (let num = 1; num <= n; num++) {
    printTable(num);
 
    if (num !== n) {
      console.log('---------------------------');
    }
  }
}
 
// -----------------------------------------------------------------------------
// Helper: validate that a value is a positive integer
// -----------------------------------------------------------------------------
function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0;
}
 
// -----------------------------------------------------------------------------
// MAIN PROGRAM
// -----------------------------------------------------------------------------
function main() {
  console.log('=== Multiplication Table Generator ===');
 
  // ---------------- PART A ----------------
  console.log('\n--- PART A: Single Table ---');
  const num = parseInt(readlineSync.question('Enter a number: '), 10);
 
  if (!isPositiveInteger(num)) {
    console.log('Error: Please enter a positive integer.');
    return;
  }
 
  printTable(num);
 
  // ---------------- PART B (Bonus) ----------------
  console.log('\n--- PART B: Tables from 1 to N ---');
  const n = parseInt(readlineSync.question('Enter N: '), 10);
 
  if (!isPositiveInteger(n)) {
    console.log('Error: Please enter a positive integer.');
    return;
  }
 
  printAllTables(n);
}
 
main();

