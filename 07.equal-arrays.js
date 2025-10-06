function equalArrays(FirstArray, SecondArray) {
    let arrayEqual = true;
    let sum = 0;
    let diffIndex = -1;

    for(let i = 0; i < FirstArray.length; i++){
        let firstValue = FirstArray[i];
        let secondValue = SecondArray[i];

        if(firstValue === secondValue){
            sum += Number(firstValue);
        } else {
            arrayEqual = false;
            diffIndex = i;
            break;
        }
    }

    if(arrayEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
        
    }

}

equalArrays(['10','20','30'],

['10','20','30']);