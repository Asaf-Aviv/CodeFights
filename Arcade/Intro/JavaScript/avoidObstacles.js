const avoidObstacles = arr => {
    for(let i = 2, x = 40; i < x; i++) {
        if(arr.every(v => v % i !== 0)) {
            return i;
        }
    }
}