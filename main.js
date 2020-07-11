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
    player.anxiety += gameState.anxietyPerTick;

    document.getElementById('player_happiness').innerText = Math.floor(player.happiness);
    document.getElementById('player_anxiety').innerText = Math.floor(player.anxiety);
    updateImage();
}

function updateImage(){
    const idImage = 1+'_'+Math.ceil(player.anxiety/200);//Math.ceil(player.happiness/200);
    if(idImage === '1_5'){
        document.getElementById('image-status').src = '/assets/image_'+idImage+'.gif';
    } else {
        document.getElementById('image-status').src = '/assets/image_'+idImage+'.svg';
    }
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

function drawLastTicket(ticketNumber){
    const newTicket = document.createElement('div');
    const ticket = nowTickets[ticketNumber];
    const realTicket = allTickets[nowTickets[ticketNumber].id];
    newTicket.innerHTML = `
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action flex-column align-items-start" style="padding: 0.25rem 0.75rem;">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1">${realTicket.title}</h5>
      </div>
      <p class="mb-1" id="${ticketNumber + 'clicks'}">CLICKS LEFT ${ticket.clicks}</p>
      <p class="mb-1" >anx+ ${realTicket.anxietyPerTick} anx- ${realTicket.anxietyRelief} hap+ ${realTicket.happinessRelief}</p>
    </a>
    </div>
  `;
    newTicket.id = ticketNumber;
    newTicket.addEventListener('click',function(){
        if(!gameState.pause) {
            nowTickets[this.id].clicks--;
            this.childNodes[1].childNodes[1].childNodes[3].innerText = `CLICKS LEFT ${ticket.clicks}`;
            if(nowTickets[this.id].clicks === 0){
                const realTicket = allTickets[nowTickets[ticketNumber].id];
    
                // player or gamestate changes
                gameState.anxietyPerTick -= realTicket.anxietyPerTick;
                player.anxiety -= realTicket.anxietyRelief;
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
        
            }
        }
    });

    // losing condition: full tickets
    if(openPos.length == 0){
        gameState.loss = true;
        document.getElementById('lost-alert-tickets').style = 'display: block;';
        gameState.pause = true;
        return true;
    }
    const arrPos = Math.floor(Math.random() * openPos.length);
    const pos = openPos[arrPos];
    document.getElementById('pos'+pos).appendChild(newTicket);
    openPos.splice(arrPos,1);
}

let openPos = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
const availableTickets = [1,2,3,5];
const allTickets = {
    1:{
        'id': 1,
        'title': 'work',
        'clicks': 10,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1
    },
    2:{
        'id': 2,
        'title': 'study',
        'clicks': 10,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1
    },
    3:{
        'id': 3,
        'title': 'take a walk',
        'clicks': 5,
        'anxietyPerTick': 0.1,
        'anxietyRelief': 2,
        'happinessRelief': 1
    },
    4:{
        'id': 4,
        'title': 'pet a cat',
        'clicks': 2,
        'anxietyPerTick': 0,
        'anxietyRelief': 3,
        'happinessRelief': 2
    },
    5:{
        'id': 5,
        'title': 'get a cat',
        'clicks': 5,
        'anxietyPerTick': 0,
        'anxietyRelief': 1,
        'happinessRelief': 10,
        'unlocks': [4,6],
        'unique': true
    },
    6:{
        'id': 6,
        'title': 'clean the litter box',
        'clicks': 10,
        'anxietyPerTick': 0.3,
        'anxietyRelief': 1,
        'happinessRelief': 1
    }
};


let lastTicket = 0;
const nowTickets = {};
inMainLoop = false;
const gameState = {
    anxietyPerTick : 0,
    pause: false
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


// Here we set the game loop
// if this game loop is janky, we should change it for something like what is explained here http://nokarma.org/2011/02/02/javascript-game-development-the-game-loop/index.html
var interval = setInterval(mainLoop, 1000/5); 
