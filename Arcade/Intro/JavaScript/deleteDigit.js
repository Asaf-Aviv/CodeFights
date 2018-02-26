const deleteDigit = n => {
    let arr = (""+n).split``.map(Number);
    for (let i = 0, x = arr.length; i < x; i++) {
        if (arr[i] < arr[i+1]) {
            arr.splice(i, 1);
            return +arr.reduce((s, v) => s += String(v), '');
        }
    }
    arr.splice(-1, 1);
    return +arr.reduce((s, v) => s += String(v), '');
}