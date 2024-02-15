function korrutaKahega(arv:number){
  return arv*2;
}
console.log(korrutaKahega(7));

function korrutaruutjuurega(arv:number){
  return arv**2;
}
console.log(korrutaruutjuurega(7));

//kehamassiindeksi funktsioon

function kmi(pikkusm:number, masskg:number){
  return masskg/(pikkusm*pikkusm);
}

console.log(kmi(1.8, 57).toFixed(1))

function kmiHinnang(indeks:number):string{
  if(indeks<16){return "Tervisele ohtlik alakaal";}
  if(indeks<18.5){return "Alakaal";}
  if(indeks<25){return "norm kaal";}
  if(indeks<30){return "ülekaal";}
  if(indeks<35){return "rasvumine";}
  if(indeks<40){return "rets rasvumine";}
    return "Tervisele ohtlik rasvumine";
}
console.log(kmiHinnang(18))

let kmiArvud:number[]=[25, 18, 38, 28];
let hinnangud=kmiArvud.map(kmiHinnang);
console.log(hinnangud);

//kodune töö
function purjusHans(õlleArv:number, suurus:number){
  return (õlleArv*suurus);
}
let liitrid=purjusHans(4, 0.5);
console.log(liitrid);

function purjusHansOlek(liitrid:number):string{
  if(liitrid<=1){return "kaine";}
  if(liitrid<=2){return "purjus";}
  if(liitrid<=3){return "lähme sauna";}
    return "sõidame mustangiga poodi viina tooma";
}
console.log(purjusHansOlek(liitrid));
console.log(purjusHansOlek(4));

/* kommentaari märgid */
