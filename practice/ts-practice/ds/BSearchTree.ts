import BTreeNode from "./BTreeNode";

export default class BSearchTree<T>{

    private base:BTreeNode<T> = null;
    private comparatorFn:(a:T,b:T)=>number = null;
    private size:number = 0;

    constructor(comparatorFn:(a:T,b:T)=>number){
        this.comparatorFn = comparatorFn;
    }

    add(node:T):boolean{
        const newNode:BTreeNode<T> = new BTreeNode<T>(node);

        let trav:BTreeNode<T> = this.base;
        if(trav){
            while(trav){
                const compare:number = this.comparatorFn(newNode.getValue(), trav.getValue());
                if(compare<0){
                    if(trav.getLeftNode()){
                        trav = trav.getLeftNode();
                    }else{
                        trav.setLeftNode(newNode);
                        this.size++;
                        return true;
                    }
                }else if(compare>0){
                    if(trav.getRightNode()){
                        trav = trav.getRightNode();
                    }else{
                        trav.setRightNode(newNode);
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