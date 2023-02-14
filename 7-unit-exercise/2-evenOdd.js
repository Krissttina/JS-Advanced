describe('Checking with wrong input', function(){
    it('Invalid input!', function(){
        expect(isOddOrEven(2)).to.equal(undefined);
    });
});

describe('Checking with correct input', function(){
    it('Even length!', function(){
        expect(isOddOrEven('carrot')).to.equal('even');
    });

    it('Odd length!', function(){
        expect(isOddOrEven('odd')).to.equal('odd');
    });
});