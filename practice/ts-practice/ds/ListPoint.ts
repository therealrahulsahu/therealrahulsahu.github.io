export default class ListPoint{

    private value: number = null;
    private next: ListPoint = null;
    private prev: ListPoint = null;

    constructor(v:number, next:ListPoint=null, prev:ListPoint=null){
        this.value = v;
        this.next = next;
        this.prev = prev;
    }

    setValue(v:number){
        this.value = v;
    }
    getValue():number{
        return this.value;
    }

    setNext(v:ListPoint){
        this.next = v;
    }
    getNext(){
        return this.next;
    }

    setPrev(v:ListPoint){
        this.prev = v;
    }
    getPrev(){
        return this.prev;
    }

}