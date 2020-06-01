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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(root === null)
        return root;
    let q = [];
    q.push(root);
    while(q.length>0) {
        let t = q.shift();
        if(t.left===null && t.right!==null) {
            let temp = t.left;
            t.left = t.right;
            t.right = temp;
            q.push(t.left);
        } else if(t.left!==null && t.right===null) {
            let temp = t.left;
            t.left = t.right;
            t.right = temp;
            q.push(t.right);
        } else if(t.left!==null && t.right!==null) {
            let temp = t.left;
            t.left = t.right;
            t.right = temp;
            q.push(t.left);
            q.push(t.right);
        }
    }
    return root;
};
