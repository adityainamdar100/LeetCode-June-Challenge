/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    if(coins.length===0) {
        if(amount===0)
            return 1;
        else 
            return 0;
    }
    let coin = [];
    for(let i=0;i<coins.length;i++) {
        let a = [];
        for(let j=0;j<=amount;j++) {
            if(i===0) {
                if(j===0)
                    a.push(1);
                else if(j>=coins[i]) {
                    if(j%coins[i]===0)
                        a.push(1);
                    else
                        a.push(0);
                }
                else
                    a.push(0);
            } else {
                a.push(0);
            }
        }
        coin.push(a);
    }
    for(let i=1;i<coins.length;i++) {
        for(let j=0;j<=amount;j++) {
            if(j>=coins[i]) {
                coin[i][j] = coin[i-1][j] + coin[i][j-coins[i]];
            } else {
                coin[i][j] = coin[i-1][j];
            }
        }
    }
    return coin[coins.length-1][amount];
};
