# JSON-Parse-Object-Validator
Validates that a string passed into JSON.parse converts to object
validatedParse accepts a string and returns true if string parses to object or false if it does not.
If JSON.parse causes error, function will return false and console.log the error.

Null and numbers evaluate to false.

Test file and linter was also added to give newer developers a way to explore tests and linting on a very basic function.
as well as see a try/catch use case in their function.
