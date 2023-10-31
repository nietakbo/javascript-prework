let rockButton = document.getElementById('play-rock');
rockButton.addEventListener('click',playGame(1));

let paperButton = document.getElementById('play-paper');
paperButton.addEventListener('click',playGame(2));

let scissorsButton = document.getElementById('play-scissors');
scissorsButton.addEventListener('click',playGame(3));