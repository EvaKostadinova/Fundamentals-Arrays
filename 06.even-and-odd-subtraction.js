function evenOddSubstraction(array) {
    let oddSum = 0;
    let evenSum = 0;

    for(let number of array){

        if(number % 2 === 0){
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    let difference = evenSum - oddSum;

    console.log(difference);

}

evenOddSubstraction([2,4,6,8,10]);