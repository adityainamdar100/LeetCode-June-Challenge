/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let i = 0;
    for(let j of t) {
        if(j===s[i])
            i += 1;
    }
    if(i===s.length)
        return true;
    return false;
};
