class akvaarium {
  private vesi: number = 0;
  constructor(protected pikkus: number, protected laius: number, protected kõrgus: number) {}

  ruumala(): number {
    return this.pikkus * this.laius * this.kõrgus;
  }

  lisaVett(kogus: number): void {
    this.vesi += kogus;
  }

  veeKogus(): number {
    return this.vesi;
  }

  valaVettTeiseAkvaariumisse(kogus: number, teineAkvaarium: akvaarium): void {
    if (this.vesi >= kogus) {
      this.vesi -= kogus;
      teineAkvaarium.lisaVett(kogus);
      const vahe = this.kõrgus - (teineAkvaarium.veeKogus() / (teineAkvaarium.pikkus * teineAkvaarium.laius));
      if (vahe < 2) {
        console.log("Hoiatus: Ühe akvaariumi vee tase on liiga kõrge. Jälgige, et see ei ületaks mahutavust.");
      }
    } else {
      console.log("Hoiatus: Antud akvaariumis ei ole piisavalt vett valamiseks.");
    }
  }
}

let r1 = new akvaarium(3, 4, 5);
let r2 = new akvaarium(3, 4, 5);
console.log(r1.ruumala());
r1.lisaVett(30);
console.log(r1.veeKogus());
r1.lisaVett(29);
console.log(r1.veeKogus());

r1.valaVettTeiseAkvaariumisse(6, r2);
console.log("Akvaarium 1 veetase pärast vee valamist:", r1.veeKogus());
console.log("Akvaarium 2 veetase pärast vee valamist:", r2.veeKogus());
