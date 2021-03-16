class Taiyaki {

    //コンストラクタ
    constructor(nakami, price) {
        this.nakami = nakami;
        //this.price = price;
    }

    type() {
        console.log(`中身は${this.nakami}です。`);
    }
}
let anko = new Taiyaki('あんこ', 170);
anko.type();
let cream = new Taiyaki('クリーム', 200);
cream.type();
let cheese = new Taiyaki('チーズ', 190);
cheese.type();