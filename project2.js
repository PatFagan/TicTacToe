let turn = "blank";
function place(element) {
    // if x-player's turn
    if (turn == "xturn") {
        turn = "oturn";
        element.innerHTML = `<span class="btn x">x</span>`;
        element.onclick = null;
    }
    // if o-player's turn
    else if (turn == "oturn") {
        turn = "xturn";
        element.innerHTML = `<span class="btn o">o</span>`;
        element.onclick = null;
    }
    // Check for Win
    winCheck(getBoard());
}

// Checks for Three in a Row
function winCheck(board) {
    let blankButton = `<button class="btn blank" onClick="place(this)">t</button>`;

    let score = 0;
    let html = "";
    // Win Patterns
    if (board[0] == board[1] && board[1] == board[2] && board[1] != blankButton) { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    if (board[3] == board[4] && board[4] == board[5] && board[4] != blankButton) 
    { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    if (board[6] == board[7] && board[7] == board[8] && board[7] != blankButton) 
    { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    if (board[0] == board[3] && board[3] == board[6] && board[3] != blankButton) 
    { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    if (board[1] == board[4] && board[4] == board[7] && board[4] != blankButton) 
    { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    if (board[2] == board[5] && board[5] == board[8] && board[5] != blankButton) 
    { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    if (board[0] == board[4] && board[4] == board[8] && board[4] != blankButton) 
    { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    if (board[6] == board[4] && board[4] == board[2] && board[4] != blankButton) 
    { 
        score += 1;
        html = `<p>winner is ${board[0]}! score: ${score}</p>`;
    }
    console.log(html);
    document.getElementById("winner").innerHTML=html;
}

// Reads the Board
function getBoard() {
    let board = [];
    [...document.getElementsByClassName("btn blank")].forEach(
      (element, index, array) => {
        board.push(element.innerText);
      }
    );
    console.log(board);
    return board;
}

function chooseFirst(input) {
    if (turn == "blank") {
        turn = input;
    }
}

// Default Cell Creation
function blankButton(text) {
    return `<button class="btn blank" onClick="place(this)">${text}</button>`;
}
// Resets the Board
function reset() {
    let html = "";
    let chooseX = `<button class="btn ui" onClick="chooseFirst('xturn')">X First</button>`;
    let chooseO = `<button class="btn ui" onClick="chooseFirst('oturn')">O First</button>`;    
    
    let resetGame = `<button class="btn ui" onClick="reset()">Reset Game</button>`;
    let tile = [blankButton('t'), blankButton('i'), blankButton('c'),
                blankButton('c'), blankButton('a'), blankButton('t'),
                blankButton('t'), blankButton('o'), blankButton('e')];
    html += `${chooseX} or ${chooseO} <br>
        |${tile[0]}|${tile[1]}|${tile[2]}|<br>
        |${tile[3]}|${tile[4]}|${tile[5]}|<br>
        |${tile[6]}|${tile[7]}|${tile[8]}|<br>
        ${resetGame}`;
    document.getElementById("javascript").innerHTML=html;
    return html;
}

window.onload = () => {
    reset();
}