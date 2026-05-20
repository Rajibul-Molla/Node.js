function person(name,callbackfn){
    console.log(`Hello ${name}`);
    callbackfn();
}

function address(){
    console.log("You are from India");
}

person("Rajibul Molla",address);

