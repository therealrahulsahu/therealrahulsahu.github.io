export default class ListNode<T>{

    private value: T = null;
    private next: ListNode<T> = null;
    private prev: ListNode<T> = null;

    constructor(v:T, next:ListNode<T>=null, prev:ListNode<T>=null){
        this.value = v;
        this.next = next;
        this.prev = prev;
    }

    setValue(v:T){
        this.value = v;
    }
    getValue():T{
        return this.value;
    }

    setNext(v:ListNode<T>){
        this.next = v;
    }
    getNext(){
        return this.next;
    }

    setPrev(v:ListNode<T>){
        this.prev = v;
    }
    getPrev(){
        return this.prev;
    }

}