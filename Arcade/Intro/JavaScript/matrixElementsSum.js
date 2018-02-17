const matrixElementsSum = matrix => {
    
    let huntedColumns = [],
        sum = 0;
    
    for (let i = 0, x = matrix.length; i < x; i++) {
        for (let j = 0, k = matrix[i].length; j < k; j++) {
            // Check if column is hunted and column index is not in our huntedColumns array
            // if so add column index to huntedColumns array
            if (matrix[i][j] === 0 && huntedColumns.indexOf(j) === -1) {
                huntedColumns.push(j);
                // Check to see if all Columns are hunted.
                // if so end our function and return the sum
                if(huntedColumns.length === k) {
                    return sum;
                }
            // Check to see if column is not cursed
            // if so add to sum
            } else if (huntedColumns.indexOf(j) === -1) {
                sum += matrix[i][j];
            }
        }
    }
    return sum;
}
