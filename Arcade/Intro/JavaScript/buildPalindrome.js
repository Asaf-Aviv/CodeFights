const buildPalindrome = st => {
    
    let reversed = st.split('').reverse().join('')
    let i = st.length;
    let original = st;
    
    while (st !== st.split('').reverse().join('')) {
        st = original + reversed.slice(i);
        i--;
    }
    return st
}