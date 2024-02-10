import ListNode from "./ListNode"

export default class Stack<T>{

    private stack:ListNode<T> = null;
    private length:number = 0;

    constructor(){}

    push(v:T):void{
        const point:ListNode<T> = new ListNode<T>(v);

        if(this.stack){
            point.setNext(this.stack);
        }
        this.stack = point;
        this.length++;
    }

    pop():T{
        if(this.stack){
            const v:T = this.stack.getValue();
            this.stack = this.stack.getNext();
            this.length--;
            return v;
        }else{
            return null;
        }
    }

    check():T{
        return this.stack?.getValue()||null;
    }

    toArray():T[]{
        const resp:T[] = [];
        let trav:ListNode<T> = this.stack;
        while(trav){
            resp.push(trav.getValue());
            trav = trav.getNext();
        }
        return resp;
    }

    // trace(fn:(v:T)=>string):void{
    //     let trav = this.stack;
    //     let i=0;
    //     while(trav){
    //         console.log(`${i}:: ${fn(trav.getValue())} -> ${fn(trav.getNext()?.getValue())}`);
    //         trav = trav.getNext();
    //         i++;
    //     }
    // }

    getLength():number{
        return this.length;
    }
}