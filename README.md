A recursion theorem implementation in Javascript.

# Usage

* Write your program in free JS using the global constant "SELF" as you see fit.
* Save your file into an a.js
* Run `node compile.js a.js > b.js`
* b.js is standard JS with no "SELF" global references
* When you run b.js, the output will be the same as if you ran a.js with all
  SELFs replaced with b.js's source code

The implementation does not make use of any operations except string
manipulation. It does not make use of Javascript serialization abilities or
read from any files.

# Quine
It's easy to produce a quine with this compiler. See the "examples/" folder for
a quine program that uses "SELF". You can use this compiler to compile it to a
proper JS quine. Just run `node compiler.js examples/quine.js` to obtain a
quine.
