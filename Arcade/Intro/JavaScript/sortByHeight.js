const sortByHeight = a => {
    let trees = [];
    // Save trees index in array
    for (let i = a.length - 1; i >= 0; i--) {
        if (a[i] === -1) {
            trees.unshift(i);
            a.splice(i, 1);
        }
    }
    // Sort the array without the trees
    a.sort( (a, b) => a - b);
    // Insert trees by index
    for (let tree of trees) {
        a.splice(tree, 0, -1);
    }
    return a
}
