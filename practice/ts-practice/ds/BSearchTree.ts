import BTreeNode from "./BTreeNode";
import Stack from "./Stack";



interface BackTrackNode<T>{
    dirLeft:boolean,
    address:T
}

export default class BSearchTree<T>{

    private base:BTreeNode<T> = null;
    private comparatorFn:(a:T,b:T)=>number = null;
    private size:number = 0;

    constructor(comparatorFn:(a:T,b:T)=>number){
        this.comparatorFn = comparatorFn;
    }

    add(node:T):boolean{
        console.log(`Add ${node}`)
        const newNode:BTreeNode<T> = new BTreeNode<T>(node);
        const backTrack:Stack<BackTrackNode<BTreeNode<T>>> = new Stack<BackTrackNode<BTreeNode<T>>>();

        let trav:BTreeNode<T> = this.base;
        if(trav){
            while(trav){
                const compare:number = this.comparatorFn(newNode.getValue(), trav.getValue());
                if(compare<0){
                    if(trav.getLeftNode()){
                        backTrack.push({dirLeft: true, address: trav});
                        trav = trav.getLeftNode();
                    }else{
                        // backTrack.push(trav);
                        trav.setLeftNode(newNode);
                        this.rebalanceTree(backTrack);
                        this.size++;
                        return true;
                    }
                }else if(compare>0){
                    if(trav.getRightNode()){
                        backTrack.push({dirLeft: false, address: trav});
                        trav = trav.getRightNode();
                    }else{
                        // backTrack.push(trav);
                        trav.setRightNode(newNode);
                        this.rebalanceTree(backTrack);
                        this.size++;
                        return true;
                    }
                }else{
                    return false;
                }
            }
        }else{
            this.base = newNode;
            this.size++;
            return true;
        }
    }

    rebalanceTree(stack:Stack<BackTrackNode<BTreeNode<T>>>){
        console.log(stack.toArray().map((v:BackTrackNode<BTreeNode<T>>)=>`${v.dirLeft?'left':'right'}-${v.address.getValue()}`));
        while(stack.getLength()){
            const toCheckNode:BackTrackNode<BTreeNode<T>> = stack.pop();
            const nodeBalance:number = toCheckNode.address.getNodeBalance();
            if(nodeBalance<-1){
                if(stack.check()){
                    if(stack.check().dirLeft){
                        stack.check().address.setLeftNode(this.rotateLeft(toCheckNode.address));
                    }else{
                        stack.check().address.setRightNode(this.rotateLeft(toCheckNode.address));
                    }
                }else{
                    this.base = this.rotateLeft(toCheckNode.address);
                }
            }else if(nodeBalance>1){
                if(stack.check()){
                    if(stack.check().dirLeft){
                        stack.check().address.setLeftNode(this.rotateRight(toCheckNode.address));
                    }else{
                        stack.check().address.setRightNode(this.rotateRight(toCheckNode.address));
                    }
                }else{
                    this.base = this.rotateRight(toCheckNode.address);
                }
            }else{

            }
        }
    }

    rotateLeft(node:BTreeNode<T>):BTreeNode<T>{
        console.log(`Left Rotate ${node.getValue()}`);
        const temp:BTreeNode<T> = node;
        if(node.getRightNode()){
            node = node.getRightNode();
            temp.setRightNode(node.getLeftNode());
            node.setLeftNode(temp);
            return node;
        }else{
            return null;
        }
    }
    rotateRight(node:BTreeNode<T>):BTreeNode<T>{
        console.log(`Right Rotate ${node.getValue()}`);
        const temp:BTreeNode<T> = node;
        if(node.getLeftNode()){
            node = node.getLeftNode();
            temp.setLeftNode(node.getRightNode());
            node.setRightNode(temp);
            return node;
        }else{
            return null;
        }
    }

    search(node:T):T{
        let trav:BTreeNode<T> = this.base;
        let found:T = null;
        while(trav){
            const compare:number = this.comparatorFn(node, trav.getValue());
            if(compare<0){
                trav = trav.getLeftNode();
            }else if(compare>0){
                trav = trav.getRightNode();
            }else{
                found = trav.getValue();
                break;
            }
        }

        return found;
    }

    BST():T[]{
        return this.base?.BST()||[];
    }
    BFS():T[]{
        return this.base?.BFS()||[];
    }
    DFS():T[]{
        return this.base?.DFS()||[];
    }
    nodeMap(modifyFn:(node:T)=>string){
        return this.base?.nodeMap(modifyFn)||null;
    }
    getHeight():number{
        return this.base?.getHeight()||0;
    }

    getSize():number{
        return this.size;
    }

    getBaseBalance():number{
        return this.base?.getNodeBalance()||0;
    }
    // rotate(){
    //     if(this.getBaseBalance()<-1){
    //         this.base = this.base.rotateLeft(this.base);
    //     }else if(this.getBaseBalance()>1){
    //         this.base = this.base.rotateRight(this.base);
    //     }
    // }
    // rotateLeft(){
    //     this.base = this.base.rotateLeft(this.base)||this.base;
    // }
    // rotateRight(){
    //     this.base = this.base.rotateRight(this.base)||this.base;
    // }
    
}