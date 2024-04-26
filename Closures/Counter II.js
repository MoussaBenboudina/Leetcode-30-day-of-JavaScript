/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let current = init
    return {
        increment: ()=>{
            return ++init;
        },
         reset : ()=>{
            return init = current
        },
    
            decrement : ()=>{
            return --init
        }
    }
    };
    
    /**
     * const counter = createCounter(5)
     * counter.increment(); // 6
     * counter.reset(); // 5
     * counter.decrement(); // 4
     */