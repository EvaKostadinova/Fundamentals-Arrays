function maxNumber(arr) {
    let topNum = [];

    for(let i = 0; i < arr.length; i++){
        let num = arr[i];
        let isTop = true;

        for(let j = i + 1; j < arr.length; j++){
            let numToRight = arr[j];

            if(numToRight >= num){
                isTop = false;
                break;
            }
            
        }
        
        if(isTop){
                topNum.push(num);
            }

        }

        console.log(topNum.join(' '));
        
    }


maxNumber([1, 4, 3, 2]);