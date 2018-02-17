const adjacentElementsProduct = arr => {
    return arr.map((v, i) => v * arr[i+1])
        .reduce((m, p) => m < p ? p : m);
}