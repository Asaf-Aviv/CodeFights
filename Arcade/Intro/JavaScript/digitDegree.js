const digitDegree = n => {
    let operations = 0;

    while(String(n).length > 1) {
        n = String(n).split('').reduce((s, v) => s + +v, 0);
        operations++
    }
    return operations;
}