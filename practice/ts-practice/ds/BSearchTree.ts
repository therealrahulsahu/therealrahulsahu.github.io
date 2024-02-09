import BTreeNode from "./BTreeNode";

export default class BSearchTree<T>{

    private base:BTreeNode<T> = null;
    private comparatorFn:(a:T,b:T)=>number = null;

    constructor(comparatorFn:(a:T,b:T)=>number){
        this.comparatorFn = comparatorFn;
    }

    add(node:T):void{
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
                        break;
                    }
                }else if(compare>0){
                    if(trav.getRightNode()){
                        trav = trav.getRightNode();
                    }else{
                        trav.setRightNode(newNode);
                        break;
                    }
                }else{
                    break;
                }
            }
        }else{
            this.base = newNode;
        }
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
    
}