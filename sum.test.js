const sum =  require('./sum');


test ('add 1 + 2 to equal 3', ()=> {

    expect(sum.sum(1,2)).toBe(3)
});

test ('subtract 2 - 1 to equal 1', ()=> {

    expect(sum.subtract(2,1)).toBe(1)
});
test ('multiply 1 * 2 to equal 2', ()=> {

    expect(sum.multiply(1,2)).toBe(2)
   // expect(sum.multiply(1,2)).toBe(2)
});
test ('divide 2 / 2 to equal 1', ()=> {

    expect(sum.divide(2,2)).toBe(1)
});
test ('divide 2 / 2 to equal 1', ()=> {

    expect(sum.divide(2,0)).toBe(undefined)
});
