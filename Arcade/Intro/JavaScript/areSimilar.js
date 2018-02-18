const areSimilar = (a, b) => {
    let dis = {};
    
    for (let i = 0, x = a.length; i < x; i++) {
        if(a[i] !== b[i]) {
            if(dis.hasOwnProperty(a[i])) {
               return false;
            }
            dis[a[i]] = b[i].toString();
        }
    }
    if (Object.keys(dis).length === 2) {
        let a = Object.keys(dis);
        let b = Object.values(dis).reverse();
        return a.every((v, i) => v === b[i]);
    } 
    return a.every( (v, i) => v === b[i]);
}