function commonElements(firstArray, secondArray) {
    for(let currentFirstArrIndex of firstArray){
        for(let currentSecondArrIndex of secondArray){

            if(currentFirstArrIndex === currentSecondArrIndex){
                console.log(currentSecondArrIndex);
            }

        }

    }

}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']);