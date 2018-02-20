const arrayMaxConsecutiveSum = (a, k) => {
    let max = a.slice(0, k).reduce((s, v) => s + v, 0),
        sum = max;
    
    for (let i = k, x = a.length; i < x; i++) {
        sum += a[i];
        sum -= a[i-k];
        sum > max ? max = sum : null;
    }
    return max
}