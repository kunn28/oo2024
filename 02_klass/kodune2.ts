class joove{
 

  constructor(protected sisu:string, protected joodik:string, protected tund:string, protected olu:string,
      protected aeg:number, protected olle:number){
  }  
  joobeTase():number{
    return this.olle/this.aeg*30;
  }
  kysiSisu(){return this.sisu;}
  lisaOlle(){
     this.olle++;
  }
  joodikNimi():string{
    return this.joodik;
  }
  tundideArv():string{
    return this.tund;
  }
  oluT():string{
    return this.olu;
  }
  mituOlut():number{
    return this.olle;
  }
  mituTundi():number{
    return this.aeg;
  }
}

let s100=new joove("Uurime välja Hansu joobe 100 palli skaalal. Ajavahemiku ja tarbitud õlle koguse põhjal ", "keegi", "Tunniga", "õlut ning saavutas sellega joobe:", 1, 1);
let s1=new joove("Hindame hansu joovet skaalal 0-100 ", "Hans jõi", "Hans", "Hans", 3, 4);
let s2=new joove("Hans joob koheselt ära veel ühe olle ja tulemus on:", "Hans", "Hans", "Hans", 4, 2);
console.log(s100.kysiSisu());
console.log(s1.joodikNimi(), s1.mituTundi(), s100.tundideArv(), s1.mituOlut(), s100.oluT(), s1.joobeTase());
s1.lisaOlle();
console.log(s2.kysiSisu(), s1.joobeTase());