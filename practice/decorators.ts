console.log('Decorators\n');

function first(value: Function, context: ClassDecoratorContext){
    context.addInitializer(()=>{
        console.log('In Decorator');
    });
}

@first
class FClass{
    constructor(){
        console.log('Inconstructor');
    }
}

const ob = new FClass();
