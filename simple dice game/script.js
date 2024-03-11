(function(){
    'use strict';
    const startgame = document.getElementById('startgame');
    const gamecontrol = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const actionarea = document.getElementById('actions');
    const score = document.getElementById('score');

    const gamedata = {
        dice: ['1die.jpg', '2die.jpg', '3die.jpg', '4die.jpg', '5die.jpg', '6die.jpg'],
        players: ['player1', 'player2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollsum: 0,
        index: 0,
        gameend: 29
    };

    startgame.addEventListener('click', function () {
        gamedata.index = Math.round(Math.random());
        gamecontrol.innerHTML = '<h2>The Game Has Started</h2>';
        gamecontrol.innerHTML += '<button id="quit"> Wanna Quit?</button>';

        document.getElementById('quit').addEventListener('click', function () {
            location.reload();
        });
        console.log("set up the turn!");
        setupturn();
    });
    function setupturn() {
        game.innerHTML = `<p>Roll the dice for ${gamedata.players[gamedata.index]}</p>`;
        actionarea.innerHTML = '<button id="roll">Roll the dice</button>'
        document.getElementById('roll').addEventListener('click', function () {
            throwdice();
        });
    }
    function throwdice() {
        actionarea.innerHTML = "";
        gamedata.roll1 = Math.floor(Math.random() * 6) + 1;
        gamedata.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gamedata.players[gamedata.index]}</p>`;
        game.innerHTML += `<img src="${gamedata.dice[gamedata.roll1 - 1]}">
        <img src="${gamedata.dice[gamedata.roll2 - 1]}">`;

        gamedata.rollsum = gamedata.roll1 + gamedata.roll2;

        if (gamedata.rollsum === 2) {
            game.innerHTML += '<p>Oh snap! you got snake eyes</p>';
            gamedata.score[gamedata.index] = 0;
            gamedata.index ? (gamedata.index = 0) : (gamedata.index = 1);
            showcurrentscore();
            setTimeout(setupturn, 2000);

        }

        else if (gamedata.roll1 === 1 || gamedata.roll2 === 1) {
            gamedata.index ? (gamedata.index = 0) : (gamedata.index = 1);
            game.innerHTML += `<p>Sorry, one of yours rolls was a one, switching to ${gamedata.players[gamedata.index]}</p>`;
            setTimeout(setupturn, 2000);
        }

        else {
            gamedata.score[gamedata.index] += gamedata.rollsum;
            actionarea.innerHTML = '<button id="roll">roll again</button>';
            actionarea.innerHTML += '<p>if your luck is thinning you can pass the chance</p>'
            actionarea.innerHTML += '<button id="pass">pass</button>';

            document.getElementById('roll').addEventListener('click', function () {
                throwdice();
            });
            document.getElementById('pass').addEventListener('click', function () {
                gamedata.index ? (gamedata.index = 0) : (gamedata.index = 1);
                setupturn();
            });
            checkwinningcondition();
        }
 }

    function checkwinningcondition() {
        if (gamedata.score[gamedata.index] > gamedata.gameend) {
            score.innerHTML = `<h2>${gamedata.players[gamedata.index]} wins with ${gamedata.score[gamedata.index]} points!</h2>`;
            actionarea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a new game?";
        }
        else {
            showcurrentscore();
        }
    }
    function showcurrentscore() {
        score.innerHTML = `<p>The score is currently 
                <strong>${gamedata.players[0]} - ${gamedata.score[0]}</strong>and
                <strong>${gamedata.players[1]} - ${gamedata.score[1]}</strong>
                </p>`;
    }
})();