function equalSum(array) {
    for(i = 0; i < array.length; i++){
        let sumToLeft = 0;
        let sumToRight = 0;

        for(let j = 0; j < i; j++){
            sumToLeft += array[j];
        }

        for(let j = i + 1; j < array.length; j++){
            sumToRight += array[j];
        }

        if(sumToLeft === sumToRight){
            console.log(i);
            return;
        }
    }

    console.log('no');
    

}

equalSum([1, 2, 3, 3]);