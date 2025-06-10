function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    return function cake(){

    }
}
cake();clone
function returnsAnAnonymousFunction(){
    return function(){

    }
}
fn = returnsAnAnonymousFunction();
fn();