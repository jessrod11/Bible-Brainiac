const shuffle = (myArray) => {
  let rand = 0;
  let index = -1;
  const length = myArray.length;
  const result = Array(length);
  while (++index < length) {
    rand = Math.floor(Math.random() * (index + 1));
    result[index] = result[rand];
    result[rand] = myArray[index];
  }
  return result;
};

export default {shuffle};
