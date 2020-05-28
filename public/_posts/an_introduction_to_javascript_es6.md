---
title: 'An introduction to Javascript ES6'
slug: 'an_introduction_to_javascript_es6'
description: 'An Introduction to Javascript ES6'
coverImage: '/assets/blog/preview/cover.jpg'
date: '2020-03-20'
---

### Rest and Spread parameters

❌ Use multiple rest params in a function call

❌ Use rest param as the first or middle input param in a function

✅ Use rest param as the last input param in a function

❌ Initialize a default value

### let,const and var

- ‘var’ declarations are initialized with ‘undefined’.

- But for ‘let’ and ‘const’ the declarations remain uninitialized.

- Therefore, you need to declare ‘let’ and ‘const’ variables before use.

#### let

‘let’ can only be accessed within a block scope.

Consider the following function,

‘id’ can be accessed within the function scope.

Tried to log ‘id’ after function declaration. It gave an error since the ‘id’ is not initialized.

it’s good to go after the ‘id’ is initialized in the upper scope.

const
‘const’ needs to be initialized when declaring. Otherwise, it will throw an error.
‘const’ values can not be re-assigned.

We can initialize another ‘const’ value with the same name in an inner block scope. But the outer scope is unable to access the inner ‘const’ value.

### Destructuring

Following is an example of object destructuring in JS.

In the cases where you want the destructured variable to have a different name than the property name, use an alias.

Here c,s,e are aliases for city, state, and country.

Default parameters
The best practice is to use default values where possible.

Default parameters are not immune to exceptions

Rest parameters should not have a default value

Swap variables
Swapping variables is easy using an array.

Destructuring arrays

Array destructuring is pretty simple.

But if you mess up the brackets, you’ll get ‘undefined’ as the value for most of the elements.

Arrow function
Introduction for arrow functions >>> https://zendev.com/2018/10/01/javascript-arrow-functions-how-why-when.html
Arrow functions can never have duplicate named parameters, whether in strict or non-strict mode.
Arrow functions can never be used as constructor functions. Therefore, they can never be invoked with the new keyword.

A prototype property does not exist for an arrow function.

However , it returns a prototype for ‘Object.getPrototypeOf()’.

Dynamic imports
https://2ality.com/2017/01/import-operator.html
https://www.sitepoint.com/using-es-modules/

Promise
Create a new promise
const promise = new Promise((resolve, reject) => {
if (/_ everything works fine _/ true) {
resolve('success');
} else {
reject(Error('Nooo'));
}
return promise;
});

Promise States

Resolve: operation completed successfully
Reject: operation failed
Pending: waiting for the operation to be completed
Promise chaining
then()
catch()
finally()

Promise methods
Promise.all()
Wait for all promises to be resolved, or for any to be rejected.
Promise.allsettled()
Wait until all promises have settled (each may resolve or reject).
Promise.race()
Wait until one promise is done
Promise.reject()
Create a rejected promise
Promise.resolve()
Create a resolved promise

Generators
Consider the following example.
function foo() {
for (let i = 0; i < 1e11; i++) {
console.log(i);
}
}

setTimeout(function() {
console.log('Timeout!');
}, 1);

foo();

Here, it is obvious that ‘setTimeout()’ probably waits more than 1ms.

This problem is addressed by generators.

ex1:
function* myGen(){} or function *myGen(){}

function\* myGen() {
yield 1;
yield 2;
return 3;
}

const gen = myGen(); // returns a generator iterator
gen.next(); // calls the generator return {value:1,done:false}
gen.next(); // calls the generator return {value:2,done:false}
gen.next(); // calls the generator return {value:3,done:true} generator is done
gen.next(); // calls the generator return {value:undefined,done:true}

If the generator returns true at any point, further execution will be stopped.

ex2:

function\* myGen() {
yield 1;
yield 2;
yield 3;
yield 4;
yield 5;
return 6;
}

for (const v of foo()) {
console.log(v);
}

// output: 1,2,3,4,5
// does not print 6
// because done:true for 6

ex3:
Initially we pass 5 as the value of x in foo(), hence x=5 in first genit.next().
First genit.next() executes yield and returns {value:6, done:false}

Second generator call sets x=12. At this point the first ‘yield’ is done. Therefore, it executes up to the next ‘yeild’ and returns {value:8, done:false}.
Third generator call sets x=13. At this point the second ‘yield’ is done. Therefore, it looks for the next ‘yeild’. As it reaches the return statement, it returns {value:42, done:true}.

ES 6 compatibility Table
https://kangax.github.io/compat-table/es6/
