------------------------------------------------------------------------------------------------------------------------
var ageGroup = {30: "Children", 100:"Very Old"};
console.log(ageGroup.30) // This will throw an error
// This is how you will access the value of the property 30, to get value "Children"
console.log(ageGroup["30"]); // Children
//It is best to avoid using numbers as property names.



// Reference Data Type and Primitive Data Types

/*
One of the main differences between reference data type and primitive data types 
is reference data type’s value is stored as a reference, it is not stored directly on the variable, 
as a value, as the primitive data types are. For example:
*/


// The primitive data type String is stored as a value
var person = "Kobe";  
var anotherPerson = person; // anotherPerson = the value of person
person = "Bryant"; // value of person changed

console.log(anotherPerson); // Kobe
console.log(person); // Bryant

/*
It is worth noting that even though we changed person to “Bryant,” the anotherPerson variable still 
retains the value that person had.
*/


// Compare the primitive data saved-as-value demonstrated above with the save-as-reference for objects:
var person = {name: "Kobe"};
var anotherPerson = person;
person.name = "Bryant";

console.log(anotherPerson.name); // Bryant
console.log(person.name); // Bryant

/*
In this example, we copied the person object to anotherPerson, but because the value in person was stored as
 a reference and not an actual value, when we changed the person.name property to “Bryant” the anotherPerson 
reflected the change because it never stored an actual copy of it’s own value of the person’s properties, 
it only had a reference to it.
*/


/*
Object Data Properties Have Attributes
Each data property (object property that store data) has not only the name-value pair, but also 3 attributes (the three attributes are set to true by default):
— Configurable Attribute: Specifies whether the property can be deleted or changed.
— Enumerable: Specifies whether the property can be returned in a for/in loop.
— Writable: Specifies whether the property can be changed.
*/


/*

Creating Objects
These are the two common ways to create objects:

1. Object Literals
The most common and, indeed, the easiest way to create objects is with the object literal described here

*/
// This is an empty object initialized using the object literal notation
var myBooks = {};

// This is an object with 4 items, again using object literal
var mango = {
    color: "yellow",
    shape: "round",
    sweetness: 8,

    howSweetAmI: function () {
    console.log("Hmm Hmm Good");
    }
}

/*
2. Object Constructor
  The second most common way to create objects is with Object constructor. 
  A constructor is a function used for initializing new objects, and you use the new keyword to call the constructor.
*/


var mango =  new Object ();
mango.color = "yellow";
mango.shape= "round";
mango.sweetness = 8;

mango.howSweetAmI = function () {
    console.log("Hmm Hmm Good");
}





// 1. Constructor Pattern for Creating Objects
function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {

    this.color = theColor;
    this.sweetness = theSweetness;
    this.fruitName = theFruitName;
    this.nativeToLand = theNativeToLand;

    this.showName = function () {
        console.log("This is a " + this.fruitName);
    }

    this.nativeTo = function () {
    this.nativeToLand.forEach(function (eachCountry)  {
       console.log("Grown in:" + eachCountry);
        });
    }


}

var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
mangoFruit.showName(); // This is a Mango.
mangoFruit.nativeTo();
//Grown in:South America
// Grown in:Central America
// Grown in:West Africa

var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
pineappleFruit.showName(); // This is a Pineapple.




// 2. Prototype Pattern for Creating Objects
function Fruit () {

}

Fruit.prototype.color = "Yellow";
Fruit.prototype.sweetness = 7;
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.nativeToLand = "USA";

Fruit.prototype.showName = function () {
    console.log("This is a " + this.fruitName);
}

Fruit.prototype.nativeTo = function () {
    console.log("Grown in:" + this.nativeToLand);
}


/*

How to Access Properties on an Object
The two primary ways of accessing properties of an object are with dot notation and bracket notation.
*/
// 1. Dot Notation
// We have been using dot notation so far in the examples above, here is another example again:
var book = {title: "Ways to Go", pages: 280, bookMark1:"Page 20"};

// To access the properties of the book object with dot notation, you do this:
console.log ( book.title); // Ways to Go
console.log ( book.pages); // 280

// 2. Bracket Notation

// To access the properties of the book object with bracket notation, you do this:
console.log ( book["title"]); //Ways to Go
console.log ( book["pages"]); // 280

//Or, in case you have the property name in a variable:
var bookTitle = "title";
console.log ( book[bookTitle]); // Ways to Go
console.log (book["bookMark" + 1]); // Page 20

// Own and Inherited Properties
// Create a new school object with a property name schoolName
var school = {schoolName:"MIT"};

// Prints true because schoolName is an own property on the school object
console.log("schoolName" in school);  // true

// Prints false because we did not define a schoolType property on the school object, and neither did the object inherit a schoolType property from its prototype object Object.prototype.
console.log("schoolType" in school);  // false
 
// Prints true because the school object inherited the toString method from Object.prototype. 
console.log("toString" in school);  // true

/*
hasOwnProperty
To find out if an object has a specific property as one of its own property, you use the hasOwnProperty method.
This method is very useful because from time to time you need to enumerate an object and you want only the own properties, not the inherited ones.
*/
// Create a new school object with a property name schoolName
var school = {schoolName:"MIT"};

// Prints true because schoolName is an own property on the school object
console.log(school.hasOwnProperty ("schoolName"));  // true
 
// Prints false because the school object inherited the toString method from Object.prototype, therefore toString is not an own property of the school object.
console.log(school.hasOwnProperty ("toString"));  // false 


/*
Accessing and Enumerating Properties on Objects
To access the enumerable (own and inherited) properties on objects, you use the for/in loop or a general for loop.
*/

// Create a new school object with 3 own properties: schoolName, schoolAccredited, and schoolLocation.
var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};

//Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
    console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation

}

/*

Accessing Inherited Properties
Properties inherited from Object.prototype are not enumerable, so the for/in loop does not show them. 
However, inherited properties that are enumerable are revealed in the for/in loop iteration.
For example:

*/


 //Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
    console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation

}

// Create a new HigherLearning function that the school object will inherit from.
/* SIDE NOTE: As Wilson (an astute reader) correctly pointed out in the comments below, the educationLevel property is not actually inherited by objects that use the HigherLearning constructor; instead, the educationLevel property is created as a new property on each object that uses the HigherLearning constructor. The reason the property is not inherited is because we use of the "this" keyword to define the property.
*/


function HigherLearning () {
    this.educationLevel = "University";
}

// Implement inheritance with the HigherLearning constructor
var school = new HigherLearning ();
school.schoolName = "MIT";
school.schoolAccredited = true;
school.schoolLocation = "Massachusetts";


//Use of the for/in loop to access the properties in the school object
for (var eachItem in school) {
    console.log(eachItem); // Prints educationLevel, schoolName, schoolAccredited, and schoolLocation
}


/*
In the last example, note the educationLevel property that was defined on the HigherLearning function is listed as
one of the school’s properties, even though educationLevel is not an own property—it was inherited.
*/


/*

Deleting Properties of an Object:
To delete a property from an object, you use the delete operator. 
You cannot delete properties that were inherited, nor can you delete properties with their attributes set to configurable.
You must delete the inherited properties on the prototype object (where the properties were defined).

Also, you cannot delete properties of the global object, which were declared with the var keyword.

The delete operator returns true if the delete was successful. And surprisingly, it also returns true if the property to delete was nonexistent or the property could not be deleted (such as non-configurable or not owned by the object).

These examples illustrate:

*/

var christmasList = {mike:"Book", jason:"sweater" }
delete christmasList.mike; // deletes the mike property

for (var people in christmasList) {
	console.log(people);
}
// Prints only jason
// The mike property was deleted

delete christmasList.toString; // returns true, but toString not deleted because it is an inherited method

// Here we call the toString method and it works just fine—wasn’t deleted 
christmasList.toString(); //"[object Object]"

// You can delete a property of an instance if the property is an own property of that instance. For example, we can delete the educationLevel property from the school's object we created above because the educationLevel property is defined on the instance: we used the "this" keyword to define the property when we declare the HigherLearning function. We did not define the educationLevel property on the HigherLearning function's prototype.

console.log(school.hasOwnProperty("educationLevel")); true
// educationLevel is an own property on school, so we can delete it
delete school.educationLevel; true 

// The educationLevel property was deleted from the school instance
console.log(school.educationLevel); undefined

// But the educationLevel property is still on the HigherLearning function
var newSchool = new HigherLearning ();
console.log(newSchool.educationLevel); // University

// If we had defined a property on the HigherLearning function's prototype, such as this educationLevel2 property:
HigherLearning.prototype.educationLevel2 = "University 2";

// Then the educationLevel2 property on the instances of HigherLearning would not be own property. 

// The educationLevel2 property is not an own property on the school instance
console.log(school.hasOwnProperty("educationLevel2")); false
console.log(school.educationLevel2); // University 2

// Let's try to delete the inherited educationLevel2 property
delete school.educationLevel2; true (always returns true, as noted earlier)

// The inherited educationLevel2 property was not deleted
console.log(school.educationLevel2); //University 2

/*
Serialize and Deserialize Objects
To transfer your objects via HTTP or to otherwise convert it to a string, you will need to serialize it (convert it to a string); you can use the 
JSON.stringify function to serialize your objects. Note that prior to ECMAScript 5, you had to use a popular
 json2 library (by Douglas Crockford) to get the JSON.stringify function. It is now standardized in ECMAScript 5.

To Deserialize your object (convert it to an object from a string), you use the JSON.parse function from the same json2 
library. 
This function too has been standardized by ECMAScript 5.
*/

// JSON.stringify Examples:

var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }
JSON.stringify (christmasList);
// Prints this string:
// "{"mike":"Book","jason":"sweater","chels":"iPad"}"

// To print a stringified object with formatting, add "null" and "4" as parameters:
JSON.stringify (christmasList, null, 4);
OP:
 "{
    "mike": "Book",
    "jason": "sweater",
    "chels": "iPad"
}"

// JSON.parse Examples 
// The following is a JSON string, so we cannot access the properties with dot notation (like christmasListStr.mike)
var christmasListStr = '{"mike":"Book","jason":"sweater","chels":"iPad"}';

// Let’s convert it to an object
var christmasListObj = JSON.parse (christmasListStr); 

// Now that it is an object, we use dot notation
console.log(christmasListObj.mike); // Book


/*
What is a closure?
A closure is an inner function that has access to the outer (enclosing) function’s variables—scope chain. 
The closure has three scope chains: it has access to its own scope (variables defined between its curly brackets), 
it has access to the outer function’s variables, and it has access to the global variables.

The inner function has access not only to the outer function’s variables, but also to the outer function’s parameters. 
Note that the inner function cannot call the outer function’s arguments object, however, even though it can call the outer function’s parameters directly.
You create a closure by adding a function inside another function.
A Basic Example of Closures in JavaScript:

*/

function showName (firstName, lastName) {
    var nameIntro = "Your name is ";
        // this inner function has access to the outer function's variables, including the parameter
    function makeFullName () {
    return nameIntro + firstName + " " + lastName;
}

return makeFullName ();
}

showName ("Michael", "Jackson"); // Your name is Michael Jackson

/*

Closures’ Rules and Side Effects
1. Closures have access to the outer function’s variable even after the outer function returns:
One of the most important and ticklish features with closures is that the inner function still has access to the outer function’s variables
even after the outer function has returned. Yep, you read that correctly. When functions in JavaScript execute, they use the same scope chain that was
in effect when they were created. This means that even after the outer function has returned, the inner function still has access to the outer function’s
variables. 
Therefore, you can call the inner function later in your program. This example demonstrates:

*/

function celebrityName (firstName) {
    var nameIntro = "This celebrity is ";
    // this inner function has access to the outer function's variables, including the parameter
   function lastName (theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName ("Michael"); // At this juncture, the celebrityName outer function has returned.

// The closure (lastName) is called here after the outer function has returned above
// Yet, the closure still has access to the outer function's variables and parameter
mjName ("Jackson"); // This celebrity is Michael Jackson


/*
Closures store references to the outer function’s variables; they do not store the actual value. Closures get more interesting when the value
of the outer function’s variable changes before the closure is called. And this powerful feature can be harnessed in creative ways, such as this
private variables example first demonstrated by Douglas Crockford:
*/


function celebrityID () {
    var celebrityID = 999;
    // We are returning an object with some inner functions
    // All the inner functions have access to the outer function's variables
    return {
        getID: function ()  {
            // This inner function will return the UPDATED celebrityID variable
            // It will return the current value of celebrityID, even after the changeTheID function changes it
          return celebrityID;
        },
        setID: function (theNewID)  {
            // This inner function will change the outer function's variable anytime
            celebrityID = theNewID;
        }
    }

}

var mjID = celebrityID (); // At this juncture, the celebrityID outer function has returned.
mjID.getID(); // 999
mjID.setID(567); // Changes the outer function's variable
mjID.getID(); // 567: It returns the updated celebrityId variable

/*
Closures Gone Awry:
Because closures have access to the updated values of the outer function’s variables, they can also lead to bugs when the outer function’s variable 
changes with a for loop. Thus:
*/

// This example is explained in detail below (just after this code box).
function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
      theCelebrities[i]["id"] = function ()  {
        return uniqueID + i;
      }
    }
    
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0]; 
console.log(stalloneID.id()); // 103

/*

n the preceding example, by the time the anonymous functions are called, the value of i is 3 (the length of the array and then it increments). 
The number 3 was added to the uniqueID to create 103 for ALL the celebritiesID. So every position in the returned array get id = 103, instead of the
intended 100, 101, 102.

The reason this happened was because, as we have discussed in the previous example, the closure (the anonymous function in this example) has access to 
the outer function’s variables by reference, not by value. So just as the previous example showed that we can access the updated variable with the closure, 
this example similarly accessed the i variable when it was changed, since the outer function runs the entire for loop and returns the last value of i, which is 103.

To fix this side effect (bug) in closures, you can use an Immediately Invoked Function Expression (IIFE), such as the following:
*/

function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            } () // BY adding () at the end of this function, we are executing it immediately and returning just the value of uniqueID + j, instead of returning a function.
        } (i); // immediately invoke the function passing the i variable as a parameter
    }

    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id); // 100

var cruiseID = createIdForActionCelebs [1];
console.log(cruiseID.id); // 101

// 12 Simple (Yet Powerful) JavaScript Tips

/*
1. Powerful JavaScript Idiomatic Expressions With && and ||
You see these idiomatic expressions in JavaScript frameworks and libraries. Let’s start off with a couple of basic examples:

Example 1: Basic “short circuting” with || (Logical OR)
To set default values, instead of this:
*/

function documentTitle(theTitle)
if (!theTitle) {
  theTitle  = "Untitled Document";
  }
}


// Use this:
function documentTitle(theTitle)
  theTitle  = theTitle || "Untitled Document";
}


/*
Explanation:
— First, read the “Important Note” box below for a refresher on JavaScript’s Falsy and Truthy values
— The || operator first evaluates the expression on the left, if it is truthy, it returns that value. 
  If it is falsy, it evaluates and returns the value of the right operand (the expression on the right).
— If theTitle variable is falsy, the expression on the right will be returned and assigned to the variable. 
  On the other hand, if theTitle is truthy, its value will be returned and assigned to the variable.

JavaScript Falsy Values: null, false, 0 undefined, NaN, and “” (this last item is an empty string).
— Note that Infinity, which is a special number like NaN, is truthy; it is not falsy, while NaN is falsy.
JavaScript Truthy Values: Anything other than the falsy values.

Example 2: Basic short circuting with && (Logical AND)
Instead of this:

*/


function isAdult(age) {
  if (age && age > 17) {
  return true;
}
else {
  return false;
  }
}
// Use this:

function isAdult(age) {
   return age && age > 17 ;
}



/*

Explanation:
— The && operator first evaluates the expression on the left. If it is falsy, false is returned; 
   it does not bother to evaluate the right operand.
— If the the first expression is truthy, also evaluate the right operand (the expression on the right) and return the result.

Example 3:
Instead of this:

*/


if (userName) {
  logIn (userName);
}
 else {
   signUp ();
}

// Use this:

 userName && logIn (userName) || signUp ();

/*

Explanation:
— If userName is truthy, then call the logIn function with userName as the parameter.
— If userName is falsy, call the signUp function

Example 4:
Instead of this:
*/


var userID;
if (userName && userName.loggedIn) {
  userID = userName.id;
}
else {
  userID = null;
}

// Use this:
var userID = userName && userName.loggedIn && userName.id
/*
Explanation:
— If userName is truthy, call userName.loggedIn and check if it is truthy; if it is truthy, then get the id from userName.
— If userName is falsy, return null.

*/
// 2. Powerful Uses of Immediately Invoked Function Expressions

/*
IFE (pronounced “Iffy”) is an abbreviation for Immediately Invoked Function Expression, and the syntax looks like this:
It is an anonymous function expression that is immediately invoked, and it has some particularly important uses in JavaScript.

*/

(function () {
 // Do fun stuff
 }
)()


// How Immediately Invoked Function Expressions Work?
/*
The pair of parenthesis surrounding the anonymous function turns the anonymous function into a function expression or variable expression.
So instead of a simple anonymous function in the global scope, or wherever it was defined, we now have an unnamed function expression.
It is as if we have this:
*/

//Similarly, we can even create a named, immediately invoked function expression:

(showName = function (name) {console.log(name || "No Name")}) (); // No Name

showName ("Rich"); // Rich
showName (); // No Name

/*

— Note that you cannot use the var keyword inside the opening pair of parentheses (you will get a syntax error), but it is not necessary in this context 
  to use var since any variable declared without the var keyword will be a global variable anyway.
— We were able to call this named function expression both immediately and later because it has a name.
— But we can’t call the anonymous function expression later, since there is no way to refer to it. 
This is the reason it is only useful when it is immediately invoked.

By placing the anonymous function in parentheses (a group context), the entire group is evaluated and the value returned. 
The returned value is actually the entire anonymous function itself, so all we have to do is add two parentheses after it to invoke it.


Therefore, the last two parentheses tell the JS compiler to invoke (call) this anonymous function immediately, hence the name
 “Immediately Invoked Function Expression.” 

Because JavaScript has function-level scope, all the variables declared in this 
anonymous function are local variables and therefore cannot be accessed outside the anonymous function.

 So we now have a powerful piece of anonymous code inside an unnamed function expression, and the code is meaningless unless we invoke the anonymous function, because nothing can access the code.
 It is the immediate invocation of the anonymous function that makes it powerful and useful.

You can pass parameters to the anonymous function, just like you would any function, including variables. The anonymous function’s scope extend 
into any outer function that contains it and to the global scope. Read my article, JavaScript Variable Scope and Hoisting Explained, for more.

When To Use Immediately Invoked Function Expressions?
1. To Avoid Polluting the Global Scope The most popular use of the IIFE is to avoid declaring variables in the global scope. 
Many JavaScript libraries use this technique, and of course many JS pros, too. It is especially popular amongst jQuery plugin developers. 
And you should use an IIFE in the top-level (main.js) of your applications.

In this first example, I am using it in the global scope to keep all my variables local to the anonymous function, and thus outside 
the global scope where variables can shadow (block) other already-defined variables with the same name (probably from an included library or framework). 
All of my code for the application will start in the IIFE:

*/

// All the code is wrapped in the IIFE
(function () {
    var firstName = “Richard”;
    function init () {
      doStuff (firstName);
      // code to start the application
    }

    function doStuff () {
      // Do stuff here
    }

    function doMoreStuff () {
     // Do more stuff here
    }

    // Start the application
    init ();
}) ();

/*
— Note that you can also pass jQuery or any other object or variable via the parameter (the last 2 parentheses).
*/

// 2.Use With the Conditional Operator
/*
The use of the IIFE in this manner is not as well known, but it quite powerful since you can execute complex logic without 
having to setup and call a named function:
— Note the two anonymous functions in the conditional statement
— Why would you do this? Because it is powerful and badass.
— I purposely added enough space between each section so the code can read better.
*/


var unnamedDocs = [], namedDocs = ["a_bridge_runover", "great_dreamers"];

function createDoc(documentTitle) {
    var documentName = documentTitle 

        ?

 (function (theName) {
        var newNamedDoc = theName.toLocaleLowerCase().replace(" ", "_");
        namedDocs.push(newNamedDoc);

        return newNamedDoc;
    })(documentTitle)


        :


        (function () {
            var newUnnamedDoc = "untitled_" + Number(namedDocs.length + 1);
            unnamedDocs.push(newUnnamedDoc);
            return newUnnamedDoc;
        })();


    return documentName;
}
createDoc("Over The Rainbow"); // over_the rainbow
createDoc(); // untitled_4


// 3. Use it in Closures to Prevent Fold Over
// To fix side effects (bug) in closures, you can use an IIFE, such as if this example:


function celebrityIDCreator (theCelebrities) {
    var i;
    var uniqueID = 100;
    for (i = 0; i < theCelebrities.length; i++) {
        theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
            return function () {
                return uniqueID + j; // each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            }
        } (i); // immediately invoke the function passing the i variable as a parameter
    }

    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

var stalloneID = createIdForActionCelebs [0];
console.log(stalloneID.id()); // 100

var cruiseID = createIdForActionCelebs [1];
console.log(cruiseID.id()); // 101

/*
What Topics Compose “Intermediate and Advanced JavaScript”?
Intermediate and Advanced JavaScript topics include:
— Debugging JS in the browser, Object-oriented JavaScript
— Advanced Functions: Callback functions, Bind, Curry, IIFE (Immediately Invoked Function Expression)
— Asynchronous execution, timers, Prototypal Inheritance, and Closures
— JavaScript Design Patterns, Object Creation Patterns, and Code Reuse Patterns
— Code Minification and Compression, Loading Strategies, and Dependency Management

Why Should I Learn Advanced JavaScript?
If you work as a font-end developer or you plan to develop JavaScript applications, libraries, or frameworks, it is essential 
that you understand the aforementioned advanced JavaScript topics, because you will not be able to develop complex JavaScript applications without knowing them.


Moreover, when you are familiar with all the best JavaScript techniques, even if you don’t remember how to use them, you can easily
look them up and use them in powerful ways to make your application run faster, load faster, use less code, reuse code, and perform optimally. 
Overall, you will use JavaScript as a Jedi would a lightsaber—you will easily vanquish every JS challenge with ease , eliminate bugs with relish, 
and execute tasks in an instant, compared with your previous apprentice self
*/

// Understand JavaScript Callback Functions and Use Them
/*
Callback functions are derived from a programming paradigm called functional programming. At a simple and fundamental level, functional programming is the
use of functions as arguments. Functional programming was—and still is, though to a much lesser extent today—seen as an esoteric technique
of specially trained, master programmers.


What is a Callback or Higher-order Function?

A callback function, also known as a higher-order function, is a function that is passed to another function (let’s call this other function “otherFunction”) 
as a parameter, and the callback function is called (executed) inside otherFunction. A callback function is essentially a pattern (an established solution to 
a common problem), and therefore, the use of a callback function is also known as a callback pattern.

Here is a simple, common use of a callback function in jQuery:

*/

//Note that the item in the click method's parameter is a function, not a variable.
//The item is a callback function
$("#btn_1").click(function() {
  alert("Btn 1 Clicked");
});


// Here is another classic example of callback functions from basic JavaScript:
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index){
console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});

/*
It is important to note that the callback function is not executed immediately. 
It is “called back” (hence the name) at some specified point inside the containing function’s body. 


The anonymous function will be called later inside the function body. Even without a name, 
it can still be accessed later via the arguments object by the containing function

// Callback Functions Are Closures

As we know, closures have access to the containing function’s scope, so the callback function can access the containing functions variables, 
and even the variables from the global scope.

// Basic Principles When Implementing Callback Functions
Callback functions are uncomplicated, but there are some basic principles when implementing callback functions that we should be familiar 
with before we start making and using our own callback functions.

// Use Named OR Anonymous Functions as Callbacks
*/

// global variable
var allUserData = [];

// generic logStuff function that prints to console
function logStuff (userData) {
    if ( typeof userData === "string")
    {
        console.log(userData);
    }
    else if ( typeof userData === "object")
    {
        for (var item in userData) {
            console.log(item + ": " + userData[item]);
        }

    }

}

// A function that takes two parameters, the last one a callback function
function getInput (options, callback) {
    allUserData.push (options);
    callback (options);

}

// When we call the getInput function, we pass logStuff as a parameter.
// So logStuff will be the function that will called back (or executed) inside the getInput function
getInput ({name:"Rich", speciality:"JavaScript"}, logStuff);
//  name: Rich
// speciality: JavaScript

/*
// Pass Parameters to Callback Functions
Since the callback function is just a normal function when it is executed, we can pass parameters to it. 
We can pass any of the containing function’s properties (or global properties) as parameters to the callback function. 
In the preceding example, we pass options as a parameter to the callback function. Let’s pass a global variable and a local variable:


*/

//Global variable
var generalLastName = "Clinton";

function getInput (options, callback) {
    allUserData.push (options);
    // Pass the global variable generalLastName to the callback function
    callback (generalLastName, options);
}



/*

// Make Sure Callback is a Function Before Executing It
It is always wise to check that the callback function passed in the parameter is indeed a function before calling it. 
Also, it is good practice to make the callback function optional.

Let’s refactor the getInput function from the previous example to ensure these checks are in place.

*/

function getInput(options, callback) {
    allUserData.push(options);

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Call it, since we have confirmed it is callable
        callback(options);
    }
}


/*


Without the check in place, if the getInput function is called either without the callback function as a parameter or in place of a function 
a non-function is passed, our code will result in a runtime error.

// Problem When Using Methods With The this Object as Callbacks


When the callback function is a method that uses the this object, we have to modify how we execute the callback function to preserve the this object context. 
Or else the this object will either point to the global window object (in the browser), if callback was passed to a global function. 
Or it will point to the object of the containing method.
Let’s explore this in code:

*/


// Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
        // this refers to the fullName property in this object
      this.fullName = firstName + " " + lastName;
    }
}

function getUserInput(firstName, lastName, callback)  {
    // Do other stuff to validate firstName/lastName here

    // Now save the names
    callback (firstName, lastName);
}

/*
In the following code example, when clientData.setUserName is executed, this.fullName will not set the fullName property on the clientData object. Instead, 
it will set fullName on the window object, since getUserInput is a global function. This happens because the this object in the global function points to 
the window object.
*/

getUserInput ("Barack", "Obama", clientData.setUserName);

console.log (clientData.fullName);// Not Set

// The fullName property was initialized on the window object
console.log (window.fullName); // Barack Obama

// Use the Call or Apply Function To Preserve this

/*

Call takes the value to be used as the this object inside the function as the first parameter, and the remaining arguments to be passed to 
the function are passed individually (separated by commas of course). The Apply function’s first parameter is also the value to be used as 
the this object inside the function, while the last parameter is an array of values (or the arguments object) to pass to the function.

This sounds complex, but lets see how easy it is to use Apply or Call. To fix the problem in the previous example, we will use the Apply function thus:

*/
//Note that we have added an extra parameter for the callback object, called "callbackObj"
function getUserInput(firstName, lastName, callback, callbackObj)  {
    // Do other stuff to validate name here

    // The use of the Apply function below will set the this object to be callbackObj
    callback.apply (callbackObj, [firstName, lastName]);
}


/*
With the Apply function setting the this object correctly, we can now correctly execute the callback and have it set the fullName property correctly on the 
clientData object:

*/

// We pass the clientData.setUserName method and the clientData object as parameters. The clientData object will be used by 
the Apply function to set the this object
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);

// the fullName property on the clientData was correctly set
console.log (clientData.fullName); // Barack Obama

/*
Multiple Callback Functions Allowed
We can pass more than one callback functions into the parameter of a function, just like we can pass more than one variable. 
Here is a classic example with jQuery’s AJAX function:

*/


function successCallback() {
    // Do stuff before send
}

function successCallback() {
    // Do stuff if success message received
}

function completeCallback() {
    // Do stuff upon completion
}

function errorCallback() {
    // Do stuff if error received
}

$.ajax({
    url:"http://fiddle.jshell.net/favicon.png",
    success:successCallback,
    complete:completeCallback,
    error:errorCallback

});

/*
// “Callback Hell” Problem And Solution

In asynchronous code execution, which is simply execution of code in any order, sometimes it is common to have numerous levels of callback functions to the 
extent that you have code that looks like the following. The messy code below is called callback hell because of the difficulty of following 
the code due to the many callbacks. I took this example from the node-mongodb-native, a MongoDB driver for Node.js. [2]. The example code below is just for demonstration:
*/

var p_client = new Db('integration_tests_20', new Server("127.0.0.1", 27017, {}), {'pk':CustomPKFactory});
p_client.open(function(err, p_client) {
    p_client.dropDatabase(function(err, done) {
        p_client.createCollection('test_custom_key', function(err, collection) {
            collection.insert({'a':1}, function(err, docs) {
                collection.find({'_id':new ObjectID("aaaaaaaaaaaa")}, function(err, cursor) {
                    cursor.toArray(function(err, items) {
                        test.assertEquals(1, items.length);

                        // Let's close the db
                        p_client.close();
                    });
                });
            });
        });
    });
});


/*
You are not likely to encounter this problem often in your code, but when you do—and you will from time to time—here are two solutions to this problem. 

Name your functions and declare them and pass just the name of the function as the callback, instead of defining an anonymous function in the parameter 
of the main function.

Modularity: Separate your code into modules, so you can export a section of code that does a particular job. Then you can import that module into your 
larger application.
*/


// Make Your Own Callback Functions

/*

Now that you completely (I think you do; if not it is a quick reread :)) understand everything about JavaScript callback functions and you have seen that using
callback functions are rather simple yet powerful, you should look at your own code for opportunities to use callback functions, for they will allow you to:

Not repeat code (DRY—Do Not Repeat Yourself)

Implement better abstraction where you can have more generic functions that are versatile (can handle all sorts of functionalities)

Have better maintainability

Have more readable code

Have more specialized functions.

It is rather easy to make your own callback functions. In the following example, I could have created one function to do all the work: 
retrieve the user data, create a generic poem with the data, and greet the user. This would have been a messy function with much if/else statements and, even still, 
it would have been very limited and incapable of carrying out other functionalities the application might need with the user data.

Instead, I left the implementation for added functionality up to the callback functions, so that the main function that retrieves the user data can perform 
virtually any task with the user data by simply passing the user’s full name and gender as parameters to the callback function and then executing 
the callback function.

In short, the getUserInput function is versatile: it can execute all sorts of callback functions with myriad of functionalities.

*/
// First, setup the generic poem creator function; it will be the callback function in the getUserInput function below.
function genericPoemMaker(name, gender) {
    console.log(name + " is finer than fine wine.");
    console.log("Altruistic and noble for the modern time.");
    console.log("Always admirably adorned with the latest style.");
    console.log("A " + gender + " of unfortunate tragedies who still manages a perpetual smile");
}

//The callback, which is the last item in the parameter, will be our genericPoemMaker function we defined above.
function getUserInput(firstName, lastName, gender, callback) {
    var fullName = firstName + " " + lastName;

    // Make sure the callback is a function
    if (typeof callback === "function") {
    // Execute the callback function and pass the parameters to it
    callback(fullName, gender);
    }
}

// Call the getUserInput function and pass the genericPoemMaker function as a callback:
getUserInput("Michael", "Fassbender", "Man", genericPoemMaker);
// Output
/* Michael Fassbender is finer than fine wine.
Altruistic and noble for the modern time.
Always admirably adorned with the latest style.
A Man of unfortunate tragedies who still manages a perpetual smile.
*/

// Because the getUserInput function is only handling the retrieving of data, we can pass any callback to it. For example, we can pass a greetUser function like this:

function greetUser(customerName, sex)  {
   var salutation  = sex && sex === "Man" ? "Mr." : "Ms.";
  console.log("Hello, " + salutation + " " + customerName);
}

// Pass the greetUser function as a callback to getUserInput
getUserInput("Bill", "Gates", "Man", greetUser);

// And this is the output
Hello, Mr. Bill Gates

/*
We called the same getUserInput function as we did before, but this time it performed a completely different task.

As you can see, callback functions are fantastic. And even though the preceding example is relatively simple, imagine how much work you can save yourself 
and how well abstracted your code will be, if you start using callback functions. Go for it.

Here are common ways callback functions are frequently used in JavaScript programming, especially in modern web application development and in libraries and 
frameworks:

For asynchronous execution (such as reading files, and making HTTP requests)
In Event Listeners/Handlers
In setTimeout and setInterval methods
For Generalization: code conciseness



JavaScript callback functions are wonderful and powerful to use and they provide great benefits to your web applications and to your code. 
You should use them when the need arises; look for ways to refactor your code for Abstraction, Maintainability, and Readability with callback functions.
*/

// JavaScript Prototype in Plain Language
/*


*/



// OOP In JavaScript: What You NEED to Know

/*
(Object Oriented JavaScript: Only Two Techniques Matter)

There are two interrelated concepts with prototype in JavaScript:

1. First, there is a prototype property that every JavaScript function has (it is empty by default), and you attach properties and methods on this prototype 
property when you want to implement inheritance.Note that this prototype property is not enumerable: it is not accessible in a for/in loop. But Firefox, and 
most versions of Safari and Chrome, have a __proto__ “pseudo” property (an alternative way) that allows you to access an object’s prototype property. 
You will likely never use this __proto__ pseudo property, but know that it exists and it is simply a way to access an object’s prototype property in some browsers.
The prototype property is used primarily for inheritance: you add methods and properties on a function’s prototype property to make those 
methods and properties available to instances of that function.

Here is a very simple example of inheritance with the prototype property (more on inheritance later):
*/

function PrintStuff (myDocuments) {
this.documents = myDocuments;
}

// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:
PrintStuff.prototype.print = function () {
console.log(this.documents);
}

// Create a new object with the PrintStuff () constructor, thus allowing this new object to inherit PrintStuff's properties and methods.
var newObj = new PrintStuff ("I am a new Object and I can print.");

// newObj inherited all the properties and methods, including the print method, from the PrintStuff function. Now newObj can call print directly, even though we never created a print () method on it.
newObj.print (); //I am a new Object and I can print.

/*
2. The second concept with prototype in JavaScript is the prototype attribute. Think of the prototype attribute as a characteristic of the object; 
this characteristic tells us the object’s “parent”. In simple terms: An object’s prototype attribute points to the object’s “parent”—the object it inherited 
its properties from. The prototype attribute is normally referred to as the prototype object, and it is set automatically when you create a new object.
To expound on this: Every object inherits properties from some other object, and it is this other object that is the object’s prototype attribute or “parent.” 
(You can think of the prototype attribute as the lineage or the parent). In the example code above, newObj‘s prototype is PrintStuff.prototype.

Note: All objects have attributes just like object properties have attributes. And the object attributes are prototype, class, and extensible attributes. 
It is this prototype attribute that we are discussing in this second example.

Also note that the __proto__ “pseudo” property contains an object’s prototype object (the parent object it inherited its methods and properties from).
Constructor
Before we continue, let’s briefly examine the constructor. A constructor is a function used for initializing new objects, and you use the new keyword to call 
the constructor.
For example:
*/


function Account () {
}
// This is the use of the Account constructor to create the userAccount object.
var userAccount = new Account (); 

/*
Moreover, all objects that inherit from another object also inherit a constructor property. 
And this constructor property is simply a property (like any variable) that holds or points to the constructor of the object.
*/

//The constructor in this example is Object () 
var myObj = new Object ();
// And if you later want to find the myObj constructor:
console.log(myObj.constructor); // Object()

// Another example: Account () is the constructor
var userAccount = new Account (); 
// Find the userAccount object's constructor
console.log(userAccount.constructor); // Account()

// Prototype Attribute of Objects Created with new Object () or Object Literal

/*
All objects created with object literals and with the Object constructor inherits from Object.prototype. Therefore, 
Object.prototype is the prototype attribute (or the prototype object) of all objects created with new Object () or with {}.
Object.prototype itself does not inherit any methods or properties from any other object.
*/

// The userAccount object inherits from Object and as such its prototype attribute is Object.prototype.
var userAccount = new Object ();

// This demonstrates the use of an object literal to create the userAccount object; the userAccount object inherits from Object; therefore, its prototype attribute is 
// Object.prototype just as the userAccount object does above.
var userAccount = {name: “Mike”} 

// Prototype Attribute of Objects Created With a Constructor Function
/*
Objects created with the new keyword and any constructor other than the Object () constructor, get their prototype from the constructor function.

For Example:
*/

function Account () {

}
var userAccount = new Account () // userAccount initialized with the Account () constructor and as such its prototype attribute (or prototype object) is Account.prototype.

/*
Similarly, any array such as var myArray = new Array (), gets its prototype from Array.prototype and it inherits Array.prototype’s properties.

So, there are two general ways an object’s prototype attribute is set when an object is created:	

1. If an object is created with an object literal (var newObj = {}), it inherits properties from Object.prototype and 
we say its prototype object (or prototype attribute) is Object.prototype.

2. If an object is created from a constructor function such as new Object (), new Fruit () or new Array () or new Anything (), 
it inherits from that constructor (Object (), Fruit (), Array (), or Anything ()). For example, with a function such as Fruit (), 
each time we create a new instance of Fruit (var aFruit = new Fruit ()), the new instance’s prototype is assigned the prototype from the Fruit constructor,
which is Fruit.prototype.Any object that was created with new Array () will have Array.prototype as its prototype. 
An object created with new Fruit () will have Fruit.prototype as its prototype. And any object created with the Object constructor 
(Obj (), such as var anObj = new Object() ) inherits from Object.prototype.


It is important to know that in ECMAScript 5, you can create objects with an Object.create() method that allows you to set the new object’s prototype object. 
We will cover ECMAScript 5 in a later post.
*/

// Why is Prototype Important and When is it Used?

/*
 These are two important ways the prototype is used in JavaScript, as we noted above:
1. Prototype Property: Prototype-based Inheritance
   Prototype is important in JavaScript because JavaScript does not have classical inheritance based on Classes (as most object oriented languages do), 
and therefore all inheritance in JavaScript is made possible through the prototype property. JavaScript has a prototype-based inheritance mechanism.Inheritance 
is a programming paradigm where objects (or Classes in some languages) can inherit properties and methods from other objects (or Classes). In JavaScript, you 
implement inheritance with the prototype property. For example, you can create a Fruit function (an object, since all functions in JavaScript are objects) and 
add properties and methods on the Fruit prototype property, and all instances of the Fruit function will inherit all the Fruit’s properties and methods.

Demonstration of Inheritance in JavaScript:		

*/

function Plant () {
    this.country = "Mexico";
    this.isOrganic = true;
}

// Add the showNameAndColor method to the Plant prototype property
Plant.prototype.showNameAndColor =  function () {
    console.log("I am a " + this.name + " and my color is " + this.color);
}

// Add the amIOrganic method to the Plant prototype property
Plant.prototype.amIOrganic = function () {
    if (this.isOrganic)
    console.log("I am organic, Baby!");
}

function Fruit (fruitName, fruitColor) {
    this.name = fruitName;
    this.color = fruitColor;
}

// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.
Fruit.prototype = new Plant ();

// Creates a new object, aBanana, with the Fruit constructor
var aBanana = new Fruit ("Banana", "Yellow");

// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:
console.log(aBanana.name); // Banana

// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.

/*
Note that the showNameAndColor method was inherited by the aBanana object even though it was defined all the way up the prototype chain on the Plant.prototype object.

Indeed, any object that uses the Fruit () constructor will inherit all the Fruit.prototype properties and methods and all the properties and methods from 
the Fruit’s prototype, which is Plant.prototype. This is the principal manner in which inheritance is implemented in JavaScript and the integral role the 
prototype chain has in the process.


2. Prototype Attribute: Accessing Properties on Objects
Prototype is also important for accessing properties and methods of objects. The prototype attribute (or prototype object) of any object is the “parent” object 
where the inherited properties were originally defined.This is loosely analogous to the way you might inherit your surname from your father—he is your 
“prototype parent.” If we wanted to find out where your surname came from, we would first check to see if you created it yourself; if not, the search will move to 
your prototype parent to see if you inherited it from him. If it was not created by him, the search continues to his father (your father’s prototype parent).

Similarly, if you want to access a property of an object, the search for the property begins directly on the object. If the JS runtime can’t find the property there, 
it then looks for the property on the object’s prototype—the object it inherited its properties from.

If the property is not found on the object’s prototype, the search for the property then moves to prototype of the object’s prototype (the father of the object’s 
father—the grandfather). And this continues until there is no more prototype (no more great-grand father; no more lineage to follow). This in essence is the 
prototype chain: the chain from an object’s prototype to its prototype’s prototype and onwards. And JavaScript uses this prototype chain to look for properties 
and methods of an object.If the property does not exist on any of the object’s prototype in its prototype chain, then the property does not exist 
and undefined is returned.

This prototype chain mechanism is essentially the same concept we have discussed above with the prototype-based inheritance, except we are now focusing 
specifically on how JavaScript accesses object properties and methods via the prototype object.

This example demonstrates the prototype chain of an object’s prototype object:

*/




var myFriends = {name: "Pete"};

// To find the name property below, the search will begin directly on the myFriends object and will immediately find the name property because we defined the property name on the myFriend object. This could be thought of as a prototype chain with one link.
console.log(myFriends.name);

// In this example, the search for the toString () method will also begin on the myFriends’ object, but because we never created a toString method on the myFriends object, the compiler will then search for it on the myFriends prototype (the object which it inherited its properties from).

// And since all objects created with the object literal inherits from Object.prototype, the toString method will be found on Object.prototype—see important note below for all properties inherited from Object.prototype. 

myFriends.toString ();

/*
Object.prototype Properties Inherited by all Objects
All objects in JavaScript inherit properties and methods from Object.prototype. These inherited properties and methods are constructor, hasOwnProperty (), 
isPrototypeOf (), propertyIsEnumerable (), toLocaleString (), toString (), and valueOf (). ECMAScript 5 also adds 4 accessor methods to Object.prototype.
Here is another example of the prototype chain:
*/

function People () {
    this.superstar = "Michael Jackson";
}
// Define "athlete" property on the People prototype so that "athlete" is accessible by all objects that use the People () constructor.
People.prototype.athlete = "Tiger Woods";

var famousPerson = new People ();
famousPerson.superstar = "Steve Jobs";

// The search for superstar will first look for the superstar property on the famousPerson object, and since we defined it there, that is the property that will be used. Because we have overwritten the famousPerson’s superstar property with one directly on the famousPerson object, the search will NOT proceed up the prototype chain. 
console.log (famousPerson.superstar); // Steve Jobs

// Note that in ECMAScript 5 you can set a property to read only, and in that case you cannot overwrite it as we just did.

// This will show the property from the famousPerson prototype (People.prototype), since the athlete property was not defined on the famousPerson object itself.
console.log (famousPerson.athlete); // Tiger Woods

// In this example, the search proceeds up the prototype chain and find the toString method on Object.prototype, from which the Fruit object inherited—all objects ultimately inherits from Object.prototype as we have noted before.
console.log (famousPerson.toString()); // [object Object]

/*
All built-in constructors (Array (), Number (), String (), etc.) were created from the Object constructor, and as such their prototype is Object.prototype.

*/




/*
Object Oriented Programming (OOP) refers to using Classes (Functions in JavaScript) to create objects, which are self-contained pieces of code.
Then we use those objects as building blocks for our applications. Using objects in this manner allows us to adopt some valuable techniques, 
including Inheritance (objects can inherit features from other objects), Polymorphism (objects can share the same interface—how they are 
accessed and used—while their underlying implementation of the interface may differ), and Encapsulation (each object is responsible for 
specific tasks).


// Encapsulation and Inheritance Overview

Objects can be thought of as the main actors in an application, or simply the main “things” or building blocks that do all the work. 
As you know by now, objects are everywhere in JavaScript, and we use object literals or constructor Functions to create objects. 
Also, it is important to know that Functions are objects in JavaScript.

Encapsulation refers to enclosing all the functionalities of an object within that object, so that the object’s internal workings
(its methods and properties) are hidden from the rest of the application. This allows us to abstract or localize specific set of 
functionalities on objects.

Inheritance refers to an object being able to inherit methods and properties from a parent object (a Class in other OOP languages,
or a Function in JavaScript).

Both of these concepts, encapsulation and inheritance, are important because they allow us to build applications with reusable code, 
scalable architecture, and abstraction. The result is applications that are easy to maintain, efficient, and scalable.

An instance is an implementation of a Function. In simple terms, it is a copy (or “child”) of a Function or object. For example:

*/

function Tree (typeOfTree) {} // Tree is a constructor function, because we will use new keyword to invoke it.

var bananaTree = new Tree ("banana"); // bananaTree is an instance of Tree.

/*
In the preceding example code, bananaTree is an object that was created from the Tree constructor function. We say that the bananaTree 
object is an instance of the Tree object. Tree is both an object and a function, because functions are objects in JavaScript. bananaTree 
can have its own methods and properties and inherit methods and properties from the Tree object, as we will discuss in detail when we study 
inheritance below.

// OOP in JavaScript


The two important principles with OOP in JavaScript are Object Creation patterns (Encapsulation) and Code Reuse patterns (Inheritance). 
When building applications, you create many objects, and there are many ways of creating these objects: you can use the very basic object 
literal pattern, for example:

*/

var myObj = {name:"Richard", profession:"Developer"}; 

// Or you can use a constructor function (Classes in other languages, but Functions in JavaScript). For example:

function People (name, profession) {} //People () is the constructor function, because we use the new keyword below to invoke it.

var richard = new People (“Richard”, “Developer”) // richard is a new object we create from the People () constructor function.

/*
In the latter example, we use a custom constructor function to create an object. This is how we create objects when we want to add methods and
properties on our objects, and when we want to encapsulate functionality on our objects. JavaScript developers have invented many patterns 
(or ways) for creating objects with constructor functions. And when we say Object Creation Patterns, we are concerned principally with the 
many ways of creating objects from constructor functions, as in the preceding example.

In addition to the patterns for creating objects, you want to reuse code efficiently. When you create your objects, you will likely want some 
of them to inherit (have similar functionality) methods and properties from a parent object, yet they should be able to also have their own 
methods and properties. Code reuse patterns facilitate ways in which we can implement inheritance.

These two universal principles—creating objects (especially from constructor Functions) and allowing objects to inherit properties and 
methods—are the main focus of this article and, indeed, the main concepts with OOP in JavaScript. We first discuss the object creation 
pattern.

// Encapsulation in JavaScript
(The Best Object Creation Pattern: Combination Constructor/Prototype Pattern)

As we have learned, one of the main principles with OOP is encapsulation—put all the inner workings of an object inside that object. 
To implement encapsulation in JavaScript, we have to define the core methods and properties on that object. To do this, we will use 
the best pattern for encapsulation in JavaScript: the Combination Constructor/Prototype Pattern. This name is a mouthful, but you needn’t 
memorize it, since we are only concerned with its implementation. Before we implement it, let’s quickly learn a bit more about 
the practicality of encapsulation.

// Why Encapsulation?
When you simply want to create an object just to store some data, and it is the only object of its kind, you can use an object literal and 
create your object. This is quite common and you will use this simple pattern often.

However, whenever you want to create objects with similar functionalities (to use the same methods and properties), you encapsulate the main 
functionalities in a Function and you use that Function’s constructor to create the objects. This is the essence of encapsulation. And it 
is this need for encapsulation that we are concerned with and why we are using the Combination Constructor/Prototype Pattern.

To make practical use of OOP in JavaScript, we will build an object-oriented quiz application that uses all the principles and techniques 
we learn in this article. First up, our quiz application will have users (a Users Function) who take the quiz. There will be some common 
properties for every user who takes the quiz: each user will have a name, a score, an email, and the quiz scores (all the scores). 
These are the properties of the User object. In addition, each User object should be able to show the name and score, save scores, and 
change the email. These are the methods of the object.

Because we want ALL the user objects to have these same properties and methods, we cannot use the object literal way of creating objects. 
We have to use a constructor Function to encapsulate these properties and methods.

Since we know all users will have the same set of properties, it makes sense to create a Function (Class in OOP languages) that encapsulates 
these properties and methods. Thus, we will use the Combination Constructor/Prototype Pattern for this.

Implementation of Combination Constructor/Prototype Pattern
The User Function:

I will explain each line.


*/

function User (theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}


// Make Instances of the User function

// A User 
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18

// Explanation of Combination Constructor/Prototype Pattern

/*
Let’s expound on each line of code so we have a thorough understanding of this pattern.

The following lines initialize the instance properties. These properties will be defined on each User instance that is created. 
So the values will be different for each user. The use of the this keyword inside the function specifies that these properties 
will be unique to every instance of the User object:
*/

this.name = theName;
this.email = theEmail;
this.quizScores = [];
this.currentScore = 0;

/*
In the code below, we are overwriting the prototype property with an object literal, and we define all of our methods (that will be inherited by all the User instances) in this object.
Discussion continues after the code:
*/

User.prototype = {
    constructor: User,
    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}


// This way of overwriting the constructor is simply for convenience, so we don’t have to write User.prototype each time, like this:



User.prototype.constructor = User;
User.prototype.saveScore = function (theScoreToAdd)  {
    this.quizScores.push(theScoreToAdd)
};

User.prototype.showNameAndScores = function ()  {
    var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
    return this.name + " Scores: " + scores;
};

User.prototype.changeEmail =  function (newEmail)  {
    this.email = newEmail;
    return "New Email Saved: " + this.email;
}

/*

By overwriting the prototype with a new object literal we have all the methods organized in one place, and you can better see the 
encapsulation that we are after. And of course it is less code you have to type.


// JavaScript Prototype
In JavaScript, you add methods and properties on the prototype property when you want instances of an object to inherit those methods and 
properties. This is the reason we add the methods on the User.prototype property, so that they can be used by all instances of the User 
object.


// Constructor Property
In my post JavaScript Prototype, I explained that every function has a constructor property, and this property points to the constructor 
of the function. For example:
*/

function Fruit () {}
var newFruit = new Fruit ();
console.log (newFruit.constructor) // Fruit ()


/*
The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, so we have to set 
it manually. Hence this line:
*/

constructor: User


// Prototype Methods

/*
In the following lines, we create methods on the prototype (in the object literal) so that all instances of Users can have access to these 
methods.
*/

    saveScore:function (theScoreToAdd)  {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores:function ()  {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail:function (newEmail)  {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }


// We then created instances of the User object:

// A User 
firstUser = new User("Richard", "Richard@examnple.com"); 
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10); 

firstUser.showNameAndScores(); //Richard Scores: 15,10

// Another User
secondUser = new User("Peter", "Peter@examnple.com");
secondUser.saveScore(18);
secondUser.showNameAndScores(); //Peter Scores: 18

/*
As you see, we have encapsulated all the functionality for a User inside the User Function, so that each instance of User can make use 
of the prototype methods (like changeEmail) and define their own instance properties (like name and email).

With this pattern, you can use the standard operators and methods on the instances, including the instanceOf operator, the for-in loop 
(even hasOwnProperty), and the constructor property.

//Inheritance in JavaScript

(The Best Pattern: Parasitic Combination Inheritance)

Implementing inheritance in our quiz application will permit us to inherit functionality from parent Functions so that we can easily reuse 
code in our application and extend the functionality of objects. Objects can make use of their inherited functionalities and still have their 
own specialized functionalities.

The best pattern for implementing inheritance in JavaScript is the Parasitic Combination inheritance [1] [2]. Before we dive into this awesome 
pattern, let’s see why its practical to use inheritance in our applications.

We have successfully implemented encapsulation by enclosing all the functionality for users of our quiz application by adding all the methods 
and properties that each user will need on the User function, and all instances of User will have those properties and methods.

Why Inheritance?
Next, we want to encapsulate all the functionalities for every Question. The Question function (Class in OOP languages) will have all the 
generic properties and methods that every kind of question will need to have. For example, every question will have the question, 
the choices, and the correct answer. These will be the properties. In addition, each question will have some methods: 
getCorrectAnswer and getUserAnswer, and displayQuestion.

We want our quiz application to make different types of Questions. We will implement a MultipleChoiceQuestion function and a DragDropQuestion 
function. To implement these, it would not make sense to put the properties and methods outlined above (that all questions will use) 
inside the MultipleChoiceQuestion and DragDropQuestion functions separately, repeating the same code. This would be redundant.

Instead, we will leave those properties and methods (that all questions will use) inside the Question object and make the 
MultipleChoiceQuestion and DragDropQuestion functions inherit those methods and properties. This is where inheritance is important: 
we can reuse code throughout our application effectively and better maintain our code.

Since the MultipleChoiceQuestion HTML layout and will be different from the DragDropQuestion HTML layout, the displayQuestion method will be 
implemented differently in each. So we will override the displayQuestion method on the DragDropQuestion. Overriding functions is another 
principle of OOP.

Lets Code.

// Implementation of the Parasitic Combination Inheritance Pattern




To implement this pattern, we have to use two techniques that were invented specifically for inheritance in JavaScript. Some notes about 
these techniques follow. No need to memorize any of the detail, just understand and be aware of the techniques, for you will have to use 
them when you are ready to use OOP in your JS applications.

// ***** Beginning of Technical Explanation (Briefly) *****

// Object.create method
Douglas Crockford created the following Object.create method [3], which is used in a fundamental way to implementing inheritance with 
the pattern we are using.

Here is the method Crockford created:

*/

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        function F() {
        }

        F.prototype = o;
        return new F();
    };
}

// This method has been added to the ECMAScript5 specification, and you can access it with Object.create (). 
// Let’s quickly understand what it is doing:

Object.create = function (o) {
        //It creates a temporary constructor F()
        function F() {
        }

        //And set the prototype of the this constructor to the parametric (passed-in) o object
        //so that the F() constructor now inherits all the properties and methods of o
        F.prototype = o;

        //Then it returns a new, empty object (an instance of F())
        //Note that this instance of F inherits from the passed-in (parametric object) o object. 
        //Or you can say it copied all of the o object's properties and methods
        return new F();
}


/*

The crux of the matter with this Object.create method is that you pass into it an object that you want to inherit from, and it returns 
a new object that inherits from the object you passed into it. For example:

*/

// We have a simple cars object
var cars = {
    type:"sedan",
    wheels:4
};

// We want to inherit from the cars object, so we do:
var toyota = Object.create (cars); // now toyota inherits the properties from cars
console.log(toyota.type); // sedan

/*
Of course we can now add more properties to the toyota object, but let’s move on.

The next function we will use for inheritance is the inheritPrototype function. This function succinctly implements the parasitic combination 
inheritance for us. We pass in the parent object (or Super Class) and the child object (or Sub Class), and the function does the parasitic 
combination inheritance: makes the child object inherits from the parent object.
*/


function inheritPrototype(childObject, parentObject) {
    // As discussed above, we use the Crockford’s method to copy the properties and methods from the parentObject onto the childObject
    // So the copyOfParent object now has everything the parentObject has 
    var copyOfParent = Object.create(parentObject.prototype);

    //Then we set the constructor of this new object to point to the childObject.
    // Why do we manually set the copyOfParent constructor here, see the explanation immediately following this code block.
    copyOfParent.constructor = childObject;

    // Then we set the childObject prototype to copyOfParent, so that the childObject can in turn inherit everything from copyOfParent (from parentObject)
   childObject.prototype = copyOfParent;
}

// Why did we manually set the copyOfParent.constructor?

/*
We explicitly set the copyOfParent.constructor property to point to the childObject constructor because in the preceding step, var 
copyOfParent = Object.create(parentObject.prototype), this is what we actually did:
*/

// We made a new object and overwrote its prototype with the parentObject prototype:
function F() {
        }
F.prototype = parentObject.prototype;
// Then it was this new F object we assigned to copyOfParent.
// All of this was done inside the Object.create () method.

/*
So, this new F object, which we assigned to copyOfParent, doesn’t have a constructor property anymore because we overwrote its entire 
prototype. Whenever you overwrite an object’s prototype (object.prototype = someVal), you also overwrite the object’s constructor property.

To make sure we have the correct value for copyOfParent constructor, we set it manually with this:
copyOfParent.constructor = childObject;

A commenter by the name of John correctly pointed our that I did not corruptly explain this bit, hence this detailed explanation.

Essentially, we are copying all the properties and methods from the parentObject to the childObject, but we are using the copyOfParent
as an intermediary for the copy. And because the childObject prototype was overwritten during the copy, we manually set the copyOfParent
constructor to the childObject. Then we set the childObject prototype to the copyOfParent so that the childObject inherits from 
the parentObject.

Okay, that was quite a bit. I am hopeful that you understand some of that :)

***** End of Technical Explanation (Hooray!) *****
*/


/*
Back to the fun stuff: Creating our quiz OOP style.
Now that we understand the inheritPrototype function we will be using, lets go ahead and implement our Question constructor.

Note that I use “constructor” and “function” interchangeably sometimes in this particular article when referring to the function, 
because the function will be used as a constructor to create instances.

The Question Constructor (Parent of all Question Objects):
(Can be thought of as the Super Class for Questions)

*/

// The Question function is the parent for all other question objects;
// All question objects will inherit from this Question constructor

function Question(theQuestion, theChoices, theCorrectAnswer) {
    // Initialize the instance properties
    this.question = theQuestion;
    this.choices = theChoices;
    this.correctAnswer = theCorrectAnswer;
    this.userAnswer = "";

    // private properties: these cannot be changed by instances
    var newDate = new Date(),
    // Constant variable: available to all instances through the instance method below. This is also a private property.
        QUIZ_CREATED_DATE = newDate.toLocaleDateString();

// This is the only way to access the private QUIZ_CREATED_DATE variable 
// This is an example of a privilege method: it can access private properties and it can be called publicly
    this.getQuizDate = function () {
        return QUIZ_CREATED_DATE;
    };

// A confirmation message that the question was created
    console.log("Quiz Created On: " + this.getQuizDate());

}




// Add Prototype Methods to The Question Object
/* All instances of the Question object will inherit these methods, because we are adding the methods on the Question prototype. */

 // Define the prototype methods that will be inherited
Question.prototype.getCorrectAnswer = function () {
    return  this.correctAnswer;
};

Question.prototype.getUserAnswer = function () {
    return this.userAnswer;
};

Question.prototype.displayQuestion = function () {
    var questionToDisplay = "<div class='question'>" + this.question + "</div><ul>";
        choiceCounter = 0;

    this.choices.forEach(function (eachChoice)  {
        questionToDisplay += '<li><input type="radio" name="choice" value="' + choiceCounter + '">' + eachChoice + '</li>';
        choiceCounter++;
    });
    questionToDisplay += "</ul>";

    console.log (questionToDisplay);
}; 


// Child Questions (Sub Classes of the Question object)
/*
Now that we have the Question constructor object setup, we can inherit from it and create sub classes (children objects). The power of 
inheritance is that we can create all sorts of questions now, and each can be quite versatile.

First, a Multiple Choice Question:
*/

// Create the MultipleChoiceQuestion
function MultipleChoiceQuestion(theQuestion, theChoices, theCorrectAnswer){
// For MultipleChoiceQuestion to properly inherit from Question, here inside the MultipleChoiceQuestion constructor, we have to explicitly call the Question constructor
// passing MultipleChoiceQuestion as the this object, and the parameters we want to use in the Question constructor:
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
};


// And then we have to use the inheritPrototype function we discussed moments ago:
// inherit the methods and properties from Question
inheritPrototype(MultipleChoiceQuestion, Question);


/*

After we have inherited from Question, we then add methods to the MultipleChoiceQuestion function, if necessary. But we must do it after 
we inherit, not before, or all the methods we define on its prototype will be overwritten. We are not adding any now.

// A Drag and Drop Question
In a similar manner, we can make yet another type of question:

*/

// Create the DragDropQuestion
function DragDropQuestion(theQuestion, theChoices, theCorrectAnswer) {
    Question.call(this, theQuestion, theChoices, theCorrectAnswer);
}

// inherit the methods and properties from Question
inheritPrototype(DragDropQuestion, Question);


// Overriding Methods

/* 
Overriding methods is a another principle of OOP, and we can do it easily with this pattern. Since the Drag and Drop questions will have a 
different HTML layout from the Multiple Choice questions (no radio buttons, for example), we can override the displayQuestion method so 
it operates specifically to the Drag and Drop question needs:
*/

// Override the displayQuestion method it inherited
DragDropQuestion.prototype.displayQuestion = function () {
    // Just return the question. Drag and Drop implementation detail is beyond this article
    console.log(this.question);
};

/*
In our real Quiz application, we would create a Quiz constructor that is the main application that launches the quiz, but in this article,
we can test our inheritance code by simply doing this:
*/

// Initialize some questions and add them to an array
var allQuestions = [
new MultipleChoiceQuestion("Who is Prime Minister of England?", ["Obama", "Blair", "Brown", "Cameron"], 3),
   
new MultipleChoiceQuestion("What is the Capital of Brazil?", ["São Paulo", "Rio de Janeiro", "Brasília"], 2),
   
new DragDropQuestion("Drag the correct City to the world map.", ["Washington, DC", "Rio de Janeiro", "Stockholm"], 0)
];

// Display all the questions
allQuestions.forEach(function (eachQuestion)  {
    eachQuestion.displayQuestion();
});



/*
If you run the code, you will see that the displayQuestion for the multiple choice questions returns the question in a div tag, with choices
formatted with radio buttons inside li tags. On the other hand, the drag and drop questions displayQuestion method simply returns the question 
without the choices.

Nicholas Zakas stated it wonderfully, “Parasitic combination inheritance is considered the most optimal inheritance paradigm” [5] in 
JavaScript. If you learn it and understand it well, you should use it in your JavaScript web applications.

You might be wondering how is the Combination Constructor/Prototype Pattern we used for Encapsulation earlier different from the 
Parasitic Combination Inheritance. They are similar, but the former is best used for encapsulation (creating custom objects), and 
it does not have all the inheritance mechanisms such as subclassing (creating child constructors that inherit from the parent constructor). Moreover, the inheritance pattern goes beyond setting up objects to just inherit properties and methods, it enables child objects to themselves be parent objects of other objects, and you can use private members, overriding, and other OOP concepts.
*/


// Understand JavaScript’s “this” With Clarity, and Master It

// (Also learn all the scenarios when this is most misunderstood.)

/*

The this keyword in JavaScript is notorious for confusing JavaScript developers. This article aims to elucidate this in its entirety. 
Our goal: By the time we make it through this article, this will be one part of JavaScript we will never have to worry about again. 
Also, we will understand how to use this correctly in every scenario, including the ticklish situations where it usually proves elusive.

We use this similar to the way we use pronouns in natural languages like English and French. We write: “John is running fast because 
he is trying to catch the train.” Note the use of the pronoun “he.” We could have written this: “John is running fast because John is 
trying to catch the train.” We don’t reuse “John” in this manner, for if we do, our family, friends, and colleagues would abandon us. 
Yes, they would. In a similar aesthetic manner, we use the this keyword as a shortcut, a referent to refer to an object.


*/

 var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    fullName:function () {
    // See how we use "this" here just like we used "he" in the example sentence?
    console.log(this.firstName + " " + this.lastName);

    // Well, we could have also written:
    console.log(person.firstName + " " + person.lastName);
    }
}


/*
If we use person.firstName and person.lastName, as in the last example, our code becomes ambiguous. Consider that there could be another 
global variable (that we might or might not be aware of) with the name “person.” Then, references to person.firstName could attempt to
access the fistName property from the person global variable, and this could lead to difficult-to-debug errors. So, we use the “this” 
keyword not only for aesthetics (i.e., as a referent), but also for accuracy; its use actually makes our code more unambiguous, just as 
the pronoun “he” made our sentence more clear. It tells us that we are referring to the specific John at the beginning of the sentence.


Just like the pronoun “he” is used to refer to the antecedent (antecedent is the noun that a pronoun refers to), the this keyword is similarly 
used to refer to an object that the function (where this is used) is bound to. this not only refers to the object but it actually contains the 
value of the object. Like the pronoun, this can be thought of as a shortcut (or a reasonably unambiguous substitute) to refer back to the 
object in context (the “antecedent object”, if you will allow me)—more on context later.

// JavaScript’s this Keyword Basics


First, know that all functions in JavaScript have properties, just like objects have properties. And when a function is executed, 
it gets the this property—a variable with the value of the object that invokes the function where this is used.

this ALWAYS refers to (and holds the value of) an object—a singular object—and it is usually used inside a function or a method, although 
it can be used outside a function in the global scope. Note that when strict mode is being used, this holds the value of undefined in global 
functions and in anonymous functions that are not bound to any objects.

this is used inside a function (let’s say function A) and it contains the value of the object that invokes function A. We need this to access 
methods and properties of the object that invokes function A, especially since we don’t always know the name of the invoking object and 
sometimes there is no name at all to use to refer to the invoking object. Indeed, this is really just a shortcut reference for the 
“antecedent object”—the invoking object.

A basic JavaScript example illustrating the use of the this keyword:
*/

    var person = {
        firstName   :"Penelope",
        lastName    :"Barrymore",
        // Since the "this" keyword is used inside the showFullName method below, and the showFullName method is defined on the person object,
        // "this" will have the value of the person object because the person object will invoke showFullName ()
        showFullName:function () {
        console.log (this.firstName + " " + this.lastName);
        }

    }

    person.showFullName (); // Penelope Barrymore

    // A basic jQuery example with the this keyword:

    // A very common piece of jQuery code

    $ ("button").click (function (event) {
        // $(this) will have the value of the button ($("button")) object
        // because the button object invokes the click () method
        console.log ($ (this).prop ("name"));
    });    



/*
In the preceding jQuery example, a bit more explanation is necessary:
the use of $(this), which is jQuery’s syntax for the this keyword in JavaScript, is used inside an anonymous function, and the anonymous 
function is executed in the button’s click () method. The reason $(this) is bound to the button object is because the jQuery library binds 
$(this) to the object that invokes the click method. Therefore, $(this) will have the value of the jQuery button ($(“button”)) object, even 
though $(this) is defined inside an anonymous function that cannot itself access the “this” variable on the outer function.

Note that the button is a DOM element on the HTML page, and it is also an object; in this case it is a jQuery object because we wrapped it in 
the jQuery $() function.

// The Biggest Gotcha with JavaScript “this” keyword

If you understand this one principle of JavaScript’s this, you will understand the “this” keyword with clarity: this is not assigned a value 
until an object invokes the function where this is defined. Let’s call the function where this is defined the “this Function.”

Even though it appears this refers to the object where it is defined, it is not until an object invokes the this Function that this is actually 
assigned a value. And the value it is assigned is based exclusively on the object that invokes the this Function. this has the value of the 
invoking object in most circumstances. However, there are a few scenarios where this does not have the value of the invoking object. I touch 
on those scenarios later.

The use of this in the global scope
In the global scope, when the code is executing in the browser, all global variables and functions are defined on the window object. 
Therefore, when this is used in a global function, it is referring to (and has the value of) the global window object (not in strict mode 
though, as noted earlier) that is the main container of the entire JavaScript application or web page.

Thus:
*/

 var firstName = "Peter",
    lastName = "Ally";

    function showFullName () {
    // "this" inside this function will have the value of the window object
    // because the showFullName () function is defined in the global scope, just like the firstName and lastName
    console.log (this.firstName + " " + this.lastName);
    }

    var person = {
    firstName   :"Penelope",
    lastName    :"Barrymore",
    showFullName:function () {
    // "this" on the line below refers to the person object, because the showFullName function will be invoked by person object.
    console.log (this.firstName + " " + this.lastName);
    }
    }

    showFullName (); // Peter Ally

    // window is the object that all global variables and functions are defined on, hence:
    window.showFullName (); // Peter Ally

    // "this" inside the showFullName () method that is defined inside the person object still refers to the person object, hence:
    person.showFullName (); // Penelope Barrymore

// When this is most misunderstood and becomes tricky 

/*
The this keyword is most misunderstood when we borrow a method that uses this, when we assign a method that uses this to a variable, 
when a function that uses this is passed as a callback function, and when this is used inside a closure—an inner function. We will look 
at each scenario and the solutions for maintaining the proper value of this in each example.


// A bit about “Context” before we continue
The context in JavaScript is similar to the subject of a sentence in English: “John is the winner who returned the money.” The subject of the 
sentence is John, and we can say the context of the sentence is John because the focus of the sentence is on him at this particular time in 
the sentence. Even the “who” pronoun is referring to John, the antecedent. And just like we can use a semicolon to switch the subject of the
sentence, we can have an object that is current context and switch the context to another object by invoking the function with another object.

Similarly, in JavaScript code:
*/


var person = {
   firstName   :"Penelope",
   lastName    :"Barrymore",
   showFullName:function () {
// The "context"
    console.log (this.firstName + " " + this.lastName);
 }
}

// The "context", when invoking showFullName, is the person object, when we invoke the showFullName () method on the person object.
// And the use of "this" inside the showFullName() method has the value of the person object,
person.showFullName (); // Penelope Barrymore

// If we invoke showFullName with a different object:
var anotherPerson = {
firstName   :"Rohit",
lastName    :"Khan"
};

// We can use the apply method to set the "this" value explicitly—more on the apply () method later.
// "this" gets the value of whichever object invokes the"this Function", hence:
person.showFullName.apply (anotherPerson); // Rohit Khan

// So the context is now anotherPerson because anotherPerson invoked the person.showFullName ()  method by virtue of using the apply () method
/*
The takeaway is that the object that invokes the this Function is in context, and we can change the context by invoking the this Function 
with another object; then this new object is in context.

Here are scenarios when the this keyword becomes tricky. The examples include solutions to fix errors with this:
1. Fix this when used in a method passed as a callback

Things get a touch hairy when we pass a method (that uses this) as a parameter to be used as a callback function. For example:
*/

// We have a simple object with a clickHandler method that we want to use when a button on the page is clicked
    var user = {
        data:[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
        ],
        clickHandler:function (event) {
            var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

            // This line is printing a random person's name and age from the data array
            console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
        }
    }

    // The button is wrapped inside a jQuery $ wrapper, so it is now a jQuery object
    // And the output will be undefined because there is no data property on the button object
    $ ("button").click (user.clickHandler); // Cannot read property '0' of undefined

/*
In the code above, since the button ($(“button”)) is an object on its own, and we are passing the user.clickHandler method to its click() 
method as a callback, we know that this inside our user.clickHandler method will no longer refer to the user object. this will now refer 
to the object where the user.clickHandler method is executed because this is defined inside the user.clickHandler method. And the object 
that is invoking user.clickHandler is the button object—user.clickHandler will be executed inside the button object’s click method.

Note that even though we are calling the clickHandler () method with user.clickHandler (which we have to do, since clickHandler is a method 
defined on user), the clickHandler () method itself will be executed with the button object as the context to which “this” now refers. 
So this now refers to is the button ($(“button”)) object.

At this point, it should be apparent that when the context changes—when we execute a method on some other object than where the object was 
originally defined, the this keyword no longer refers to the original object where ‘this” was originally defined, but it now refers to the 
object that invokes the method where this was defined.

Solution to fix this when a method is passed as a callback function:
Since we really want this.data to refer to the data property on the user object, we can use the Bind (), Apply (), or Call () method to 
specifically set the value of this.

I have written an exhaustive article, JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals, on these methods, 
including how to use them to set the this value in various misunderstood scenarios. Rather than re-post all the details here, I recommend you 
read that entire article, which I consider a must read for JavaScript Professionals.

To fix this problem in the preceding example, we can use the bind method thus:

Instead of this line:
*/

$("button").click (user.clickHandler);
// We have to bind the clickHandler method to the user object like this:

$("button").click (user.clickHandler.bind (user)); // P. Mickelson 43


/*

2. Fix this inside closure

Another instance when this is misunderstood is when we use an inner method (a closure). It is important to take note that closures cannot 
access the outer function’s this variable by using the this keyword because the this variable is accessible only by the function itself, 
not by inner functions. For example:

*/

 var user = {
    tournament:"The Masters",
    data      :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
    ],

    clickHandler:function () {
        // the use of this.data here is fine, because "this" refers to the user object, and data is a property on the user object.

        this.data.forEach (function (person) {
        // But here inside the anonymous function (that we pass to the forEach method), "this" no longer refers to the user object.
        // This inner function cannot access the outer function's "this"
       
        console.log ("What is This referring to? " + this); //[object Window]
     
        console.log (person.name + " is playing at " + this.tournament);
        // T. Woods is playing at undefined
        // P. Mickelson is playing at undefined
        })
    }

}

user.clickHandler(); // What is This referring to? [object Window]

/*
this inside the anonymous function cannot access the outer function’s this, so it is bound to the global window object, when strict mode is 
not being used.

// Solution to maintain this inside anonymous functions:
To fix the problem with using this inside the anonymous function passed to the forEach method, we use a common practice in JavaScript and 
set the this value to another variable before we enter the forEach method:
*/
var user = {
        tournament:"The Masters",
        data      :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
        ],

        clickHandler:function (event) {
            // To capture the value of "this" when it refers to the user object, we have to set it to another variable here:
            // We set the value of "this" to theUserObj variable, so we can use it later
            var theUserObj = this;
            this.data.forEach (function (person) {
                // Instead of using this.tournament, we now use theUserObj.tournament
                console.log (person.name + " is playing at " + theUserObj.tournament);
            })
        }

    }

user.clickHandler();
// T. Woods is playing at The Masters
// P. Mickelson is playing at The Masters

/*
It is worth noting that many JavaScript developers like to name a variable “that,” as seen below, to set the value of this. The use of the 
word “that” is very awkward for me, so I try to name the variable a noun that describes which object “this” is referring to, hence my use of 
var theUserObj = this in the preceding code.
*/

// A common practice amongst JavaScript users is to use this code
// var that = this;

/*
3. Fix this when method is assigned to a variable
The this value escapes our imagination and is bound to another object, if we assign a method that uses this to a variable. Let’s see how:
*/

// This data variable is a global variable
    var data = [
    {name:"Samantha", age:12},
    {name:"Alexis", age:14}
    ];

    var user = {
    // this data variable is a property on the user object
    data    :[
    {name:"T. Woods", age:37},
    {name:"P. Mickelson", age:43}
    ],
    showData:function (event) {
    var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

    // This line is adding a random person from the data array to the text field
    console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }

    }

    // Assign the user.showData to a variable
    var showUserData = user.showData;

    // When we execute the showUserData function, the values printed to the console are from the global data array, not from the data array in the user object
    //
    showUserData (); // Samantha 12 (from the global data array)

/*
// Solution for maintaining this when method is assigned to a variable:
We can fix this problem by specifically setting the this value with the bind method:
*/

// Bind the showData method to the user object
var showUserData = user.showData.bind (user);

// Now we get the value from the user object, because the this keyword is bound to the user object
showUserData (); // P. Mickelson 43

/*
4. Fix this when borrowing methods
Borrowing methods is a common practice in JavaScript development, and as JavaScript developers, we will certainly encounter this practice 
time and again. And from time to time, we will engage in this time-saving practice as well. For more on borrowing methods, read my in-depth
article, JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals.

Let’s examine the relevance of this in the context of borrowing methodskey: "value", 
*/

// We have two objects. One of them has a method called avg () that the other doesn't have
// So we will borrow the (avg()) method
var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null,
    players :[
    {name:"Tommy", playerID:987, age:23},
    {name:"Pau", playerID:87, age:33}
    ]
}

var appController = {
        scores  :[900, 845, 809, 950],
        avgScore:null,
        avg     :function () {

        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
}

//If we run the code below,
// the gameController.avgScore property will be set to the average score from the appController object "scores" array

// Don't run this code, this is just for illustration; we want the appController.avgScore to remain null
gameController.avgScore = appController.avg();

/*
The avg method’s “this” keyword will not refer to the gameController object, it will refer to the appController object because it is being 
invoked on the appController.


// Solution for fixing this when borrowing methods:
To fix the issue and make sure that this inside the appController.avg () method refers to gameController, we can use the apply () method 
thus:


*/

// Note that we are using the apply () method, so the 2nd argument has to be an array—the arguments to pass to the appController.avg () method.
appController.avg.apply (gameController, gameController.scores);

// The avgScore property was successfully set on the gameController object, even though we borrowed the avg () method from the appController object
console.log (gameController.avgScore); // 46.4

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
console.log (appController.avgScore); // null



/*
The gameController object borrows the appController’s avg () method. The “this” value inside the appController.avg () method will be set to 
the gameController object because we pass the gameController object as the first parameter to the apply () method. The first parameter in
the apply method always sets the value of “this” explicitly.
*/


/*
JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals 

Functions are objects in JavaScript, as we know well by now, and as objects, functions have methods, including the powerful Apply, Call, 
and Bind methods. On the one hand, Apply and Call are nearly identical and they are used frequently in JavaScript for borrowing methods and 
explicitly for setting the this value. We also use Apply for variable-arity functions.

On the other hand, we use Bind for setting the this value in methods, and for currying functions.


We will discuss every scenario in which these three methods are used in JavaScript. While Apply and Call are part of ECMAScript 3 
(available on IE 6, 7, 8, and modern browsers), ECMAScript 5 (available only on modern browsers) added the Bind method. These 3 Function
methods are workhorses and sometimes you absolutely need one of them. Let’s begin with the Bind method.
*/


// JavaScript’s Bind Method

/*
The bind () method is used primarily to call a function with the this value set explicitly. It other words, bind () allows you to easily set 
which specific object will be bound to this when a function or method is invoked.

This might seem relatively trivial, but oftentimes the this value in methods and functions must be set explicitly when you need a specific 
object bound to the function’s this value.

The problem is that when we use the this keyword in methods, and we call said methods from a receiver object,
sometimes this is not bound to the object that we intended. And this results in errors in our code.


// JavaScript’s Bind Allows Us to Set the this Value on Methods


When this button below is clicked, the text field is populated with a random name.
*/

//  <button>Get Random Person</button>
//  <input type="text">


var user = {
    data        :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    clickHandler:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

        // This line is adding a random person from the data array to the text field
        $ ("input").val (this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Assign an eventHandler to the button's click event
$ ("button").click (user.clickHandler);


/*

Because the bind method was introduced in ECMAScript 5, it is unavailable in IE < 9 and Firefox 3.x.
Here is an implementation that you can include in your code if you are targeting older browsers:
*/ 

// Credit to Douglas Crockford for this bind method
if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
        if (typeof this !== "function") {
            // closest thing possible to the ECMAScript 5 internal IsCallable function
            throw new TypeError ("Function.prototype.bind - what is trying to be bound is not callable");
        }

        var aArgs = Array.prototype.slice.call (arguments, 1),
                fToBind = this,
                fNOP = function () {
                },
                fBound = function () {
                    return fToBind.apply (this instanceof fNOP && oThis
                            ? this
                            : oThis,
                            aArgs.concat (Array.prototype.slice.call (arguments)));
                };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP ();

        return fBound;
    };
}

/*
Let's continue with the same example we have used above. The this value is also bound to another object if we assign the method 
(where this is defined) to a variable. This demonstrates:
*/

// This data variable is a global variable
var data = [
    {name:"Samantha", age:12},
    {name:"Alexis", age:14}
]

var user = {
    // local data variable
    data    :[
        {name:"T. Woods", age:37},
        {name:"P. Mickelson", age:43}
    ],
    showData:function (event) {
        var randomNum = ((Math.random () * 2 | 0) + 1) - 1; // random number between 0 and 1

        console.log (this.data[randomNum].name + " " + this.data[randomNum].age);
    }

}

// Assign the showData method of the user object to a variable
var showDataVar = user.showData;

showDataVar (); // Samantha 12 (from the global data array, not from the local data array)

/*
When we execute the showDataVar () function, the values printed to the console are from the global data array, not the data array in 
the user object. This happens because showDataVar () is executed as a global function and use of this inside showDataVar () is bound 
to the global scope, which is the window object in browsers.

Again, we can fix this problem by specifically setting the "this" value with the bind method:
*/


// Bind the showData method to the user object
var showDataVar = user.showData.bind (user);

// Now the we get the value from the user object because the this keyword is bound to the user object
showDataVar (); // P. Mickelson 43

/*
Bind () Allows us to Borrow Methods
In JavaScript, we can pass functions around, return them, borrow them, and the like. And the bind () method makes it super easy to borrow 
methods.

Here is an example using bind () to borrow a method:
*/

// Here we have a cars object that does not have a method to print its data to the console
var cars = {
    data:[
        {name:"Honda Accord", age:14},
        {name:"Tesla Model S", age:2}
    ]

}

// We can borrow the showData () method from the user object we defined in the last example.
// We bind the user.showData method to the cars object we just created.
cars.showData = user.showData.bind (cars);
cars.showData (); // Honda Accord 14
/*
One problem with this example is that we are adding a new method (showData) on the cars object and we might not want to do that just to 
borrow a method because the cars object might already have a property or method name showData, and we don't want to overwrite it accidentally.
As we will see with Apply and Call (discussed next), it is best to borrow methods with either the Apply or Call methods.

// JavaScript's Bind Allows Us to Curry a Function

Function Currying, also known as partial function application, is the use of a function (that accept one or more arguments) that returns a new 
function with some of the arguments already set.The function that is returned has access to the stored arguments and variables of 
the outer function. This sounds way more complex than it actually is, so let's code.
*/


// So we are passing null because we are not using the "this" keyword in our greet function.
var greetAnAdultMale = greet.bind (null, "male", 45);

greetAnAdultMale ("John Hartlove"); // "Hello, Mr. John Hartlove."

var greetAYoungster = greet.bind (null, "", 16);
greetAYoungster ("Alex"); // "Hey, Alex."
greetAYoungster ("Emma Waterloo"); // "Hey, Emma Waterloo."

/*
When we use the bind () method for currying, all the parameters of the greet () function, except the last (rightmost) argument, are preset. 
So it is the rightmost argument that we are changing when we call the new functions that were curried from the greet () function. Again, 
I discuss currying at length in a separate blog post, and you will see how we can easily create very powerful functions with Currying and 
Compose, two Functional JavaScript concepts.

So, with the bind () method, we can explicitly set the this value for invoking methods on objects, we can borrow
and copy methods, and assign methods to variable to be executed as functions. And as outlined in the Currying Tip
earlier, you can use bind for currying.


// The Apply and Call methods are two of the most often used Function methods in
JavaScript, and for good reason: they allow us to borrow functions and set the this value in function invocation. And the apply function 
in particular allows us to execute a function with an array of parameters, such that each parameter is passed to the function individually 
when the function executes—great for variadic functions.

// Set the this value with Apply or Call
Just as in the bind () example, we can also set the this value when invoking functions by using the Apply or Call methods. 
The first parameter in the call and apply methods set the this value to the object that the function is invoked upon.

Here is a very quick, illustrative example for starters before we get into more complex usages of Apply and Call:

*/

// global variable for demonstration
var avgScore = "global avgScore";

//global function
function avg (arrayOfScores) {
    // Add all the scores and return the total
    var sumOfScores = arrayOfScores.reduce (function (prev, cur, index, array) {
        return prev + cur;
    });

    // The "this" keyword here will be bound to the global object, unless we set the "this" with Call or Apply
    this.avgScore = sumOfScores / arrayOfScores.length;
}

var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null
}

// If we execute the avg function thus, "this" inside the function is bound to the global window object:
avg (gameController.scores);
// Proof that the avgScore was set on the global window object
console.log (window.avgScore); // 46.4
console.log (gameController.avgScore); // null

// reset the global avgScore
avgScore = "global avgScore";

// To set the "this" value explicitly, so that "this" is bound to the gameController,
// We use the call () method:
avg.call (gameController, gameController.scores);

console.log (window.avgScore); //global avgScore
console.log (gameController.avgScore); // 46.4


/*
Note that the first argument to call () sets the this value. In the preceding example, it is set to
the gameController object. The other arguments after the first argument are passed as parameters to the
avg () function.

The apply and call methods are almost identical when setting the this value except that you pass the function parameters to apply () 
as an array, while you have to list the parameters individually to pass them to the call () method. More on this follows. Meanwhile, 
the apply () method also has another feature that the call () method doesn't have, as we will soon see.
// Use Call or Apply To Set this in Callback Functions

*/

 // Define an object with some properties and a method
// We will later pass the method as a callback function to another function
var clientData = {
    id: 094545,
    fullName: "Not Set",
    // setUserName is a method on the clientData object
    setUserName: function (firstName, lastName)  {
    // this refers to the fullName property in this object
    this.fullName = firstName + " " + lastName;
    }
}



function getUserInput (firstName, lastName, callback, callbackObj) {
    // The use of the Apply method below will set the "this" value to callbackObj
    callback.apply (callbackObj, [firstName, lastName]);
}
/*
The Apply method sets the this value to callbackObj. This allows us to execute the callback function with the this value set explicitly, 
so the parameters passed to the callback function will be set on the clientData object:
*/

// The clientData object will be used by the Apply method to set the "this" value
getUserInput ("Barack", "Obama", clientData.setUserName, clientData);
// the fullName property on the clientData was correctly set
console.log (clientData.fullName); // Barack Obama



/*
The Apply, Call, and Bind methods are all used to set the this value when invoking a method, and they do it in slightly different ways to 
allow use direct control and versatility in our JavaScript code. The this value in JavaScript is as important as any other part of the 
language, and we have the 3 aforementioned methods are the essential tools to setting and using this effectively and properly.


 
// Borrowing Functions with Apply and Call (A Must Know)
The most common use of the Apply and Call methods in JavaScript is probably to borrow functions. We can borrow functions with the Apply and 
Call methods as we did with the bind method, but in a more robust and versatile manner.

Here are some examples:

// Borrowing Array Methods
Arrays come with a number of useful methods for iterating and modifying arrays, but unfortunately, Objects do not have as many native methods. 
Nonetheless, since objects can be expressed in a manner similar to an Array (known as an array-like object), and most important, because all 
of the Array methods are generic (except toString and toLocaleString), we can borrow Array methods and use them on objects that are array-like.
An array-like object is an object that has its keys defined as non-negative integers. It is best to specifically add a length property on the 
object that has the length of the object, since the a length property does not exist on objects it does on Arrays.

It is important for me to note (for clarity, especially for new JavaScript developers) that in the following examples, when we call 
Array.prototype, we are reaching into the Array object and on its prototype (where all its methods are defined for inheritance). 
And it is from there—the source—that we are borrowing the Array methods. Hence the use of code like Array.prototype.slice—the slice method 
that is defined on the Array prototype.

Let's create an array-like object and borrow some array methods to operate on the our array-like object. Keep in mind the array-like object 
is a real object, it is not an array at all:
*/


 // An array-like object: note the non-negative integers used as keys
var anArrayLikeObj = {0:"Martin", 1:78, 2:67, 3:["Letta", "Marieta", "Pauline"], length:4 };
// Now, if wish to use any of the common Array methods on our object, we can:

// Make a quick copy and save the results in a real array:
// First parameter sets the "this" value
var newArray = Array.prototype.slice.call (anArrayLikeObj, 0);

console.log (newArray); // ["Martin", 78, 67, Array[3]]

// Search for "Martin" in the array-like object
console.log (Array.prototype.indexOf.call (anArrayLikeObj, "Martin") === -1 ? false : true); // true

// Try using an Array method without the call () or apply ()
console.log (anArrayLikeObj.indexOf ("Martin") === -1 ? false : true); // Error: Object has no method 'indexOf'

// Reverse the object:
console.log (Array.prototype.reverse.call (anArrayLikeObj));
// {0: Array[3], 1: 67, 2: 78, 3: "Martin", length: 4}
// Sweet. We can pop too:
console.log (Array.prototype.pop.call (anArrayLikeObj));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, length: 3}

// What about push?
console.log (Array.prototype.push.call (anArrayLikeObj, "Jackie"));
console.log (anArrayLikeObj); // {0: Array[3], 1: 67, 2: 78, 3: "Jackie", length: 4}


/*
We get all the great benefits of an object and we are still able to use Array methods on our object, when we setup our object as an 
array-like object and borrow the Array methods. All of this is made possible by the virtue of the call or apply method.

The arguments object that is a property of all JavaScript functions is an array-like object, and for this reason, one of the most popular 
uses of the call () and apply () methods is to extract the parameters passed into a function from the arguments object.

Here is an example I took from the Ember.js source, with comments I added:
*/


function transitionTo (name) {
    // Because the arguments object is an array-like object
    // We can use the slice () Array method on it
    // The number "1" parameter means: return a copy of the array from index 1 to the end. Or simply: skip the first item

    var args = Array.prototype.slice.call (arguments, 1);

    // I added this bit so we can see the args value
    console.log (args);

    // I commented out this last line because it is beyond this example
    //doTransition(this, name, this.updateURL, args);
}

// Because the slice method copied from index 1 to the end, the first item "contact" was not returned
transitionTo ("contact", "Today", "20"); // ["Today", "20"]

/*
The args variable is a real array. It has a copy of all the parameters passed to the transitionTo function.

From this example, we learn that a quick way to get all the arguments (as an array) passed to a function is to do:
*/

 // We do not define the function with any parameters, yet we can get all the arguments passed to it
function doSomething () {
    var args = Array.prototype.slice.call (arguments);
    console.log (args);
}

doSomething ("Water", "Salt", "Glue"); // ["Water", "Salt", "Glue"]

// We will discuss how to use the apply method with the arguments array-like object again for variadic functions. More on this later.

/*
// Borrowing String Methods with Apply and Call
Like the preceding example, we can also use apply () and call () to borrow String methods. Since Strings are immutable, only the 
non-manipulative arrays work on them, so you cannot use reverse, pop and the like.

// Borrow Other Methods and Functions
Since we are borrowing, lets go all in and borrow from our own custom methods and functions, not just from Array and String:
*/

var gameController = {
                    scores  :[20, 34, 55, 46, 77],
                    avgScore:null,
                    players :[
                        {name:"Tomy", playerID:987, age:23},
                        {name:"Pau", playerID:87, age:33}
                    ]
                }

var appController = {
    scores  :[900, 845, 809, 950],
    avgScore:null,
    avg     :function () {

        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
}

// Note that we are using the apply () method, so the 2nd argument has to be an array
appController.avg.apply (gameController, gameController.scores);
console.log (gameController.avgScore); // 46.4

// appController.avgScore is still null; it was not updated, only gameController.avgScore was updated
console.log (appController.avgScore); // null

/*
Sure, it is just as easy and, even recommended, to borrow our own custom methods and functions. The gameController object borrows the 
appController object's avg () method. The "this" value defined in the avg () method will be set to the first parameter—the gameController 
object.

You might be wondering what will happen if the original definition of the method we are borrowing changes. Will the borrowed (copied) method 
change as well, or is the copied method a full copy that does not refer back to the original method? Let's answer these questions with a 
quick, illustrative example:
*/

appController.maxNum = function () {
    this.avgScore = Math.max.apply (null, this.scores);
}

appController.maxNum.apply (gameController, gameController.scores);
console.log (gameController.avgScore); // 77

/*
As expected, if we change the original method, the changes are reflected in the borrowed instances of that method. This is expected for 
good reason: we never made a full copy of the method, we simply borrowed it (referred directly to its current implementation).
*/

//  Use Apply () to Execute Variable-Arity Functions

/*
To wrap up our discussion on the versatility and usefulness of the Apply, Call, and Bind methods, we will discuss a neat
little feature of the Apply method: execute functions with an array of arguments.

We can pass an array with of arguments to a function and, by virtue of using the apply () method, the function will execute the
items in the array as if we called the function like this:
*/
createAccount (arrayOfItems[0], arrayOfItems[1], arrayOfItems[2], arrayOfItems[3]);

/*
This technique is especially used for creating variable-arity, also known as variadic functions.
These are functions that accept any number of arguments instead of a fixed number of arguments. The arity of a function specifies
the number of arguments the function was defined to accept.

The Math.max() method is an example of a common variable-arity function in JavaScript:
*/

// We can pass any number of arguments to the Math.max () method
console.log (Math.max (23, 11, 34, 56)); // 56


var allNumbers = [23, 11, 34, 56];
    // We cannot pass an array of numbers to the the Math.max method like this
console.log (Math.max (allNumbers)); // NaN

/*
This is where the apply () method helps us execute variadic functions. Instead of the above, we have to pass the array of numbers using
apply () thus:
*/

var allNumbers = [23, 11, 34, 56];
// Using the apply () method, we can pass the array of numbers:
console.log (Math.max.apply (null, allNumbers)); // 56

/*
As we have learned earlier, the fist argument to apply () sets the "this" value, but "this" is not used in the Math.max () method, 
so we pass null.

Here is an example of our own variadic function to further illustrate the concept of using the apply () method in this capacity:
*/


var students = ["Peter Alexander", "Michael Woodruff", "Judy Archer", "Malcolm Khan"];

// No specific parameters defined, because ANY number of parameters are accepted
function welcomeStudents () {
    var args = Array.prototype.slice.call (arguments);

    var lastItem = args.pop ();
    console.log ("Welcome " + args.join (", ") + ", and " + lastItem + ".");
}

welcomeStudents.apply (null, students);
// Welcome Peter Alexander, Michael Woodruff, Judy Archer, and Malcolm Khan.


// Beautiful JavaScript: Easily Create Chainable (Cascading) Methods for Expressiveness


/*
Chaining Methods, also known as Cascading, refers to repeatedly calling one method after another on an object, in one continuous line of code. 
This technique abounds in jQuery and other JavaScript libraries, and it is even common in some JavaScript native methods.

Writing code like this:
*/
$("#wrapper").fadeOut().html("Welcome, Sir").fadeIn();
// or this:

str.replace("k", "R").toUpperCase().substr(0,4); 

/*
is not just pleasurable and convenient but also succinct and intelligible. It allows us to read code like a sentence, flowing gracefully 
across the page. It also frees us from the monotonous, blocky structures we usually construct.


We will spend the next 20 minutes learning to create expressive code using this cascading technique. To use cascading, we have to return 
this (the object we want subsequent methods to operate on) in each method. Let’s quickly learn the details and get back to eating, or 
watching YouTube videos, or reading Hacker News, or working and browsing, or working and focusing.

Let’s create all of our “chainable” code within an object, along with a local data store. Note that in a real-world app we will likely
store the data in a database, but here we are just saving it in a variable.
*/

// The data store:
 var usersData = [
  {firstName:"tommy", lastName:"MalCom", email:"test@test.com", id:102},
  {firstName:"Peter", lastName:"breCht", email:"test2@test2.com", id:103},
  {firstName:"RoHan", lastName:"sahu", email:"test3@test3.com", id:104}
 ];

 
// A quick utility function that does what it says:
function titleCaseName(str)
 {
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
 }


 // Our object with the chainable methods
 var userController = {

  currentUser:"",

  findUser:function (userEmail) {
   var arrayLength = usersData.length, i;
   for (i = arrayLength - 1; i >= 0; i--) {
    if (usersData[i].email === userEmail) {
     this.currentUser = usersData[i];
     break;
    }
   }
   return this;
  },

  formatName:function () {
   if (this.currentUser) {
    this.currentUser.fullName = titleCaseName (this.currentUser.firstName) + " " + titleCaseName (this.currentUser.lastName);
   }
   return this;

  },

  createLayout:function () {
   if (this.currentUser) {
    this.currentUser.viewData = "<h2>Member: " + this.currentUser.fullName + "</h2>"
  + "<p>ID: " + this.currentUser.id + "</p>" + "<p>Email: " + this.currentUser.email + "</p>";
   }
   return this;
  },

  displayUser:function () {
   if (!this.currentUser) return;

   $(".members-wrapper").append(this.currentUser.viewData);

  }
 };

 // With our chainable methods defined, we can now execute our expressive code like this (just like it is done in jQuery):

 userController.findUser("test2@test2.com").formatName().createLayout().displayUser();

// Why Use Cascading in JavaScript?

/*
There is no need to create temporary variables to save each step of the process. For example, without chaining, our code will look like
this:
*/

var aUser = userController.findUser("test@test.com");
var formatUserName =  aUser.formatName();
var layoutHTML =  formatUserName.createLayout();
userController.displayUser(layoutHTML);

/*
Now, every line of code clearly and succinctly expresses what it is doing, particularly when the name of each method is defined using verbs.

Our code is more maintainable because we have simple, lean, specialized methods.

Overall, one can easily read the “chainable” code, effortlessly type it, and comfortably understand it.
// How Does Chaining Methods Work in JavaScript?

When each method returns this, the entire object that called the method is returned. The execution proceeds thus:
*/

// Use the userController object to execute the findUser method
userController.findUser("test@testdd.com")
/*
Because we are executing the findUser method on the userController object, and because the findUser method returns “this” 
(the object that invoked it), the entire userController object is returned and passed to the next method in the chain, since 
the “this” keyword in findUser holds the value of the object that invoked it.

Therefore, this occurs next:
*/
userController.formatName();
// Similarly, the formatName method returns the userController object, so expectedly, this follows:

userController.createLayout();

// Followed by:
<script>
 userController.displayUser();

// Each step of the way, we are returning the userController object and invoking methods on it.



(function test() { 
	var test = 123; 
	console.log( test ); //123
}())


(function test() { 
        test = 123; 
	console.log( test ); 
}())

// Output:  
function test() { 
    test = 123; 
	console.log( test ); 
} 

x += 20;
y = 10
conssole.log(x+y); // ReferenceError: x is not defined

// global variable test1
var x = 10;

function test(){
    x=15;
    console.log(x);
}

test();
console.log(x);
console.log(this.x);
console.log(window.x);


// global variable test2
x = 10;

function test(){
    x=15;
    console.log(x);
}

test();
console.log(x);


// global variable test3
x = 10;

function test(){
    var x=15;
    console.log(x);
}

test();
console.log(x);

var name = "Richard";
// the blocks in this if statement do not create a local context for the name variable
if (name) {
	var name = "Jack"; // this name is the global name variable and it is being changed to "Jack" here
	console.log (name); // Jack: still the global variable
}

// Here, the name variable is the same global name variable, but it was changed in the if statement
console.log (name); // Jack

// curly bracket wrapper
var firstName = "Richard";
{
    var firstName = "Bob";
}

// To reiterate: JavaScript does not have block-level scope

// The second declaration of firstName simply re-declares and overwrites the first one
console.log (firstName); // Bob




// Another example

for (var i = 1; i <= 10; i++) {
	console.log (i); // outputs 1, 2, 3, 4, 5, 6, 7, 8, 9, 10;
};

// The variable i is a global variable and it is accessible in the following function with the last value it was assigned above 
function aNumber () {
    console.log(i);
}

// The variable i in the aNumber function below is the global variable i that was changed in the for loop above. Its last value was 11, set just before the for loop exited:
aNumber ();  // 11



// setTimeout Variables are Executed in the Global Scope
// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj

var highValue = 200;
var constantVal = 2;
var myObj = {
	highValue: 20,
	constantVal: 5,
	calculateIt: function () {
         setTimeout (function  () {
        	console.log(this.constantVal * this.highValue);
        }, 2000);
	}
}

// The "this" object in the setTimeout function used the global highValue and constantVal variables, because the reference to "this" in the setTimeout function refers to the global window object, not to the myObj object as we might expect.

myObj.calculateIt(); // 400
// This is an important point to remember.


// setTimeout Variables are Executed in the Global Scope
// The use of the "this" object inside the setTimeout function refers to the Window object, not to myObj

var highValue = 200;
var constantVal = 2;
var myObj = {
	highValue: 20,
	constantVal: 5,
	calculateIt: function () {
         setTimeout (function  () {
        	console.log(myObj.constantVal * myObj.highValue);
        }, 2000);
	}
}



// Both the variable and the function are named myName
var myName;
function myName () {
    console.log ("Rich");
}

// The function declaration overrides the variable name
console.log(typeof myName); // function



 // But in this example, the variable assignment overrides the function declaration
var myName = "Richard"; // This is the variable assignment (initialization) that overrides the function declaration.

function myName () {
    console.log ("Rich");
}

console.log(typeof myName); // string 



// It is important to note that function expressions, such as the example below, are not hoisted
var myName = function () {
    console.log ("Rich");
}


-------------------------------------------------------------------------------------------------------------------------
