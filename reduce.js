function countWords(inputWords) {
      return inputWords.reduce(function(a, b) {  
        a[b] = ++a[b] || 1;
        return a;
     }, {})
};

module.exports = countWords;

/* 

The function passed to reduce is called for each item in the inputWords array. The function returns a value, and that value is passed as the first parameter to the next invocation of that function.
Let's step through it:

a == {}, b == "foo", return value is { "foo": 1}
a == {"foo": 1}, b == "bar", return value is {"foo": 1, "bar":1}
a == {"foo": 1, "bar":1}, b == "foo", return value is {"foo": 2, "bar":1}
etc...

a[b] = ++a[b]
Is using the square bracket notation to reference a property of the a object, incrementing it with ++, and assigning the result back to the same property.
See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Objects_and_properties


 */