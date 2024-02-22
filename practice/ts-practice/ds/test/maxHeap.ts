import MaxHeap from "../MaxHeap";

const comparatorFn = (a:number, b:number):number=>a-b;

const heap:MaxHeap<number> = new MaxHeap<number>(comparatorFn);

const logFn = ()=>{
    console.log(JSON.stringify(heap.nodeMap(
        node=>node.toString()
    )));
}

let high = 0;

console.log(`Started`);
for(let i=0;i<1e4;i++){
    const rand = Math.floor(Math.random()*1e8);
    high = Math.max(high, rand);
    heap.add(rand);

    const heapMax = heap.max();
    if(high !== heapMax){
        console.log(`Adding:${rand} givingMax:${heapMax} actualMax:${high}`);
    }
}
console.log(`Final-> Max:${heap.max()} Height:${heap.getHeight()}`);

// heap.add(8);
// logFn();
// heap.add(9);
// logFn();
// heap.add(10);
// logFn();
// heap.add(7);
// logFn();
// heap.add(7);
// logFn();
// heap.add(11);
// logFn();
// heap.add(-1);
// logFn();
// heap.add(-1);
// logFn();