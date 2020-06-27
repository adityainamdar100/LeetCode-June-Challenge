/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    if(n<4)
        return n;
    let dp = [0,1,2,3];
    for(let i = 4; i <= n; i++) {
            let j = 1;
            dp[i] = i;
            while(i - j * j >= 0) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
                j++;
            }
        }
    return dp[n];
};
