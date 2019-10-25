/* MATEMATİK */
class GercekSayi {
    constructor(sayi) {
        this.deger = sayi;
        this.basamak = this.basamakSayisiBul();
        this.rakamMi = this.rakamMiBul()
    }
    rakamMiBul(){
        return  this.deger < 10 && this.deger >=0;
    }
    basamakSayisiBul() {
        let temp = this.deger;
        let sayac = 0;
        if(temp < 0){temp = temp * -1}
        while (temp !== 0) {
            temp = Math.floor(temp / 10);
            ++sayac;
        }
        return sayac;
    }
}
class RasyonelSayi extends GercekSayi{
    constructor(sayi){
        super(sayi)
        if(sayi == Infinity || typeof sayi == NaN){
            console.error("Rasyonel Sayı Olamaz.");
        }
        
    }
}
class TamSayi extends RasyonelSayi{
    constructor(sayi){
        super(sayi);
        this.sayi = sayi;
        if(!Number.isInteger(sayi)){
           console.error("Tam Sayı Olamaz.");
        }
    }
    Faktoriyel(x){
        if(x == null) x = this.sayi;
        if(x == 1 ||x == 0) return 1;
        return x * this.Faktoriyel(x-1);
    }
}



