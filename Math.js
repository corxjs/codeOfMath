/* MATH 1*/
class Gercek {
    constructor(_sayi) {
        if (_sayi == Infinity) return;
        this.deger = _sayi;
    }
}
class Rasyonel extends Gercek {
    constructor(_sayi) {
        
        if (typeof _sayi == 'number' && !Number.isInteger(arguments[1])) {
            super(_sayi)
            if (_sayi == Infinity || typeof _sayi == NaN) {
                console.error(`${_sayi} Rasyonel Olamaz`);
            }
            if (this.constructor.name == "Rasyonel") {
                this.pay = _sayi;
                this.payda = 1;
            }
            return;
        } else if (arguments[1] == 0) {
            super(Infinity);
            console.log(`payda 0 olamaz.`);
            return new class Undefined { };
        } else if (Number.isInteger(arguments[1])) {
            super(arguments[0] / arguments[1]);
            this.pay = arguments[0];
            this.payda = arguments[1];
        } else {
            super(_sayi.pay / _sayi.payda);
            this.pay = _sayi.pay;
            this.payda = _sayi.payda;
        }
        this.pozitifMi = _sayi < 0 ? false : true;
        console.log(`kesir \n ++++++++++++++++++++ \n \t  ${this.pay}` + "\n\t ---\n" + `\t  ${this.payda} \n +++++++++++++++++++++`);
    }
}
class Tamsayi extends Rasyonel {
    constructor(_sayi) {
        super(Number.parseInt(_sayi));
        this.tekMi = _sayi % 2 == 0 ? false : true;
        this._sayi = Number.parseInt(_sayi);
        if (!Number.isInteger(_sayi)) console.error(`${_sayi} Tam sayı olamaz`);
        this.basamakSayisi = this.BasamakSayisiKac();
        this.rakamMi = (this.deger < 10 && this.deger >= 0);
    } 
    BasamakSayisiKac() {
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
class Dogal extends Tamsayi {
    constructor(_sayi) {
        if (Number.parseInt(_sayi) < 0) {
            console.error(`${_sayi} Negatif Sayı Doğal Sayı Olamaz.`);
            _sayi = -1 * _sayi;
        }
        if (_sayi < 0 || !Number.isInteger(_sayi)) console.error(`${_sayi} Dogal Sayı Olamaz`);
        super(_sayi);
        this._sayi = _sayi;
        this.faktoriyel = this.Faktoriyel();
        this.asalMi = this.AsalMi();
        this.asalCarpanlar = this.AsalCarpanlar();
    }
    Faktoriyel(_sayi) {
        // fonksiyona parametre girilmemişse nesnenin constructor parametresi kullanılır.
        if (_sayi == null) _sayi = this._sayi;
        // Tanım gereği 1 ve 0 faktöriyel 1 dir. Ve geriye 1 döndürüyoruz.
        if (_sayi == 1 || _sayi == 0) return 1;
        // ardından girilen sayının 1 eksiği için tekrar bu fonksiyonu çağırıp özyineleme yapıyoruz. sonuç geri dönüyor.
        return _sayi * this.Faktoriyel(_sayi - 1);
    }
    AsalMi(_sayi) {
        // fonksiyona parametre girilmemişse nesnenin constructor parametresi kullanılır.
        if (_sayi == null) _sayi = this._sayi;
        // tam sayı kontrolü
        _sayi = Number.parseInt(_sayi);
        // varsayılan olarak asallık durumuna "true" diyoruz ardından o sayının altındaki tüm sayılara bölünüyor.
        // kendinden ve 1 den başka sayılardan 1 tanesine bile bölünse asallık özelliği "false" olarak değişecek
        let asal = true;
        for (let i = 2; i <= Number.parseInt(_sayi / 2); i++) {
            if (_sayi % i == 0) {
                asal = false;
            }
        }
        // asallık durumu geri döndürülüyor
        return asal;
    }
    AsalCarpanlar(_sayi) {
        // fonksiyona parametre girilmemişse nesnenin constructor parametresi kullanılır.
        if (_sayi == null) _sayi = this._sayi;
        // girilen parametrenin tam sayı olmamasına karşın tamsayıya çevirilir.
        _sayi = Number.parseInt(_sayi);
        // Asal sayı mı kontrol edilir ve asalsa geriye döndürülür.
        if (this.AsalMi(_sayi)) return [_sayi];
        // asal sayı değilse asal çarpanlarına ayrılabilr bu çarpanların tutulacağı carpanlar adlı dizi olusturulur.
        let carpanlar = [];
        // ardından 2 den başlayarak tüm asal sayılara tek tek bölünür ve bölünebilenler asal çarpanı olarak carpan dizisine eklenir.
        for (let i = 2; i < _sayi; i++) {
            if (this.AsalMi(i)) {
                if (_sayi % i == 0) {
                    carpanlar.push(i);
                }
            }
        }
        // :)
        return carpanlar;
    }
    // En Büyük Ortak Bölen Bulma Fonksiyonu
    EBOB() {
        // tüm bölenler tutacak
        let bolenler = [];
        //ortak olanları tutacak
        let ortakBolenler = [];
        // girilen tüm sayılara tek tek bakılıyor
        for (let i = 0; i < arguments.length; i++) {
            // her sayı asal çarpanlarına ayırılıyr
            let asalCarpanlar = this.AsalCarpanlar(arguments[i]);
            // asal çarpanlar bolenler dizisine eklenir
            bolenler = bolenler.concat(asalCarpanlar);
        }
        // bolenler dizisindeki tüm elemanlar tek tek tüm sayılarla bölünüyor mu diye bakılır
        bolenler.map(x=>{
            // bölen her bir sayıya bölünüşünde bolenSayacı 1 arttırılır
            let bolenSayaci = 0;
            for (let i = 0; i < arguments.length; i++) {
                if(Number.isInteger(arguments[i]/x)) bolenSayaci++;
            }
            // Eğer bölen sayacı ile parametre sayıcı eşit ise o bölen tüm parametreler bölünmüş demektir. Ve bu bölen
            // ortak bölen dizisinde zaten ortak bölen dizisine eklenir.
            if(bolenSayaci == arguments.length && !ortakBolenler.includes(x)) ortakBolenler.push(x);
            
        });
        // varsayılan ebob 1'dir çünkü aralarında asal yada zaten asal sayılar girildiğinde
        // ortak bölen olmadığı için tek ortak bölen 1'dir.
        let ebob = 1;
        // ortak bölenler varsa hepsi çarpılır ve ebob değeri güncellenir
        ortakBolenler.map(x=>{
            ebob *=x;
        })
        // hesaplanmış ebob değeri geriye döndürülür.
        return ebob;
    }
}


let x = new Rasyonel(2,3)
console.log(x);







