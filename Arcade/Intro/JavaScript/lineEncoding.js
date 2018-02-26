const lineEncoding = s => {
    let key = s[0];
    let count = 0;
    let compressed = '';
    
    for (let c of s) {
        if (c === key) {
            count++
        } else {
            if (count > 1) {
                compressed += String(count) + key;
                key = c;
                count = 1;
            } else {
                compressed += key;
                key = c;
                count = 1;
            }
        }
    }
    return compressed[compressed.length -1] === key ? 
        null : (count > 1) ? 
            compressed += String(count) + key : compressed += key;
}