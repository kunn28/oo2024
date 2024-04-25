class Õlu {
    maht: number;
    nimi: string;
    constructor(maht: number, nimi: string) {
        this.maht = maht;
        this.nimi = nimi;
    }
    getMaht(): number {
        return this.maht;
    }
    getNimi(): string {
        return this.nimi;
    }
}

class Õlled extends Õlu {
    õlleValik: Õlu[] = [];
    constructor() {
        super(0, "Õlled");
    }
    lisaÕlu(õlu: Õlu) {
        this.õlleValik.push(õlu);
    }
    getMaht(): number {
        let sum: number = 0;
        this.õlleValik.forEach((õlu: Õlu) => { sum += õlu.getMaht() });
        return sum;
    }
    kirjeldus(): string {
        return "#" + this.nimi + "#" + "(" + this.õlleValik.map(õlu => õlu.getNimi()).join(", ") + ")";
    }
}

class PoeRiiul extends Õlu {
    riiuliValik: Õlled[] = [];
    constructor() {
        super(0, "Poe riiul");
    }
    lisaÕlled(õlled: Õlled) {
        this.riiuliValik.push(õlled);
    }
    getMaht(): number {
        let sum: number = 0;
        this.riiuliValik.forEach((õlled: Õlled) => { sum += õlled.getMaht() });
        return sum;
    }
    kirjeldus(): string {
        return "#" + this.nimi + "#" + "(" + this.riiuliValik.map(õlled => õlled.kirjeldus()).join(", ") + ")";
    }
}


let sakuOriginaal: Õlu = new Õlu(500, "Saku Originaal");
let sakuKuld: Õlu = new Õlu(500, "Saku Kuld");
let aLeCoqhele: Õlu = new Õlu(330, "A. LE COQ hele");
let aLeCoqPilsner: Õlu = new Õlu(590, "A. LE COQ Pilsner");

let õlleValik1: Õlled = new Õlled();
let õlleValik2: Õlled = new Õlled();

let poeRiiul: PoeRiiul = new PoeRiiul();

õlleValik1.lisaÕlu(sakuOriginaal);
õlleValik1.lisaÕlu(sakuKuld);
õlleValik2.lisaÕlu(aLeCoqhele);
õlleValik2.lisaÕlu(aLeCoqPilsner);

poeRiiul.lisaÕlled(õlleValik1);
poeRiiul.lisaÕlled(õlleValik2);

console.log(poeRiiul.getMaht());
console.log(poeRiiul.kirjeldus());