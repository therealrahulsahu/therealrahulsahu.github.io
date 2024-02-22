const timer = (callback: Function) => {
    console.time();
    const resp = callback();
    console.timeEnd();
    return 
}