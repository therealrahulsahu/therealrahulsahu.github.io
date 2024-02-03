console.log('Yo');

function timer(){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const value = descriptor.value;
        descriptor.value = function(...args:any[]){
            return value.apply(args);
        }
    }
}

@timer()
function totalTime(){

}