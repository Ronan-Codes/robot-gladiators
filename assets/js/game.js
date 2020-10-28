var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this
//console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;




for (var i = 0; i < enemyNames.length; i++) {
    //console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index");
}


var fight = function (enemyName) {
    // repeat at execute as long as the enemy-robot is alive
    while (enemyHealth > 0 && playerHealth > 0) {
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
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
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



            // remove enemy's health by subtracting the amount set in the playerAttack variable
            enemyHealth = enemyHealth - playerAttack;

            //Log a resulting message to the console so we know that it worked.
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );

            //chek enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");

                //award player money for winning
                playerMoney = playerMoney + 20;
                console.log("playerMoney " + playerMoney)

                //leave while() kiio since enemy is dead
                break;

            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // remove players's health by subtracting the amount set in the enemyAttack variable
            playerHealth = playerHealth - enemyAttack;
            console.log(
                enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            //check player's health
            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");

                // leave while() loop if player is dead
                // break is commented be cause of the else statement in the function call
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }

        } else {
            window.alert("You need to choose a valid option. Try again!");
        }

    }


};



for (var i = 0; i < enemyNames.length; i++) {
    //debugger;
    if (playerHealth > 0) {
        // let player know what round they are in, remember that arrays start at 0 so it needs to have a 1 added to it
        window.alert("Welcome to robot Gladiators! Round " + (i + 1));

        // picked new enemy to fight based on the index of the enemyNames array
        var pickedEnemyName = enemyNames[i];

        // reset enemyHealth before starting a new fight
        enemyHealth = 50;

        // use debugger to pause script from running and check what's going on at that moment in the code
        // debugger;

        //pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
        fight(pickedEnemyName);

    // the else below doesn't work!
    } else {
        window.alert("You have lost your robot in the battle! Game Over!");
        break;
    }
}
