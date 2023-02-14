describe('Checking with wrong input', function(){
    it('String input check', function(){
        expect(lookupChar(2, 2)).to.equal(undefined);
    });

    it('Integer input check', function(){
        expect(lookupChar('text', 'text')).to.equal(undefined);
    });

    it('Integer input check', function(){
        expect(lookupChar('text', 2.1)).to.equal(undefined);
    });
});

describe('Checking with correct input', function(){
    it('Incorrect index', function(){
        expect(lookupChar('correct', 10)).to.equal('Incorrect index');
    });

    it('Incorrect index', function(){
        expect(lookupChar('correct', -1)).to.equal('Incorrect index');
    });

    it('Correct value', function(){
        expect(lookupChar('correct', 4)).to.equal('e');
    });

    it('Correct value', function(){
        expect(lookupChar('correct', 0)).to.equal('c');
    });
    it('Correct value', function(){
        expect(lookupChar('correct', 6)).to.equal('t');
    });
});