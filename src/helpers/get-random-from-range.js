const getRandomNum = (max = 100, min = 0) => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
};
export default getRandomNum;
