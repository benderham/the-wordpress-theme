//  testing main js file

const test = {
  prop01: "compiled",
  prop02: 12,
  prop03: [24, 87, 123, 123, 345, 7543,]
};

const testing = (obj) => {
  console.log(obj.prop01);
};

testing(test);