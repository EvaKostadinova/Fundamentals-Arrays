function maxSequenceEqualElements(arr) {

    let maxLength = 1;
    let maxElement = arr[0];
    let currentLength = 1;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] === arr[i - 1]){
            currentLength++;
        } else {
            if (currentLength > maxLength){
                maxLength = currentLength;
                maxElement = arr[i - 1];
            }
            currentLength = 1;
        }
    }

    if(currentLength > maxLength){
        maxLength = currentLength;
        maxElement = arr[arr.length - 1];
    }

    return Array(maxLength).fill(maxElement).join(' ');

}

maxSequenceEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);