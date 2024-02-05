import ListPoint from "./ListPoint"

export default class Stack{

    private stack:ListPoint = null;

    constructor(v:number[]=[], dirLeft:boolean=true){
        if(v.length){
            if(dirLeft){
                v.forEach(i=>this.push(i));
            }else{
                v.toReversed().forEach(i=>this.push(i));
            }
        }
    }

    push(v:number){
        const point = new ListPoint(v);

        if(this.stack){
            point.setNext(this.stack);
        }
        this.stack = point;
    }

    check():number{
        return this.stack?.getValue()||null;
    }

    pop():number{
        if(this.stack){
            const v = this.stack.getValue();
            this.stack = this.stack.getNext();
            return v;
        }else{
            return null;
        }
    }

    display(){
        let resp:string = `Display:: `;
        let trav = this.stack;
        while(trav){
            resp += `${trav.getValue()}  `;
            trav = trav.getNext();
        }
        console.log(resp);
    }

    trace(){
        let trav = this.stack;
        let i=0;
        while(trav){
            console.log(`${i}:: ${trav.getValue()} -> ${trav.getNext()?.getValue()||null}`);
            trav = trav.getNext();
            i++;
        }
    }
}