/* 
Use Array#reduce to implement a simple version of Array#map.

## Expected Output

A function map that applies a function to each item in an array and collects the results in a new Array.

    
    var nums = [1,2,3,4,5]
    
    // `map` is your exported function
    var output = map(nums, function double(item) {
      return item * 2
    })
    
    console.log(output) // => [2,4,6,8,10]

## Arguments

  * input: an arbitrary Array of any type.
  * operation: an arbitrary Function which can be applied to items in `input`.


*/

    module.exports = function arrayMap(arr, fn) {
       return arr.reduce(function(base, item) {
        base.push(fn.call(null,item));
        return base;
       },[])
    }



/* 
Official Solution wa:

module.exports = function map(arr, fn) {
        return arr.reduce(function(acc, item, index, arr) {
          return acc.concat(fn(item, index, arr))
        }, [])
      }


*/