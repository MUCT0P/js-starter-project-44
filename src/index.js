import readlineSync from 'readline-sync';

const getGameRound = (toDo, task) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(toDo);
  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [expression, correctAnswer] = task();
    console.log(`Question: ${expression}`);
    const inputAnswer = readlineSync.question('Your answer: ');
    if (inputAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${inputAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default getGameRound;
