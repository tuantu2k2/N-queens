//khoi tao mt 8x8
//hang i , cot j
//a 97 fromcharcode
let solandequy = 0
let isDone = false
let n = 8
let numQueens = 1
let queens = new Array(n)
let prints = document.getElementById("chess")
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

function putQueen( idx){
    if(!isDone){
        // solandequy++
        for (let j = 1; j <= n; j++){
            let poi = String.fromCharCode(96+idx)+j

            if(canPutQueen(idx, j) == true && !isDone){
                queens[idx] = j;
                clearCol(String.fromCharCode(96+idx))
                addQueen(poi)
                // let start = String.fromCharCode(96+i)+j
                // let end = 
                
                if(idx == n){
                    // output();
                    isDone = true
                }
                else
                    putQueen(idx + 1);
                    
                // queens[idx] = 0;
            }
        }

    }
}






init()
// putQueen(1)
console.log(queens)
console.log("solandequy:"+solandequy)



