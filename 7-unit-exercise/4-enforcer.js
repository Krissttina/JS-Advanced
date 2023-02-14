describe("MathEnforcer", () => {
    describe("addFive function", () => {
      it("Integer input check", () => {
        assert.equal(mathEnforcer.addFive("a"), undefined);
      });
  
      it("Integer input check - empty", () => {
        assert.equal(mathEnforcer.addFive(), undefined);
      });
  
      it("Integer input check - correct", () => {
        assert.equal(mathEnforcer.addFive(5), 10);
      });
  
      it("Integer input check", () => {
        assert.equal(mathEnforcer.addFive(3.14), 8.14);
      });
  
      it("Integer input check", () => {
        assert.equal(mathEnforcer.addFive(0.99), 5.99);
      });
  
      it("Positive integer input check", () => {
        assert.equal(mathEnforcer.addFive(-10.99), -5.99);
      });
  
      it("Positive integer input check", () => {
        assert.equal(mathEnforcer.addFive(-5), 0);
      });
    });
  
    describe("subtractTen function", () => {
      it("Integer input check", () => {
        assert.equal(mathEnforcer.subtractTen("a"), undefined);
      });
  
      it("Integer input check - empty", () => {
        assert.equal(mathEnforcer.subtractTen(), undefined);
      });
  
      it("Integer input check - correct", () => {
        assert.equal(mathEnforcer.subtractTen(15), 5);
      });
  
      it("Integer input check", () => {
        assert.equal(mathEnforcer.subtractTen(1.1), -8.9);
      });
  
      it("Integer input check", () => {
        assert.closeTo(mathEnforcer.subtractTen(0.99), -9.01, 0.01);
      });
  
      it("Integer input check", () => {
        assert.closeTo(mathEnforcer.subtractTen(3.14), -6.86, 0.01);
      });
  
      it("Integer input check - correct", () => {
        assert.equal(mathEnforcer.subtractTen(10), 0);
      });
  
      it("Integer input check - zero", () => {
          assert.equal(mathEnforcer.subtractTen(0), -10);
        });
  
        it("Integer input check", () => {
          assert.closeTo(mathEnforcer.subtractTen(-0.99), -10.99, 0.01);
        });
    });
  
    describe("sum function", () => {
      it("Input check", () => {
        assert.equal(mathEnforcer.sum("a", 5), undefined);
      });
  
      it("Input check", () => {
        assert.equal(mathEnforcer.sum(5, 'a'), undefined);
      });
  
      it("Input check - empty", () => {
        assert.equal(mathEnforcer.sum(), undefined);
      });
  
      it("Input input check - positive", () => {
        assert.equal(mathEnforcer.sum(5, 5), 10);
      });
  
      it("Input input check - negative", () => {
        assert.equal(mathEnforcer.sum(-5, -5), -10);
      });
  
      it("Input input check - negative & floating point", () => {
        assert.closeTo(mathEnforcer.sum(-5, 3.1), -1.9, 0.01);
      });
  
      it("Input input check - negative & floating point", () => {
        assert.closeTo(mathEnforcer.sum(-5, 3.22), -1.78, 0.01);
      });
  
      it("Input input check - negative & floating point", () => {
          assert.closeTo(mathEnforcer.sum(2.7, 3.4), 6.1, 0.01);
        });
    });
  });