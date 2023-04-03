function findMostFrequent(arr) {
    let map = new Map();
    let maxElement = arr[0];
    let maxCount = 1;
  
    for (let i = 0; i < arr.length; i++) {
      let element = arr[i];
      let count = (map.get(element) || 0) + 1;
      map.set(element, count);
      if (count > maxCount) {
        maxElement = element;
        maxCount = count;
      }
    }
  
    return maxElement;
  }

  let arr = [1, 3, 3, 3, 24];
  let mostFrequent = findMostFrequent(arr);
  console.log(mostFrequent); 