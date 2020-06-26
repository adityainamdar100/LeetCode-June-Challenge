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
let sum = 0;
function dfs(root,s) {
    if(root===null)
        return
    if(root.left===null && root.right===null) {
        s += root.val;
        sum += Number(s);
        console.log(sum);
        return;
    }
    s += root.val;
    console.log(s);
    if(root.left===null && root.right!==null)
        dfs(root.right,s);
    else if(root.right===null && root.left!=null)
        dfs(root.left,s);
    else {
        dfs(root.left,s);
        dfs(root.right,s);
    }
    
}
var sumNumbers = function(root) {
    sum = 0;
    let s = "";
    dfs(root,s);
    return sum;
};
