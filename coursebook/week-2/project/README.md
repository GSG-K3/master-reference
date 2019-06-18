# Project - use TDD to build a To-do app


## Setup

  * Read through `skeleton/logic.js`. Don't worry if it does not all makes sense at first.
  * Set up a new repo for your project this week.
  * Copy and commit the files inside skeleton folder into your repository. **warning** only one person in your team should do this, then everyone else can pull the same repo.
  * `npm init`, then install Tape and anything else you want to test with.

## The project

### User stories:

As a disorganised person I want to:

 * enter tasks I need to do into a web page so that I don't forget them
 * view the tasks I have added in a list so that I can plan my day
 * mark tasks as complete so that I can focus on the tasks I have left
 * the to-dos to be large enough so that I don't hit the wrong one with my thumb

#### Potential stretch goals

As a disorganised person I want to:

 * edit my to-dos so that I can amend them if the task changes
 * click on any part of a to-do to mark it as complete so that it's easier for me to check to-dos off
 * a visual indication of which to-do I'm about to interact with so that it's clear what I'm editing




#### General comments


We will represent a todo as an object with three properties:

```js
{
  id: 0, // this is a unique number, it will be needed to find a to-do in a to-do list
  description: "make tea", // this is a string that describes what you need to do
  done: false, // This is true or false, it tells us whether a todo is done or not
};
```

We will represent a to-do array as an array of todo objects:

```js
[
  {
    id: 0,
    description: 'smash avocados',
    done: true,
  },
  {
    id: 1,
    description: 'make coffee',
    done: false,
  },
];
```



# Steps 


### PART ONE: writing pure functions
use TDD to write the uncompleted functions are in the `todoFunctions` object in `logic.js`. They are: 
- addTodo
- deleteTodo
- markTodo



### PART TWO: completing dom.js

- complete the  `createTodoNode` function in dom.js. It take one argument, this is a to-do element. This function returns a list item (`<li>`). If you build this function correctly the render function will take care of inserting all the to-do nodes onto the page!

- Complete the code for `addTodoForm.addEventListener('submit', function(event) {`
Inside this function you need to create a new state with a new to-do.

### PART THREE: have fun!

You can add features, like filtering by completed or editing descriptions.

Try to make it look pretty using CSS.
