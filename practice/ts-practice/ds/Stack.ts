import ListNode from "./ListNode"

export default class Stack<T>{

    private stack:ListNode<T> = null;

    constructor(){}

    push(v:T){
        const point = new ListNode<T>(v);

        if(this.stack){
            point.setNext(this.stack);
        }
        this.stack = point;
    }

    check():T{
        return this.stack?.getValue()||null;
    }

    pop():T{
        if(this.stack){
            const v = this.stack.getValue();
            this.stack = this.stack.getNext();
            return v;
        }else{
            return null;
        }
    }

    display(fn:(v:T)=>string){
        let resp:string = `Display:: `;
        let trav = this.stack;
        while(trav){
            resp += `${fn(trav.getValue())}  `;
            trav = trav.getNext();
        }
        console.log(resp);
    }

    trace(fn:(v:T)=>string){
        let trav = this.stack;
        let i=0;
        while(trav){
            console.log(`${i}:: ${fn(trav.getValue())} -> ${fn(trav.getNext()?.getValue())}`);
            trav = trav.getNext();
            i++;
        }
    }
}