function receivesAFunction(callback) {
    callback()
    return "Im a callback";
}

function returnsANamedFunction () {
    return function namedFunction (){
        console.log("Hello!, i'm a named function.");
    }
}

function returnsAnAnonymousFunction () {
    return function (){
        console.log("Hello, i'm an anonymous function.");
    }
}