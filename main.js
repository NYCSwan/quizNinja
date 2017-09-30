// const question = 'What is type-coersion?';
// const answer = prompt(question); //“ prompt dialog allows the player to type in a response, which is then stored in the variable it is assigned to”
// alert(`You answered ${answer}`);

const jsQuiz = {
  {question:'What is type-coersion?', answer: 'when a value\'s data type is converted to complete an operation'},
  {question:"True or False \n '1'+1 = 2", answer: 'false'},
  {question:'Is this a constructor variable? \n const thing = 1', answer: 'no'},
  {question:'What is a function?', answer: 'a chunk of code that can be referenced by name'},
  {question:'List the 6 types of primitive data', answer: 'strings, boolean, symbols, numbers, null, undefined'},
  {question:'Are functions considered first-class objects?', answer: 'yes'},
  {question:'What are first-class objects?', answer:'They can be be assigned to variables,  answer:stored in arrays and can even be returned by another functions.'},
  {question:'what are the different ways to define a function?', answer: 'function literals, function declarations, function expressions, function constructors'},
  {question:'Is this ex. a function literal? \n function hello() {\nconsole.log(hello world);\n}', answer: 'yes'},
  {question:'write a function expression called goodbye that logs "goodbye world!"', answer: 'const goodbye = function() { console.log("goodbye world!");};'},
  {question:'write a function constructor called hi that logs Hi World!', answer: 'const hi = new Function("console.log("Hi World!");");'},
  {question:'Is this a function declaration? \n function hi(){console.log("hello world");}'},
  {question:'What is an object in js?', answer: 'a self-contained set of related values and functions'},
  {question:'what is a method in js?', answer: 'the fn if a property\'s value is a function'},
  {question:'True or False: Objects are assigned by reference.', answer: 'true'},
  {question:'What will be logged?\nconst thor={name:thor}\n const snore=thor\nsnore.name=john\nconsole.log(thor.name)', answer: 'john'}
}

function start(quiz){
  this.questions = [...quiz];
  this.score = 0;

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
