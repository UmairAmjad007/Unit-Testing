const call = require('./task3')


test ('', ()=> {

    expect(call.power(2,3)).toBe(8)
});
test ('', ()=> {

    expect(call.round(4.5)).toBe(5)
});
test ('', ()=> {

    expect(call.ceil(3.5)).toBe(4)
});