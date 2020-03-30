function breadthFirstSearch(startingNode, targetVal) {
    let graph = [startingNode];

    let visited = new Set();
    while(graph.length){
        let node = graph.shift();
        if (visited.has(node)) continue;
        visited.add(node);

        if (node.val === targetVal){
            return node;
        }
        graph.push(...node.neighbors);
    }

    return null;
}

module.exports = {
    breadthFirstSearch
};