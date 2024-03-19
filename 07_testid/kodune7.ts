interface ArvutamiseFunktsioon {
    calculate(x: number): number;
    inputUnit(): string;
    outputUnit(): string;
}

// Arvutame EUR USDks
class EURtoUSD implements ArvutamiseFunktsioon {
    calculate(antudSumma: number): number {
        return antudSumma * 1.0892; // EUR ja USD kurss
    }

    inputUnit(): string {
        return "EUR"; // Tagastab sisendi
    }

    outputUnit(): string {
        return "USD"; // Tagastab väljundi
    }
}
// Arvutame USD Bitcoiniks
class USDtoBTC implements ArvutamiseFunktsioon {
    calculate(antudSumma2: number): number {
        return antudSumma2 * 0.000014612;
    }

    inputUnit(): string {
        return "USD";
    }

    outputUnit(): string {
        return "BTC";
    }
}

let arvutus1: EURtoUSD = new EURtoUSD();
let arvutus2: USDtoBTC = new USDtoBTC();

// eur ja usd
let tulemus1: number = arvutus1.calculate(5);
console.log(tulemus1);
console.log(arvutus1.outputUnit());

// usd btc
let tulemus2: number = arvutus2.calculate(60);
console.log(tulemus2);
console.log(arvutus2.outputUnit());
