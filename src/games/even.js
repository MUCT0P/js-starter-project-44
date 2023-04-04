import getGameRound from '../index.js';
import getRandomNum from '../helpers/get-random-from-range.js';

const isEven = (num) => (num % 2 === 0);

const toDo = 'Answer "yes" if the number is even, otherwise answer "no".';

const even = () => {
  const randNumber = getRandomNum();
  const correctAnswer = isEven(randNumber) ? 'yes' : 'no';
  const expression = randNumber.toString();
  return [expression, correctAnswer];
};

const startEvenGame = () => getGameRound(toDo, even);

export default startEvenGame;
