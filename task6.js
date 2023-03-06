const tree = [10,[1,2], 9, 1, [1, 3], 1,[1, [3,4, 3, 1]], 3, [5, 7, 8], 1];
function treeBypass(tree, count) {
    let leafs=count;
    for(let item of tree) {
        if (Array.isArray(item)) {
            leafs = treeBypass(item, leafs);
        }
        else {
            leafs++;
        }
    }
    return leafs;
}

console.log(treeBypass(tree,0))