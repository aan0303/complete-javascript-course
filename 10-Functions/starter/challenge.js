'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const userAnswer = prompt(
      `${this.question}\n${this.options.join('\n')}\n(Write option number)`
    );

    userAnswer >= 0 && userAnswer <= 4
      ? this.answers[userAnswer]++
      : console.log("This doesn't make sense, please refresh");

    this.displayResults('String');
  },
  displayResults(type = 'String') {
    if (type === 'String') {
      console.log(`Poll results are ${this.answers.join(',')}`);
    } else if (type === 'Array') {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// const data1 = [5, 2, 3];
const data2 = [1, 5, 3, 9, 6, 1];

const data1 = {
  answers: [5, 2, 3],
};

poll.displayResults.call(data1, 'String');
