
const jsQuiz = [
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
]

const view = {
  score: document.querySelector('#score'),
  question: document.getElementById('question'),
  response: document.getElementById('response'),
  answer: document.getElementById('answer'),
  restart: document.getElementById('restartBtn'),
  quit: document.getElementById('quitBtn'),
  gameEnd: document.getElementById('game-end'),
  render(target,content,attributes) {
    for(const key in attributes) {
      target.setAttribute(key, attributes[key]);
    }
    target.innerText = content;
  } //update the content of an element
};


const game = {
  start(quiz){
    this.questions = [...quiz];
    this.totalScore = 0;
    view.quit.addEventListener('click', this.quitGame());

  // main game loop
    for(const problem in this.questions) {
      this.question = this.questions[problem].question;
      this.answer = this.questions[problem].answer;
      this.ask();
    }
    this.gameover();
  }, //start quiz

  ask(){
    const question = this.question;
    view.render(view.question, question);
    const response = prompt(question);
    this.check(response);
  }, //ask question

  check(response){
    const answer = this.answer;
    if (response == answer) {
      view.render(view.response, 'correct', {'class': 'celebrate'})
      // alert('Correct!');
      this.addPoint();
    } else {
      view.render(view.response, 'Try again', {'class': 'wrong'});
      view.render(view.answer, answer);
      // alert('Try again.')
    }
  }, //check if answer matches question

  addPoint(){
    this.totalScore++;
    const newScore = `My Score: ${this.totalScore}`;
    view.render(view.score, newScore);
    console.log(`addPoint: ${this.totalScore}`);
  }, //add pt to score

  quitGame() {
    this.gameover();
  }, //force quit from game

  gameover(){
    const message = `Game over. You scored ${this.totalScore} point${this.totalScore !==1 ? 's' : ''}`;
    view.render(view.gameEnd, message)
    console.log(`Game over. You scored ${this.totalScore} point${this.totalScore !==1 ? 's' : ''}`);
  } //end game message
}
game.start(jsQuiz);
