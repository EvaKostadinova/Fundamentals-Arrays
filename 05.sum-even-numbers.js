function sumEvenNumbers(array) {
    let sum = 0;

    for(let number of array){
        number = Number(number);

        if(number % 2 === 0){
            sum += number;
        }
    }

    return sum;
    
}

sumEvenNumbers(['1','2','3','4','5','6']);