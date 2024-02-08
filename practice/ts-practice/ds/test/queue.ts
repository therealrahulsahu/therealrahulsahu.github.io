import Queue from "../Queue";

class SampleOb{
    private value:number;
    constructor(v:number){
        this.value = v;
    }
    getValue():number{
        return this.value;
    }
}

export const execute = ()=>{
    const queue:Queue<SampleOb> = new Queue<SampleOb>();

    queue.push(new SampleOb(11));
    queue.push(new SampleOb(22));
    console.log(queue.pop()?.getValue());
    queue.push(new SampleOb(33));
    queue.push(new SampleOb(44));
    console.log(queue.pop()?.getValue());
    console.log(queue.pop()?.getValue());
    console.log(queue.pop()?.getValue());
    console.log(queue.pop()?.getValue());
    queue.push(new SampleOb(11));


    const displayFn = (v:SampleOb):string=>v?v.getValue().toString():null;
    
    queue.trace(displayFn);
    queue.display(displayFn);
};

execute();
