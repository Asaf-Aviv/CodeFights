const isLucky = n => {
    n = n.toString().split('').map(Number);  
    let first = n.slice(0, n.length / 2).reduce((sum, val) => sum + val);
    let second = n.slice(n.length / 2).reduce((sum, val) => sum + val);

    return first === second
};