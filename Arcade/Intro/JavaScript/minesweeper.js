const minesweeper = matrix => {
    let board = [],
        sum;
    
    for (let i = 0, x = matrix.length; i < x; i++) {
        board.push([]);
        for (let j = 0, k = matrix[i].length; j < k; j++) {
            let neighbors = [];
            switch (i) {
                    
                case 0:
                    neighbors.push(matrix[i][j-1], matrix[i][j+1],
                                   matrix[i+1][j-1], matrix[i+1][j], matrix[i+1][j+1]);

                    sum = neighbors.filter(v => v ? v : null);
                    board[i].push(sum.length);
                    break;
                    
                case x - 1:
                    neighbors.push(matrix[i-1][j-1], matrix[i-1][j], matrix[i-1][j+1],
                                   matrix[i][j-1], matrix[i][j+1]);
                
                    sum = neighbors.filter(v => v ? v : null);
                    board[i].push(sum.length);   
                    break;
                    
                default:
                    neighbors.push(matrix[i-1][j-1], matrix[i-1][j], matrix[i-1][j+1],
                                   matrix[i][j-1], matrix[i][j+1],
                                   matrix[i+1][j-1], matrix[i+1][j], matrix[i+1][j+1]);

                    sum = neighbors.filter(v => v ? v : null);
                    board[i].push(sum.length);
            }
        }
    }
    return board;
}
