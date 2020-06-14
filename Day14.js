/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
    let dp = Array(n).fill().map((_, i) => i===src ? 0 : Infinity);
    for(let k=0; k<K+1; k++) {
        let N = [...dp];
        for(let [from, to, price] of flights) {
            N[to] = Math.min(N[to], dp[from] + price);
        }
        dp = [...N];
    }
    return dp[dst] != Infinity ? dp[dst] : -1
};
