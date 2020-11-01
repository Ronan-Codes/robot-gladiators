// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};

var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("what is your robot's name?");
    }


    console.log("Your robot's name is " + name);
    return name;
}

var playerInfo = {
    name: getPlayerName(),
    health: 10,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function () {
        if (this.money >= 7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            alert("You don't have enough money!");
        }
    }
};

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);


var enemyInfo = [{
        name: "Roborto",
        attack: randomNumber(10, 14),
        shield: {
            type: "wood",
            strength: 10
        }
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
];




for (var i = 0; i < enemyInfo.length; i++) {
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
}

var fightOrSkip = function () {
    // ask player if they'd like to fight or skip using fightORrSkip function
    var promptFight = prompt('Would you like to FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');

    // Conditional Recursive Function Call
    if (promptFight === "" || promptFight === null) {
        alert("You need to provide a valid answer! Please try again.");
        return fightOrSkip();
    }


    // if player picks "skip" confirm and then stop the loop
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        // confirm player wants to skip
        var confirmSkip = confirm("Are you sure you'd like to quit?");

        // if yes (true), leave fight
        if (confirmSkip) {
            alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true
            shop();
        }

    }
    return false;
}



var fight = function (enemy) {
    console.log(enemy);
    // repeat at execute as long as the enemy-robot is alive

    // keep track of who goes first
    var isPlayerTurn = true;

    if (Math.random() > 0.5) {
        isPlayerTurn = false;
    }

    while (enemy.health > 0 && playerInfo.health > 0) {
        if (isPlayerTurn) {
            // ask player if they'd like to fight or skip using fightOrSkip function
            if (fightOrSkip()) {
                // if true, leave fight by breaking loop
                break;
            }


        // place fight function code block here...




    // generate random damage value based on player's attack power
    var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
    enemy.health = Math.max(0, enemy.health - damage);

    //Log a resulting message to the console so we know that it worked.
    console.log(
        playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
    );

    //chek enemy's health
    if (enemy.health <= 0) {
        window.alert(enemy.name + " has died!");

        //award player money for winning
        playerInfo.money = playerInfo.money + 20;
        console.log("playerInfo.money " + playerInfo.money)

        //leave while() kiio since enemy is dead
        break;

    } else {
        window.alert(enemy.name + " still has " + enemy.health + " health left.");
    }

    // player gets attacked first
} else {



// remove players's health by subtracting the amount set in the enemyAttack variable
//generate random damage value based on enemy's attack power
var damage = randomNumber(enemy.attack - 3, enemy.attack);

playerInfo.health = Math.max(0, playerInfo.health - damage);

console.log(
    enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
);

//check player's health
if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");

    // leave while() loop if player is dead
    // break is commented be cause of the else statement in the function call
    break;
} else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
}

}
    // switch turn order for next round
    isPlayerTurn = !isPlayerTurn;

}
};


//};

var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
    );
    console.log("entered the shop");

    // use switch to carry out action
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch (shopOptionPrompt) {
        case 1: //new case
            playerInfo.refillHealth();
            break;

        case 2: //new case
            playerInfo.upgradeAttack();
            break;

        case 3: //new case"
            alert("Leaving the store.");
            // do nothing, so function will end
            break;

        default:
            alert("You did not pick a valid option. Try again");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// function to start a new game
var startGame = function () {
    // reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {

        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have a 1 added to it
            window.alert("Welcome to robot Gladiators! Round " + (i + 1));
            //debugger

            // picked new enemy to fight based on the index of the enemyNames array
            var pickedEnemyObj = enemyInfo[i];

            // reset enemyHealth before starting a new fight
            pickedEnemyObj.health = randomNumber(40, 60);


            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);

            //if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
                // ask if player wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

                //if yes, take them to the store() function
                if (storeConfirm) {
                    shop();
                }
            }


        } else {
            window.alert("You have lost your robot in the battle! Game Over!");
            break;
        }
    }

    //after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame()

    // startGame is cancelled because of endGame()
    //startGame();
};


//function to end the entire game
var endGame = function () {
    alert("The game has now ended. Let's see how you did!");

    // if player is still alive, player wins!
    if (playerInfo.health > 0) {
        alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    } else {
        alert("You've lost your robot in the battle.");
    }

    // ask the player if they'd like to play again
    var playAgainConfirm = confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame()
    } else {
        alert("Thank you for playing Robot Gladiators! Come back soon!");
    }

};



// start the game when the page loads
startGame();






/*endGame()
// Alert the player's total stats

// Ask the player if they want to play again

// if yes, call startGame to restart the game






shop()
// Ask the player if they want to "shop"

// If no, continue as normal

// If yes, call the shop() function

// ask player if they want to refill health, upgrade attack, or leave

// if refill, subtract money points and increase health of player

// if upgrade, subtract money points form player and increase attack power

// if leave, alert goodbye and exit function

// if any other invalid option, call shop() again
*/
