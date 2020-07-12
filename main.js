import allTickets from './tickets.js'

(function() {

function mainLoop(){
    if(!gameState.pause){
        if(inMainLoop === true){
            console.error('mainLoop called while processing loop. There may be slowdowns');
        }
        inMainLoop = true;
        console.log('doing loop');
        redrawStats();
        generateTickets();
        inMainLoop = false;
    }
}

function redrawStats(){
    if(gameState.countdownAnxiety) player.anxiety += gameState.anxietyPerTick;
    if(gameState.countdownHappiness) player.happiness -= Math.floor(player.anxiety/100)/10;

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

    const playerHappinessPerc = `${Math.floor(player.happiness / 10)}%`;
    const playerAnxietyPerc = `${Math.floor(player.anxiety / 10)}%`;

    document.getElementById('player_happiness').style.width = playerHappinessPerc;
    document.getElementById('player_anxiety').style.width = playerAnxietyPerc;

    document.getElementById('player_happiness_text').innerText = playerHappinessPerc;
    document.getElementById('player_anxiety_text').innerText = playerAnxietyPerc;
    updateImage();
}

function updateImage(){
    const idImage = 1+'_'+(Math.ceil(player.anxiety/200) ? Math.ceil(player.anxiety/200) : 1);
    const oldImage = document.getElementById('image-status').src;
    let newImage = '';
    if(idImage === '1_5'){
        newImage = 'assets/image_'+idImage+'.gif';
    } else {
        newImage = 'assets/image_'+idImage+'.svg';
    }
    if(oldImage.split('assets')[1] != newImage.split('assets')[1]) {
        document.getElementById('image-status').src = newImage;
    }
}

function loseState() {
    let msg = '';
    if(gameState.countdownHappiness) {
        msg = 'YOU LOSE: HAPPINESS IS 0';
    }
    if(gameState.countdownAnxiety) {
        msg = 'YOU LOSE: YOUR ANXIETY HAD GONE TO THE TOP';
    }
    document.getElementById('lost-alert').style = 'display: block;';
    document.getElementById('lost-alert').innerText = msg;
    gameState.loss = true;
    gameState.pause = true;
}

function generateTickets(){
    if(Math.random() > 0.9) {
        lastTicket++;
        const avTicket = Math.floor(Math.random() * availableTickets.length);
        const realTicketId = availableTickets[avTicket];
        const realTicket = allTickets[realTicketId];
        const ticket = {
            'id': realTicket.id,
            'clicks': realTicket.clicks
        };
        nowTickets[lastTicket] = ticket;
        gameState.anxietyPerTick += realTicket.anxietyPerTick;
        drawLastTicket(lastTicket);
        if(realTicket.unique){
            availableTickets.splice(avTicket);
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
    newTicket.innerHTML = `
    <div class="list-group">
    <button class="ticket list-group-item list-group-item-action flex-column align-items-start" style="padding: 0.25rem 0.75rem; background: transparent;">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${realTicket.title}</h5>
      </div>
      <p class="mb-1" id="${ticketNumber + 'clicks'}">CLICKS LEFT ${ticket.clicks}</p>
      <p class="mb-1" >anx+ ${realTicket.anxietyPerTick} anx- ${realTicket.anxietyRelief} hap+ ${realTicket.happinessRelief}</p>
    </button>
    </div>
  `;
    newTicket.id = ticketNumber;
    newTicket.addEventListener('click',function(){
        if(!gameState.pause) {
            nowTickets[this.id].clicks--;
            this.childNodes[1].childNodes[1].childNodes[3].innerText = `CLICKS LEFT ${ticket.clicks}`;
            if(nowTickets[this.id].clicks === 0){
                this.classList.add('ticket--closing')
                setTimeout(() => {
                    const realTicket = allTickets[nowTickets[ticketNumber].id];
        
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
           
                    // UI changes
                    const parentId = this.parentElement.id.substring(3); // from pos##
                    this.parentElement.removeChild(this);
                    openPos.push(parseInt(parentId));
            
                }, 700) // MUST BE SAME (or a bit less) TIME AS ANIMATION
            }
        }
    });

    // full tickets
    if(openPos.length == 0 && !gameState.ticketAlert){
        gameState.ticketAlert = true;
        document.getElementById('tickets-full').style = 'display: block;';
        setTimeout(function() {
            clearTicketAlert();
          }, 3000);
        player.anxiety += 50;
        if (player.anxiety > 1000){
            gameState.countdownAnxiety = true;
            loseState();
        }
        return true;
    }
    const arrPos = Math.floor(Math.random() * openPos.length);
    const pos = openPos[arrPos];
    document.getElementById('pos'+pos).appendChild(newTicket);
    openPos.splice(arrPos,1);
}

let openPos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let availableTickets = [];
let unavailableTickets = [];
for(const ticketId in allTickets) {
    availableTickets.push(parseInt(ticketId))
    const ticket = allTickets[ticketId]
    if(ticket.unlocks) {
        unavailableTickets = unavailableTickets.concat(ticket.unlocks)
    }
}
availableTickets = availableTickets.filter(ticket => !unavailableTickets.includes(ticket))

let lastTicket = 0;
const nowTickets = {};
var inMainLoop = false;
const gameState = {
    anxietyPerTick : 0,
    pause: false,
    countdownHappiness: false,
    countdownAnxiety: false,
    ticketAlert: false
};

var player = {
    anxiety : 0,
    happiness : 200
};

document.getElementById('pause_button').addEventListener('click',function(){
    gameState.pause = !gameState.pause;
    if(gameState.pause) {
        document.getElementById('pause-alert').style = 'display: block;'
    }else {
        document.getElementById('pause-alert').style = 'display: none;'
    }
})

//TODO: REMOVE BEFORE GAMEJAM DEADLINE
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case "m":
            return player.anxiety += 150;
        case "n":
            return player.anxiety -= 150;
        case "b":
            return player.happiness += 150;
        case "v":
            return player.happiness -= 150;
    }
})

// Here we set the game loop
// if this game loop is janky, we should change it for something like what is explained here http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
var interval = setInterval(mainLoop, 1000/5); 

})()