export default class BTreeNode<T>{
    private value:T = null;
    private left:BTreeNode<T> = null;
    private right:BTreeNode<T> = null;
    private weight:number = 0;
    private height:number = 1;
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
        this.evaluateHeight();
    }

    getRightNode():BTreeNode<T>{
        return this.right;
    }
    setRightNode(node:BTreeNode<T>){
        this.right = node;
        this.evaluateHeight();
    }

    evaluateHeight(){

        const left:number = this.getLeftNode() ? this.getLeftNode().getHeight() : 0;
        const right:number = this.getRightNode() ? this.getRightNode().getHeight() : 0;

        this.height = 1 + Math.max(left, right);
    }

    getHeight():number{
        return this.weight;
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
}