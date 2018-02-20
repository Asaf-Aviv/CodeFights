const absoluteValuesSumMinimization = a => {
    let sumOfMin = Infinity,
        min,
        sum;
    
    for (let i = 0, x = a.length; i < x; i++) {
        sum = a.reduce((s, v) => s += Math.abs(a[i] + - v), 0);
        sum < sumOfMin ? (min = a[i], sumOfMin = sum) : null;
    }
    return min;
}