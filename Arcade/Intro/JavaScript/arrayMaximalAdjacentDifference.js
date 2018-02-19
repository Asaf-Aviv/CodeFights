const arrayMaximalAdjacentDifference = arr => {
    return arr.reduce((s, v, i) => Math.abs(v - arr[i-1]) > s ? Math.abs(v - arr[i-1]) : s, 0);
}