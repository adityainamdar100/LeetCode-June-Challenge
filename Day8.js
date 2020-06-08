/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let k = 0;
    while(Math.pow(2,k)<=n) {
        if(Math.pow(2,k) === n)
            return true;
        k += 1;
    }
    return false;
};
