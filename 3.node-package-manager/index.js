const lodash=require('lodash');

const name=['ronith', 'raj', 'rohit'];

const capitalize = lodash.map(name, lodash.capitalize);
console.log(capitalize);