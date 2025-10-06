function arrayToNum(numbersArray) {

    if(numbersArray.length === 1){
        console.log(numbersArray[0]);
        return;
    }

    let result = [];

    while (true) {
        for(let i = 0; i < numbersArray.length - 1; i++){
            let firstValue = numbersArray[i];
            let secondValue = numbersArray[i + 1];

            let sum = firstValue + secondValue;

            result.push(sum);
        }

        if(result.length === 1){
            break;
        }

        numbersArray = result;
        result = [];

    }

    console.log(result[0]);
    

}

arrayToNum([2,10,3]);