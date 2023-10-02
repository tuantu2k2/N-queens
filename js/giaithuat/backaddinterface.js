//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequy = 0
let isDone = false
let n = 8
let numQueens = 1
let queens = new Array(n)
function isFull(){
    if(numQueens >= n) return true
    return false
}


//init array chess board
function init(){
    for(let i = 1; i <= n; i++)
        queens[i] = 0;
}

// function output(){
//     for(let i =1; i <= 8;i++){
//         for(let j =1; j <= 8; j++){
//             if(queens[i] == j){

//                     let start = String.fromCharCode(96+i)+j
//                 let end = String.fromCharCode(96+i)+j
//                 addQueen(start)
//                 Move(start,end)
//                 }

//         }

//     }
//     isDone = true
// }

function canPutQueen( i, j){
    for(let k = 1; k <= i; k++)
        if(queens[k] == j || Math.abs(k - i) == Math.abs(queens[k] - j))
            return false;
    return true;
}
let delay = 1000
let more = delay*2

function putQueen( idx){
    if(!isDone){
        solandequy++
        let pois = String.fromCharCode(96+idx)+1
        setTimeout(()=>{
            clearCol(String.fromCharCode(96+idx))
            addQueen(pois)
        },delay)
        for (let j = 1; j <= n; j++){
            if(isDone) break
            let poi = String.fromCharCode(96+idx)+j
            setTimeout(()=>{
                Move(pois,poi)
                pois = poi
                // console.log("idtimeout"+id)
                // console.log(delay+"poi"+poi+"-pois"+pois)
            },delay)
            delay+=more
            if(j == n && !canPutQueen(idx, j)) setTimeout(()=>{
                clearCol(String.fromCharCode(96+idx))
                clearCol(String.fromCharCode(96+idx-1))
                // console.log("sai"+String.fromCharCode(96+idx)+j)
            },delay)
            if(canPutQueen(idx, j) == true){
                queens[idx] = j;
                
                if(idx == n){
                    // output();
                    isDone = true
                    break
                }
                else{
                    putQueen(idx + 1);
                }

                    
                queens[idx] = 0;
            }
        }

    }
}
//event
let posi = {
    
}



function addQueen(posiQ){
    posi[posiQ] = 'bQ'
    board.position(posi)
}

function Update(){
    board.position(posi)
}

function deleteQueen(posiQ){
    delete posi[posiQ]
}
 function Move(start,end) {
    board.move(`${start}-${end}`)
    deleteQueen(start)
    addQueen(end)
  }
//vd col = "a"
function clearCol(col){
    for(let i=1; i <= 8; i++){
        let clearPoi = col+i
        deleteQueen(clearPoi)
    }
}






// init()
// putQueen(1)
console.log(queens)
console.log("solandequy:"+solandequy)



