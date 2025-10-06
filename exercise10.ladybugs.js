function ladybugs(arr) {
    let fieldSize = arr[0];
    let ladybugIndeces = arr[1].split(' ').map(Number);
    let field = [];

    for(let i = 0; i < fieldSize; i++){
        if(ladybugIndeces.includes(i)){
            field[i] = 1;
        } else {
            field[i] = 0;
        }
    }

    for(let j = 2; j < arr.length; j++){
        let command = arr[j];
        let tokens = command.split(' ');

        let ladyBugInx = Number(tokens[0]);
        let direction = tokens[1];
        let flylength = Number(tokens[2]);

        if(!field[ladyBugInx]){
            continue;
        }

        field[ladyBugInx] = 0;

        if (direction == 'left'){
        let newIndex = ladyBugInx - flylength;

        if(newIndex >= 0){
            while(field[newIndex] == 1){
                newIndex -= flylength;
            }

            if(newIndex >= 0){
                field[newIndex] = 1;
            }
           
        }
    } else {
        let newIndex = ladyBugInx + flylength;

        if(newIndex < field.length){
            while(field[newIndex] == 1){
                newIndex += flylength;
            }

            if(newIndex < field.length){
                field[newIndex] = 1;
            }
           
        }

    }
    }

    console.log(field.join(' '));
    


}

ladybugs([ 3, '0 1',

'0 right 1',

'2 right 1' ]);