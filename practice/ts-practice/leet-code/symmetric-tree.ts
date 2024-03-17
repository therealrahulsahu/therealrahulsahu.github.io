// https://leetcode.com/problems/symmetric-tree/
(()=>{

    var isSymmetric1 = function(root) {
        const preOrder = [];
    
        const preT = (node, l)=>{
            if(node){
                preT(node.left, true);
                preOrder.push([node.val, l]);
                preT(node.right, false);
            }
        };
        preT(root, null);
    
        const postOrder = [];
    
        const postT = (node, l)=>{
            if(node){
                postT(node.right, false);
                postOrder.push([node.val, l]);
                postT(node.left, true);
            }
        };
    
        postT(root, null);
    
        const checkSide = (pre, post)=>{
            for(let i=0;i<pre.length;i++){
                const [preI, preF] = pre[i];
                const [postI, postF] = post[i];
                if(preI!==postI) return false;
                // @ts-ignore
                if((preF===null) ^ (postF===null)) return false;
                if((preF!==null && postF!==null) && !(preF ^ postF)) return false; 
            }   
            return true;
        };
    
        return preOrder.length===postOrder.length && checkSide(preOrder, postOrder);
    };



    var isSymmetric2 = function(root) {
        const preOrder = [];
    
        const preT = (node, l)=>{
            if(node){
                preT(node.left, true);
                preOrder.push([node.val, l]);
                preT(node.right, false);
            }
        };
        preT(root, null);
    
        let compare = (pre, post)=>{
            const [preI, preF] = pre;
            const [postI, postF] = post;
            
            if(preI!==postI) return false;
            // @ts-ignore
            if((preF===null) ^ (postF===null)) return false;
            if((preF!==null && postF!==null) && !(preF ^ postF)) return false;
    
            return true;
        }
    
        let flag = true;
    
        const postT = (node, l)=>{
            if(node && flag){
                postT(node.right, false);
                
                if(preOrder.length===0){
                    flag = false;
                }else{
                    if(!compare(preOrder[0], [node.val, l])) flag=false;
                    preOrder.shift();
                }
    
                postT(node.left, true);
            }
        };
    
        postT(root, null);
    
        return preOrder.length===0 && flag;
        
    };


    const isSym = (node1, node2) => {
        if (node1 === null && node2 === null) return true;
        if (node1 === null || node2 === null) return false;
        return node1.val === node2.val && isSym(node1.left, node2.right) && isSym(node1.right, node2.left);
    };
    
    var isSymmetric = function(root) {
        return isSym(root.left, root.right);
    };

})()
