function add(a,b){
    return a+b;

}

function subtract(a,b){
    return a-b;
}

function devide(a,b){
    if(b===0){
        throw new Error("Devide by 0 is not allowed");
        
    }
    return a/b;
}


module.exports={
    add,subtract,devide

}