/*  Q.7 Write a function that tells if provided year is a leap year or not */
/* The Leap Year Rule Explained:
Divisible by 4: Yes (e.g., 2024, 2028) - It's a leap year.
Divisible by 100 (but not 400): No (e.g., 1700, 1800, 1900, 2100) - It's not a leap year.
Divisible by 400: Yes (e.g., 1600, 2000, 2400) - It is a leap year.  */

//Solution 1
function isLeapYear(year) {
  if (year <= 0) return "Year should be greater than 0";
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;

  return false;
}

console.log(isLeapYear(4));
console.log(isLeapYear(1800));
console.log(isLeapYear(2000));
