function calcMonthlyPayment(amount, years, rate) {
    const P = amount;
    const i = (rate / 100) / 12;
    const n = Math.floor(years * 12);       // convert to integer

    return (P * i) / (1 - Math.pow(1 + i, -n));
}

describe("calcMonthlyPayment", function() {

    it('should calculate the monthly rate correctly', function () {
        expect(calcMonthlyPayment(10000, 8, 5.8)).toEqual(130.44263011109317);
    });
    
    it("should handle terribly high interest rates", function () {
        expect(calcMonthlyPayment(1000, 40, 99)).toEqual(82.5);
    });
})