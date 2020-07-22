'use strict'

const findBestEmployee = function(employees) {
  const valuesEmployees = Object.values(employees);
  const specialistName = Object.keys(employees);
  let result = 0;
  let specName;

  for(let i = 0; i < valuesEmployees.length; i += 1) {

    if(valuesEmployees[i] > result) {
      result = valuesEmployees[i];
      specName = specialistName[i];
    }
  }

  return specName;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
);

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
);