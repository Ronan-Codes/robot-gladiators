
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 10,
    attack: 10,
    money:10
};

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var enemyInfo = [
    {
        name: "Roborto",
        attack: 12
    },
    {
        name: "Amy Android",
        attack: 13
    },
    {
        name: "Robo Trumble",
        attack: 14
    }
];


// function to generate a random numeric value
var randomNumber = function (min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
};




for (var i = 0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
}


var fight = function (enemyName) {
    // repeat at execute as long as the enemy-robot is alive
    while (enemyHealth > 0 && playerInfo.health > 0) {
        // place fight function code block here...


        // Alert players that they are starting the round
        //window.alert("Welcome to Robot Gladiators");

        var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player choses to skip
        if (promptFight === "skip" || promptFight === "SKIP") {
            //confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }

            // not sure if this should be here still
            else {
                fight()
            }
        }


        /*        //if no (false), ask question again by running fight() again
                else {
                    fight()
                }
            }

            else {
                window.alert("You need to choose a valid option. Try again!");
            }

        */
        //if player chooses to fight, then fight
        else if (promptFight === "fight" || promptFight === "FIGHT") {



            // generate random damage value based on player's attack power
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemyHealth = Math.max(0, enemyHealth - damage);

            //Log a resulting message to the console so we know that it worked.
            console.log(
                playerInfo.name + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //chek enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerInfo.money = playerInfo.money + 20;
                console.log("playerInfo.money " + playerInfo.money)

                //leave while() kiio since enemy is dead
                break;

            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove players's health by subtracting the amount set in the enemyAttack variable
            //generate random damage value based on enemy's attack power
            var damage = randomNumber(enemyAttack - 3, enemyAttack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);

            console.log(
                enemyName + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
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

        } else {
            window.alert("You need to choose a valid option. Try again!");
        }

    }


};

var shop = function () {
    // ask player what they'd like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    );
    console.log("entered the shop");

    // use switch to carry out action
    switch (shopOptionPrompt) {
        case "REFILL": //new case
        case "refill":
            if (playerInfo.money >= 7) {
                alert("Refilling player's health by 20 for 7 dollars.");

                // increase health and decrease money
                playerInfo.health = playerInfo.health + 20;
                playerInfo.money = playerInfo.money - 7;
            } else {
                alert("You don't have enough money!")
            }
            break;

        case "UPGRADE": //new case
        case "upgrade":
            if (playerInfo.money >= 7) {
                alert("Upgrading player's attack by 6 for 7 dollars.");

                // increase attack and decrease money
                playerInfo.attack = playerInfo.attack + 6;
                playerInfo.money = playerInfo.money - 7;
            } else {
                alert("You don't have enough money!")
            }
            break;

        case "LEAVE": //new case
        case "leave":
            alert("Leaving the store.");

            // do nothing, so function will end
            break;

        default:
            alert("You did not pick a valit option. Try again");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

// function to start a new game
var startGame = function () {
    // reset player stats
    playerInfo.health = 100;
    playerInfo.attack = 10;
    playerInfo.money = 10;

    for (var i = 0; i < enemyNames.length; i++) {
        //debugger;
        if (playerInfo.health > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have a 1 added to it
            window.alert("Welcome to robot Gladiators! Round " + (i + 1));

            // picked new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting a new fight
            enemyHealth = randomNumber(40, 60);

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);

            //if player is still alive and we're not at the last enemy in the array
            if (playerInfo.health > 0 && i < enemyNames.length - 1) {
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
debugger;
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
