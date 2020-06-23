/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    if(root === null)
        return 0;
    let q = [];
    q.push(root);
    let cnt = 1;
    while(q.length>0) {
        let a = q.shift();
        if(a.left!==null) {
            cnt += 1;
            q.push(a.left);
        }
        if(a.right!==null) {
            cnt += 1;
            q.push(a.right);
        }
        
    }
    return cnt;
};
