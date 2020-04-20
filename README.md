A recursion theorem implementation in Javascript.

# Usage

* Write your program in free JS using the global constant "SELF" as you see fit.
* Save your file into an a.js
* Run `compile a.js > b.js`
* b.js is standard JS with no "SELF" global references
* When you run b.js, the output will be the same as if you ran a.js with all
  SELFs replaced with b.js's source code

The implementation does not make use of any operations except string
manipulation. It does not make use of Javascript serialization abilities or
read from any files.
