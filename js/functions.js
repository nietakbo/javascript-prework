const printMessage = function(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

const clearMessages = function(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function(argMoveId){
	if(argMoveId == 1){
	  return 'kamień';
	}
	else if(argMoveId==2){
	    return 'papier';
	}
	else if(argMoveId==3){
	    return 'nożyce';
	}
	else{
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
	}
  }

const displayResult = function(argComputerMove, argPlayerMove){
	console.log('moves:', argComputerMove, argPlayerMove);
	if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
		printMessage('Ty wygrywasz!');
	  }
	else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
		printMessage('Przegrałeś!');
	  }
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
		printMessage('Ty wygrywasz');
	}
	else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
		printMessage('Przegrałeś!');
	}
	else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
		printMessage('Ty wygrywasz!');
	}
	else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
		printMessage('Przegrałeś!');
	}
	else if(argComputerMove=argPlayerMove){
		printMessage('Remis');
	}
	return 0;
}

const playGame = function(playerInput){
	clearMessages();
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	console.log('Wylosowana liczba to: ' + randomNumber);
	const computerMove = getMoveName(randomNumber);
	printMessage('Mój ruch to: ' + computerMove);
	//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
	console.log('Gracz wpisał: ' + playerInput);
	const playerMove = getMoveName(playerInput);
	printMessage('Twój ruch to: ' + playerMove);

	displayResult(computerMove,playerMove);
	return 0;
}

const game = function(){
    const rockButton = document.getElementById('play-rock');
    rockButton.addEventListener('click',function(){playGame(1)});

    const paperButton = document.getElementById('play-paper');
    paperButton.addEventListener('click',function(){playGame(2)});

    const scissorsButton = document.getElementById('play-scissors');
    scissorsButton.addEventListener('click',function(){playGame(3)});
    return 0;
}