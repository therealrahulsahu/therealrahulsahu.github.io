import Stack from "../Stack";

export const execute = ()=>{
    const stack:Stack = new Stack([1,2,3], false);

    stack.push(12);
    
    stack.trace();
    stack.display()
};

execute();
