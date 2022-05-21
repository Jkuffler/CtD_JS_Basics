# JavaScript Basics and Numbers

This is the first assigment for the Programming Fundamentals course from Code the Dream. The concepts touched on in this assignment include:
* Strings and basic string manipulation
* Numbers and math
* Conditional logic

References to resource that will help with the exercises in this assignment are included in the **Resources** section below.

## Replit Interface
Before you start on the assignment itself take a few minutes to familiarize yourself with the Replit interface.

There are a few main areas in within the interface.

The **Files** area contains a list of all of the files in the project. For this exercise you should only need to work and edit code within the index.js file.

The **Editor** section is where you will be editing the files. One thing that will likely look different from a normal text editor or word editor is that different portions of the code will be colored in different ways. This is called *Syntax Highlighting* and is useful when working in a code file to quickly identify the different elements within the code.

The last main area contains several tabs including one showing these instructions called **Markdown** and one that you will be using to run and test your code called **Shell**. The Shell tab is just a command line contained within this browser window that allows you to run commands. 


## Instructions
You need to fork this repl.it and then will turn in the new link to it that is created as your homework assignment once the work is completed.

### Running Index.js
All of the code that you will be writing/editing is contained in the index.js file. Instructions for each individual exercise are contained as comments in the code. 

### Testing
There are a set of tests in the index.spec.js file, you don't need to look at or understand this file, that will be able to test that your code is working as expected. You can run the tests in that file by opening the **Shell** and typing `npm test`. This will run all of the tests and at the end it will show the number of tests that are passing and failing. If you run this at first before adding any code index.js you should see all of the tests are failing. As you write code for each exercise run the `npm test` command again to see if the tests are passing for the exercise you are working on. 

The `npm test` command will output some information for each test that fails about what it expected vs what it actually received. This can be used to help troubleshoot your code and understand why the test is not passing.

Question 6 will need to be graded by hand since the automated tests do not cover the behavior of that question sufficiently.

### Debugging
You can use `console.log` to output values in the code when it is run to assist in debugging. For example, if you are having an issue with something related to the `firstName` variable you might add this line of code right below where the variable to see what the actual value is at that point `console.log('firstName variable is:', firstName)`.  Then run the file by clicing the Run button and looking at the output in the **Console**.

## References
* [Introduction to Strings](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings)
* [String Concatenation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings#concatenating_strings)
* [Useful string methods](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods)
* [Conditionals](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals)
* [Built-in Math Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)