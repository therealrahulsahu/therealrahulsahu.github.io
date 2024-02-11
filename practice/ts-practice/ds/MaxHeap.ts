import BTreeNode from "./BTreeNode";
import Stack from "./Stack";

export default class MaxHeap<T>{
    base:BTreeNode<T> = null;
    private comparatorFn:(a:T,b:T)=>number = null;

    constructor(comparatorFn:(a:T,b:T)=>number){
        this.comparatorFn = comparatorFn;
    }

    add(node:T){
        const treeNode:BTreeNode<T> = new BTreeNode<T>(node);
        let parent:BTreeNode<T> = null;
        let dirLeft:boolean = null;

        if(this.base){
            let trav:BTreeNode<T> = this.base;

            while(trav){
                const compare:number = this.comparatorFn(treeNode.getValue(), trav.getValue());

                if(compare>0){
                    if(parent){
                        treeNode.setLeftNode(trav);
                        if(dirLeft){
                            parent.setLeftNode(treeNode);
                        }else{
                            parent.setRightNode(treeNode)
                        }
                    }else{
                        treeNode.setLeftNode(this.base);
                        this.base = treeNode;
                    }
                    break;

                }else{
    
                    const leftHeight:number = trav.getLeftNode()?.getHeight()||0;
                    const rightHeight:number = trav.getRightNode()?.getHeight()||0;
                    if(leftHeight<=rightHeight){
                        if(leftHeight){
                            parent = trav;
                            dirLeft = true;
                            trav = trav.getLeftNode();
                        }else{
                            trav.setLeftNode(treeNode);
                            break;
                        }
                    }else{
                        if(rightHeight){
                            parent = trav;
                            dirLeft = false;
                            trav = trav.getRightNode();
                        }else{
                            trav.setRightNode(treeNode);
                            break;
                        }
                    }

                }
            }

        }else{
            this.base = treeNode;
        }
    }

    max():T{
        return this.base?.getValue() || null;
    }

    nodeMap(modifyFn:(node:T)=>string){
        return this.base?.nodeMap(modifyFn)||null;
    }

    getHeight():number{
        return this.base?.getHeight()||0;
    }
}