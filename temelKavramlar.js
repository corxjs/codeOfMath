/* MATEMATİK */
class GercekSayi {
    constructor(sayi) {
        this.deger = sayi;
        this.basamak = this.basamakSayisiBul();
        this.rakamMi = this.rakamMiBul()
    }
    rakamMiBul() {
        return this.deger < 10 && this.deger >= 0;
    }
    basamakSayisiBul() {
        let temp = this.deger;
        let sayac = 0;
        if (temp < 0) { temp = temp * -1 }
        while (temp !== 0) {
            temp = Math.floor(temp / 10);
            ++sayac;
        }
        return sayac;
    }
}
class RasyonelSayi extends GercekSayi {
    constructor(sayi) {
        super(sayi)
        if (sayi == Infinity || typeof sayi == NaN) {
            console.error("Rasyonel Sayı Olamaz.");
        }

    }
}
class TamSayi extends RasyonelSayi {
    constructor(sayi) {
       
        super(Number.parseInt(sayi));
        this.tekMi = sayi%2==0?false:true;
        this.sayi = Number.parseInt(sayi);
        if (!Number.isInteger(sayi)) {
            console.error("Tam Sayı Olamaz.");
        }
    }

}
class DogalSayi extends TamSayi {
    constructor(sayi) {
        if (Number.parseInt(sayi)<0) {
            console.error(`${sayi} Negatif Sayı Doğal Sayı Olamaz.`);
            sayi = -1 * sayi;
        }
        if (sayi < 0 || !Number.isInteger(sayi))console.error("Doğal Sayı Olamaz.");
        super(sayi); 
        this.faktoriyel = this.Faktoriyel();
        this.asalMi = this.AsalMi();
        this.asalCarpanlar = this.AsalCarpanlar();
    }
    Faktoriyel(x) {
        if (x == null) x = this.sayi;
        if (x == 1 || x == 0) return 1;
        return x * this.Faktoriyel(x - 1);
    }
    AsalMi(sayi){
        if (sayi == null) sayi = this.sayi;
        sayi = Number.parseInt(sayi);
        let asal = true;
        for (let i = 2; i <= Number.parseInt(sayi/2); i++) {
            if (sayi%i == 0) {
                asal = false;
            }        
        }
        return asal;
    }
    AsalCarpanlar(sayi){
        if (sayi == null) sayi = this.sayi;
        sayi = Number.parseInt(sayi);
        if (this.AsalMi(sayi)) return [sayi];
        let carpanlar = [];
        for (let i = 2; i < sayi; i++) {
            if (this.AsalMi(i)) {
                if (sayi % i == 0) {
                    carpanlar.push(i);
                }
            }
        }
        return carpanlar;
    }
    
}




let x = new DogalSayi(11)
 console.log(x);


