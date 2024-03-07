class akvaarium{

  constructor(protected pikkus:number, 
    protected laius:number, protected kõrgus:number){

  }  
  ruumala():number{
    return this.pikkus*this.laius*this.kõrgus;
  }
}

let r1=new akvaarium(3, 4, 5);
console.log(r1.ruumala());