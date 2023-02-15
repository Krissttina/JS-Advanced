describe('Checking functionality', function(){
    it('works with whole numbers', function(){
        const arr = [3, 5, 6, 8];
        expect(sum(arr)).to.equal(22);
    });

    it('works with whole numbers', function(){
        const arr = [3, 8];
        expect(sum(arr)).to.equal(11);
    });
})