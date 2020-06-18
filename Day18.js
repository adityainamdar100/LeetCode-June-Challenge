/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let low = 0, high = citations.length-1;
    let max = 0;
    while(low<=high) {
        let mid = parseInt((low+high)/2);
        if(citations.length-mid<=citations[mid]) {
            max = citations.length-mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return max;
};
