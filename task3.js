function sortOneByBy(arr) {
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
        const element = arr[i];
        for (let j = i - 1; j >= -1; j--) {
            index = j + 1;
            if (element < arr[j]) {
                arr[index] = arr[j]
            } else {
                break;
            }
        }
        arr[index] = element;
    }
    return arr;
}
console.log(sortOneByBy([3,2,6,4,5,1,7]))