function magicSum(arr, targetNumber) {
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === targetNumber){
                console.log(`${arr[i]} ${arr[j]}`);
            }
        }
        

    }

}

magicSum([1, 2, 3, 4, 5, 6],

6);