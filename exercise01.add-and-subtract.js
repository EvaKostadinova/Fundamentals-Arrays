function addSubstract(array) {
    let originalSum = 0;
    let newSum = 0;
    
    for(let i = 0; i < array.length; i++){
        let currentNum = array[i];
        originalSum += currentNum;
    
        if(currentNum % 2 === 0){
        array[i] += i;
            
        } else {
        array[i] -= i;
        }
        
        newSum += array[i];
    
}

console.log(array);
console.log(originalSum);
console.log(newSum);


}

addSubstract([5, 15, 23, 56, 35]);