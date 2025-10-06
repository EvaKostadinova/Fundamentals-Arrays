function arrayRotation(array, rotationsCount) {
    for(let currentRotation = 1; currentRotation <= rotationsCount; currentRotation++){
        let takenFirstELement = array.shift();
        array.push(takenFirstELement)
    }

    console.log(array.join(` `));
    

}

arrayRotation([51, 47, 32, 61, 21], 2);