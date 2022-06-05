// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;

  min = Infinity;
  max = -Infinity;

  console.log(arr);
  
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    sum =+ arr[i];
  }
  avg = (sum / (arr.length)).toFixed(2);
  
  return { min: min, max: max, avg: avg };
  
}

// Задание 2
function worker(arr) {
  let sum;

  for (let i = 0; i < arr.length; i++) {
    sum =+ arr[i];
  }

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}
