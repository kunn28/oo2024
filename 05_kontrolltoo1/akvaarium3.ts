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

class akvaarium2{
  veeValamine(liitrid: number):string{
    if(liitrid > 58){return "Hoiatus! vett on liiga palju";}
    if(liitrid<=58){return "kalla kalla! Ruumi on";}
        return "Täitsa jama käes ju";
  }
}


let r1=new akvaarium(3, 4, 5);
console.log(r1.ruumala());
r1.lisaVett(30);
console.log(r1.veeKogus());
r1.lisaVett(29);
console.log(r1.veeKogus());

let r2=new akvaarium2();
console.log(r2.veeValamine(50));
console.log(r2.veeValamine(59));


