function commonElements(firstArray, secondArray) {
    for(let i = 0; i < firstArray.length; i++){
        let currentFirstArrIndex = firstArray[i];
        for(let j = 0; j < secondArray.length; j++){
            let currentSecondArrIndex = secondArray[j];

            if(currentFirstArrIndex === currentSecondArrIndex){
                console.log(currentSecondArrIndex);
            }

        }

    }

}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']);