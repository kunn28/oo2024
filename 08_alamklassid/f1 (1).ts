export function kasPositiivne(arv: number): boolean {
   return arv > 0;
}

export function keskmineSuhkruMass(suhkruMassid: number[], veekogused: number[]): number {
   let suhkruSumma = 0;
   let veeSumma = 0;
   
   for (let i = 0; i < suhkruMassid.length; i++) {
      if (!kasPositiivne(veekogused[i])) {
         throw new Error("Veekogus peab olema positiivne");
      }
      suhkruSumma += suhkruMassid[i];//saame summa
      veeSumma += veekogused[i];
   }
   
   return suhkruSumma / veeSumma;
}
