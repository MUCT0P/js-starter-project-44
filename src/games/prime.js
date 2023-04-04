import getGameRound from '../index.js';
import getRandomNum from '../helpers/get-random-from-range.js';

const isPrime = (num) => {
  const sqRoot = Math.floor(Math.sqrt(num));
  for (let i = 2; i <= sqRoot; i += 1) {
    if (num % i === 0 || num < 2) {
      return false;
    }
  } return true;
};

const toDo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => getGameRound(toDo, prime);

export default startPrimeGame;
