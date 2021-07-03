// Global Variables
var starterIndex
var playerName
var playerHp
var playerMaxHp
var playerAttack
var playerDefense
var playerSpeed
var playerImage

var enemyName
var enemyHp
var enemyMaxHp
var enemyAttack
var enemyDefense
var enemySpeed
var enemyImage
var enemyIndex = 30

var playerPoison = false
var poisionDamage = 0.1

// ARRAYS
//MoveID,Move_Name,Typing,Type,Damage,Healing,Auto_Crit,Status_Applied,PP,
var moves = [
    0,"DK Rap","Normal","Attack",0,0,0,0,25,
    1,"The DK Spike","Grass","Attack",125,0,100,0,5,
    2,"Angry Monkey","Fire","Attack",120,0,0,0,10,
    3,"Boomburst","Normal","Attack",140,0,0,0,10,
    4,"Body Slam","Normal","Attack",85,0,0,30,15,
    5,"Rest","Normal","Status",0,10000,0,100,10,
    6,"No U","Fighting","Attack",500,0,0,0,20,
    7,"Overheat","Fire","Attack",130,0,0,0,5,
    8,"Water Gun","Water","Attack",40,0,0,0,25,
    9,"Hydro Pump","Water","Attack",110,0,0,0,5,
    10,"Ice Beam","Ice","Attack",90,0,0,10,10,
    11,"Depression","Dark","Status",0,0,0,0,5,
    12,"Surf","Water","Attack",90,0,0,0,15,
    13,"Strength","Normal","Attack",80,0,0,0,15,
    14,"Toxic","Posion","Status",0,0,0,90,10,
    15,"Waterfall","Water","Attack",80,0,0,20,15,
    16,"Earthquake","Ground","Attack",100,0,0,0,10,
    17,"Ice Punch","Ice","Attack",75,0,0,10,15,
    18,"Stealth rock","Rock","Attack",25,0,0,100,20,
    19,"Dragon Rush","Dragon","Attack",100,0,0,0,10,
    20,"Break Your Kneecaps","Fighting","Attack",75,0,0,0,15,
    21,"Giga Chad Impact","Normal","Attack",150,0,0,0,5,
    22,"Burning Dragon","Fire","Attack",200,0,0,0,20,
    23,"Strike Dragon","Legendary","Attack",100,400,0,0,5,
    24,"Dragon Contender","Legendary","Attack",150,0,0,0,5,
    25,"Maximum Dragon","Legendary","Attack",400,0,0,0,5
]

// PokemonID,Pokemon Name,HP,Attack,Defense,Speed,Move1,Move2,Move3,Move4
// JS is fine with an array filled with different data types
// Makes sense from what I've learned in Database Systems
var pokemon = [
    0,"Rillaboom",1000,125,90,85,0,1,2,3,
    1,"Cinderace",800,116,75,119,4,5,6,7,
    2,"Inteleon",700,85,65,120,8,9,10,11,
    3,"Pikachu",50,70,50,40,12,13,14,10,
    4,"Swampert",100,110,90,60,15,16,17,18,
    5,"Garchomp",108,130,95,102,19,16,20,21,
    6,"Dragonoid",1000,200,200,200,22,23,24,25
]

// HelperFunctions
function colorHelper(_type){
    if(_type == "Normal"){
        return "#A8A77A"
    }
    else if(_type == "Grass"){
        return "#7AC74C"
    }
    else if(_type == "Fire"){
        return "#EE8130"
    }
    else if(_type == "Fighting"){
        return "#C22E28"
    }
    else if(_type == "Water"){
        return "#6390F0"
    }
    else if(_type == "Ice"){
        return "#96D9D6"
    }
    else if(_type == "Dark"){
        return "#705746"
    }
}
function MoveOne(){
    var playerIndex = (pokemon[starterIndex+6]*9)
    playerTurn(playerIndex)
}
function MoveTwo(){
    var playerIndex = (pokemon[starterIndex+7]*9)
    playerTurn(playerIndex)
}
function MoveThree(){
    var playerIndex = (pokemon[starterIndex+8]*9)
    playerTurn(playerIndex)
}
function MoveFour(){
    var playerIndex = (pokemon[starterIndex+9]*9)
    playerTurn(playerIndex)
}
function reset(){
    document.body.innerHTML = "";
    document.body.innerHTML = "<div class='visualContent'><!--The Content--><!-- Choose Your Starter --><h1>Choose Your Starter</h1><!-- Drop down menu to see the staters --><select id='selectStarter' onchange='displayStarters()'><option selected value='0'>Choose an Starter...</option><option value='1'>Rillaboom</option><option value='2'>Cinderace</option><option value='3'>Inteleon</option></select><br><!-- Visuals. Will change using JS --><img id='statsPic' src='img/pokeball-350x350.png' alt='pokeball-pokemon'><div class='visualContent'><h2 id='statsName'>The Pokemon</h2><span id='statsHP'>HP: 0</span><p>&nbsp;|&nbsp; </p><span id='statsAttack'>Attack: 0</span><br><span id='statsDefense'>Defense: 0</span><p>&nbsp;|&nbsp; </p><span id='statsSpeed'>Speed: 0</span>    </div><br><br><div style='text-align: center;'><input id='startGame' type='button' value='Select Your Starter' onClick='rungame()'></div></div>"
}
function resetButtons(){
    document.getElementById("buttons").innerHTML = "";
    document.getElementById("buttons").innerHTML = "<button id='buttonOne' onClick='moveset()'>Attack</button><button id='buttonTwo' onClick='usePotion()'>Use A Potion</button>";
}
function checkPoison(){
    if(playerPoison==true){
        console.log("poison cured")
        playerPoison = false
        poisionDamage = 0.1
        document.getElementById("text").innerHTML = "You have healed the poison";
    }
}
function printEnemyTurn(_moveName, _totalDamage){
    if(_moveName == "Toxic"){
        document.getElementById("text").innerHTML = enemyName + " used " + _moveName + ". You are poisoned.";
        document.getElementById("text").style.fontSize = "1.25em";
    }
    else if(_moveName == "Stealth rock" || _moveName == "Break Your Kneecaps" || _moveName == "Burning Dragon" || _moveName == "Dragon Contender" || _moveName == "Maximum Dragon"){
        document.getElementById("text").innerHTML = enemyName + " used " + _moveName + " for " + _totalDamage;
        document.getElementById("text").style.fontSize = "1.25em";
    }
    else if(_moveName == "Strike Dragon"){
        document.getElementById("text").innerHTML = enemyName + " used " + _moveName + " to heal";
        document.getElementById("text").style.fontSize = "1.25em";
    }
    else{
        document.getElementById("text").innerHTML = enemyName + " used " + _moveName + " for " + _totalDamage;
    }
}
function printPlayerTurn(_moveName, _totalDamage){
    if(_moveName=="Depression"){
        document.getElementById("text").innerHTML = playerName + " used " + _moveName + ". Enemy felt bad for you and let you win";
        document.getElementById("text").style.fontSize = "1em";
    }
    else{
        document.getElementById("text").innerHTML = playerName + " used " + _moveName + " for " + _totalDamage;
    }
}
function resetText(){
    document.getElementById("text").innerHTML = "What will you do?"
    document.getElementById("text").style.fontSize = "1.5em";
}
function loss(){
    document.getElementById("text").innerHTML = "You have been defeated!";
}
function printRoundwin(_moveName){
    document.getElementById("text").innerHTML = "You defeated a Pokemon";
}
function printDebugMove(){
    document.getElementById("text").innerHTML = "You used Depression. The Enemy felt bad and let you win."
    document.getElementById("text").style.fontSize = "1.25em";
}

// Main Functions
function displayStarters(){
    var _listener = document.getElementById("selectStarter");
    var _answer = _listener.value;
    var _index;
    if(_answer == 1){
        _index = 0;
        document.getElementById("statsPic").src = "img/dk-350x350.png";
        document.getElementById("statsName").innerHTML = pokemon[_index+1];
        document.getElementById("statsHP").innerHTML = "HP: " + pokemon[_index+2];
        document.getElementById("statsAttack").innerHTML = "Attack: " + pokemon[_index+3];
        document.getElementById("statsDefense").innerHTML = "Defense: " + pokemon[_index+4];
        document.getElementById("statsSpeed").innerHTML = "Speed: " + pokemon[_index+5];
        document.getElementById("startGame").style.backgroundColor = "#7AC74C";
    }
    else if(_answer == 2){
        _index = 10;
        document.getElementById("statsPic").src = "img/chungus-350x350.png";
        document.getElementById("statsName").innerHTML = pokemon[_index+1];
        document.getElementById("statsHP").innerHTML = "HP: " + pokemon[_index+2];
        document.getElementById("statsAttack").innerHTML = "Attack: " + pokemon[_index+3];
        document.getElementById("statsDefense").innerHTML = "Defense: " + pokemon[_index+4];
        document.getElementById("statsSpeed").innerHTML = "Speed: " + pokemon[_index+5];
        document.getElementById("startGame").style.backgroundColor = "#EE8130";
    }
    else if(_answer == 3){
        _index = 20;
        document.getElementById("statsPic").src = "img/kermit-350x350.png";
        document.getElementById("statsName").innerHTML = pokemon[_index+1];
        document.getElementById("statsHP").innerHTML = "HP: " + pokemon[_index+2];
        document.getElementById("statsAttack").innerHTML = "Attack: " + pokemon[_index+3];
        document.getElementById("statsDefense").innerHTML = "Defense: " + pokemon[_index+4];
        document.getElementById("statsSpeed").innerHTML = "Speed: " + pokemon[_index+5];
        document.getElementById("startGame").style.backgroundColor = "#6390F0";
    }
    else{
        document.getElementById("statsPic").src = "img/pokeball-350x350.png";
        document.getElementById("statsName").innerHTML = "The Pokemon";
        document.getElementById("statsHP").innerHTML = "HP: 0";
        document.getElementById("statsAttack").innerHTML = "Attack: 0";
        document.getElementById("statsDefense").innerHTML = "Defense: 0";
        document.getElementById("statsSpeed").innerHTML = "Speed: 0";
        document.getElementById("startGame").style.backgroundColor = "#FFFFFF";
    }
    // console.log("displayStarters function was called")
}
function moveset(){
    var buttonColor
    // console.log("moveset")
    document.getElementById("buttons").innerHTML = ""; //remove the previous buttons
    document.getElementById("buttons").innerHTML = "<button id='moveOne' onClick='MoveOne()'>"+moves[(pokemon[starterIndex+6]*9)+1]+"</button><button id='moveTwo' onClick='MoveTwo()'>"+moves[(pokemon[starterIndex+7]*9)+1]+"</button><button id='moveThree' onClick='MoveThree()'>"+moves[(pokemon[starterIndex+8]*9)+1]+"</button><button id='moveFour' onClick='MoveFour()'>"+moves[(pokemon[starterIndex+9]*9)+1]+"</button>";
    buttonColor = colorHelper(moves[(pokemon[starterIndex+6]*9)+2])
    document.getElementById("moveOne").style.backgroundColor = buttonColor
    buttonColor = colorHelper(moves[(pokemon[starterIndex+7]*9)+2])
    document.getElementById("moveTwo").style.backgroundColor = buttonColor
    buttonColor = colorHelper(moves[(pokemon[starterIndex+8]*9)+2])
    document.getElementById("moveThree").style.backgroundColor = buttonColor
    buttonColor = colorHelper(moves[(pokemon[starterIndex+9]*9)+2])
    document.getElementById("moveFour").style.backgroundColor = buttonColor
}
function usePotion(){
    var currentHealth = playerHp
    if((currentHealth+100)>playerMaxHp){
        playerHp = playerMaxHp
        // console.log("HP maxed out")
    }
    else{
        playerHp = playerHp + 100
        // console.log("HP increased")
    }
    document.getElementById("text").innerHTML = "You used a potion to heal";
    document.getElementById("playerHP").innerHTML = "HP: " + playerHp + "/" + playerMaxHp;
    checkPoison()
    console.log("potion function was called")
    setTimeout(enemyTurn, 4000);
}
function enemyTurn(){
    //enemy chooses random move to do
    var moveIndex
    var random = Math.round(Math.random()*3); //defining random number range 0-3
    // console.log(random)
    if(random==0){
        moveIndex = pokemon[enemyIndex+6];
    }
    if(random==1){
        moveIndex = pokemon[enemyIndex+7];
    }
    if(random==2){
        moveIndex = pokemon[enemyIndex+8];
    }
    if(random==3){
        moveIndex = pokemon[enemyIndex+9];
    }
    // console.log(moveIndex)
    moveIndex = (moveIndex*9)
    // console.log(moveIndex)

    //enemy makes their move
    var moveName = moves[moveIndex+1]
    // var typing = moves[playerIndex+2] //typing
    var type = moves[moveIndex+3] //Attack or Status
    var attackDamage = moves[moveIndex+4]
    var healing = moves[moveIndex+5]
    
    var totalDamage = 0
    if(healing >= 100){
        var currentHealth = enemyHp
        if((currentHealth+healing)>playerMaxHp){
            enemyHp = enemyMaxHp
            // console.log("HP maxed out")
        }
        else{
            enemyHp = enemyHp + healing
            // console.log("HP increased")
        }
        document.getElementById("enemyHP").innerHTML = "HP: " + enemyHp + "/" + enemyMaxHp;
    }
    //otherwise
    else if(type == "Status"){
        if(moveName == "Toxic"){
            if(playerPoison == false){
                playerPoison = true
                document.getElementById("text").innerHTML = "You are now poisoned"
            }
            else{
                document.getElementById("text").innerHTML = "Enemy can't use Toxic twice"
            }
        }
    }
    else{
        var random = Math.round(Math.random()*100); //defining random number range 0-3
        var critChance = false
        if(random > 95){
            critChance = true
        }
        if(critChance == true){
            totalDamage = attackDamage * 2
            // console.log("you landed a crit")
        }
        else{
            totalDamage = attackDamage
            // console.log("standard damage")
        }
    }
    playerHp = playerHp - totalDamage
    if(playerPoison == true){
        poisionDamage = poisionDamage + 0.1
        playerHp = Math.round(playerHp - (poisionDamage * playerHp))
    }

    if(playerHp <= 0){
        playerHp = 0
        document.getElementById("buttons").innerHTML = "";
        enemyIndex = 30
        poisionDamage = 0.1
        setTimeout(printEnemyTurn(moveName, totalDamage), 4000);
        setTimeout(loss, 4000)
        setTimeout(reset, 5000);
        console.log("the game had ended. enemy won")
    }
    else{
        setTimeout(printEnemyTurn(moveName, totalDamage), 4000);
        setTimeout(resetText, 1000);
        setTimeout(resetButtons,1000);    
    }
    document.getElementById("playerHP").innerHTML = "HP: " + playerHp + "/" + playerMaxHp;
    // if enemy is dead
}
function playerTurn(playerIndex){
    var moveName = moves[playerIndex+1]
    // var typing = moves[playerIndex+2] //typing
    var type = moves[playerIndex+3] //Attack or Status
    var attackDamage = moves[playerIndex+4]
    var healing = moves[playerIndex+5]
    var autoCrit = moves[playerIndex+6]
    // console.log(type, attackDamage, healing, autoCrit)

    var totalDamage = 0
    if(autoCrit == 100){
        totalDamage = attackDamage * 2
        // console.log("autoCrit was detected")
    }
    // otherwise
    else if(healing >= 100){
        var currentHealth = playerHp
        if((currentHealth+healing)>playerMaxHp){
            playerHp = playerMaxHp
            // console.log("HP maxed out")
        }
        else{
            playerHp = playerHp + healing
            // console.log("HP increased")
        }
        document.getElementById("playerHP").innerHTML = "HP: " + playerHp + "/" + playerMaxHp;
    }
    //otherwise
    else if(type == "Status"){
        if(moveName == "Depression"){
            setTimeout(printDebugMove, 4000)
            enemyHp = 0
            document.getElementById("enemyHP").innerHTML = "HP: "+enemyHp+"/"+enemyMaxHp
        }
        if(moveName == "Toxic"){
            if(playerPoison == false){
                playerPoison = true
                document.getElementById("text").innerHTML = "Enemy used Toxic. You are now poisoned"
            }
            else{
                document.getElementById("text").innerHTML = "Enemy can't use Toxic on you twice"
            }
        }
    }
    else{
        var random = Math.round(Math.random()*100); //defining random number range 0-3
        var critChance = false
        if(random > 95){
            critChance = true
        }
        if(critChance == true){
            totalDamage = attackDamage * 2
            // console.log("you landed a crit")
        }
        else{
            totalDamage = attackDamage
            // console.log("standard damage")
        }
    }
    enemyHp = enemyHp - totalDamage
    // console.log(enemyHp)
    if(enemyHp <= 0){
        enemyHp = 0
    }
    if(playerPoison == true){
        poisionDamage = poisionDamage + 0.1
        playerHp = Math.round(playerHp - (poisionDamage * playerHp))
    }
    document.getElementById("enemyHP").innerHTML = "HP: " + enemyHp + "/" + enemyMaxHp;
    // if enemy is dead
    if(enemyHp > 0){
        document.getElementById("buttons").innerHTML = "";
        setTimeout(enemyTurn, 4000);
    }
    else{
        if(enemyIndex < 60){
            enemyIndex = enemyIndex+10
            battlefield(enemyIndex)
            setTimeout(printRoundwin(moveName), 3000);
            document.getElementById("buttons").innerHTML = "";
            setTimeout(resetText, 4000);
            setTimeout(resetButtons, 4000);
            // console.log("next battle")
        }
        else{
            document.getElementById("text").innerHTML = "Victory! Will reset in 5 secs";
            setTimeout(reset, 5000);
            enemyIndex = 30
            poisionDamage = 0.1
            document.getElementById("buttons").innerHTML = "";
            return;
            // console.log("the game had ended")  
        }
    }
    setTimeout(printPlayerTurn(moveName, totalDamage),4000)
}
function battlefield(enemyIndex){
    // starting enemy overhead
    enemyName = pokemon[enemyIndex+1]
    enemyHp = pokemon[enemyIndex+2]
    enemyMaxHp = pokemon[enemyIndex+2]
    enemyAttack = pokemon[enemyIndex+3]
    enemyDefense = pokemon[enemyIndex+4]
    enemySpeed = pokemon[enemyIndex+5]

    //enemy changes every round
    if(enemyIndex==30){
        enemyImage = "img/pikachu.png"
    }
    if(enemyIndex==40){
        enemyImage = "img/swampert.png"
    }
    if(enemyIndex==50){
        enemyImage = "img/garchomp.png"
    }
    if(enemyIndex>=60){
        enemyName = pokemon[60+1]
        enemyHp = pokemon[60+2]
        enemyMaxHp = pokemon[60+2]
        enemyAttack = pokemon[60+3]
        enemyDefense = pokemon[60+4]
        enemySpeed = pokemon[60+5]
        enemyImage = "img/drago.png"
    }

    //load in new html stuff
    document.body.innerHTML = "<div class='gameVisualContent'><!-- The Game --><p id='enemy'>"+enemyName+"</p><p id='enemyHP'>HP: "+enemyHp+"/"+enemyMaxHp+"</p><p id='player'>"+ playerName + "<p id='playerHP'>HP: " + playerHp + "/" + playerMaxHp + "</p><p id='text'>What will you do?</p><div id='buttons'><button id='buttonOne' onClick='moveset()'>Attack</button><button id='buttonTwo' onClick='usePotion()'>Use A Potion</button></div><img id='enemyPokemon' src='" + enemyImage + "' alt='enemyPokemon'><img id='yourPokemon' src='" + playerImage + "' alt='yourPokemon'><img id='bf' src='img/battlefield.jpg' alt='battlefield'></div>";
}
function rungame(){
    // console.log("rungame function was called")
    var starterID = (document.getElementById("selectStarter").value)-1;
    if(starterID<0){ //Alerts the user if they did not answer question 1.
        alert("You have not selected a starter. You need a starter in order to play");
        return;
    }
    else{
        document.body.innerHTML = ""; //to clear out the inner of the body tag for the game
        // console.log(starterID);

        // saving player starter information to be used throughout the game
        if(starterID==0){
            starterIndex = 0;
            playerImage = "img/dk.png"
        }
        else if(starterID==1){
            starterIndex = 10;
            playerImage = "img/chungus.png"
        }
        else if(starterID==2){
            starterIndex = 20;
            playerImage = "img/kermit.png"
        }

        // Starter overhead
        playerName = pokemon[starterIndex+1]
        playerHp = pokemon[starterIndex+2]
        playerMaxHp = pokemon[starterIndex+2]
        playerAttack = pokemon[starterIndex+3]
        playerDefense = pokemon[starterIndex+4]
        playerSpeed = pokemon[starterIndex+5]
    
        // loading in the game visuals
        // document.body.innerHTML = "<div class='gameVisualContent'><!-- The Game --><p id='enemy'>"+enemyName+"</p><p id='enemyHP'>HP: "+enemyHp+"/"+enemyHp+"</p><p id='player'>"+ playerName + "<p id='playerHP'>HP: " + playerHp + "/" + playerHp + "</p><p id='text'>What will you do?</p><div id='buttons'><button id='buttonOne' onClick='moveset()'>Button 1</button><button id='buttonTwo' onClick='usePotion()'>Button 2</button></div><img id='enemyPokemon' src='" + enemyImage + "' alt='enemyPokemon'><img id='yourPokemon' src='" + playerImage + "' alt='yourPokemon'><img id='bf' src='img/battlefield.jpg' alt='battlefield'></div>";

        // game loop
        enemyindex = 30
        battlefield(enemyindex)
    }
}