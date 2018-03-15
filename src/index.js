module.exports = function longestConsecutiveLength(array) {

  if (array.length < 2) {
    return array;
  }

  //выполняем сортировку
  var sortedArray = array.sort((a,b) => a - b);

  //проходимся по массиву и считаем самую длинную последовательность
  var longestSequence = 0;
  var sequence = 1;

  for (var i = 1; i < sortedArray.length; i++) {
    
    if (sortedArray[i] === sortedArray[i - 1] + 1) {
      sequence++;
    }

    //проверка на одинаковые числа в последовательности
    if (sortedArray[i] === sortedArray[i - 1]) {
      continue;
    }

    if (sortedArray[i] - sortedArray[i - 1] > 1) {
      if (sequence > longestSequence) {
          longestSequence = sequence;
          sequence = 1;
      }

      sequence = 1;
    }
  }
  
  return longestSequence;
}