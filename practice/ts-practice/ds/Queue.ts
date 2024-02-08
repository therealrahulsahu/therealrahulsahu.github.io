import ListNode from "./ListNode"

export default class Queue<T>{

    private front:ListNode<T> = null;
    private back:ListNode<T> = null;
    private length:number = 0;

    constructor(){}

    push(v:T):void{
        const point:ListNode<T> = new ListNode<T>(v);

        if(this.back){
            this.back.setNext(point);
        }else{
            this.front = point;
        }
        this.back = point;
        this.length++;
    }

    pop():T{
        if(this.front){
            const v:T = this.front.getValue();
            this.front = this.front.getNext();
            if(this.front===null) this.back=null;
            this.length--;
            return v;
        }else{
            return null;
        }
    }

    check():T{
        return this.front?.getValue()||null;
    }

    display(fn:(v:T)=>string):void{
        let resp:string = `Display:: `;
        let trav:ListNode<T> = this.front;
        while(trav){
            resp += `${fn(trav.getValue())}  `;
            trav = trav.getNext();
        }
        console.log(resp);
    }

    trace(fn:(v:T)=>string):void{
        let trav = this.front;
        let i=0;
        while(trav){
            console.log(`${i}:: ${fn(trav.getValue())} -> ${fn(trav.getNext()?.getValue())}`);
            trav = trav.getNext();
            i++;
        }
    }

    getLength():number{
        return this.length;
    }
}