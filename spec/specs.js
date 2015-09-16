describe('countBy', function() {
  it("counts to a given number, counting by a given number", function() {
    expect(countBy(24, 4)).to.eql([4, 8, 12, 16, 20, 24]);
  });
});
