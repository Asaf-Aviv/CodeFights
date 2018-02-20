const longestDigitsPrefix = s => {
    let final = '';
    let prefix = '';
    
    for(let c of s) {
        if (c === ' ') {
            return final
        } 
        if (Number.isInteger(+c)) {
            prefix += c;
        } else {
            prefix.length > final.length ? final = String(prefix) : null;
            prefix = '';
        }
    prefix.length > final.length ? final = String(prefix) : null;
    }
    return final;
}