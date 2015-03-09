/*    
    function toUpperArray(items) {
       if (!items.length) return []             // end condition
       var head = items[0]                      // item to operate on
       head = head.toUpperCase()                // perform action
       var tail = items.slice(1)                // next
       return [head].concat(toUpperArray(tail)) // recursive step
    }
    
    toUpperArray(['hello', 'world']) // => ['HELLO', 'WORLD']
*/



    function reduce(arr, fn, initial) {                 // setup function w/target, operator, and initial value 
    if (arr.length === 0) {return initial};             // base case, does not recurse
    initial = fn(initial, arr[0]);                      // sets init-OP-first result as new init
    return reduce(arr.slice(1), fn, initial);}          // rightshifts first so arr[0] index is the new current value
    
    module.exports = reduce
