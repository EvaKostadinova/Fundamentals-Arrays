function mergeArrays(firstArr, secondArr) {
    let mergedArray = [];
    for(let i = 0; i < firstArr.length; i++){
       let element1 = firstArr[i];
       let element2 = secondArr[i];

       if(i % 2 === 0){
        mergedArray.push(Number(element1) + Number(element2));
       } else {
        mergedArray.push(element1 + element2);
       }
    }

    console.log(mergedArray.join(` - `));

}

mergeArrays(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11']);