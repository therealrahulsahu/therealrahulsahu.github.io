import Queue from "./Queue";
import Stack from "./Stack";

export default class BTreeNode<T>{
    private value:T = null;
    private left:BTreeNode<T> = null;
    private right:BTreeNode<T> = null;
    private traversed:boolean = false;

    constructor(value:T, left:BTreeNode<T>=null, right:BTreeNode<T>=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }

    getValue():T{
        return this.value;
    }
    setValue(value:T):void{
        this.value = value;
    }

    getLeftNode():BTreeNode<T>{
        return this.left;
    }
    setLeftNode(node:BTreeNode<T>){
        this.left = node;
    }

    getRightNode():BTreeNode<T>{
        return this.right;
    }
    setRightNode(node:BTreeNode<T>){
        this.right = node;
    }

    unsetTraversed():void{
        this.traversed = false;
    }
    setTraversed():void{
        this.traversed = true;
    }
    isTraversed():boolean{
        return this.traversed;
    }

    resetTraversed(base:BTreeNode<T>):void{
        if(base){
            base.unsetTraversed();
            this.resetTraversed(base.getLeftNode());
            this.resetTraversed(base.getRightNode());
        }
    }

    DFS():T[]{
        const display:T[] = [];
        const stack:Stack<BTreeNode<T>> = new Stack<BTreeNode<T>>();
        let trav:BTreeNode<T> = this;

        trav && trav.isTraversed() && this.resetTraversed(trav);
    
        while(trav){
            if(trav.getLeftNode() && !trav.getLeftNode().isTraversed()){
                stack.push(trav);
                trav = trav.getLeftNode();
            }else if(trav.getRightNode() && !trav.getRightNode().isTraversed()){
                stack.push(trav);
                trav = trav.getRightNode();
            }else{
                display.push(trav.getValue());
                trav.setTraversed();
                trav = stack.pop();
            }
        }
        return display;
    }
    BFS():T[]{
        const display:T[] = [];
        const queue:Queue<BTreeNode<T>> = new Queue<BTreeNode<T>>();
        let trav:BTreeNode<T> = this;

        while(trav){
            display.push(trav.getValue());
            
            trav.getLeftNode() && queue.push(trav.getLeftNode());
            trav.getRightNode() && queue.push(trav.getRightNode());
            
            trav = queue.pop();
        }

        return display;
    }
    BST():T[]{
        const display:T[] = [];
        const stack:Stack<BTreeNode<T>> = new Stack<BTreeNode<T>>();
        let trav:BTreeNode<T> = this;

        trav && trav.isTraversed() && this.resetTraversed(trav);

        while(trav){
            if(trav.getLeftNode() && !trav.getLeftNode().isTraversed()){
                stack.push(trav);
                trav = trav.getLeftNode();
            }else{
                display.push(trav.getValue());
                trav.setTraversed();

                if(trav.getRightNode() && !trav.getRightNode().isTraversed()){
                    trav = trav.getRightNode();
                }else{
                    trav = stack.pop();
                }   
            }
        }

        return display;
    }

    private nodeMapObject(node:BTreeNode<T>, modifyFn:(node:T)=>string){
        if(node){
            const ob:any = {};
            ob[modifyFn(node.getValue())] = [
                node.getLeftNode() ? this.nodeMapObject(node.getLeftNode(), modifyFn) : null,
                node.getRightNode() ? this.nodeMapObject(node.getRightNode(), modifyFn) : null
            ];
            
            return ob;
        }else{
            return null;
        }
    }
    nodeMap(modifyFn:(node:T)=>string){
        return this.nodeMapObject(this, modifyFn);
    }
    getHeight():number{
        return this.relativeHeight(this);
    }
    private relativeHeight(node:BTreeNode<T>):number{
        if(node){
            return 1+Math.max(this.relativeHeight(node.getLeftNode()), this.relativeHeight(node.getRightNode()));
        }else{
            return 0;
        }
    }

    getNodeBalance():number{
        const left = this.getLeftNode() ? this.getLeftNode().getHeight() : 0;
        const right = this.getRightNode() ? this.getRightNode().getHeight() : 0;
        return left-right;
    }

}