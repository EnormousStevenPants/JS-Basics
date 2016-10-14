//////////////////PROBLEM 1////////////////////

var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only parameter.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
  function isTyler(name) {
    if (name === "Tyler") {
      return true;
    } else {
      return false;
    }
  }

  alert(isTyler(name));

//////////////////PROBLEM 2////////////////////


//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName() {
    var person = prompt("Please enter your name");

    return person;
  }

  alert(getName());
//////////////////PROBLEM 3////////////////////



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome() {
    var person = getName();

    alert("Welcome, " + person);
  }

//////////////////PROBLEM 4////////////////////




//What is the difference between arguments and parameters?

  //Answer Here
  //A parameter exists within the confines of a function, while an argument is the thing outside of a function that is passed in to become a paraameter.


//////////////////PROBLEM 5////////////////////



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  //Falsy values are NaN, undefined, 0, false, "" (an empty string), and null.
  //These values all evaluate to false in a non-strict equality, ie ==. They will evaluate to their true value under a strict equality, ie ===.


//////////////////PROBLEM 6////////////////////



//Create a function called myName that returns your name

  //Code Here
  function myName() {
    return "Steven";
  }


//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var newMyName = myName;

//Now alert the result of invoking newMyName
  alert(newMyName);


//////////////////PROBLEM 7////////////////////



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn() {
    return function(){
      return "Steven The Great";
    };
  }

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn();

//Now invoke innerFn.
  innerFn();
