
const call = require('./task5')


test ('cheaks if an element is in an array or not ', ()=> {

    expect(call.inArray(1,[1,2,3,4])).toBe(true)
});
test ('cheaks if an element is in an array or not ', ()=> {

    expect(call.inArray(9,[1,2,3,4])).toBe(false)
});
