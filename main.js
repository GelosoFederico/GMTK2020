import allTickets from './tickets.js'
import getTicketApproxValues from './getTicketApproxValues.js'

(function() {

function mainLoop(){
    if(!gameState.pause){
        if(inMainLoop === true){
            console.error('mainLoop called while processing loop. There may be slowdowns');
        }
        inMainLoop = true;
        redrawStats();
        generateTickets();
        inMainLoop = false;
    }
}

function redrawStats(){
    if(!gameState.countdownAnxiety) player.anxiety += gameState.anxietyPerTick;
    if(!gameState.countdownHappiness) player.happiness -= Math.floor(player.anxiety/100)/10;

    // losing conditions
    if (player.anxiety > 1000){
        gameState.countdownAnxiety = true;
        loseState();
    } else {
        gameState.countdownAnxiety = false;
    }
    if (player.happiness < 0){
        gameState.countdownHappiness = true;
        loseState();
    } else {
        gameState.countdownHappiness = false;
    }
    // Winning conditions
    if (player.happiness > 1000) {
        winningState();
    }

    const playerHappinessPerc = `${Math.floor(player.happiness / 10)}%`;
    const playerAnxietyPerc = `${Math.floor(player.anxiety / 10)}%`;

    document.getElementById('player_happiness').style.width = playerHappinessPerc;
    document.getElementById('player_anxiety').style.width = playerAnxietyPerc;

    document.getElementById('player_happiness_text').innerText = playerHappinessPerc;
    document.getElementById('player_anxiety_text').innerText = playerAnxietyPerc;
    updateImage();
}

function updateImage(){
    const idImage = 1+'_'+Math.min(Math.max(Math.ceil(player.anxiety/200), 1), 5);
    const oldImage = document.getElementById('image-status').src;
    let newImage = '';
    if(idImage === '1_5'){
        newImage = 'assets/image_'+idImage+'.gif';
    } else {
        newImage = 'assets/image_'+idImage+'.svg';
    }
    if (gameState.tutorialMode) {
        newImage = 'assets/image_tutorial.gif';
    }
    if(oldImage.split('assets')[1] != newImage.split('assets')[1]) {
        document.getElementById('image-status').src = newImage;
    }
}

function winningState() {
    document.getElementById('win-alert').style = 'display: block;';
    gameState.pause = true;
    document.getElementById('restart-button').style = 'display: block;';
}

function loseState() {
    let msg = '';
    if(gameState.countdownHappiness) {
        msg = 'YOU LOSE: YOUR HAPPINESS HAS GONE TO THE BOTTOM';
    }
    if(gameState.countdownAnxiety) {
        msg = 'YOU LOSE: YOUR ANXIETY HAS GONE TO THE TOP';
    }
    document.getElementById('lost-alert').style = 'display: block;';
    document.getElementById('lost-alert').innerText = msg;
    gameState.loss = true;
    gameState.pause = true;
    document.getElementById('restart-button').style = 'display: ;';
}

function generateTickets(){
    // Salio el random y, si esta en tutorial, termino su ticket
    let chances = 0.6 + ((16 - openPos.length) * 0.023); // from 0.6 to 0.92 approx
    if(Math.random() > chances && ((!gameState.tutorialMode && availableTickets.length) || (gameState.tutorialMode && gameState.tutorialTicketDone))) {
        // full tickets in screen logic
        if(openPos.length == 0 && !gameState.ticketAlert){
            ticketCantEnterSound();
            gameState.ticketAlert = true;
            document.getElementById('tickets-full').style = 'display: block;';
            setTimeout(function() {
                clearTicketAlert();
            }, 3000);
            player.anxiety += 50;
            if (player.anxiety > 1000){
                // we redraw them here so it shows 100%
                redrawStats();
                gameState.countdownAnxiety = true;
                loseState();
            }
            return true;
        //full tickets but there is already a message
        } else if (openPos.length == 0 && gameState.ticketAlert) {
            return true;
        }
        const avTicket = Math.floor(Math.random() * availableTickets.length);
        const realTicketId = availableTickets[avTicket];
        if(lockedTickets[realTicketId]){
            availableTickets.splice(avTicket,1);
        } else {
            lastTicket++;
            let realTicket;
            if(gameState.tutorialMode){
                gameState.tutorialTicketDone = false;
                realTicket = allTickets[tutorialTickets[gameState.tutorialTicket]];
            }else{
                realTicket = allTickets[realTicketId];
            }
            const ticket = {
                'id': realTicket.id,
                'clicks': realTicket.clicks
            };
            nowTickets[lastTicket] = ticket;
            gameState.anxietyPerTick += realTicket.anxietyPerTick;
            if(realTicket.unique){
                availableTickets.splice(avTicket,1);
                lockedTickets[realTicketId] = true;
            } 
            if(realTicket.uniqueLine){
                availableTickets.splice(avTicket,1);
            }

            drawLastTicket(lastTicket);
        }
    }
}

function clearTicketAlert(){
    document.getElementById('tickets-full').style = 'display: none;';
    gameState.ticketAlert = false;
}

function drawLastTicket(ticketNumber){
    const newTicket = document.createElement('div');
    const ticket = nowTickets[ticketNumber];
    const realTicket = allTickets[nowTickets[ticketNumber].id];
    const approxValues = getTicketApproxValues(realTicket)
    newTicket.innerHTML = `
    <div class="list-group">
    <button class="ticket list-group-item list-group-item-action" style="padding: 0.25rem 0.75rem; background: transparent;">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${realTicket.title}</h5>
      </div>
      <div style="height: 20px; border: 1px solid black; border-radius: 5px; position: relative; margin: 0px 10px">
            <span class="ticket-clicks" style="
                position: absolute;
                width: 100%;
                height: 100%;
                color: black;
                font-size: 12px;
                text-align: center;
            ">CLICKS LEFT ${ticket.clicks}</span>
            <div class="ticket-clicks-bar" data-max="${ticket.clicks}" style="height: 100%; width: 100%; background-color: red;"></div>
      </div>
      <div style="float: left" title="Anxiety while not being attended">
        <i class="fa fa-heartbeat" style="color: red;" aria-hidden="true"></i>
        <i class="fa fa-arrow-up" style="color: red;" aria-hidden="true"></i>
        ${approxValues.anxietyPerTick} 
      </div>
      <div style="float: left; margin: 0px 5px;" title="Anxiety relief on completion">
        <i class="fa fa-heartbeat" style="color: green;" aria-hidden="true"></i>
        <i class="fa fa-arrow-down" style="color: green;" aria-hidden="true"></i>
        ${approxValues.anxietyRelief} 
      </div>
      <div style="float: left"  title="Happiness gained on completion">
        <i class="fa fa-smile-o" style="color: green;" aria-hidden="true"></i>
        ${approxValues.happinessRelief}
      </div>
        </button>
    </div>
  `;
    newTicket.id = ticketNumber;
    newTicket.dataset.ticketId = realTicket.id;
    incomingTicketSound();
    const clickSpan = newTicket.querySelector(`.ticket-clicks`)
    const clickBar = newTicket.querySelector(`.ticket-clicks-bar`);
    // click ticket event
    newTicket.addEventListener('click',function(){
        if(!gameState.pause) {
            nowTickets[this.id].clicks--;
            clickSpan.innerText = `CLICKS LEFT ${ticket.clicks}`;
            clickBar.style.width = Math.floor(ticket.clicks / clickBar.dataset.max * 100) + '%';
            
            // finished ticket logic
            if(nowTickets[this.id].clicks === 0 && !this.className.includes('ticket--closing')){
                this.classList.add('ticket--closing')
                if(realTicket.locks) {
                    realTicket.locks.forEach(id => {
                        document.querySelectorAll(`[data-ticket-id='${id}']`).forEach(el => {
                            nowTickets[el.id].clicks = 1
                            el.click()
                        })
                    })
                    availableTickets = availableTickets.filter(id => !realTicket.locks.includes(id))
                }
                setTimeout(() => {
                    // player or gamestate changes
                    gameState.anxietyPerTick -= realTicket.anxietyPerTick;
                    player.anxiety -= realTicket.anxietyRelief;
                    if(player.anxiety < 0) player.anxiety = 0;
                    player.happiness += realTicket.happinessRelief;
        
                    // Available tickets changes
                    if(realTicket.unlocks) {
                        for(let i=0; i<realTicket.unlocks.length; i++) {
                            availableTickets.push(realTicket.unlocks[i]);
                        }
                    }
                    if(realTicket.unlocksWhen){
                        if(!unlocksWhenCounts[realTicket.id]){
                            unlocksWhenCounts[realTicket.id] = 1;
                        } else {
                            unlocksWhenCounts[realTicket.id]++;
                            if(unlocksWhenCounts[realTicket.id] == realTicket.unlocksWhen.number){
                                for(let i=0; i<realTicket.unlocksWhen['unlocks'].length; i++) {
                                    availableTickets.push(realTicket.unlocksWhen['unlocks'][i]);
                                }
                                if(realTicket.unlocksWhen['locksItself']) {
                                    lockedTickets[realTicket.id] = true;
                                }
                                if(realTicket.unlocksWhen['locksItselfLine']) {
                                    availableTickets.splice(availableTickets.indexOf(realTicket.id),1);
                                }
                            }
                        }
                    }

                    if(gameState.tutorialMode){
                        gameState.tutorialTicket++;
                        gameState.tutorialTicketDone = true;
                        if(gameState.tutorialTicket > (tutorialTickets.length-1)) gameState.tutorialMode = false;
                    }
           
                    // UI changes
                    const parentId = this.parentElement.id.substring(3); // from pos##
                    this.parentElement.removeChild(this);
                    openPos.push(parseInt(parentId));
            
                }, 700) // MUST BE SAME (or a bit less) TIME AS ANIMATION
            }
        }
    });


    const arrPos = Math.floor(Math.random() * openPos.length);
    const pos = openPos[arrPos];
    document.getElementById('pos'+pos).appendChild(newTicket);
    openPos.splice(arrPos,1);
}


// Sound functions
function incomingTicketSound() {
    if(!gameState.muted)
        incomingTicketSoundFiles[Math.floor(Math.random()*(incomingTicketSoundFiles.length))].play();
}

function ticketCantEnterSound() {
    if(!gameState.muted)
        ticketCantEnterSoundFile.play();
}

// preloaded audios
const incomingTicketSoundFiles = [
    new Audio('assets/sound_incoming1.mp3'),
    new Audio('assets/sound_incoming2.mp3'),
    new Audio('assets/sound_incoming3.mp3'),
    new Audio('assets/sound_incoming4.mp3'),
];
const ticketCantEnterSoundFile = new Audio('assets/sound_blocked.mp3');

// set all global vars

let tutorialTickets = [29,30,31,32,33,71,72,73,34,35];
let lockedTickets = {};
let openPos = [];
let availableTickets = [];
let unlocksWhenCounts = {};
let nTutorialTickets = 6;


let lastTicket = 0;
let nowTickets = {};
var inMainLoop = false;
let gameState = {
    anxietyPerTick : 0,
    pause: false,
    countdownHappiness: false,
    countdownAnxiety: false,
    ticketAlert: false,
    muted: false,
    tutorialMode: true,
    tutorialTicket: 0,
    tutorialTicketDone: true,
};

var player = {
    anxiety : 0,
    happiness : 150
};



// set starting conditions
function clearScreen() {
    for(let i=1; i<17; i++){
        let thing = document.getElementById('pos'+i);
        if(thing.lastElementChild) thing.removeChild(thing.lastElementChild);
    }
}

function setStartingConditions() {
    player.anxiety = 0;
    player.happiness = 150;

    gameState.anxietyPerTick = 0;
    gameState.pause = false;
    gameState.countdownHappiness = false;
    gameState.countdownAnxiety = false;
    gameState.ticketAlert = false;
    gameState.muted = false;

    lastTicket = 0;
    inMainLoop = false;

    nowTickets = {};
    lockedTickets = {};    
    unlocksWhenCounts = {};
    openPos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

    availableTickets = [];
    for(const ticketId in allTickets) {
        const ticket = allTickets[ticketId];
        if(ticket.starter) {
            availableTickets.push(parseInt(ticketId));
        }
    }

    clearScreen();
}


// Settings buttons
document.getElementById('pause_button').addEventListener('click',function(){
    gameState.pause = !gameState.pause;
    if(gameState.pause) {
        document.getElementById('pause-alert').style = 'display: block;';
    }else {
        document.getElementById('pause-alert').style = 'display: none;';
    }
});

document.getElementById('mute_button').addEventListener('click',function(){
    gameState.muted = !gameState.muted;
    if(gameState.muted) {
        document.getElementById('mute_button').innerText = 'UNMUTE';
    }else {
        document.getElementById('mute_button').innerText = 'MUTE';
    }
});

document.getElementById('restart-button').addEventListener('click',function(){
    setStartingConditions();
    document.getElementById('pause-alert').style = 'display: none;';
    document.getElementById('mute_button').innerText = 'MUTE';
    document.getElementById('lost-alert').style = 'display: none;';
    document.getElementById('restart-button').style = 'display: none;';
    document.getElementById('win-alert').style = 'display: none;';
});

setStartingConditions();
// Here we set the game loop
// if this game loop is janky, we should change it for something like what is explained here http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
var interval = setInterval(mainLoop, 1000/5); 

})()