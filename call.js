
/* # Task:

Write a function duckCount that returns the number of arguments
passed to it which have a property 'quack' defined directly on them.
Do not match values inherited from prototypes.

Example:

    var notDuck = Object.create({quack: true})
    var duck = {quack: true}
    duckCount(duck, notDuck) // 1

## Arguments

  * You will be passed 0-20 arguments. 
  Each argument could be of any type with any properties.
 Some of these items will have a 'quack' property.
*/

/* Basic solution:

    function duckCount() {
      var args = Array.prototype.slice.call(arguments);
      var quackers = [];
      for (var i = 0; i < args.length; i++) {
        if (Object.prototype.hasOwnProperty.call(args[i], 'quack')) {
          quackers.push(args[i]);
        }
      };
      return quackers.length;
    }
    
    module.exports = duckCount

    */


      function duckCount() {
        return Array.prototype.slice.call(arguments).filter(function(obj) {
          return Object.prototype.hasOwnProperty.call(obj, 'quack')
        }).length
      }
    
      module.exports = duckCount