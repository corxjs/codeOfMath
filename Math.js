/* MATH 1*/
class Real {
    constructor(_number) {
        this.value = _number;
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
    constructor(_number) {
        if (typeof _number == 'number') {
            super(_number)
            if (_number == Infinity || typeof _number == NaN) {
                console.error(`${_number} Can't be rational`);
            }
            if (this.constructor.name == "Rational") {
                this.numerator = _number;
                this.deminator = 1;
            }
            return;
        } else if (Number.isInteger(arguments[1])) {
            this.numerator = arguments[0];
            this.deminator = arguments[1]
        } else {
            this.numerator = _number.numerator;
            this.deminator = _number.deminator;
        }
        super(_number.numerator / _number.deminator);
        console.log(`fraction \n ++++++++++++++++++++ \n \t  ${_number.numerator}` + "\n\t ---\n" + `\t  ${_number.deminator} \n +++++++++++++++++++++`);
    }
}
class Integer extends Rational {
    constructor(_number) {
        super(Number.parseInt(_number));
        this.isOdd = _number % 2 == 0 ? false : true;
        this._number = Number.parseInt(_number);
        if (!Number.isInteger(_number)) console.error(`${_number} Can't ınteger`);
    }
}
class Natural extends Integer {
    constructor(_number) {
        if (Number.parseInt(_number) < 0) {
            console.error(`${_number} Negatif Sayı Doğal Sayı Olamaz.`);
            _number = -1 * _number;
        }
        if (_number < 0 || !Number.isInteger(_number)) console.error(`${_number} Can't be natural _number`);
        super(_number);
        this.factorial = this.Factorial();
        this.isPrime = this.IsPrime();
        this.primeMultipliers = this.PrimeMultipliers();
    }
    Factorial(_number) {
        if (_number == null) _number = this._number;
        if (_number == 1 || _number == 0) return 1;
        return _number * this.Factorial(_number - 1);
    }
    IsPrime(_number) {
        if (_number == null) _number = this._number;
        _number = Number.parseInt(_number);
        let prime = true;
        for (let i = 2; i <= Number.parseInt(_number / 2); i++) {
            if (_number % i == 0) {
                prime = false;
            }
        }
        return prime;
    }
    PrimeMultipliers(_number) {
        if (_number == null) _number = this._number;
        _number = Number.parseInt(_number);
        if (this.IsPrime(_number)) return [_number];
        let multipliers = [];
        for (let i = 2; i < _number; i++) {
            if (this.IsPrime(i)) {
                if (_number % i == 0) {
                    multipliers.push(i);
                }
            }
        }
        return multipliers;
    }

}




let x = new Rational(6, 8)
console.log(x);



