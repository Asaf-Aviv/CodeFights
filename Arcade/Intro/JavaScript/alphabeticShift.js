const alphabeticShift = inputString =>  {
    const abc = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a'];
    return inputString.split('').map(x => abc[abc.indexOf(x)+1]).join('');
}

// const alphabeticShift = inputString =>  {
//     return inputString.split('').map(c => String.fromCharCode(c.charCodeAt(0) + 1)).join('').replace(/{/g, 'a');
// }