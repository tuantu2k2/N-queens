/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

# define SIZE 8

using namespace std;

int queens[SIZE];

void output(){
    for (int i = 0; i < SIZE; i++){
        for(int j = 0; j < SIZE; j++)
            if(queens[i] == j)
                cout << "Q\t";
            else
                cout << "0\t";
        cout << endl;
    }
    
    cout <<"Ban muon xem ket qua tiep theo khong";
    if(getchar() == 'y'){
        cin.ignore(1);
        cout << "========================\n";
    }else
        exit(1);
    
}

bool canPutQueen(int i, int j){
    for(int k = 0; k < i; k++)
        if(queens[k] == j || abs(k - i) == abs(queens[k] - j))
            return false;
    return true;
}

void putQueen(int idx){
    for (int j = 0; j < SIZE; j++)
        if(canPutQueen(idx, j) == true){
            queens[idx] = j;
            
            if(idx == SIZE - 1)
                output();
            else
                putQueen(idx + 1);
                
            queens[idx] = 0;
        }
}

int main()
{
    putQueen(0);

    return 0;
}
