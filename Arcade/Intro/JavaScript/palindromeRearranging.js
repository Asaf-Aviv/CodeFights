const palindromeRearranging = str => {
    let chars = {},
        singles = 0;
    
    for(let i = 0, x = str.length; i < x; i++) {
        if(!chars.hasOwnProperty(str[i])) {
            chars[str[i]] = 0; 
        }
        chars[str[i]]++;
    }

    for(let c in chars) {
        if(chars[c] % 2 !== 0) {
            singles++;
            if(singles > 1) {
                return false;
            }
        }
    }
    return true;
}