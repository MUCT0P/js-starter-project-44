const getRandomNum = (max = 30, step = 1) => {
  const random = Math.floor(Math.random() * max + step);
  return random;
};
export default getRandomNum;
