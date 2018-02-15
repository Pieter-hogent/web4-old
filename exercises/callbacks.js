
////////////////////////////////////////////////////////////
// 1. we have two async functions whom each return a value
// write a function which will log the sum of those two values
// (so it will only execute after both async calls are finished)

function asyncX(cb) {
    setTimeout(() => {
        let val = 7;
        cb(val);
    }, (Math.random()*900+100) );
}

function asyncY(cb) {
    setTimeout(() => {
        let val = 11;
        cb(val);
    }, (Math.random()*900+100) );
}

function sum(cb) {
   
}

sum(val => console.log(val));

////////////////////////////////////////////////////////////
// 2. adapt the useVal function, read below
//
class Remember {
    constructor() {
        this.val = undefined;
    }
    asyncCall(cb) {
        setTimeout(() => {
            console.log('async started');
            let val = 'done';
            cb(val);
        }, 500);
    }

    useVal(cb) {
        this.asyncCall(cb);
    }
}

// if this gets executed, for each 'useVal' the value is calculated
// by asyncCall, so you get:
//
// async started
// 1 done
// async started
// 2 done
// async started
// 3 done
// async started
// 4 done
//
// We'd like it if the calculated value is remembered in the class
// so only call the asyncCall once, and when it's completed call all
// the useVal calls in the order they were called
// (four are shown as an example, should equally work for hundreds or 
// thousands of calls)
//
// so the output should become
//
// async started
// 1 done
// 2 done
// 3 done
// 4 done
//
let x = new Remember();
x.useVal((val) => console.log(`1 ${val}`));
x.useVal((val) => console.log(`2 ${val}`));
x.useVal((val) => console.log(`3 ${val}`));
x.useVal((val) => console.log(`4 ${val}`));
