/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var dfs = function(board,i,j,m,n) {
    if(i<0 || j<0 || i>m-1 || j>n-1) {
				return;
    }
    if(board[i][j] != 'O') return;
    board[i][j] = 'S';
    dfs(board, i-1,j,m,n);
    dfs(board,i,j-1,m,n);
    dfs(board,i+1,j,m,n);
    dfs(board,i,j+1,m,n);
}

var solve = function(board) {
    let m = board.length;
    if( m == 0) return;
    let n = board[0].length;
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(i == 0 || j == 0 || j == n-1 || i == m-1) {
                dfs(board,i,j,m,n);
            }
        }
    }
    for(let i=0;i<m;i++) {
        for(let j=0;j<n;j++) {
            if(board[i][j] == 'S') {
                board[i][j] = 'O';
            } else if(board[i][j] == 'O') {
                board[i][j] = 'X';
            }
        }
    }
};
