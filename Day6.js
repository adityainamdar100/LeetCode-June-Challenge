/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    let peoples = people.sort((a,b) => {
        if(b[0]-a[0]===0) {
            return a[1]-b[1];
        } else {
            return b[0]-a[0];
        }
    });
    console.log(peoples);
    let a = [];
    for(let i of peoples) {
        a.splice(i[1],0,i);
    }
    return a;
};
