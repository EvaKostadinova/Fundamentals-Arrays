function dungeonest(str) {
    let health = 100;
    let coins = 0;

    let rooms = str.split('|');
    let bestRoom = 1;

    for(let room of rooms){
        let partsOfRooms = room.split(' ');
        let command = partsOfRooms[0];
        let value = Number(partsOfRooms[1]);

        if(command === `potion`){
            let healthToAdd = value;

            if(health + healthToAdd > 100){
                healthToAdd = 100 - health;
            }

            health += healthToAdd;
            console.log(`You healed for ${healthToAdd} hp.`);
            console.log(`Current health: ${health} hp.`);
            
        } else if(command === `chest`){
            let coinsFound = value;
            coins += coinsFound;
            console.log(`You found ${coinsFound} coins.`);
        } else {
            let monster = command;
            let attack = value;

            health -= attack;

            if(health > 0){
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${bestRoom}`);
                break;
            }

        }

        bestRoom++;

    }

    if(health > 0){
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

dungeonest("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");