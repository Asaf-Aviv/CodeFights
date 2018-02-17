const commonCharacterCount = (s1, s2) => {
    let count = 0;
    
    for (let i of s1) {
        if (s2.indexOf(i) !== -1) {
            count++
            s2 = s2.replace(i, '');
        }
    }
    return count;
}