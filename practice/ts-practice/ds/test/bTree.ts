import BSearchTree from "../BSearchTree";
import BTreeNode from "../BTreeNode";
import Queue from "../Queue";
import Stack from "../Stack";

const resetTraversed = (base:BTreeNode<number>)=>{
    if(base){
        base.unsetTraversed();
        resetTraversed(base.getLeftNode());
        resetTraversed(base.getRightNode());
    }
};

const DFS = (base:BTreeNode<number>):number[]=>{
    const stack:Stack<BTreeNode<number>> = new Stack<BTreeNode<number>>();
    let trav:BTreeNode<number> = base;
    const display:number[] = [];
    base && base.isTraversed() && resetTraversed(base);

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

const BFS = (base:BTreeNode<number>):number[]=>{
    const queue:Queue<BTreeNode<number>> = new Queue<BTreeNode<number>>();

    let trav:BTreeNode<number> = base;
    const display:number[] = [];

    while(trav){
        display.push(trav.getValue());
        
        trav.getLeftNode() && queue.push(trav.getLeftNode());
        trav.getRightNode() && queue.push(trav.getRightNode());
        
        trav = queue.pop();
    }

    return display;
}

const binaryTraverse = (base:BTreeNode<number>):number[]=>{
    const stack:Stack<BTreeNode<number>> = new Stack<BTreeNode<number>>();
    let trav:BTreeNode<number> = base;
    const display:number[] = [];
    resetTraversed(base);

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
};

export const execute = ():void=>{

    const n1:BTreeNode<number> = new BTreeNode<number>(1);
    const n2:BTreeNode<number> = new BTreeNode<number>(2);
    const n3:BTreeNode<number> = new BTreeNode<number>(3);
    const n4:BTreeNode<number> = new BTreeNode<number>(4);
    const n5:BTreeNode<number> = new BTreeNode<number>(5);
    const n6:BTreeNode<number> = new BTreeNode<number>(6);
    const n7:BTreeNode<number> = new BTreeNode<number>(7);
    const n8:BTreeNode<number> = new BTreeNode<number>(8);

    n1.setLeftNode(n2);
    n1.setRightNode(n3);

    n2.setLeftNode(n4)
    n2.setRightNode(n7);

    n3.setLeftNode(n5);
    n3.setRightNode(n6);

    n7.setRightNode(n8);

    // console.log(n2.DFS().join(' : '));
    // console.log(n2.BFS().join(' : '));
    // console.log(n2.BST().join(' : '));

    const comparatorFn = (a:number, b:number):number=>a-b;

    const bst:BSearchTree<number> = new BSearchTree<number>(comparatorFn);
    const insertedElem:number[] = [];

    const logFn = ()=>{
        // console.log(`inserted len: ${insertedElem.length}`);
        // console.log(`inserted: ${insertedElem.join(' : ')}`);
        console.log(`len: ${bst.getSize()}`);
        // console.log(`BST: ${bst.BST().join(' : ')}`);
        // console.log(JSON.stringify(bst.nodeMap(
        //     node=>node.toString()
        // )));
        console.log(`height: ${bst.getHeight()}`);
        // console.log(`balance: ${bst.getBaseBalance()}`);
        console.log(`---------------------------------------------------------------------`)
        // console.log(`DFS: ${bst.DFS().join(' : ')}`);
        // console.log(`BFS: ${bst.BFS().join(' : ')}`);
    }
    
    console.time();
    for(let i=0;i<1e3;i++){
        const rand:number = Math.floor(Math.random()*1e6);
        insertedElem.push(rand);
        bst.add(rand);
    }
    console.timeEnd();
    logFn();
    
    // logFn();

    // console.time();
    // console.log(bst.search(123123));
    // console.timeEnd();

    // console.time();
    // console.log(bst.BST().find(v=>v===12123)||null);
    // console.timeEnd();
}

execute();