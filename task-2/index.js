
 const Basic = function(args) {
    this.args = args
    
   }

function IntBuilder(args) {
  Basic.constructor.call(this,args );
  this.args = args;
}

  IntBuilder.prototype = Object.create(Basic.prototype);
  IntBuilder.prototype.constructor = Basic;

  IntBuilder.prototype.plus = function (...n) {
  let sum = 0;
  n.forEach((function(elem) {
      sum += elem; 
  }))
  this.n += sum;
  return this;
}

  IntBuilder.prototype.minus = function (...n) {
    let sum = 0;
    n.forEach((function(elem) {
      sum += elem; 
  })
  )
    this.n -= sum;
    return this;
}

  IntBuilder.prototype.multiply = function (n) {
    this.args = this.args * n;
    return this;
}

  IntBuilder.prototype.multiply = function (n) {
    this.args = this.args * n;
    return this;
}

  IntBuilder.prototype.divide = function (n) {
    this.args = parseInt(this.args / n);
    return this;
}

  IntBuilder.prototype.mod = function (n) {
    this.args = this.args % n;
    return this;
}

  IntBuilder.prototype.get = function () {
   return this.args;
}

  IntBuilder.random =function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; 
  }

  IntBuilder.random(10, 100);

  let intBuilder = new IntBuilder(10);

console.log(intBuilder
  .plus(2, 3, 2)
  .minus(1, 2)
  .multiply(2)
  .divide(4)
  .mod(3)
  .get());


  
  class StringBuilder extends Basic{
    constructor(args) {
      super(args);
    }
  
      
    plus(...str) {
      let sum = '';
      str.forEach((function(elem) {
      sum += elem; 
    }))
      this.args += sum;
      return this;
  }

    minus(n) {
      let str=this.args;
      this.args = this.args.slice(0, -n);
      return this;
  }

    multiply(int) {
      let str=this.args;
      this.args = this.args.repeat(int);
      return this;
  }

   divide(n) {
    let str=this.args;
    let k = Math.floor(this.args.length / n);
    this.args = this.args.slice(0, k);
    return this;
  }
  remove(str) {
    let arr = [...this.args];
    arr.forEach((elem, i) => {
        if (elem === str) {
            delete arr[i];
        } else {
            return elem;
        }
    })
    this.args = arr.join('');
    return this;
}

sub(from, n) {
  let str = this.args;
  this.args = this.args.substr(from, n);
  return this;
}
get() {
  return this.args;
}
}
let strBuilder = new StringBuilder('Hello');

console.log(strBuilder
    .plus(' all', '!')
    .minus(4)
    .multiply(3)
    .divide(4) 
    .remove('l')
    .sub(1,1)                                  
    .get());