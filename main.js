
var board = Chessboard('myBoard')

$('#clear').on('click', function () {
    clear()
})

$('#start').on('click',function(){
    isDone = true
    init()
    clear()
    delay = 0
    isDone = false

    putQueen(1)
})

$('#stop').on('click', function () {
    if(isDone) isDone = false
})

const speedSelect = document.getElementById('speed-select');

speedSelect.addEventListener('change', function() {
    const selectedSpeed = speedSelect.value;
    console.log(`Selected speed: ${selectedSpeed}`);
    if(selectedSpeed == "slow") more = 1000
    else if(selectedSpeed == "normal") more = 100
    else more = 10
});

function clear(){


    init()
    posi = {}
    board.position(posi)
}

//   setInterval(Move("a4","e7"), 1000);
