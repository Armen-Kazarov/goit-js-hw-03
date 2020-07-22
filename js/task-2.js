'use strict'

const countProps = function(obj) {
  const objKeys = Object.keys(obj).length;

  return objKeys;
};

console.log(countProps({}));
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500, }));