  class car {

    constructor(gass, num) {
        this.gass = gass;
        this.num = num;
    }

    getNumGas() {
        console.log(`ガソリンは${this.gass}です。ナンバーは${this.num}です。`);
    }
}
let g = new car(20.5,1234);
g.getNumGas();