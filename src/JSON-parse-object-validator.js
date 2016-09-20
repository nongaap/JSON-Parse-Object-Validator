'use strict';
// Validates that a string passed into JSON.parse converts to object
// Returns true or false.
// If JSON.parse causes error, function will return false and console.log error.

function validatedParse(string) {
  const parsedString = JSON.parse(string);

  try {
    // If statement handles JSON.parse cases that don't cause errors but aren't objects
    // Neither JSON.parse(false) nor JSON.parse(1234) cause errors
    if (parsedString && typeof parsedString === 'object') {
      return true;
    }
  } catch (error) {
    console.log('Parse Error', error);
  }

  return false;
}
