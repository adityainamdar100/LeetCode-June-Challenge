/**
 * Initialize your data structure here.
 */
let a = [], b = {};
var RandomizedSet = function() {
    a = [];
    b = {};
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(b.hasOwnProperty(val))
        return false;
    b[val] = a.length;
    a.push(val);
    return true;
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(b.hasOwnProperty(val)) {
        let ind = b[val];
        a[ind] = a[a.length-1];
        a.pop();
        b[a[ind]] = ind;
        delete b[val];
        return true;
    }
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return a[Math.floor(Math.random()*(a.length))];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
