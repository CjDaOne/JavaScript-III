//  The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Principle 1: Window/Global Object Binding -
//   >  “this” value is in the global scope of the window/console.

// * 2. Principle 2: Implicit Binding -
//   >  Calling a function preceded by a dot, the object before that dot will be "this".

// * 3.Principle 3: New binding -
//   > When using a constructor function, "this" is referring to the specific instance of said object that was created and will be returned by the same constructor function.

// * 4. Principle 4: Explicit binding -
//   > When the methods `call` or `apply` is used in JavaScript , "this" is explicitly defined.


// * write out a code example of each explanation above


//  Principle 1
// code example for Window Binding
 function sayMyAge(age) {
    console.log(this);
    return age;
  }
  sayMyAge(38);

//  Principle 2
// code example for Implicit Binding
const sayNameFunc = obj => {
    obj.sayName = () => {
      console.log(`Hello my name is ${this.firstName}`);
      console.log(this);
    };
  };
  const student = {firstName: 'CJ' };
  const p_m = { firstName: 'Frank' };
  sayNameFunc(student);
  sayNameFunc(p_m);
  
  // Invoke Methods 
  student.sayName();
  p_m.sayName();

// Principle 3
// code example for New Binding
function LambdaPerson(greeter) {
    this.greeting = 'Hi ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const rami = new LamndaPerson('TG');
  const tg = new LamndaPerson('Rami');
  
   rami.speak();
   tg.speak();


// Principle 4
// code example for Explicit Binding
rami.speak.call(tg); tg.speak.apply(rami);
