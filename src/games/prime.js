import getGameRound from '../index.js';
import getRandomNum from '../helpers/get-random-from-range.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const toDo = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const question = getRandomNum();
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const startPrimeGame = () => getGameRound(toDo, prime);

export default startPrimeGame;
