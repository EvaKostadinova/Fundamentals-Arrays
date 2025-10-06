function commonElements(firstArray, secondArray) {
    for(let element of firstArray){
        if(secondArray.includes(element)){
            console.log(element);
        }

    }

}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],

['s', 'o', 'c', 'i', 'a', 'l']);