function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    function functionA(){
        'Hi';
    }
    return functionA
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('This is a function!');
    };
}