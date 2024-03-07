//Akvaarium hoiab meeles sees hoitava vee kogust. Tuleb lisada käsk millega saab vett lisada. Käsuga saab küsida et kui palju on selles akvaariumis vett


class akvaarium{
  private vesi: number = 0;
  constructor(protected pikkus:number, 
    protected laius:number, protected kõrgus:number){

  }  
  ruumala():number{
    return this.pikkus*this.laius*this.kõrgus;
  }
  lisaVett(kogus: number): void{
    this.vesi += kogus;
  }
    veeKogus(): number {
      return this.vesi;
    
  }
}

let r1=new akvaarium(3, 4, 5);
console.log(r1.ruumala());
r1.lisaVett(30);
console.log(r1.veeKogus());
r1.lisaVett(29);
console.log(r1.veeKogus());
