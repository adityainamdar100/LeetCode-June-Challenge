/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs = costs.sort((a,b) => (b[0] - b[1]) - (a[0] - a[1]));
    let b = 0;
    let cost = 0;
    for(let i of costs) {
        if(b>=costs.length/2) {
            cost += i[0];
        }
        else {
            cost += i[1];
        }
        b += 1;
    }
    return cost;
};
