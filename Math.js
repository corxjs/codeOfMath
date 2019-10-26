/* MATH 1*/
class Real {
    constructor(number) {
        this.value = number;
        this.digitNumber = this.DigitNumber();
        this.isNumeral = this.IsNumeral()
    }
    IsNumeral() {
        return this.value < 10 && this.value >= 0;
    }
    DigitNumber() {
        let temp = this.value;
        let counter = 0;
        if (temp < 0) { temp = temp * -1 }
        while (temp !== 0) {
            temp = Math.floor(temp / 10);
            ++counter;
        }
        return counter;
    }
}
class Rational extends Real {
    constructor(number) {
        super(number)
        if (number == Infinity || typeof number == NaN) {
            console.error(`${number} Can't be rational`);
        }
    }
}
class Integer extends Rational {
    constructor(number) {
        super(Number.parseInt(number));
        this.isOdd = number%2==0?false:true;
        this.number = Number.parseInt(number);
        if (!Number.isInteger(number))console.error(`${number} Can't ınteger`);
    }
}
class Natural extends Integer {
    constructor(number) {
        if (Number.parseInt(number)<0) {
            console.error(`${number} Negatif Sayı Doğal Sayı Olamaz.`);
            number = -1 * number;
        }
        if (number < 0 || !Number.isInteger(number))console.error(`${number} Can't be natural number`);
        super(number); 
        this.factorial = this.Factorial();
        this.isPrime = this.IsPrime();
        this.primeMultipliers = this.PrimeMultipliers();
    }
    Factorial(number) {
        if (number == null) number = this.number;
        if (number == 1 || number== 0) return 1;
        return number * this.Factorial(number - 1);
    }
    IsPrime(number){
        if (number == null) number = this.number;
        number = Number.parseInt(number);
        let prime = true;
        for (let i = 2; i <= Number.parseInt(number/2); i++) {
            if (number%i == 0) {
                prime = false;
            }        
        }
        return prime;
    }
    PrimeMultipliers(number){
        if (number == null) number = this.number;
        number = Number.parseInt(number);
        if (this.IsPrime(number)) return [number];
        let multipliers= [];
        for (let i = 2; i < number; i++) {
            if (this.IsPrime(i)) {
                if (number % i == 0) {
                    multipliers.push(i);
                }
            }
        }
        return multipliers;
    }
    
}




let x = new Natural(11)
 console.log(x);


