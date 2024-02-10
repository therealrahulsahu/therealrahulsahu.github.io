import Stack from "../Stack";

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
    const stack:Stack<SampleOb> = new Stack<SampleOb>();

    stack.push(new SampleOb(3));
    console.log(stack.getLength());
    stack.push(new SampleOb(2));
    console.log(stack.getLength());
    stack.push(new SampleOb(1));
    console.log(stack.getLength());

    const displayFn = (v:SampleOb):string=>v?v.getValue().toString():null;
    
    // stack.trace(displayFn);
    // stack.display(displayFn);
    console.log(stack.toArray().map(v=>v.getValue()));
};

execute();
