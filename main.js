// const question = 'What is type-coersion?';
// const answer = prompt(question); //“ prompt dialog allows the player to type in a response, which is then stored in the variable it is assigned to”
// alert(`You answered ${answer}`);

const jsQuiz = [
  ['What is type-coersion?', 'when a value\'s data type is converted to complete an operation'],
  ["True or False \n '1'+1 = 2", 'false'],
  ['Is this a constructor variable? \n const thing = 1', 'no'],
  ['What is a function?', 'a chunk of code that can be referenced by name'],
  ['List the 6 types of primitive data', 'strings, boolean, symbols, numbers, null, undefined'],
  ['Are functions considered first-class objects?', 'yes'],
  ['What are first-class objects?','They can be be assigned to variables, stored in arrays and can even be returned by another functions.'],
  ['what are the different ways to define a function?', 'function literals, function declarations, function expressions, function constructors'],
  ['Is this ex. a function literal? \n function hello() {\nconsole.log(hello world);\n}', 'yes'],
  ['write a function expression called goodbye that logs "goodbye world!"', 'const goodbye = function() { console.log("goodbye world!");};'],
  ['write a function constructor called hi that logs Hi World!', 'const hi = new Function("console.log("Hi World!");");'],
  ['Is this a function declaration? \n function hi(){console.log("hello world");}'],
  ['What is an object in js?', 'a self-contained set of related values and functions'],
  ['what is a method in js?', 'the fn if a property\'s value is a function'],
  ['True or False: Objects are assigned by reference.', 'true'],
  ['What will be logged?\nconst thor={name:thor}\n const snore=thor\nsnore.name=john\nconsole.log(thor.name)', 'john']

]

function play() {

}
function start(quiz){
  let score = 0;

// main game loop
  for(const[question, answer] of quiz) {
    const response = ask(question);
    check(response, answer, score);
  }
  gameover(score);

}

function ask(question) {
  return prompt(question);
}

function check(response, answer) {
  if (response == answer) {
    alert('Correct!');
    score++;
  } else {
    alert('Try again.')
  }
}
function gameover(score) {
  alert(`Game over. You scored ${score} point${score !==1 ? 's' : ''}`)
}

start(jsQuiz);
