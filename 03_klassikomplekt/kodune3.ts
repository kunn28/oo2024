class Mootor {
    private _nimi: string;
    private _auto: any;

    constructor(nimi: string) {
        this._nimi = nimi;
    }

    get nimi(): string {
        return this._nimi;
    }

    get auto(): Auto {
        return this._auto;
    }

    set auto(value: Auto) {
        this._auto = value;
    }
}

class Auto {
    private _mootorid: Mootor[] = [];
    private _nimi: string;


    constructor(name: string) {
        this._nimi = name;
    }
    addMootor(mootor: Mootor) : void {
        if (mootor.auto == null) {
            this._mootorid.push(mootor);
            mootor.auto = this;
        }
    }


    get mootorid(): Mootor[] {
        return this._mootorid;
    }


    get nimi(): string {
        return this._nimi;
    }
}

let mudel1:Mootor=new Mootor("S50B30");
let mudel2:Mootor=new Mootor("S52B32");
let mudel3:Mootor=new Mootor("M54B25");
let mudel4:Mootor=new Mootor("M50B25");
let mudel5:Mootor=new Mootor("M57D30TÜ2");
let mudel6:Mootor=new Mootor("NA N52");
let e30=new Auto("BMW e30")
let e46=new Auto("BMW e46")
let e92=new Auto("BMW e92")
e30.addMootor(mudel1);
e30.addMootor(mudel2);
e30.addMootor(mudel3);
e46.addMootor(mudel4);
e92.addMootor(mudel5);
e92.addMootor(mudel6);
//console.log(mudel1.nimi);
console.log(e30);
console.log(mudel1.auto.mootorid.length);

console.log(e46);
console.log(mudel4.auto.mootorid.length);

console.log(e92);
console.log(mudel5.auto.mootorid.length);